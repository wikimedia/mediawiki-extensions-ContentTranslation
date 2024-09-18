<script setup>
import { MwRow } from "@/lib/mediawiki.ui";
import { computed } from "vue";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconPrevious, cdxIconNext } from "@wikimedia/codex-icons";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

defineEmits([
  "select-previous-segment",
  "apply-translation",
  "skip-translation",
]);

const { sourceSection, isSectionTitleSelected, currentProposedTranslation } =
  useCurrentPageSection();

const isLastTranslationUnit = computed(
  () => sourceSection.value?.isSelectedTranslationUnitLast
);
</script>

<template>
  <mw-row class="sx-sentence-selector__translation-action-buttons ma-0">
    <cdx-button
      weight="quiet"
      class="sx-sentence-selector__previous-sentence-button col shrink pa-4"
      :aria-label="
        $i18n('cx-sx-sentence-selector-previous-translation-button-aria-label')
      "
      :disabled="isSectionTitleSelected"
      @click="$emit('select-previous-segment')"
    >
      <cdx-icon class="me-1" :icon="cdxIconPrevious" />
    </cdx-button>
    <cdx-button
      weight="quiet"
      class="sx-sentence-selector__apply-translation-button col grow pa-4"
      :disabled="!currentProposedTranslation"
      @click="$emit('apply-translation')"
    >
      {{ $i18n("cx-sx-sentence-selector-apply-translation-button-label") }}
    </cdx-button>
    <cdx-button
      weight="quiet"
      class="sx-sentence-selector__skip-translation-button col shrink pa-4"
      :disabled="isLastTranslationUnit"
      @click="$emit('skip-translation')"
    >
      {{ $i18n("cx-sx-sentence-selector-skip-translation-button-label") }}
      <cdx-icon class="ms-1" size="small" :icon="cdxIconNext" />
    </cdx-button>
  </mw-row>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-sentence-selector {
  &__translation-action-buttons {
    border-top: @border-style-base @border-width-base @border-color-disabled;
  }

  && button&__apply-translation-button {
    border-top: 0;
    border-bottom: 0;
    border-inline: @border-style-base @border-width-base;
    border-color: #eaecf0;
  }

  & button&__previous-sentence-button,
  & button&__skip-translation-button {
    min-width: max-content;
  }
}
</style>
