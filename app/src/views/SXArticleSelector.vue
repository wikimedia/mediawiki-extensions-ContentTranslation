<template>
  <main class="sx-article-selector-view" :class="classes">
    <sx-article-selector />
  </main>
</template>

<script>
import Vue from "vue";
import SxArticleSelector from "@/components/SXArticleSelector";

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
</style>
