import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  preloadImage?: boolean;
  width?: number;
  height?: number;
  className?: string;
};

const PostImage = ({
  title,
  src,
  width,
  height,
  className,
  preloadImage,
}: Props) => {
  return (
    <Image
      layout={'responsive'}
      className={`rounded-t-lg shadow-xl ${className}`}
      src={src}
      priority={preloadImage}
      alt={`Cover Image for ${title}`}
      width={width ?? 16}
      height={height ?? 9}
    />
  );
};

export default PostImage;
