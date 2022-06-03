import { useLayoutEffect } from 'react';
import { loadSelectedTheme } from '~/lib/theme';
import { isBrowser } from '~/lib/is-browser';

const shouldSetTheme = isBrowser();

const ThemeProvider: React.FCC = ({ children }) => {
  if (shouldSetTheme) {
    return <BrowserThemeSetter>{children}</BrowserThemeSetter>;
  }

  return <>{children}</>;
};

function BrowserThemeSetter({ children }: React.PropsWithChildren<unknown>) {
  useLayoutEffect(loadSelectedTheme, []);

  return <>{children}</>;
}

export default ThemeProvider;
