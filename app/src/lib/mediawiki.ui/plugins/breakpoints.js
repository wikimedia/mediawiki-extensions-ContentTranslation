import { ref } from "vue";

// NOTE: These breakpoint values are present in @wikimedia/codex-design-tokens as
// a json file. We could import the json and access the values.
// Apparently, vite also supports tree shaking the json.
// https://vitejs.dev/guide/features.html#json
// Unfortunately, the key values are "min-width" which has a hyphen it that prevents
// importing like `import {min-width} from "@wikimedia/codex-design-tokens/theme-wikimedia-ui.json"
// So we end up with hardcoding these values.
const breakpoints = {
  mobile: 320, // min-width-breakpoint-mobile
  tablet: 640, // min-width-breakpoint-tablet
  desktop: 1120, // min-width-breakpoint-desktop
  "desktop-wide": 1680, // min-width-breakpoint-desktop-wide
};

const viewports = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${breakpoints.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${
    breakpoints.tablet
  }px) and (max-width: ${breakpoints.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${
    breakpoints.desktop - 1
  }px)`,
  "tablet-and-up": `only screen and (min-width: ${breakpoints.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${
    breakpoints.desktopwide - 1
  }px)`,
  "desktop-and-up": `only screen and (min-width: ${breakpoints.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${breakpoints["desktop-wide"]}px)`,
};

const handlers = {
  mobile: () => matchMedia(viewports.mobile).matches,
  tablet: () => matchMedia(viewports.tablet).matches,
  desktop: () => matchMedia(viewports.desktop).matches,
  desktopwide: () => matchMedia(viewports["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(viewports["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(viewports["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(viewports["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(viewports["desktop-and-down"]).matches,
};

export default {
  install: (app) => {
    const resizeHandler = () => {
      for (let property in handlers) {
        if (handlers.hasOwnProperty(property)) {
          properties.value[property] = handlers[property]();
        }
      }
    };

    const properties = ref({});
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    app.config.globalProperties.$mwui = {
      ...(app.config.globalProperties.$mwui || {}),
      breakpoint: properties.value,
    };

    app.provide("breakpoints", properties);
  },
};
