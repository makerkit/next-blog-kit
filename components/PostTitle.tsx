const PostTitle: React.FCC = ({ children }) => {
  return (
    <h1
      className="my-2 text-4xl font-extrabold
            tracking-tight dark:text-white
            md:my-4 md:leading-none lg:text-6xl"
    >
      {children}
    </h1>
  );
};

export default PostTitle;
