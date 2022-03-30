import Head from 'next/head';
import configuration from '~/configuration';

const Meta = () => {
  const siteUrl = configuration.site.siteUrl;

  if (!siteUrl) {
    throw new Error(`Please add the property siteUrl in the configuration`);
  }

  const structuredData = {
    name: configuration.site.name,
    url: configuration.site.siteUrl,
    logo: `${configuration.site.siteUrl}/assets/images/favicon/favicon-150x150.png`,
    '@context': 'https://schema.org',
    '@type': 'Organization', // change to person for Personal websites
  };

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/assets/images/favicon/apple-touch-icon.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/images/favicon/favicon-16x16.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/images/favicon/favicon-32x32.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="150x150"
        href="/assets/images/favicon/favicon-150x150.png"
      />

      <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />

      <link
        rel="mask-icon"
        href="/assets/images/favicon/safari-pinned-tab.svg"
        color="#000000"
      />

      <link rel="dns-prefetch" href="//fonts.googleapis.com" />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={'true'}
      />

      <link rel="shortcut icon" href="/assets/images/favicon/favicon.ico" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content={configuration.site.themeColor} />

      <meta
        key="meta:description"
        name="description"
        content={configuration.site.description}
      />

      <title>{configuration.site.name}</title>

      <meta
        key="og:title"
        property="og:title"
        content={configuration.site.name}
      />

      <meta property="og:site_name" content={configuration.site.name} />

      <meta
        key="og:description"
        property="og:description"
        content={configuration.site.description}
      />

      <meta
        key="twitter:title"
        property="twitter:title"
        content={configuration.site.siteName}
      />

      <meta property="twitter:card" content="summary_large_image" />

      <meta
        key="twitter:description"
        property="twitter:description"
        content={configuration.site.description}
      />

      <meta
        property="twitter:creator"
        content={configuration.site.twitterHandle}
      />

      <script
        key="ld:json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default Meta;
