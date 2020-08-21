<template>
  <main class="sx-article-selector-view" :class="classes">
    <sx-article-selector />
  </main>
</template>

<script>
import Vue from "vue";
import SxArticleSelector from "@/components/SXArticleSelector";
import { BreakpointsPlugin } from "@/lib/mediawiki.ui/plugins";

Vue.use(BreakpointsPlugin);

export default {
  name: "SxArticleSelectorView",
  components: {
    SxArticleSelector
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

.sx-article-selector-view {
  background-color: @background-color-base;
}

.fullscreen {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}
</style>
