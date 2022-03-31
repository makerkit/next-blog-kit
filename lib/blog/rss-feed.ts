/*
- This file gets processed by ts-node as a post-build script
- Please leave the file imports as relative
 */

import { Feed } from 'feed';
import { writeFileSync } from 'fs';

import { getAllPosts } from './api';
import configuration from '../../configuration';
import BlogPost from './blog-post';

const DEFAULT_RSS_PATH = 'public/rss.xml';
const DEFAULT_JSON_PATH = 'public/rss.json';
const DEFAULT_ATOM_PATH = 'public/atom.xml';

function generateRSSFeed(posts: BlogPost[]) {
  const baseUrl = configuration.site.siteUrl;
  const description = configuration.site.description;
  const title = `${configuration.site.name} - Blog`;

  const author = {
    email: ``,
    link: configuration.site.twitterHandle,
  };

  const feed = new Feed({
    title,
    description,
    id: baseUrl,
    link: baseUrl,
    favicon: `${baseUrl}/assets/favicon/favicon.ico`,
    language: configuration.site.language ?? `en`,
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
      json: `${baseUrl}/rss.json`,
      atom: `${baseUrl}/atom.xml`,
    },
    author,
    copyright: '',
  });

  posts.forEach((post) => {
    const { date, slug, title, content, description, collection, live, image } =
      post;

    if (!live) {
      return;
    }

    const url = `${baseUrl}/blog/${collection.slug}/${slug}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
      image: `${baseUrl}/${image}`,
    });
  });

  writeFileSync(DEFAULT_RSS_PATH, feed.rss2());
  writeFileSync(DEFAULT_ATOM_PATH, feed.atom1());
  writeFileSync(DEFAULT_JSON_PATH, feed.json1());
}

function main() {
  console.log(`Generating RSS Feed...`);

  try {
    generateRSSFeed(getAllPosts());

    console.log(`RSS Feed generated successfully...`);
    process.exit(0);
  } catch (e) {
    console.error(`RSS Feed not generated: ${JSON.stringify(e)}`);
    process.exit(1);
  }
}

main();
