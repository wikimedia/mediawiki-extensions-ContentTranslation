module.exports = {
  root: true,
  globals: {
    mw: true
  },
  extends: ["plugin:vue/recommended", "@vue/prettier", "plugin:cypress/recommended"],
  rules: {
    // Avoid bare strings in templates. In order to be able to internationalize your application,
    // you will need to avoid using plain strings in your templates.
    "vue/no-bare-strings-in-template": "error",
    // This rule disallow a potential typo in your component options
    "vue/no-potential-component-option-typo": "error",
    "vue/no-static-inline-styles": "error",
    "vue/no-unused-properties": "error",
    // Line padding configurations for readability
    "vue/padding-line-between-blocks": "warn",
    "lines-between-class-members": "warn",
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "*", next: "class" },
      { blankLine: "always", prev: "*", next: "multiline-block-like" }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: ["cypress"],
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
