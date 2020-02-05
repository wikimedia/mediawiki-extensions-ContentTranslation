const devServer = require("./devserver.config");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? process.env.ASSET_PATH || "/"
      : `${devServer.https ? "https" : "http"}://${devServer.host}:${
          devServer.port
        }/`,
  pages: {
    dashboard: "src/main.js"
  },
  filenameHashing: false,
  devServer,
  configureWebpack: {
    output: {
      filename: "js/cxdashboard.js",
      hotUpdateChunkFilename: "hot/hot-update.js",
      hotUpdateMainFilename: "hot/hot-update.json"
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          libs: {
            test: /[\\/]node_modules[\\/]/,
            name: "cxdashboard.libs",
            chunks: "all"
          }
        }
      }
    }
  }
};
