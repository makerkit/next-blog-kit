declare module '@mdx-js/react';
declare module 'remark-mdx';

declare global {
  declare module 'react' {
    type FCC<Props = Record<string, unknown>> = React.FC<
      React.PropsWithChildren<Props>
    >;
  }
}
