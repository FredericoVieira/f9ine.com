module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        name: `logos`,
        path: `${__dirname}/src/logos/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `F9ine - Frederico Vieira Portfolio`,
        short_name: `F9ine`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#333333`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
