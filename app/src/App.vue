<template>
  <div id="cxdashboard">
    <h1>{{ $i18n("cx-dashboard-header") }}</h1>
    <mw-button type="progressive">
      {{ $i18n("cx-create-new-translation") }}
    </mw-button>
  </div>
</template>

<script>
import MwButton from "./components/mediawiki.ui/components/MWButton";

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
