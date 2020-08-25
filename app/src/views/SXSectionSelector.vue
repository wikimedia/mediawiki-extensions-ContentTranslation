<template>
  <main class="sx-section-selector-view" :class="classes">
    <sx-section-selector />
  </main>
</template>

<script>
import Vue from "vue";
import SxSectionSelector from "@/components/SXSectionSelector";

export default {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector
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

.sx-section-selector-view {
  background-color: @background-color-base;
}
</style>
