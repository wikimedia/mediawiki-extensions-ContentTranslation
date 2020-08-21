<template>
  <main class="sx-sentence-selector-view" :class="classes">
    <sx-sentence-selector />
  </main>
</template>

<script>
import Vue from "vue";
import { BreakpointsPlugin } from "@/lib/mediawiki.ui/plugins";
import SxSentenceSelector from "@/components/SXSentenceSelector";

Vue.use(BreakpointsPlugin);

export default {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector
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

.sx-sentence-selector-view {
  background-color: @background-color-base;
}
</style>
