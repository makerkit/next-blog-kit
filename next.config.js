const MS_PER_SECOND = 1000;
const SECONDS_PER_DAY = 86400;

/**
 * @type {import("next").NextConfig}
 */
module.exports = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  swcMinify: false,
  // please disable if too verbose while developing. No judgment
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: SECONDS_PER_DAY * MS_PER_SECOND,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 100,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};
