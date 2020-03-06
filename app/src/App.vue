<template>
  <div id="cxdashboard" class="container">
    <cx-header />
    <div class="row cx-translation-header">
      <mw-button
        progressive
        large
        :icon="mwIconAdd"
        :label="$i18n('cx-create-new-translation')"
        class="col-md-4 col-xs-12 col-lg-3 col-offset-lg-1 mb-4 mt-4"
      >
      </mw-button>
    </div>
  </div>
</template>

<script>
import MwButton from "./lib/mediawiki.ui/components/MWButton";
import CxHeader from "./components/CXHeader";
import { mwIconAdd } from "./lib/mediawiki.ui/components/icons";
import "./lib/mediawiki.ui/grid.less";

export default {
  name: "cx-dashboard",
  components: { MwButton, CxHeader },
  data: () => ({ mwIconAdd })
};
</script>

<style lang="less">
body {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #54595d;
  background-color: #eaecf0;
  margin: 0;
  padding: 0;
}
</style>
