import { isBrowser } from '~/lib/is-browser';

const ClientOnly: React.FCC = ({ children }) => {
  return isBrowser() ? <>{children}</> : null;
};

export default ClientOnly;
