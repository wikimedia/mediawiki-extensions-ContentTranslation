<template>
  <mw-grid id="cxdashboard">
    <cx-header />
    <section class="row cx-translation-header">
      <mw-button
        progressive
        large
        :icon="mwIconAdd"
        :label="$i18n('cx-create-new-translation')"
        class="col-md-4 col-xs-12 col-lg-3 col-offset-lg-1 mb-4 mt-4"
      >
      </mw-button>
    </section>
    <section class="row cx-translation-dashboard-container">
      <cx-dashboard
        class="col-xs-12 col-md-8 col-lg-7 col-offset-lg-1 mb-4 pb-12"
      />
    </section>
  </mw-grid>
</template>

<script>
import { MwButton, MwGrid } from "./lib/mediawiki.ui";
import CxHeader from "./components/CXHeader";
import CxDashboard from "./components/CXDashboard";
import { mwIconAdd } from "./lib/mediawiki.ui/components/icons";

export default {
  name: "CxDashboardApp",
  components: { MwButton, MwGrid, CxHeader, CxDashboard },
  data: () => ({ mwIconAdd })
};
</script>

<style lang="less">
body {
  color: #54595d;
  background-color: #eaecf0;
  margin: 0;
  padding: 0;
}
</style>
