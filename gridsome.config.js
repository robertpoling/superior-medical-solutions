// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Superior Medical Solutions',
  siteUrl: 'https://superior-medical-solutions.netlify.com',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        // exclude: ['/exclude-me'],
        config: {},
      },
    },
  ],
};
