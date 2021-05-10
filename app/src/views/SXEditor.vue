<template>
  <main class="sx-editor-view" :class="classes">
    <sx-editor :from-route="fromRoute" />
  </main>
</template>

<script>
import SxEditor from "@/components/SXEditor";

export default {
  name: "SxContentComparatorView",
  components: {
    SxEditor
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fromRoute = from.name;
    });
  },
  data: () => ({
    fromRoute: ""
  }),
  computed: {
    classes: vm => ({ fullscreen: vm.$mwui.breakpoint.mdAndDown })
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-editor-view {
  background-color: @background-color-base;
}
</style>
