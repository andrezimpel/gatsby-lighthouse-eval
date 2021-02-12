const LoadablePlugin = require("@loadable/webpack-plugin")
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `@loadable/babel-plugin`,
  })
}

exports.onPreBootstrap = () => {
  console.log(`isServer? ${typeof window === "undefined"}`)
}
