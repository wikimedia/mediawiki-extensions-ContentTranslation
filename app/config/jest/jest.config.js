module.exports = {
  rootDir: "../..",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleFileExtensions: ["js", "vue"],
  snapshotResolver: "<rootDir>/config/jest/snapshotResolver.js",
  setupFiles: ["./src/utils/mw.proxy.js"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(css|less|scss)$": "babel-jest",
    "^.+/(.*\\.svg)\\?raw$": "<rootDir>/config/jest/svg-stub.js",
  },
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest",
  },
};
