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
    SxTranslationConfirmer
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mdAndDown
      };
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-translation-confirmer-view {
  background-color: @background-color-base;
}
</style>
