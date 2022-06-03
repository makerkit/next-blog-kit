import BlogPost from '~/lib/blog/blog-post';
import PostPreview from '~/components/PostPreview';

const PostsList: React.FCC<{
  posts: BlogPost[];
}> = ({ posts }) => {
  return (
    <div className={'grid gap-y-8 md:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-10'}>
      {posts.map((post) => {
        return <PostPreview key={post.title} post={post} />;
      })}
    </div>
  );
};

export default PostsList;
