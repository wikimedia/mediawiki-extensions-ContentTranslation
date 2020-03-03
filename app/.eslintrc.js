module.exports = {
  root: true,
  globals: {
    mw: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: ["**/tests/unit/**/*.{j,t}s?(x)"],
      env: {
        mocha: true,
        jest: true
      }
    }
  ]
};
