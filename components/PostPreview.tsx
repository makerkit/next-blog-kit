import Link from 'next/link';
import BlogPost from '~/lib/blog/blog-post';
import PostImage from '~/components/PostImage';
import PostMetadata from '~/components/PostMetadata';

const PostPreview: React.FC<{
  post: BlogPost;
}> = ({ post }) => {
  const hrefAs = `/${post.collection.slug}/${post.slug}`;
  const href = `/[collection]/[slug]`;

  return (
    <div
      className={`flex flex-col shadow hover:shadow-xl transition-shadow duration-500 rounded-xl`}
    >
      <div>
        <Link href={href} as={hrefAs} passHref>
          <a>
            <PostImage title={post.title} src={post.image} />
          </a>
        </Link>
      </div>

      <div
        className={'p-4 flex flex-col space-y-2 dark:bg-black-400 rounded-b-xl'}
      >
        <h2 className={'text-3xl font-bold'}>
          <Link href={href} as={hrefAs}>
            {post.title}
          </Link>
        </h2>

        <PostMetadata post={post} />

        <div>
          <p className={'text-gray-600 text-sm dark:text-gray-400'}>
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
