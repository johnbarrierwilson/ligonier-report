module.exports = {
  siteMetadata: {
    title: 'Ministry Report - Ligonier Ministries',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ligonier Ministries Ministry Report',
        short_name: 'ligonierministryreport',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-967597-40",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1958004644520947',
      },
    },
  ],
}
