const fs = require("fs");
let devServer = {};
if (process.env.NODE_ENV === "development") {
  if (fs.existsSync("./devserver.config.js")) {
    devServer = require("./devserver.config");
  } else {
    console.warn("Could not find devserver.config.js. Using default values");
    console.warn(
      "Please copy devserver.config.example.js to devserver.config.js and configure development environment."
    );
  }
}

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
          mediawiki_ui: {
            test: /[\\/]lib\/mediawiki.ui[\\/]/,
            name: "mediawiki.ui",
            chunks: "all"
          },
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
