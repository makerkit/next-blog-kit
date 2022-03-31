import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';

export async function compileMdx(markdown: string) {
  const { compile } = await import('@mdx-js/mdx');

  const code = await compile(markdown, {
    outputFormat: 'function-body',
    rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutoLinkHeadings],
  });

  return String(code);
}
