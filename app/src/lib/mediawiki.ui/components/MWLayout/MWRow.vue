<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>
<script>
import "./grid.scss";
export default {
  name: "MWRow",
  props: {
    align: {
      type: String,
      default: "center",
      validator: str => ["start", "end", "center", "stretch"].includes(str)
    },
    justify: {
      type: String,
      default: "start",
      validator: str => ["start", "end", "between", "around"].includes(str)
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    classes() {
      return ["row", `align-${this.align}`, `justify-${this.justify}`];
    }
  }
};
</script>
