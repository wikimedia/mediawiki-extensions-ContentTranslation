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

// This should be moved to a different place
.fullscreen {
  position: fixed;
  width: 100%;
  height: 100%;
  // height: 100vh doesn't work well for mobile screen as it leads to cropping of content at the bottom
  // For browsers supporting -webkit attributes (iOS Safari, Chrome) -webkit-fill-available value fixes
  // this issue. For the rest browsers height: 100% will be used and it is expected to work well too,
  // provided that no parent element has height set to less than 100%.
  // Fix explained here: https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/
  height: -webkit-fill-available;
  top: 0;
  left: 0;
  overflow-y: auto;
}
</style>
