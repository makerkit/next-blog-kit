import { join } from 'path';
import { existsSync, readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';

import BlogPost from './blog-post';

const POSTS_DIRECTORY_NAME = '_posts';
const COLLECTIONS_DIRECTORY_NAME = `_collections`;
const AUTHORS_DIRECTORY_NAME = `_authors`;

const MDX_EXTENSION = '.mdx';
const JSON_EXTENSION = '.json';

const postsDirectory = join(process.cwd(), POSTS_DIRECTORY_NAME);
const collections = readJson(COLLECTIONS_DIRECTORY_NAME);
const authors = readJson(AUTHORS_DIRECTORY_NAME);

const posts = readdirSync(postsDirectory).map((post) => {
  return removeExtensionFromSlug(post);
});

function readJson(directoryName: string) {
  return readdirSync(directoryName)
    .map((slug) => {
      const path = join(process.cwd(), directoryName, slug);

      if (!existsSync(path)) {
        return;
      }

      const json = readFileSync(path, 'utf-8');

      try {
        const data = JSON.parse(json);
        const realSlug = removeExtensionFromSlug(slug, JSON_EXTENSION);

        return {
          data,
          slug,
          realSlug,
        };
      } catch (e) {
        console.warn(`Error while reading JSON file`, e);
        return;
      }
    })
    .filter(Boolean);
}

export function readFrontMatter(fullPath: string) {
  try {
    const fileContents = readFileSync(fullPath, 'utf-8');

    return matter(fileContents);
  } catch (e) {
    console.warn(`Error while reading Front matter at ${fullPath}`, e);
  }
}

export function getPostBySlug(slug: string) {
  const postPath = join(postsDirectory, `${slug}${MDX_EXTENSION}`);
  const file = readFrontMatter(postPath);

  if (!file) {
    return;
  }

  const content = file.content;
  const data = file.data;
  const empty = Object.keys(data).length === 0;

  if (empty) {
    return;
  }

  const readingTime = getReadingTimeInMinutes(content);

  const post: Partial<BlogPost> = {
    live: data.live,
    readingTime,
    slug: removeExtensionFromSlug(slug),
    content,
  };

  for (const field in data) {
    if (field === 'collection') {
      post[field] = getCollection(data[field]);
      continue;
    }

    if (field === 'author') {
      post[field] = getAuthor(data[field]);
      continue;
    }

    if (field === 'date' && data.date) {
      try {
        post[field] = new Date(data.date).toISOString();
        continue;
      } catch (e) {
        console.error(`Error processing blog post date ${data.date}`);
      }
    }

    // if the field exists, assign as is
    if (data[field]) {
      Object.assign(post, {
        [field]: data[field],
      });
    }
  }

  return post as BlogPost;
}

export function getCollection(slug: string) {
  const collectionSlug = slug.replace(COLLECTIONS_DIRECTORY_NAME + '/', '');

  const collection = collections.find((item) => {
    return [item?.slug, item?.realSlug].includes(collectionSlug);
  });

  if (!collection) {
    throw new Error(
      `Collection with slug "${collectionSlug}" was not found. Please add a collection file at ${slug}`
    );
  }

  return {
    ...collection.data,
    slug: collection.realSlug,
  };
}

export function getAuthor(slug: string) {
  const authorFileName = slug.replace(AUTHORS_DIRECTORY_NAME + '/', '');

  const author = authors.find((item) => {
    return [item?.slug, item?.realSlug].includes(authorFileName);
  });

  if (!author) {
    throw new Error(
      `Author with slug "${authorFileName}" was not found. Please add an author file at ${slug}`
    );
  }

  return {
    ...author.data,
    slug: author.realSlug,
  };
}

function getReadingTimeInMinutes(content: string, wordsPerMinute = 225) {
  const words = content.trim().split(/\s+/).length;

  return Math.ceil(words / wordsPerMinute);
}

export function getAllPosts(
  filterFn: (post: Partial<BlogPost>) => boolean = () => true
) {
  const foundPosts = posts.map(getPostBySlug).filter(Boolean) as BlogPost[];

  return foundPosts
    .filter(filterByPublishedPostsOnly)
    .filter(filterFn)
    .sort(sortBlogPostByDate);
}

function filterByPublishedPostsOnly(post: BlogPost) {
  // we want to exclude blog posts
  // if it's the prod env AND if not live
  if (!process.env.production || !('live' in post)) {
    return true;
  }

  return post.live;
}

export function getPostsByCollection(collectionSlug: string) {
  const collection = getCollection(collectionSlug);

  return getAllPosts(
    (item) =>
      item.collection?.name.toLowerCase() === collection.name.toLowerCase()
  );
}

function sortBlogPostByDate(item: BlogPost, nextItem: BlogPost) {
  if (!item.date || !nextItem.date) {
    return 1;
  }

  return item.date > nextItem.date ? -1 : 1;
}

function removeExtensionFromSlug(slug: string, extension = MDX_EXTENSION) {
  return slug.replace(extension, '');
}
