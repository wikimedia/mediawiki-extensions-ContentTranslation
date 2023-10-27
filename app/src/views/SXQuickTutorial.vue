<template>
  <main class="sx-quick-tutorial-view" :class="classes">
    <sx-quick-tutorial />
  </main>
</template>

<script>
import SxQuickTutorial from "@/components/SXQuickTutorial";

export default {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial,
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

.sx-quick-tutorial-view {
  background-color: @background-color-base;
}
</style>
