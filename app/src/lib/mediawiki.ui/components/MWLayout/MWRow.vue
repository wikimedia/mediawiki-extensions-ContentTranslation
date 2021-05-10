<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script>
import "./grid.scss";
export default {
  name: "MwRow",
  props: {
    /**
     * Applies the align-items css property.
     **/
    align: {
      type: String,
      default: "center",
      validator: str =>
        ["normal", "start", "end", "center", "stretch"].includes(str)
    },
    /**
     * Applies the justify-content css property.
     **/
    justify: {
      type: String,
      default: "start",
      validator: str =>
        ["start", "end", "center", "between", "around"].includes(str)
    },
    /**
     * Specify a custom tag used on the root element.
     **/
    tag: {
      type: String,
      default: "div"
    },
    direction: {
      type: String,
      default: "row",
      validator: str => ["row", "column"].includes(str)
    },
    /**
     * If set to true, elements inside row (or column if direction is set to "column")
     * are rendered in reverse order by setting flex-direction property accordingly
     */
    reverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const classes = [
        this.direction,
        `items-${this.align}`,
        `justify-${this.justify}`
      ];

      if (this.reverse) {
        classes.push("reverse");
      }

      return classes;
    }
  }
};
</script>
