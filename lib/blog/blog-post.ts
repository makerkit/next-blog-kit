import Author from './author';
import Collection from './collection';

type BlogPost = {
  author: Author;
  collection: Collection;
  image: string;
  description: string;
  slug: string;
  title: string;
  date: string;
  live: boolean;
  tags: string[];
  content: string;
  readingTime: number;
  canonical?: string;
};

export default BlogPost;
