const PostTitle: React.FC = ({ children }) => {
  return (
    <h1
      className="text-4xl lg:text-6xl dark:text-white
            font-extrabold tracking-tight
            md:leading-none my-2 md:my-4"
    >
      {children}
    </h1>
  );
};

export default PostTitle;
