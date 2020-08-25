<template>
  <main class="sx-content-comparator-view" :class="classes">
    <sx-content-comparator />
  </main>
</template>

<script>
import Vue from "vue";
import SxContentComparator from "@/components/SXContentComparator";

export default {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator
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

.sx-content-comparator-view {
  background-color: @background-color-base;
}
</style>
