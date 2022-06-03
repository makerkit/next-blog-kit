import Image from 'next/image';

import configuration from '~/configuration';
import PostsList from './PostsList';
import ClientOnly from '~/components/ClientOnly';

type ImageLayout = 'fixed' | 'fill' | 'intrinsic' | 'responsive' | undefined;
type StringObject = Record<string, string>;

const NextImage: React.FCC<StringObject> = (props: StringObject) => {
  const width = props.width ?? '4';
  const height = props.height ?? '3';

  return (
    <Image
      width={width}
      height={height}
      layout={(props.layout as ImageLayout) ?? 'responsive'}
      className={props.class}
      src={props.src}
      alt={props.alt}
      {...props}
    />
  );
};

const ExternalLink: React.FCC<{ href: string }> = ({ href, children }) => {
  const siteUrl = configuration.site.siteUrl ?? '';
  const isRoot = href[0] === '/';
  const isInternalLink = href.startsWith(siteUrl) || isRoot;

  if (isInternalLink) {
    return <a href={href}>{children}</a>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const Video: React.FCC<{
  src: string;
  width?: string;
  type?: string;
}> = ({ src, type, width }) => {
  const useType = type ?? 'video/mp4';

  return (
    <ClientOnly>
      <video
        className="my-4"
        width={width ?? `100%`}
        height="auto"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={src} type={useType} />
      </video>
    </ClientOnly>
  );
};

const MDXComponents = {
  img: NextImage,
  a: ExternalLink,
  PostsList,
  Video,
  Image: NextImage,
};

export default MDXComponents;
