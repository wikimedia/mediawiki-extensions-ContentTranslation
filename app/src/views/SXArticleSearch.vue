<template>
  <main class="sx-article-search-view" :class="classes">
    <sx-article-search />
  </main>
</template>

<script>
import SxArticleSearch from "@/components/SXArticleSearch";

export default {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch,
  },
  computed: {
    classes: (vm) => ({ fullscreen: vm.$mwui.breakpoint.tabletAndDown }),
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-article-search-view {
  background-color: @background-color-base;
}
</style>
