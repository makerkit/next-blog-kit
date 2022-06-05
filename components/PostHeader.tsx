import BlogPost from '~/lib/blog/blog-post';
import PostTitle from '~/components/PostTitle';
import PostImage from '~/components/PostImage';
import PostMetadata from '~/components/PostMetadata';
import CollectionLink from '~/components/CollectionLink';

const PostHeader: React.FCC<{
  post: BlogPost;
}> = ({ post }) => {
  return (
    <>
      <div className={'mt-4 mt-6 text-sm'}>
        <CollectionLink collection={post.collection} />
      </div>

      <PostTitle>{post.title}</PostTitle>

      <h2 className={'my-2 text-xl text-gray-400 md:my-4 lg:text-2xl'}>
        {post.description}
      </h2>

      <div className="mx-auto mb-4 flex flex-col space-y-2 md:mb-6">
        <PostMetadata post={post} />
      </div>

      <div className="mx-auto justify-center">
        <PostImage
          className={'rounded-lg'}
          preloadImage={true}
          title={post.title}
          src={post.image}
        />
      </div>
    </>
  );
};

export default PostHeader;
