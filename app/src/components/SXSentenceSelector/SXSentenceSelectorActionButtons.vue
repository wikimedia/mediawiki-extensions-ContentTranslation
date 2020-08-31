<template>
  <mw-row class="sx-sentence-selector__translation-action-buttons ma-0">
    <mw-button :icon="mwIconPrevious" type="icon" class="col shrink pa-4" />
    <mw-button
      type="text"
      :label="$i18n('cx-sx-sentence-selector-apply-translation-button-label')"
      class="sx-sentence-selector__translation-apply-button col grow pa-4"
    />
    <mw-button
      type="text"
      :indicator="mwIconArrowForward"
      :label="$i18n('cx-sx-sentence-selector-skip-translation-button-label')"
      class="col shrink pa-4"
    />
  </mw-row>
</template>

<script>
import { MwRow, MwButton } from "@/lib/mediawiki.ui";
import {
  mwIconArrowForward,
  mwIconPrevious
} from "@/lib/mediawiki.ui/components/icons";
export default {
  name: "SxSentenceSelectorActionButtons",
  components: {
    MwRow,
    MwButton
  },
  data: () => ({
    mwIconPrevious,
    mwIconArrowForward
  })
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-sentence-selector__translation-action-buttons {
  border-top: @border-style-base @border-width-base @border-color-base--disabled;
  button {
    // Icon and text buttons have a minimum width of 0. Not sure if there is any reason for that rule or we can remove it.
    min-width: max-content;
    &.sx-sentence-selector__translation-apply-button {
      // TODO: Fix these to be base80. Currently base70.
      border-left: @border-style-base @border-width-base @wmui-color-base80;
      border-right: @border-style-base @border-width-base @wmui-color-base80;
    }
  }
}
</style>
