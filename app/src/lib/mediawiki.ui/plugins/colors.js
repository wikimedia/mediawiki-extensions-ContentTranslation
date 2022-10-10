// Copied from wikimedia-ui-base.less
import colors from "../variables/colors";

export default {
  install: (app) => {
    app.config.globalProperties.$mwui = {
      ...(app.config.globalProperties.$mwui || {}),
      colors,
    };
    app.provide("colors", colors);
  },
};
