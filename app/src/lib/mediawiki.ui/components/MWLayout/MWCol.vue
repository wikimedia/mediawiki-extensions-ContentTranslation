<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>
<script>
import "./grid.scss";
// no xs
const breakpoints = ["sm", "md", "lg", "xl"];

const breakpointProps = breakpoints.reduce(
  (props, val) => ({
    ...props,
    [val]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
);

export default {
  name: "MWCol",
  props: {
    ...breakpointProps,
    cols: {
      type: [String, Number],
      default: null
    },
    grow: {
      type: Boolean,
      default: false
    },
    shrink: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    classes() {
      let classList = [];
      for (let i = 0; i < breakpoints.length; i++) {
        let propName = breakpoints[i];
        let val = this.$props[propName];
        if (val) {
          classList.push(`col-${propName}-${val}`);
        }
      }
      if (this.cols) {
        classList.push(`col-${this.cols}`);
      }
      const hasColClasses = classList.some(className =>
        className?.startsWith("col-")
      );

      classList.push({
        col: !hasColClasses,
        grow: this.grow,
        shrink: this.shrink
      });
      return classList;
    }
  }
};
</script>
