import Link from 'next/link';

const Logo: React.FCC = () => {
  return (
    <div>
      <Link href={'/'} passHref>
        <a>Your Name</a>
      </Link>
    </div>
  );
};

export default Logo;
