import styles from './PostBody.module.css';
import MDXRenderer from '~/components/MDXRenderer';

const PostBody: React.FCC<{ content: string }> = ({ content }) => {
  return (
    <div className={styles['PostBody']}>
      <MDXRenderer code={content} />
    </div>
  );
};

export default PostBody;
