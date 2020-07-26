module.exports = {
  siteMetadata: {
    title: `Vota Cidade`,
    description: `No tinder das eleições, combine com quem te representa!`,
    author: `@gatsbyjs`,
    siteUrl: 'http://vota.org.br',
    facebookAppId: '3134317763316448',
    ogImageType: 'image/jpg',
    ogImageWidth: '512',
    ogImageHeight: '337',
    menuLinks: [
      {
        name: 'Inicial',
        link: '/'
      },
      {
        name: 'O Projeto',
        link: '/o-projeto'
      },
      {
        name: 'Notícias',
        link: '/noticias'
      },
    ]
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/votacidades-icon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto:300,700,900` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-170993659-1", // replace "UA-XXXXXXXXX-X" with your own Tracking ID
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
