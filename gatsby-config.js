require("dotenv").config({
  path: `.env`,
})

const plugins = [
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "./src/images/",
    },
    __key: "images",
  },
  "gatsby-plugin-sass",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  "gatsby-plugin-image",
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: false,
      ignore: ["katex/dist/katex.min.css"],
    },
  },
]

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === "production") {
  plugins.push("gatsby-plugin-preact")
}

module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost:9000",
  },
  plugins: plugins,
}

/**
 * {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
      },
    },
*/
