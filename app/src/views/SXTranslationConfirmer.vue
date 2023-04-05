<template>
  <main class="sx-translation-confirmer-view" :class="classes">
    <sx-translation-confirmer
      :event-source="eventSource"
      :previous-route="previousRoute"
    />
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
    previousRoute: {
      type: String,
      default: null,
    },
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
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-translation-confirmer-view {
  background-color: @background-color-base;
}
</style>
