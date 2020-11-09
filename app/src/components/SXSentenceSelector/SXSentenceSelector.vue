<template>
  <section class="sx-sentence-selector fill-height column ma-0 no-wrap">
    <mw-row class="sx-sentence-selector__header ma-0 py-2">
      <mw-col shrink>
        <mw-button
          class="px-3"
          type="icon"
          :icon="mwIconArrowPrevious"
          @click="onClose"
        />
      </mw-col>
      <mw-col grow class="px-1">
        <h4
          v-i18n:cx-sx-sentence-selector-header-title
          class="sx-sentence-selector__header--title"
        />
      </mw-col>
      <mw-col shrink class="px-3">
        <mw-button
          :label="$i18n('cx-sx-sentence-selector-done-button-label')"
          @click="previewTranslation"
        />
      </mw-col>
    </mw-row>
    <mw-row
      tag="section"
      direction="column"
      align="start"
      class="sx-sentence-selector__section fill-height ma-0"
    >
      <sx-sentence-selector-content-header
        :is-section-title-selected.sync="isSectionTitleSelected"
      />
      <mw-col grow class="sx-sentence-selector__section-contents px-4">
        <sx-sentence-selector-sentence
          v-for="sentence in sentences"
          :key="`sentence-${sentence.id}`"
          :sentence="sentence"
          @sentence-selected="onSentenceSelected"
        />
      </mw-col>
      <mw-col
        tag="section"
        shrink
        class="sx-sentence-selector__proposed-translation"
        :class="{ bounce: shouldProposedTranslationBounce }"
      >
        <sx-sentence-selector-proposed-translation-body
          :mt-provider="selectedProvider"
          :translation="translationPreview"
          @configure-options="configureTranslationOptions"
          @edit-translation="editTranslation"
        />
        <sx-sentence-selector-action-buttons
          :is-section-title-selected="isSectionTitleSelected"
          @apply-translation="applyTranslation"
          @skip-translation="skipTranslation"
          @select-previous-segment="selectPreviousSegment"
        />
      </mw-col>
    </mw-row>
    <sx-translation-selector
      :active.sync="isTranslationOptionsActive"
      :provider.sync="selectedProvider"
      :is-section-title-selected="isSectionTitleSelected"
    />
  </section>
</template>

<script>
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { mwIconArrowPrevious } from "@/lib/mediawiki.ui/components/icons";

import SxTranslationSelector from "./SXTranslationSelector";
import { mapState, mapGetters } from "vuex";
import SxSentenceSelectorActionButtons from "./SXSentenceSelectorActionButtons";
import SxSentenceSelectorProposedTranslationBody from "./SXSentenceSelectorProposedTranslationBody";
import SxSentenceSelectorSentence from "@/components/SXSentenceSelector/SXSentenceSelectorSentence";
import SxSentenceSelectorContentHeader from "./SXSentenceSelectorContentHeader";

