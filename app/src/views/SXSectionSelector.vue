<template>
  <main class="sx-section-selector-view" :class="classes">
    <sx-section-selector />
  </main>
</template>

<script>
import SxSectionSelector from "@/components/SXSectionSelector";

export default {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector,
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

.sx-section-selector-view {
  background-color: @background-color-base;
}
</style>
