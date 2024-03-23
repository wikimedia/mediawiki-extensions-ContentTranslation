<template>
  <div class="sx-content-comparator__header pa-4">
    <mw-button
      class="py-2 pa-0"
      :icon="mwIconArrowPrevious"
      :label="$i18n('cx-sx-content-comparator-back-to-sections-button-label')"
      type="text"
      @click="$emit('close')"
    />
    <mw-row class="my-1 py-2 mx-0">
      <mw-col grow>
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
      </mw-col>
      <sx-content-comparator-header-navigation
        cols="2"
        :section-source-titles="sectionSourceTitles"
      />
      <mw-col cols="12" mobile="12" tablet="4" class="py-2 mb-1">
        <mw-button
          :icon="mwIconEdit"
          progressive
          :label="
            $i18n('cx-sx-content-comparator-translation-section-button-label')
          "
          :disabled="!sourceSectionContent"
          @click="$emit('translation-button-clicked')"
        />
      </mw-col>
    </mw-row>
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
      :suggestion="suggestion"
      :target-section-title="activeSectionTargetTitle"
      :discarded-sections="discardedSections"
      @update:discardedSections="$emit('update:discardedSections', $event)"
    />
  </div>
</template>

<script>
import {
  mwIconArrowPrevious,
  mwIconEdit,
  mwIconEye,
} from "@/lib/mediawiki.ui/components/icons";
import { MwCol, MwRow, MwButton, MwIcon } from "@/lib/mediawiki.ui";
import SxContentComparatorHeaderNavigation from "@/components/SXContentComparator/SXContentComparatorHeaderNavigation.vue";
import SxContentComparatorHeaderMappedSection from "@/components/SXContentComparator/SXContentComparatorHeaderMappedSection.vue";
import useCompareContents from "@/components/SXContentComparator/useCompareContents";
import { computed } from "vue";
import useURLHandler from "@/composables/useURLHandler";
import { getDir } from "@wikimedia/language-data";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

export default {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection,
    SxContentComparatorHeaderNavigation,
    MwButton,
    MwCol,
    MwRow,
    MwIcon,
  },
  props: {
    discardedSections: {
      type: Array,
      required: true,
    },
  },
  emits: ["close", "translation-button-clicked", "update:discardedSections"],
  setup() {
    const { sectionURLParameter: sourceSectionTitle } = useURLHandler();
    const { sourceSection } = useCurrentPageSection();
    const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();

    const isCurrentSectionMissing = computed(() =>
      suggestion.value?.missingSections.hasOwnProperty(sourceSectionTitle.value)
    );
    const isCurrentSectionPresent = computed(() =>
      suggestion.value?.presentSections.hasOwnProperty(sourceSectionTitle.value)
    );

    const { activeSectionTargetTitle } = useCompareContents();

    const sourceSectionContent = computed(() => sourceSection.value?.html);
    const sectionSourceTitles = computed(() => [
      ...Object.keys(suggestion.value.missingSections),
      ...Object.keys(suggestion.value.presentSections),
    ]);

    return {
      activeSectionTargetTitle,
      isCurrentSectionMissing,
      isCurrentSectionPresent,
      mwIconArrowPrevious,
      mwIconEdit,
      mwIconEye,
      sectionSourceTitles,
      sourceSectionContent,
      sourceSectionTitle,
      suggestion,
      getDir,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-content-comparator-header__section-title {
  border: none;
}

.sx-content-comparator-header__review-contents {
  color: @color-base;
}
</style>
