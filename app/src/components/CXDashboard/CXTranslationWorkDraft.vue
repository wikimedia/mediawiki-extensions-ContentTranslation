<script setup>
import CxTranslationWork from "./CXTranslationWork.vue";
import { mwIconTrash } from "@/lib/mediawiki.ui/components/icons";
import { MwCol, MwProgressBar, MwRow } from "@/lib/mediawiki.ui";
import { computed, inject } from "vue";
import DraftTranslation from "@/wiki/cx/models/draftTranslation";

const props = defineProps({
  translation: {
    type: DraftTranslation,
    required: true,
  },
});

defineEmits(["delete-translation"]);

const colors = inject("colors");
const progressBarBackgroundColor = colors.gray200;
const translationProgress = computed(
  () => props.translation.progress?.any * 100 || 0
);
</script>

<template>
  <cx-translation-work
    class="cx-translation--draft"
    :translation="translation"
    :action-icon="mwIconTrash"
    @action-icon-clicked="$emit('delete-translation')"
  >
    <template #title>
      <h5
        class="cx-translation__source-page-title"
        :class="{
          'cx-translation__primary-title': translation.isLeadSectionTranslation,
        }"
        :lang="translation.sourceLanguage"
        v-text="translation.sourceTitle"
      />
      <h6
        v-if="!translation.isLeadSectionTranslation"
        class="cx-translation__source-section-title cx-translation__primary-title"
        :lang="translation.sourceLanguage"
        v-text="translation.sourceSectionTitle"
      />
    </template>
    <template #mid-content>
      <mw-row v-if="!!translation.progress" class="ma-0 py-2">
        <mw-col>
          <mw-progress-bar
            class="cx-translation__progress-bar"
            :value="translationProgress"
            height="4px"
            width="64px"
            :background="progressBarBackgroundColor"
          />
        </mw-col>
      </mw-row>
    </template>
  </cx-translation-work>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-translation {
  &--draft {
    cursor: pointer;
  }
  &__source-page-title {
    font-size: @font-size-small;
    font-weight: @font-weight-normal;
  }

  &__primary-title {
    font-weight: @font-weight-bold;
    font-size: @font-size-medium;
  }
}
</style>
