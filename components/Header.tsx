import dynamic from 'next/dynamic';
import Logo from '~/components/Logo';

const DarkModeToggle = dynamic(() => import('~/components/DarkModeToggle'), {
  ssr: false,
});

const Header: React.FCC = () => {
  return (
    <header className={'flex flex-1 justify-between py-3 px-4 shadow-sm'}>
      <div>
        <Logo />
      </div>

      <DarkModeToggle />
    </header>
  );
};

export default Header;
