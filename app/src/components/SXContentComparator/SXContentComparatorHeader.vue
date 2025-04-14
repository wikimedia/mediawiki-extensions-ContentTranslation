<script setup>
import {
  mwIconArrowPrevious,
  mwIconEdit,
  mwIconEye,
} from "@/lib/mediawiki.ui/components/icons";
import { MwCol, MwRow, MwButton, MwIcon } from "@/lib/mediawiki.ui";
import SxContentComparatorHeaderNavigation from "@/components/SXContentComparator/SXContentComparatorHeaderNavigation.vue";
import SxContentComparatorHeaderMappedSection from "@/components/SXContentComparator/SXContentComparatorHeaderMappedSection.vue";
import { computed, inject } from "vue";
import useURLHandler from "@/composables/useURLHandler";
import { getDir } from "@wikimedia/language-data";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

defineEmits(["close", "translation-button-clicked"]);

const { sectionURLParameter: sourceSectionTitle } = useURLHandler();
const { sourceSection } = useCurrentPageSection();
const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();

const isCurrentSectionMissing = computed(() =>
  suggestion.value?.missingSections.hasOwnProperty(sourceSectionTitle.value)
);
const isCurrentSectionPresent = computed(() =>
  suggestion.value?.presentSections.hasOwnProperty(sourceSectionTitle.value)
);

const sourceSectionContent = computed(() => sourceSection.value?.html);
const sectionSourceTitles = computed(() => [
  ...Object.keys(suggestion.value.missingSections),
  ...Object.keys(suggestion.value.presentSections),
]);

const breakpoints = inject("breakpoints");
const isMobile = computed(() => breakpoints.value.mobile);
</script>

<template>
  <div class="sx-content-comparator__header pa-4">
    <mw-button
      class="py-2 pa-0"
      :icon="mwIconArrowPrevious"
      :label="$i18n('cx-sx-content-comparator-back-to-sections-button-label')"
      type="text"
      @click="$emit('close')"
    />
    <div class="row my-1 py-2 mx-0">
      <div class="flex grow" :class="isMobile ? 'col-12' : 'me-6'">
        <div class="sx-content-comparator-header__titles grow">
          <h4
            class="pa-0 sx-content-comparator-header__article-title"
            :lang="suggestion.sourceLanguage"
            :dir="getDir(suggestion.sourceLanguage)"
          >
            {{ suggestion.sourceTitle }}
          </h4>
          <h2
            class="sx-content-comparator-header__section-title pa-0 ma-0"
            :lang="suggestion.sourceLanguage"
            :dir="getDir(suggestion.sourceLanguage)"
          >
            {{ sourceSectionTitle }}
          </h2>
        </div>
        <sx-content-comparator-header-navigation
          :section-source-titles="sectionSourceTitles"
        />
      </div>
      <div class="py-2 mb-1">
        <mw-button
          :icon="mwIconEdit"
          progressive
          :label="
            $i18n('cx-sx-content-comparator-translation-section-button-label')
          "
          :disabled="!sourceSectionContent"
          @click="$emit('translation-button-clicked')"
        />
      </div>
    </div>
    <mw-row
      v-if="isCurrentSectionMissing"
      align="start"
      class="sx-content-comparator-header__review-contents mx-0"
    >
      <mw-col shrink class="pe-2">
        <mw-icon :icon="mwIconEye" />
      </mw-col>
      <mw-col class="ma-0">
        <strong v-i18n:cx-sx-content-comparator-review-contents-title />
        <br />
        <span v-i18n:cx-sx-content-comparator-review-contents-rest />
      </mw-col>
    </mw-row>
    <sx-content-comparator-header-mapped-section
      v-if="isCurrentSectionPresent"
    />
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-content-comparator-header__section-title {
  border: none;
}

.sx-content-comparator-header__review-contents {
  color: @color-base;
}
</style>
