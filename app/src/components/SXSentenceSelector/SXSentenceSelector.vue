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
        />
      </mw-col>
    </mw-row>
    <mw-row
      tag="section"
      direction="column"
      align="start"
      class="sx-sentence-selector__section fill-height ma-0"
    >
      <sx-sentence-selector-content-header />
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
        :class="{ bounce: proposedTranslationBounce }"
      >
        <sx-sentence-selector-proposed-translation-body
          :mt-provider="selectedProvider"
          :translation="sentenceTranslationPreview"
          @configure-options="configureTranslationOptions"
          @edit-translation="editTranslation"
        />
        <sx-sentence-selector-action-buttons
          :translation="sentenceTranslationPreview"
        />
      </mw-col>
    </mw-row>
    <sx-translation-selector
      v-if="selectedSentence"
      :active.sync="translationOptionsActive"
      :provider.sync="selectedProvider"
      :sentence="selectedSentence"
      :source-language="suggestion.sourceLanguage"
      :target-language="suggestion.targetLanguage"
    />
  </section>
</template>

<script>
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { mwIconArrowPrevious } from "@/lib/mediawiki.ui/components/icons";

import SxTranslationSelector from "./SXTranslationSelector";
import { mapState } from "vuex";
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
    translationOptionsActive: false,
    proposedTranslationBounce: false
  }),
  computed: {
    ...mapState({
      suggestion: state => state.application.currentSectionSuggestion,
      currentPageSection: state => state.application.currentSourceSection,
      currentEditedTranslation: state =>
        state.application.currentEditedSentenceTranslation
    }),
    sourceSectionTitle() {
      return this.currentPageSection?.title;
    },
    defaultMTProvider() {
      return this.$store.getters["mediawiki/getDefaultMTProvider"](
        this.suggestion.sourceLanguage,
        this.suggestion.targetLanguage
      );
    },
    /**
     * Machine translation for currently selected MT provider
     */
    proposedSentenceTranslation() {
      return (
        this.selectedSentence?.proposedTranslations[this.selectedProvider] || ""
      );
    },
    /**
     * This computed property returns a preview of the translation of a sentence
     * that will be applied to that sentence if user clicks "Apply translation"
     * button. If sentence is already translated, current applied translation
     * will be returned, else if machine translation for this sentence has been
     * edited by user (inside SXEditor) this edited translation will be returned.
     * Machine translation for currently selected MT provider will be returned
     * otherwise.
     * @return {String}
     */
    sentenceTranslationPreview() {
      return (
        this.selectedSentence?.translatedContent ||
        this.currentEditedTranslation ||
        this.proposedSentenceTranslation
      );
    },
    sentences() {
      return this.currentPageSection?.sentences || [];
    },
    mtProviders() {
      return this.$store.getters["mediawiki/getSupportedMTProviders"](
        this.suggestion.sourceLanguage,
        this.suggestion.targetLanguage
      );
    },
    sourcePage() {
      return this.$store.getters["mediawiki/getPage"](
        this.suggestion.sourceLanguage,
        this.suggestion.sourceTitle
      );
    },
    selectedSentence() {
      return this.sentences.find(sentence => sentence.selected);
    }
  },
  watch: {
    mtProviders() {
      if (!this.selectedProvider) {
        this.selectedProvider = this.defaultMTProvider;
      }
    },
    selectedSentence() {
      this.translateSelectedSentence(this.selectedProvider);
    },
    selectedProvider() {
      if (this.selectedProvider) {
        this.translateSelectedSentence(this.selectedProvider);
      }
    },
    translationOptionsActive() {
      if (this.translationOptionsActive) {
        this.mtProviders.forEach(provider =>
          this.translateSelectedSentence(provider)
        );
      }
    }
  },
  mounted() {
    this.$store.dispatch("mediawiki/fetchMTProviders", {
      sourceLanguage: this.suggestion.sourceLanguage,
      targetLanguage: this.suggestion.targetLanguage
    });
    /**
     * When component is mounted, a sentence should always be selected.
     * Select first sentence from array if no sentence is selected at
     * that point.
     */
    if (!this.selectedSentence && this.sentences?.[0]) {
      this.$store.dispatch("application/selectSentenceForCurrentSection", {
        id: this.sentences[0].id
      });
    }
  },
  methods: {
    bounceTranslation() {
      this.proposedTranslationBounce = true;
      setTimeout(() => {
        this.proposedTranslationBounce = false;
      }, 100);
    },
    async translateSelectedSentence(provider) {
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
      if (this.selectedSentence === sentence) {
        this.bounceTranslation();
      }
    },
    configureTranslationOptions() {
      this.translationOptionsActive = true;
    },
    editTranslation() {
      this.$router.push({
        name: "sx-editor",
        params: {
          content: this.sentenceTranslationPreview,
          language: this.suggestion.targetLanguage,
          originalContent: this.selectedSentence.originalContent
        }
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
