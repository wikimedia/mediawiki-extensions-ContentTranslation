<template>
  <main class="sx-translation-confirmer-view" :class="classes">
    <sx-translation-confirmer :event-source="eventSource" />
  </main>
</template>

<script>
import SxTranslationConfirmer from "@/components/SXTranslationConfirmer";

export default {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer,
  },
  props: {
    eventSource: {
      type: String,
      default: null,
    },
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

.sx-translation-confirmer-view {
  background-color: @background-color-base;
}
</style>
