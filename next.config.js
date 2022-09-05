const isProd = process.env.NODE_ENV === 'production'

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
});

module.exports = withNextra({
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/docs',
  trailingSlash: true,
  assetPrefix: isProd ? 'https://raproid-github-io.vercel.app/docs/' : undefined,
});

/* example of how to set up redirects
module.exports = withNextra({
  redirects: () => {
    return [
      {
        source: "/docs/deprecated-page",
        destination: "/docs/new-page",
        statusCode: 301,
      },
        source: "/docs/deprecated-page",
        destination: "/docs/new-page",
        statusCode: 302,
      },
    ];
  },
});
*/
