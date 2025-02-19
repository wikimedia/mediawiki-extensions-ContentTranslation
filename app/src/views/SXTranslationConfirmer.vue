<template>
  <main class="sx-translation-confirmer-view" :class="classes">
    <sx-translation-confirmer />
  </main>
</template>

<script>
import SxTranslationConfirmer from "@/components/SXTranslationConfirmer";

export default {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer,
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile,
      };
    },
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-translation-confirmer-view {
  background-color: @background-color-neutral;
  &.fullscreen {
    background-color: @background-color-base;
  }
}
</style>
