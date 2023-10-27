<template>
  <main class="sx-sentence-selector-view" :class="classes">
    <sx-sentence-selector />
  </main>
</template>

<script>
import SxSentenceSelector from "@/components/SXSentenceSelector";

export default {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector,
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

.sx-sentence-selector-view {
  background-color: @background-color-base;
}
</style>
