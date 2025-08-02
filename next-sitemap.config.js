/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.augmentui.ai',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  outDir: './public',
  exclude: ['/dashboard', '/admin'], // optional: add private or future auth routes here
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'monthly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