export default {
  name: "SxSentenceSelector",
  components: {
    SxSentenceSelectorContentHeader,
    SxSentenceSelectorSentence,
    SxSentenceSelectorProposedTranslationBody,
    SxSentenceSelectorActionButtons,
    MwRow,
    MwCol,
    SxTranslationSelector,
    MwButton
  },
  data: () => ({
    mwIconArrowPrevious,
    selectedProvider: "",
    translation: null,
    isTranslationOptionsActive: false,
    shouldProposedTranslationBounce: false,
    isSectionTitleSelected: false
  }),
  computed: {
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion,
      currentPageSection: state => state.application.currentSourceSection,
      currentEditedTranslation: state =>
        state.application.currentEditedSentenceTranslation
    }),
    ...mapGetters({
      getDefaultMTProvider: "mediawiki/getDefaultMTProvider",
      getSupportedMTProviders: "mediawiki/getSupportedMTProviders",
      isCurrentSentenceFirst: "application/isCurrentSentenceFirst"
    }),
    sourceSectionTitle: vm => vm.currentPageSection?.title,
    defaultMTProvider: vm =>
      vm.getDefaultMTProvider(
        vm.suggestion.sourceLanguage,
        vm.suggestion.targetLanguage
      ),
    /**
     * Machine translation of sentence for currently selected MT provider
     */
    proposedSentenceTranslation: vm =>
      vm.selectedSentence?.proposedTranslations[vm.selectedProvider] || "",
    /**
     * Machine translation of title for currently selected MT provider
     */
    proposedTitleTranslation: vm =>
      vm.currentPageSection?.proposedTitleTranslations[vm.selectedProvider] ||
      "",
    /**
     * This computed property returns a preview of the translation of a sentence
     * or section title that will be applied to that sentence if user clicks
     * "Apply translation" button. If this segment is already  translated, current
     * applied translation will be returned, else if machine translation for this
     * segment has been edited by user (inside SXEditor), this edited translation
     * will be returned. Machine translation for currently selected MT provider
     * will be returned otherwise.
     * @return {String}
     */
    translationPreview: vm =>
      vm.titleTranslationPreview || vm.sentenceTranslationPreview,
    sentences: vm => vm.currentPageSection?.sentences || [],
    mtProviders: vm =>
      vm.getSupportedMTProviders(
        vm.suggestion.sourceLanguage,
        vm.suggestion.targetLanguage
      ),
    sourcePage: vm =>
      vm.$store.getters["mediawiki/getPage"](
        vm.suggestion.sourceLanguage,
        vm.suggestion.sourceTitle
      ),
    selectedSentence: vm => vm.sentences.find(sentence => sentence.selected),
    /**
     * If section title is not selected for translation, false will be returned
     */
    titleTranslationPreview: vm =>
      vm.isSectionTitleSelected &&
      (vm.currentPageSection.translatedTitle ||
        vm.currentEditedTranslation ||
        vm.proposedTitleTranslation),
    sentenceTranslationPreview: vm =>
      vm.selectedSentence?.translatedContent ||
      vm.currentEditedTranslation ||
      vm.proposedSentenceTranslation,
    originalSegmentContent: vm =>
      vm.isSectionTitleSelected
        ? vm.currentPageSection.originalTitle
        : vm.selectedSentence.originalContent
  },
  watch: {
    isSectionTitleSelected() {
      if (this.isSectionTitleSelected) {
        this.$store.dispatch("application/clearSentenceSelection");
        this.translateSelectedSegment(this.selectedProvider);
      }
    },
    selectedSentence() {
      this.translateSelectedSegment(this.selectedProvider);
    },
    selectedProvider() {
      if (this.selectedProvider) {
        this.translateSelectedSegment(this.selectedProvider);
      }
    },
    isTranslationOptionsActive() {
      if (this.isTranslationOptionsActive) {
        this.mtProviders.forEach(provider =>
          this.translateSelectedSegment(provider)
        );
      }
    }
  },
  async mounted() {
    await this.$store.dispatch("mediawiki/fetchMTProviders", {
      sourceLanguage: this.suggestion.sourceLanguage,
      targetLanguage: this.suggestion.targetLanguage
    });
    this.selectedProvider = this.defaultMTProvider;
    /**
     * When component is mounted and no sentence is selected, translation
     * should start with section title.
     */
    if (!this.selectedSentence) {
      this.isSectionTitleSelected = true;
    }
  },
  methods: {
    applyTranslation() {
      this.$store.dispatch("application/applyTranslationToSelectedSegment", {
        isSentence: !this.isSectionTitleSelected,
        translation: this.translationPreview
      });
      this.isSectionTitleSelected = false;
    },
    skipTranslation() {
      this.$store.dispatch("application/selectNextSentence", {
        isSentence: this.isSectionTitleSelected
      });
      this.isSectionTitleSelected = false;
    },
    selectPreviousSegment() {
      if (this.isCurrentSentenceFirst) {
        this.isSectionTitleSelected = true;
        return;
      }
      this.$store.dispatch("application/selectPreviousSentence");
    },
    bounceTranslation() {
      this.shouldProposedTranslationBounce = true;
      setTimeout(() => {
        this.shouldProposedTranslationBounce = false;
      }, 100);
    },
    async translateSelectedSegment(provider) {
      if (this.isSectionTitleSelected) {
        this.$store.dispatch("mediawiki/translateSectionTitle", {
          provider
        });
        return;
      }
      if (!this.selectedSentence) {
        return;
      }
      this.$store.dispatch("mediawiki/translateSelectedSentence", {
        sourceLanguage: this.suggestion.sourceLanguage,
        targetLanguage: this.suggestion.targetLanguage,
        sourceTitle: this.suggestion.sourceTitle,
        sectionTitle: this.sourceSectionTitle,
        provider
      });
    },
    onClose() {
      this.$router.go(-1);
    },
    onSentenceSelected(sentence) {
      this.isSectionTitleSelected = false;
      if (this.selectedSentence === sentence) {
        this.bounceTranslation();
      } else {
        this.$store.dispatch("application/selectSentenceForCurrentSection", {
          id: sentence.id
        });
      }
    },
    configureTranslationOptions() {
      this.isTranslationOptionsActive = true;
    },
    editTranslation() {
      this.$router.push({
        name: "sx-editor",
        params: {
          content: this.translationPreview,
          language: this.suggestion.targetLanguage,
          originalContent: this.originalSegmentContent
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
.sx-sentence-selector {
  .sx-sentence-selector__header {
    background-color: @background-color-base--disabled;
    box-shadow: 0 @border-width-base @border-color-base--disabled;
    .sx-sentence-selector__header--title {
      color: @color-base;
    }
  }
  .sx-sentence-selector__section {
    min-height: 80vh;
    .sx-sentence-selector__section-contents {
      overflow: auto;
    }
  }
  .sx-sentence-selector__proposed-translation {
    border-radius: 2px 2px 0 0;
    background-color: @background-color-base;
    width: 100%;
    // TODO: Fix these with variables(?)
    box-shadow: 0 -@border-width-base 2px rgba(0, 0, 0, 0.25);
    transition: margin-bottom 0.1s;
    &.bounce {
      margin-bottom: 1rem;
    }
  }
}
</style>
