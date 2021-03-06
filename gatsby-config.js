require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "ADOLFO L.H.",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID
      }
    },
    { 
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5LLV5TX",
        includeInDevelopment: false,
      }
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ]
};
