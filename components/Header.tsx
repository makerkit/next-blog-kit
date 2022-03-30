import Logo from '~/components/Logo';
import DarkModeToggle from '~/components/DarkModeToggle';
import { isBrowser } from '~/lib/is-browser';

const Header: React.FC = () => {
  return (
    <header className={'shadow-sm py-3 px-4 flex flex-1 justify-between'}>
      <div>
        <Logo />
      </div>

      {isBrowser() ? <DarkModeToggle /> : null}
    </header>
  );
};

export default Header;
