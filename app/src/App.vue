<template>
  <mw-grid id="cxdashboard">
    <cx-header />
    <mw-row class="cxdashboard-container">
      <mw-col cols="12">
        <transition name="mw-ui-animation-slide-left">
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
  name: "CxDashboardApp",
  components: { MwGrid, MwCol, MwRow, CxHeader }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

body {
  margin: 0;
  padding: 0;
}
</style>
