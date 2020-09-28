<template>
  <mw-grid id="contenttranslation">
    <mw-row class="cx-container">
      <mw-col cols="12">
        <transition :name="transitionName">
          <router-view />
        </transition>
      </mw-col>
      <aside />
    </mw-row>
  </mw-grid>
</template>

<script>
import { MwGrid, MwCol, MwRow } from "./lib/mediawiki.ui";

export default {
  name: "ContentTranslationApp",
  components: { MwGrid, MwCol, MwRow },
  data: () => ({
    transitionName: ""
  }),
  // watch the `$route` to determine the transition to use
  watch: {
    $route(to, from) {
      const toStep = to.meta.workflowStep;
      const fromStep = from.meta.workflowStep;
      this.transitionName =
        toStep < fromStep
          ? "mw-ui-animation-slide-end"
          : "mw-ui-animation-slide-start";
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

body {
  margin: 0;
  padding: 0;
}
</style>
