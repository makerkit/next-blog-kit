import { isBrowser } from '~/lib/is-browser';

const ClientOnly: React.FC = ({ children }) => {
  return isBrowser() ? <>{children}</> : null;
};

export default ClientOnly;
