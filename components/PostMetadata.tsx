import Author from '~/components/Author';
import DateFormatter from '~/components/DateFormatter';
import BlogPost from '~/lib/blog/blog-post';

const PostMetadata: React.FCC<{
  post: BlogPost;
}> = ({ post }) => {
  const { date, readingTime } = post;

  return (
    <div className="flex flex-row items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
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
