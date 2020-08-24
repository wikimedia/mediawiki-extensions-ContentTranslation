module.exports = {
  stories: ["../../src/lib/mediawiki.ui/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y/register",
    "@storybook/addon-storysource"
  ]
};
