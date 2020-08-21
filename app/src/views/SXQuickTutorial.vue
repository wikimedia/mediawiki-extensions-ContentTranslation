<template>
  <main class="sx-quick-tutorial-view" :class="classes">
    <sx-quick-tutorial />
  </main>
</template>

<script>
import Vue from "vue";
import { BreakpointsPlugin } from "@/lib/mediawiki.ui/plugins";
import SxQuickTutorial from "@/components/SXQuickTutorial";

Vue.use(BreakpointsPlugin);

export default {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial
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

.sx-quick-tutorial-view {
  background-color: @background-color-base;
  display: flex;
}
</style>
