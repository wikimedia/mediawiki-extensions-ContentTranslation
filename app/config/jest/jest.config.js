
module.exports = {
  rootDir: "../..",
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleFileExtensions: ["js", "vue"],
  snapshotResolver: "<rootDir>/config/jest/snapshotResolver.js",
  setupFiles: ['./src/utils/mw.proxy.js']
};
