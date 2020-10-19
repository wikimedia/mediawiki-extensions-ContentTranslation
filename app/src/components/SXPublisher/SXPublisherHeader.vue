<template>
  <mw-row class="ma-0 sx-publisher__header">
    <mw-col shrink>
      <mw-button
        :icon="mwIconClose"
        type="icon"
        :outlined="false"
        @click="onClose"
      />
    </mw-col>
    <mw-col v-i18n:cx-sx-publisher-header-title grow tag="h5" class="ma-0" />
    <mw-col shrink>
      <mw-button
        progressive
        type="button"
        :icon="mwIconCheck"
        @click="$emit('publish-translation')"
      />
    </mw-col>
  </mw-row>
</template>

<script>
import { mwIconClose, mwIconCheck } from "@/lib/mediawiki.ui/components/icons";
import { MwCol, MwButton, MwRow } from "@/lib/mediawiki.ui";
export default {
  name: "SxPublisherHeader",
  components: { MwCol, MwButton, MwRow },
  data: () => ({
    mwIconClose,
    mwIconCheck
  }),
  methods: {
    onClose() {
      this.$router.push({
        name: "sx-sentence-selector"
      });
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-publisher__header {
  border-bottom: @border-width-base @border-style-base @border-color-heading;
}
</style>
