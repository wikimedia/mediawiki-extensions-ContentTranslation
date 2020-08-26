<template>
  <div class="sx-section-selector__header pa-4">
    <mw-row class="ma-0 pb-3">
      <mw-col>
        <h6
          v-i18n:cx-sx-section-selector-title
          class="sx-section-selector__header-text ma-0"
        />
        <h2
          class="sx-section-selector__title ma-0 py-0"
          v-text="suggestion.sourceTitle"
        />
      </mw-col>
      <mw-col shrink class="justify-end">
        <mw-button
          class="pa-0"
          :large="true"
          type="icon"
          :icon="mwIconClose"
          @click="$emit('close')"
        />
      </mw-col>
    </mw-row>
    <h4 v-i18n:cx-sx-section-selector-subtitle class="pt-0 ma-0" />
    <p v-i18n:cx-sx-section-selector-desc class="ma-0" />
  </div>
</template>

<script>
import { MwButton, MwCol, MwRow } from "@/lib/mediawiki.ui";
import { mwIconClose } from "@/lib/mediawiki.ui/components/icons";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

export default {
  name: "SxSectionSelectorHeader",
  components: {
    MwRow,
    MwCol,
    MwButton
  },
  props: {
    suggestion: {
      type: SectionSuggestion,
      required: true
    }
  },
  data: () => ({
    mwIconClose
  })
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-section-selector__header {
  border-bottom: @border-width-base @border-style-base
    @background-color-notice--framed;
  .sx-section-selector__title {
    color: @color-base;
    border: none;
  }
  .sx-section-selector__header-text {
    color: @color-base;
  }
}
</style>
