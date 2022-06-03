import BlogPost from '~/lib/blog/blog-post';
import PostHeader from '~/components/PostHeader';
import PostBody from '~/components/PostBody';

const Post: React.FCC<{
  post: BlogPost;
  content: string;
}> = ({ post, content }) => {
  return (
    <div className={'mx-auto max-w-2xl'}>
      <article className="mb-16">
        <PostHeader post={post} />

        <div className={'flex'}>
          <PostBody content={content} />
        </div>
      </article>
    </div>
  );
};

export default Post;
