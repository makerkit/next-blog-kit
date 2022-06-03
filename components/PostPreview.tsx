import Link from 'next/link';
import BlogPost from '~/lib/blog/blog-post';
import PostImage from '~/components/PostImage';
import PostMetadata from '~/components/PostMetadata';

const PostPreview: React.FCC<{
  post: BlogPost;
}> = ({ post }) => {
  const hrefAs = `/${post.collection.slug}/${post.slug}`;
  const href = `/[collection]/[slug]`;

  return (
    <div
      className={`flex flex-col rounded-xl shadow transition-shadow duration-500 hover:shadow-xl`}
    >
      <div>
        <Link href={href} as={hrefAs} passHref>
          <a>
            <PostImage title={post.title} src={post.image} />
          </a>
        </Link>
      </div>

      <div
        className={'flex flex-col space-y-2 rounded-b-xl p-4 dark:bg-black-400'}
      >
        <h2 className={'text-3xl font-bold'}>
          <Link href={href} as={hrefAs}>
            {post.title}
          </Link>
        </h2>

        <PostMetadata post={post} />

        <div>
          <p className={'text-sm text-gray-600 dark:text-gray-400'}>
            <Link href={href} as={hrefAs} passHref>
              <a>{post.description}</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
