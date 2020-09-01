module.exports = {
  siteMetadata: {
    title: `Wentzville Grade Viewer`,
    description: `Nightly screenshots of kids grades`,
    author: `@racedale`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-s3-image`,
      options: {
        accessKeyId: process.env.GATSBY_ACCESS_KEY_ID,
        secretAccessKey: process.env.GATSBY_SECRET_ACCESS_KEY,
        bucketName: `wentzville-school-grades-382220085659`,
        region: 'us-east-2'
        // domain: null,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
