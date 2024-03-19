<script setup>
import { MwRow } from "@/lib/mediawiki.ui";
import { computed } from "vue";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconNext, cdxIconPrevious } from "@wikimedia/codex-icons";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

defineEmits(["select-previous-segment", "skip-translation"]);

const { sourceSection, isSectionTitleSelected } = useCurrentPageSection();

const isLastTranslationUnit = computed(
  () => sourceSection.value.isSelectedTranslationUnitLast
);
</script>

<template>
  <mw-row
    class="sx-sentence-selector__translated-segment-card__action-buttons ma-0"
  >
    <cdx-button
      class="sx-sentence-selector__translated-segment-card__previous-button col pa-4"
      weight="quiet"
      :disabled="isSectionTitleSelected"
      @click="$emit('select-previous-segment')"
    >
      <cdx-icon :icon="cdxIconPrevious" />
    </cdx-button>
    <cdx-button
      class="sx-sentence-selector__translated-segment-card__next-button col pa-4"
      weight="quiet"
      :disabled="isLastTranslationUnit"
      @click="$emit('skip-translation')"
    >
      <cdx-icon :icon="cdxIconNext" />
    </cdx-button>
  </mw-row>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-sentence-selector__translated-segment-card {
  &__action-buttons {
    border-top: @border-subtle;
  }
  &__action-buttons button {
    border-radius: 0;
    border-block: none;
  }
  div&__action-buttons button&__next-button:last-of-type {
    border-inline-start-color: @border-color-subtle;
  }
}
</style>
