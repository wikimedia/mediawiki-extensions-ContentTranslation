<template>
  <div class="sx-content-comparator__header pa-4">
    <mw-button
      class="py-2 pa-0"
      :icon="mwIconArrowPrevious"
      :label="$i18n('cx-sx-content-comparator-back-to-sections-button-label')"
      type="text"
      :outlined="false"
      @click="$emit('close')"
    />
    <mw-row class="my-1 py-2 mx-0">
      <mw-col grow>
        <h4 class="pa-0 sx-content-comparator-header__article-title">
          {{ suggestion.sourceTitle }}
        </h4>
        <h2 class="sx-content-comparator-header__section-title pa-0 ma-0">
          {{ sourceSectionTitle }}
        </h2>
      </mw-col>
      <sx-content-comparator-header-navigation
        cols="2"
        :section-source-titles="sectionSourceTitles"
      />
      <mw-col cols="12" sm="12" md="4" class="py-2 mb-1">
        <mw-button
          :icon="mwIconEdit"
          :progressive="true"
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
      :target-section-title="targetSectionTitle"
      :discarded-sections="discardedSections"
      @update:discardedSections="$emit('update:discardedSections', $event)"
    />
  </div>
</template>

<script>
import {
  mwIconArrowPrevious,
  mwIconEdit,
  mwIconEye
} from "@/lib/mediawiki.ui/components/icons";
import { MwCol, MwRow, MwButton, MwIcon } from "@/lib/mediawiki.ui";
import SxContentComparatorHeaderNavigation from "@/components/SXContentComparator/SXContentComparatorHeaderNavigation";
import SxContentComparatorHeaderMappedSection from "@/components/SXContentComparator/SXContentComparatorHeaderMappedSection";
import { mapGetters, mapState } from "vuex";

export default {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection,
    SxContentComparatorHeaderNavigation,
    MwButton,
    MwCol,
    MwRow,
    MwIcon
  },
  props: {
    discardedSections: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    mwIconArrowPrevious,
    mwIconEdit,
    mwIconEye
  }),
  computed: {
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion,
      sourceSection: state => state.application.currentSourceSection
    }),
    ...mapGetters({
      sourceSectionTitle: "application/getCurrentSourceSectionTitle",
      isCurrentSectionMissing: "application/isCurrentSourceSectionMissing",
      isCurrentSectionPresent: "application/isCurrentSourceSectionPresent"
    }),
    isCurrentSectionMappedOrDiscarded: vm =>
      vm.discardedSections.includes(vm.activeSectionTargetTitle),
    sourceSectionContent: vm => vm.sourceSection?.html,
    sectionSourceTitles: vm => [
      ...Object.keys(vm.suggestion.missingSections),
      ...Object.keys(vm.suggestion.presentSections)
    ],
    targetSectionTitle: vm =>
      vm.suggestion.missingSections[vm.sourceSectionTitle] ||
      vm.suggestion.presentSections[vm.sourceSectionTitle] ||
      ""
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-content-comparator-header__section-title {
  border: none;
}

.sx-content-comparator-header__review-contents {
  color: @color-base;
}
</style>
