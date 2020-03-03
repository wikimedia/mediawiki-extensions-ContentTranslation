<template>
  <div id="cxdashboard" class="container">
    <h1>{{ $i18n("cx-dashboard-header") }}</h1>
    <div class="row">
      <mw-button
        type="progressive"
        class="col-md-4 col-xs-12 col-lg-3 col-offset-lg-1 mb-4 mt-4"
      >
        {{ $i18n("cx-create-new-translation") }}</mw-button
      >
    </div>
  </div>
</template>

<script>
import MwButton from "./lib/mediawiki.ui/components/MWButton";
import "./lib/mediawiki.ui/grid.less";

export default {
  name: "cx-dashboard",
  components: { MwButton },
  data: () => ({})
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
