import breakpoints from "../components/MWLayout/_breakpoints.scss";
import Vue from "vue";

function resizeHandler() {
  for (let property in handlers) {
    if (handlers.hasOwnProperty(property)) {
      Vue.set(properties, property, handlers[property]());
    }
  }
}

const handlers = {
  xs: () => matchMedia(breakpoints.xs).matches,
  sm: () => matchMedia(breakpoints.sm).matches,
  md: () => matchMedia(breakpoints.md).matches,
  lg: () => matchMedia(breakpoints.lg).matches,
  xl: () => matchMedia(breakpoints.xl).matches,
  smAndUp: () => matchMedia(breakpoints["sm-and-up"]).matches,
  mdAndUp: () => matchMedia(breakpoints["md-and-up"]).matches,
  lgAndUp: () => matchMedia(breakpoints["lg-and-up"]).matches,
  smAndDown: () => matchMedia(breakpoints["sm-and-down"]).matches,
  mdAndDown: () => matchMedia(breakpoints["md-and-down"]).matches,
  lgAndDown: () => matchMedia(breakpoints["lg-and-down"]).matches
};

let properties = {};

const install = function(Vue) {
  // Init reactive component
  const viewportReactor = new Vue({
    data: () => ({ properties })
  });
  Vue.mixin({
    computed: {
      $mwui() {
        return {
          ...(viewportReactor.$mwui || {}),
          breakpoint: viewportReactor.properties
        };
      }
    },
    created() {
      resizeHandler();
    },
    mounted() {
      window.addEventListener("resize", resizeHandler);
    }
  });
};

export default { install };
