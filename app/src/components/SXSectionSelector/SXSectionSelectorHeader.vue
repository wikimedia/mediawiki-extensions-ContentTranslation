<script setup>
import { MwButton, MwCol, MwRow } from "@/lib/mediawiki.ui";
import { mwIconClose } from "@/lib/mediawiki.ui/components/icons";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

const props = defineProps({
  suggestion: {
    type: SectionSuggestion,
    required: true,
  },
});

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
  }
}
</style>
