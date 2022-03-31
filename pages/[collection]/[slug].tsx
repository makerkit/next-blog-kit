import Head from 'next/head';

import {
  getAllPosts,
  getPostBySlug,
  getPostsByCollection,
} from '~/lib/blog/api';

import configuration from '~/configuration';

import BlogPost from '~/lib/blog/blog-post';
import Post from '~/components/Post';
import Header from '~/components/Header';
import PostsList from '~/components/PostsList';
import LayoutContainer from '~/components/LayoutContainer';
import Meta from '~/components/Meta';
import { compileMdx } from '~/lib/blog/compile-mdx';

type Props = {
  post: BlogPost;
  morePosts: BlogPost[];
  content: string;
};

type Params = {
  params: {
    slug: string;
    collection: string;
  };
};

const PostPage = ({ post, morePosts, content }: Props) => {
  return (
    <>
      <Meta />
      <Header />

      <LayoutContainer>
        <PostHead post={post} />

        <Post content={content} post={post} />

        <div className={'max-w-2xl mx-auto flex flex-col space-y-8 pb-32'}>
          <div>
            <h4 className={'text-xl font-medium flex justify-center'}>
              Learn more about {post.collection.name}
            </h4>
          </div>

          <div>
            <PostsList posts={morePosts} />
          </div>
        </div>
      </LayoutContainer>
    </>
  );
};

export default PostPage;

function PostHead({ post }: React.PropsWithChildren<{ post: BlogPost }>) {
  const title = post.title;
  const structuredDataJson = getStructuredData(post);
  const fullImagePath = getFullImagePath(post.image);

  return (
    <Head>
      <title>{title}</title>

      <meta property="og:type" content="article" />
      <meta key="og:title" property="og:title" content={title} />
      <meta property="article:published_time" content={post.date} />

      <meta key="twitter:title" property="twitter:title" content={title} />

      <meta
        key="twitter:image"
        property="twitter:image"
        content={fullImagePath}
      />

      {post.description && (
        <>
          <meta
            key="twitter:description"
            property="twitter:description"
            content={post.description}
          />

          <meta
            key="og:description"
            property="og:description"
            content={post.description}
          />

          <meta
            key="meta:description"
            name="description"
            content={post.description}
          />
        </>
      )}

      {post.canonical && (
        <link rel="canonical" href={post.canonical} key="canonical" />
      )}

      {fullImagePath && (
        <meta key={'og:image'} property="og:image" content={fullImagePath} />
      )}

      <script
        key="ld:json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataJson),
        }}
      />
    </Head>
  );
}

export async function getStaticProps({ params }: Params) {
  const { slug, collection } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const morePosts = getPostsByCollection(collection)
    .filter((item) => item.slug !== slug)
    .slice(0, configuration.blog.maxReadMorePosts);

  const content = await compileMdx(post.content ?? '');

  return {
    props: {
      post,
      content,
      morePosts,
    },
  };
}

export function getStaticPaths() {
  const posts = getAllPosts();

  const paths = posts.map((post) => {
    const slug = post.slug;
    const collection = post.collection.slug;

    return {
      params: {
        collection,
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

function getStructuredData(post: BlogPost) {
  const fullImagePath = getFullImagePath(post.image);

  return {
    '@context': 'https://schema.org/',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://google.com/article',
    },
    image: [fullImagePath],
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: post.author.url,
    },
    datePublished: post.date,
  };
}

function getFullImagePath(path: string) {
  return `${configuration.site.siteUrl}${path}`;
}
