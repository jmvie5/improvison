/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Improvison",
    siteUrl: `https://improvison.ca`,
    image: `/src/images/improvison-logo.png`,
    description: "Improvison est un jeu favorisant l'apprentissage de l'improvisation musicale.",
    menuLinks: [
      {
        name: "Accueil",
        link: "/"
      },
      {
        name: "À propos",
        link: "/a-propos"
      },
      {
        name: "Jeu",
        link: "/jeu"
      },
      {
        name: "Pour en savoir plus",
        link: "/savoir-plus"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/improvison_logo.png"
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    "gatsby-plugin-postcss"
    ]
};