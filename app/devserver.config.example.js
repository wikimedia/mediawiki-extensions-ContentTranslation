// Refer https://webpack.js.org/configuration/dev-server/
// Enables hot reload for fast development cycles.
// Make a copy and edit as per your development environment.
// Make sure to name the file as devserver.config.js

const fs = require("fs");
const devPort = 8088;

module.exports = {
  hot: true,
  writeToDisk: true,
  liveReload: false,
  sockPort: devPort,
  port: devPort,
  disableHostCheck: true,
  host: "localhost",
  // Enable https for the devserver. If your wiki is running in https,
  // you will need the deveserver also in https to avoid CORS issues
  https: {
    key: fs.readFileSync("/path/to/localhost+3-key.pem"),
    cert: fs.readFileSync("/path/to/localhost+3.pem")
  },
  compress: true,
  headers: { "Access-Control-Allow-Origin": "*" }
};
