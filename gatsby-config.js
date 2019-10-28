module.exports = {
  siteMetadata: {
    title: `The Hon. Ephraim`,
    description: `Honourable Ephraim Aluebhosele Portfolio Website.`,
    author: `Dukstack`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Hon. Ephraim`,
        short_name: `Hon. Ephraim`,
        lang: `en`,
        display: `standalone`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `app.ephraimseleedha.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}