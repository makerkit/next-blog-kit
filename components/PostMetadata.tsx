import Author from '~/components/Author';
import DateFormatter from '~/components/DateFormatter';
import BlogPost from '~/lib/blog/blog-post';

const PostMetadata: React.FC<{
  post: BlogPost;
}> = ({ post }) => {
  const { date, readingTime } = post;

  return (
    <div className="flex flex-row space-x-2 items-center text-gray-600 dark:text-gray-400 text-sm">
      <Author author={post.author} />

      <span>·</span>

      <div>
        <DateFormatter dateString={date} />
      </div>

      <span>·</span>
      <span>{readingTime} min. read</span>
    </div>
  );
};

export default PostMetadata;
