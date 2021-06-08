<template>
  <section
    class="sx-sentence-selector fill-height column ma-0 no-wrap"
    :style="sentenceSelectorStyle"
  >
    <mw-row class="sx-sentence-selector__header ma-0 py-2">
      <mw-col shrink>
        <mw-button
          class="px-3"
          type="icon"
          :icon="mwIconArrowPrevious"
          @click="goToContentComparator"
        />
      </mw-col>
      <mw-col grow class="px-1">
        <h4
          v-i18n:cx-sx-sentence-selector-header-title
          class="sx-sentence-selector__header-title"
        />
      </mw-col>
      <mw-col shrink class="px-3">
        <mw-button
          :label="$i18n('cx-sx-sentence-selector-done-button-label')"
          :disabled="!currentPageSection.isTranslated"
          @click="previewTranslation"
        />
      </mw-col>
    </mw-row>
    <mw-row
      tag="section"
      direction="column"
      align="start"
      justify="between"
      class="sx-sentence-selector__body fill-height ma-0"
    >
      <mw-col class="sx-sentence-selector__section">
        <sx-sentence-selector-content-header />
        <div class="sx-sentence-selector__section-contents px-4">
          <sub-section
            v-for="subSection in subSections"
            :id="subSection.id"
            :key="`sub-section-${subSection.id}`"
            :sub-section="subSection"
            @bounce-translation="bounceTranslation"
          />
        </div>
      </mw-col>
      <translated-segment-card
        v-if="isSelectedSegmentTranslated"
        @edit-translation="editTranslation"
        @skip-translation="skipTranslation"
        @select-previous-segment="selectPreviousSegment"
      />
      <!--      MwCard has a margin-bottom: 1em by default. Since this is -->
      <!--      the margin that the card jumps to when bouncing, we control-->
      <!--      card bounce through mb-0 class-->
      <proposed-translation-card
        v-else
        :class="{ 'mb-0': !shouldProposedTranslationBounce }"
        @configure-options="configureTranslationOptions"
        @edit-translation="editTranslation"
        @apply-translation="applyTranslation"
        @skip-translation="skipTranslation"
        @select-previous-segment="selectPreviousSegment"
      />
    </mw-row>
    <sx-translation-selector :active.sync="isTranslationOptionsActive" />
  </section>
</template>

<script>
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { mwIconArrowPrevious } from "@/lib/mediawiki.ui/components/icons";

import SxTranslationSelector from "./SXTranslationSelector";
import { mapState, mapGetters, mapActions } from "vuex";
import SxSentenceSelectorContentHeader from "./SXSentenceSelectorContentHeader";
import ProposedTranslationCard from "./ProposedTranslationCard";
import SubSection from "./SubSection";

import TranslatedSegmentCard from "./TranslatedSegmentCard";

export default {
  name: "SxSentenceSelector",
  components: {
    TranslatedSegmentCard,
    ProposedTranslationCard,
    SubSection,
    SxSentenceSelectorContentHeader,
    MwRow,
    MwCol,
    SxTranslationSelector,
    MwButton
  },
  data: () => ({
    mwIconArrowPrevious,
    translation: null,
    isTranslationOptionsActive: false,
    shouldProposedTranslationBounce: false,
    screenHeight: "100%"
  }),
  computed: {
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion,
      currentPageSection: state => state.application.currentSourceSection,
      isSectionTitleSelected: state =>
        state.application.isSectionTitleSelectedForTranslation,
      selectedProvider: state => state.application.currentMTProvider
    }),
    ...mapGetters({
      selectedSentence: "application/getCurrentSelectedSentence",
      isSelectedSegmentTranslated: "application/isSelectedSegmentTranslated"
    }),
    subSections: vm => vm.currentPageSection?.subSections,
    sourcePage: vm =>
      vm.$store.getters["mediawiki/getPage"](
        vm.suggestion.sourceLanguage,
        vm.suggestion.sourceTitle
      ),
    originalSegmentContent: vm =>
      vm.isSectionTitleSelected
        ? vm.currentPageSection.originalTitle
        : vm.selectedSentence.originalContent,
    sentenceSelectorStyle: vm => ({
      height: isNaN(vm.screenHeight) ? vm.screenHeight : `${vm.screenHeight}px`
    })
  },
  async mounted() {
    this.$store.dispatch("application/resetPublishResult");
    await this.$store.dispatch("application/initializeMTProviders");

    // If no sentence is selected, select title
    this.selectedSentence || this.selectSectionTitleForTranslation();
    this.screenHeight = window.innerHeight;
  },
  methods: {
    ...mapActions({
      skipTranslation: "application/selectNextSentence",
      selectPreviousSegment: "application/selectPreviousSegment",
      applyTranslation: "application/applyProposedTranslationToSelectedSegment",
      selectSectionTitleForTranslation:
        "application/selectSectionTitleForTranslation"
    }),
    bounceTranslation() {
      this.shouldProposedTranslationBounce = true;
      setTimeout(() => {
        this.shouldProposedTranslationBounce = false;
      }, 100);
    },
    goToContentComparator() {
      this.$router.push({ name: "sx-content-comparator" });
    },
    configureTranslationOptions() {
      this.isTranslationOptionsActive = true;
      this.$store.dispatch("application/translateSegmentForAllProviders");
    },
    editTranslation(content) {
      this.$router.push({
        name: "sx-editor",
        params: {
          content,
          language: this.suggestion.targetLanguage,
          originalContent: this.originalSegmentContent,
          title: this.suggestion.targetTitle
        }
      });
    },
    previewTranslation() {
      this.$router.push({
        name: "sx-publisher"
      });
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
@import "@/styles/page.less";

.sx-sentence-selector {
  &__header {
    background-color: @background-color-base--disabled;
    box-shadow: 0 @border-width-base @border-color-base--disabled;
    &-title {
      color: @color-base;
    }
  }
  &__body {
    min-height: 80vh;
  }
  &__section {
    overflow: auto;
    &-contents {
      a {
        pointer-events: none;
      }
    }
  }
}
</style>
