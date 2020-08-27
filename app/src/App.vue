<template>
  <mw-grid id="contenttranslation">
    <cx-header />
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
import CxHeader from "./components/CXHeader";

export default {
  name: "ContentTranslationApp",
  components: { MwGrid, MwCol, MwRow, CxHeader },
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
          ? "mw-ui-animation-slide-right"
          : "mw-ui-animation-slide-left";
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
