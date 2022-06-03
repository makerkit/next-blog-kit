import Logo from '~/components/Logo';
import DarkModeToggle from '~/components/DarkModeToggle';
import { isBrowser } from '~/lib/is-browser';

const Header: React.FCC = () => {
  return (
    <header className={'flex flex-1 justify-between py-3 px-4 shadow-sm'}>
      <div>
        <Logo />
      </div>

      {isBrowser() ? <DarkModeToggle /> : null}
    </header>
  );
};

export default Header;
