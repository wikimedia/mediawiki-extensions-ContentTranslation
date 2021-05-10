const fs = require("fs");
const TerserPlugin = require("terser-webpack-plugin");

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
    cx: "src/main.js"
  },
  filenameHashing: false,
  devServer,
  configureWebpack: {
    output: {
      filename: "js/cx.js",
      hotUpdateChunkFilename: "hot/hot-update.js",
      hotUpdateMainFilename: "hot/hot-update.json"
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true
            },
            // Do not obfuscate/mangle code
            mangle: false,
            output: {
              // Prevent ResourceLoader minification
              preamble: "/*@nomin*/",
              comments: false
            }
          }
        })
      ],
      splitChunks: {
        cacheGroups: {
          mediawiki_ui: {
            test: /[\\/]lib\/mediawiki.ui[\\/]/,
            name: "cx.ui",
            chunks: "all"
          },
          libs: {
            test: /[\\/]node_modules[\\/]/,
            name: "cx.libs",
            chunks: "all"
          }
        }
      }
    }
  }
};
