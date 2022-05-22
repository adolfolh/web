require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "ADOLFO L.H.",
  },
  plugins: [
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
  ],
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    // The property ID; the tracking code won't be generated without it
    trackingId: process.env.GA_TRACKING_ID,
  },
};
