import type { NextPage } from 'next';

import { getAllPosts } from '~/lib/blog/api';
import BlogPost from '~/lib/blog/blog-post';
import configuration from '~/configuration';

import LayoutContainer from '~/components/LayoutContainer';
import PostsList from '~/components/PostsList';
import Header from '~/components/Header';
import Meta from '~/components/Meta';

const Home: NextPage<{
  posts: BlogPost[];
}> = ({ posts }) => {
  return (
    <>
      <Meta />
      <Header />

      <LayoutContainer>
        <div
          className={'flex flex-col h-full justify-center align-center pb-32'}
        >
          <div className={'my-8'}>
            <h1 className={'text-6xl font-extrabold'}>
              {configuration.site.siteName}
            </h1>
          </div>

          <PostsList posts={posts} />
        </div>
      </LayoutContainer>
    </>
  );
};

export function getStaticProps() {
  const posts = getAllPosts().slice(0, 6);

  return {
    props: {
      posts,
    },
  };
}

export default Home;
