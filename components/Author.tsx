import Image from 'next/image';
import AuthorType from '~/lib/blog/author';

const Author: React.FCC<{ author: AuthorType }> = ({ author }) => {
  const alt = `${author.name}'s picture`;
  const imageSize = `45px`;

  return (
    <div className="flex flex-row items-center space-x-3">
      <a target="_blank" rel="noreferrer noopened" href={author.url}>
        {author.picture ? (
          <Image
            width={imageSize}
            height={imageSize}
            src={author.picture}
            alt={alt}
          />
        ) : null}

        <span>{author.name}</span>
      </a>
    </div>
  );
};

export default Author;
