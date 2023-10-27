<template>
  <main class="sx-content-comparator-view" :class="classes">
    <sx-content-comparator />
  </main>
</template>

<script>
import SxContentComparator from "@/components/SXContentComparator";

export default {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator,
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown,
      };
    },
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-content-comparator-view {
  background-color: @background-color-base;
}
</style>
