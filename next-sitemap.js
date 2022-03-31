const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

// add your excluded routes here
const exclude = ['/tags/*'];

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude,
};
