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
  name: "MwCol",
  props: {
    ...breakpointProps,
    /**
     * Sets the default number of columns the component extends.
     * Available options are 1 -> 12
     **/
    cols: {
      type: [String, Number],
      default: null,
      validator: val => Number.parseInt(val) >= 1 && Number.parseInt(val) <= 12
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
    },
    /**
     * Applies the align-items css property.
     **/
    align: {
      type: String,
      // TODO: There is a small bug in grid css that adds display:flex
      // When items* class is present anywhere. After fixing that, we
      // can have a sensible default here.
      default: null,
      validator: str =>
        str ? ["start", "end", "center", "stretch"].includes(str) : true
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
        shrink: this.shrink,
        [`items-${this.align}`]: this.align
      });

      return classList;
    }
  }
};
</script>
