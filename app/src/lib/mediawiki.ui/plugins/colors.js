// Copied from wikimedia-ui-base.less
const colors = {
  base10: "#202122",
  base30: "#72777d",
  base80: "#eaecf0",
  green30: "#14866d",
  green50: "#00af89",
  red50: "#d33",
  yellow30: "#ac6600",
  yellow50: "#fc3",
  primary: "#36c"
};

export default {
  install: app => {
    app.config.globalProperties.$mwui = {
      ...(app.config.globalProperties.$mwui || {}),
      colors
    };
    app.provide("colors", colors);
  }
};
