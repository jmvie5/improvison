/**
 * @type {import('gatsby').GatsbyConfig}
 */
const messagesEN = require("./src/langs/en.json");
const messagesFR = require("./src/langs/fr.json");
module.exports = {
  siteMetadata: {
    title: "Improvison",
    siteUrl: `https://www.improvison.ca`,
    image: `/src/images/improvison-logo.png`,
    description: "Improvison est un jeu favorisant l'apprentissage de l'improvisation musicale disponible en ligne pour des joueurs de tous les âges et tous les niveaux.",
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
        name: "Le jeu",
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
        "name": `Improvison`,
        "short_name": `Improvison`,
        "start_url": `/`,
        "background_color": `#222F4D`,
        "theme_color": `#222F4D`,
        "display": `standalone`,
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
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://improvison.ca',
        sitemap: 'https://improvison.ca/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-i18n-l10n`,
      options: {
        // string: IETF BCP 47 language tag: default locale, which won't be prefixed
        defaultLocale: `fr-CA`,
        // string: absolute site url
        siteUrl: `https://improvison.ca`,
        // locales[]: all locales, which should be available
        locales: [
          {
            // string: IETF BCP 47 language tag of this language
            locale: `fr-CA`,
            // string: prefix for this language, which will be used to prefix the url, if it's not the default locale
            prefix: `fr`,
            // object: mapping of given urls (by filename) to translated urls, if no mapping exists, given url will be used
            slugs: {},
            // object: this messages will be handed over to react-intl and available throughout the website
            messages: messagesFR
          },
          // another language
          {
            locale: `en-CA`,
            prefix: `en`,
            slugs: {
              '/a-propos': '/about',
              '/jeu': '/game',
              '/savoir-plus': '/know-more',
            },
            messages: messagesEN
          },
        ],
        // omit certain path segments (relative directories)
        // be careful not to cause path collisions
        pathBlacklist: [
          '/pages' // /pages/products/gummibears becomes /products/gummibears
        ]
      },
    }
    ]
};