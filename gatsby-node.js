const LoadablePlugin = require("@loadable/webpack-plugin")
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
  })
}

exports.onPreBootstrap = () => {
  console.log(`isServer? ${typeof window === "undefined"}`)
}
