import { ref } from "vue";

// Duplicating from @/lib/mediawiki.ui/components/MWLayout/_breakpoints.scss
const breakpoints = {
  xs: 300,
  sm: 600,
  md: 960,
  lg: 1264,
  xl: 1904
};

const viewports = {
  print: "only print",
  screen: "only screen",
  xs: `only screen and (max-width: ${breakpoints.sm - 1}px})`,
  sm: `only screen and (min-width: ${
    breakpoints.sm
  }px) and (max-width: ${breakpoints.md - 1}px)`,
  "sm-and-down": `only screen and (max-width: ${breakpoints.md - 1}px)`,
  "sm-and-up": `only screen and (min-width: ${breakpoints.sm}px)`,
  md: `only screen and (min-width: ${
    breakpoints.md
  }px) and (max-width: ${breakpoints.lg - 1}px)`,
  "md-and-down": `only screen and (max-width: ${breakpoints.lg - 1}px)`,
  "md-and-up": `only screen and (min-width: ${breakpoints.md}px)`,
  lg: `only screen and (min-width: ${
    breakpoints.lg
  }px) and (max-width: ${breakpoints.xl - 1}px)`,
  "lg-and-down": `only screen and (max-width: ${breakpoints.xl - 1}px)`,
  "lg-and-up": `only screen and (min-width: ${breakpoints.lg}px)`,
  xl: `only screen and (min-width: ${breakpoints.xl}px)`
};

const handlers = {
  xs: () => matchMedia(viewports.xs).matches,
  sm: () => matchMedia(viewports.sm).matches,
  md: () => matchMedia(viewports.md).matches,
  lg: () => matchMedia(viewports.lg).matches,
  xl: () => matchMedia(viewports.xl).matches,
  smAndUp: () => matchMedia(viewports["sm-and-up"]).matches,
  mdAndUp: () => matchMedia(viewports["md-and-up"]).matches,
  lgAndUp: () => matchMedia(viewports["lg-and-up"]).matches,
  smAndDown: () => matchMedia(viewports["sm-and-down"]).matches,
  mdAndDown: () => matchMedia(viewports["md-and-down"]).matches,
  lgAndDown: () => matchMedia(viewports["lg-and-down"]).matches
};

export default {
  install: app => {
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
      breakpoint: properties.value
    };

    app.provide("breakpoints", properties);
  }
};
