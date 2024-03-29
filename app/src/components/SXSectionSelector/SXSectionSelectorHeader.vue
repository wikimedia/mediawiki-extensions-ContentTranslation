<script setup>
import { MwCol, MwRow } from "@/lib/mediawiki.ui";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconClose } from "@wikimedia/codex-icons";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();

defineEmits(["close"]);
</script>

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
          v-text="suggestion?.sourceTitle"
        />
      </mw-col>
      <mw-col shrink class="justify-end">
        <cdx-button
          weight="quiet"
          :aria-label="$i18n('sx-section-selector-close-button-aria-label')"
          @click="$emit('close')"
        >
          <cdx-icon :icon="cdxIconClose" />
        </cdx-button>
      </mw-col>
    </mw-row>
    <h4 v-i18n:cx-sx-section-selector-subtitle class="pt-0 ma-0" />
    <p v-i18n:cx-sx-section-selector-desc class="ma-0" />
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-section-selector__header {
  border-bottom: @border-width-base @border-style-base
    @background-color-notice-subtle;
  .sx-section-selector__title {
    color: @color-base;
    border: none;
  }
  .sx-section-selector__header-text {
    color: @color-base;
    font-weight: @font-weight-bold;
  }
}
</style>
