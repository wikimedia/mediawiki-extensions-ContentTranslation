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
    SxPublisher,
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown,
      };
    },
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-publisher-view {
  background-color: @background-color-base;
}
</style>
