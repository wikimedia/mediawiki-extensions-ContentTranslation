<template>
  <main class="sx-publisher-view" :class="classes">
    <sx-publisher />
  </main>
</template>

<script>
import SxPublisher from "@/components/SXPublisher";

export default {
  name: "SxPublisherView",
  components: {
    SxPublisher
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

.sx-publisher-view {
  background-color: @background-color-base;
}
</style>
