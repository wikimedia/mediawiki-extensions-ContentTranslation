<template>
  <component :is="tag" class="mw-grid container">
    <slot />
  </component>
</template>

<script>
import "./grid.scss";
import "./spacing.scss";
import "./typography.scss";
export default {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
};
</script>
