<template>
  <main class="sx-editor-view" :class="classes">
    <sx-editor />
  </main>
</template>

<script>
import SxEditor from "@/components/SXEditor";

export default {
  name: "SxContentComparatorView",
  components: {
    SxEditor
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

.sx-editor-view {
  background-color: @background-color-base;
}
</style>
