import Link from 'next/link';
import Collection from '~/lib/blog/collection';

const CollectionLink: React.FCC<{
  collection: Collection;
}> = ({ collection }) => {
  const href = `/${collection.slug}`;

  return (
    <div>
      <Link href={href} passHref>
        <a>{collection.name}</a>
      </Link>
    </div>
  );
};

export default CollectionLink;
