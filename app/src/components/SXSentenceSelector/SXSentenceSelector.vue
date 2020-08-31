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
      <mw-col shrink class="sx-sentence-selector__section-header pa-5">
        <a
          :href="sourceArticlePath"
          target="_blank"
          class="sx-sentence-selector__section-article-title mb-1"
        >
          <strong v-text="suggestion.sourceTitle" />
          <mw-icon :icon="mwIconLinkExternal" class="ms-1" size="14" />
        </a>
        <h2
          class="sx-sentence-selector__section-title pa-0 ma-0"
          v-text="sourceSectionTitle"
        />
      </mw-col>
      <mw-col grow class="sx-sentence-selector__section-contents px-4">
        <span
          v-for="(sentence, index) in sentences"
          :key="`sentence-${index}`"
          class="sx-sentence-selector__section-sentence"
          :class="{
            'sx-sentence-selector__section-sentence--selected':
              sentence.selected
          }"
          @click="selectSentence(index)"
          v-html="formatSentence(sentence, index)"
        />
      </mw-col>
      <mw-col
        tag="section"
        shrink
        class="sx-sentence-selector__proposed-translation"
      >
        <sx-sentence-selector-proposed-translation-body
          :mt-provider="selectedProvider"
          :translation="proposedSentenceTranslation"
          @configure-options="configureTranslationOptions"
        />
        <sx-sentence-selector-action-buttons />
      </mw-col>
    </mw-row>
    <sx-translation-selector
      :active.sync="translationOptionsActive"
      :provider.sync="selectedProvider"
      :sentence="selectedSentence"
      :source-language="suggestion.sourceLanguage"
      :target-language="suggestion.targetLanguage"
    />
  </section>
</template>

<script>
import { MwButton, MwIcon, MwRow, MwCol } from "@/lib/mediawiki.ui";
import {
  mwIconArrowPrevious,
  mwIconLinkExternal,
  mwIconClose
} from "@/lib/mediawiki.ui/components/icons";

import SxTranslationSelector from "./SXTranslationSelector";
import { mapState } from "vuex";
import SxSentenceSelectorActionButtons from "./SXSentenceSelectorActionButtons";
import SxSentenceSelectorProposedTranslationBody from "./SXSentenceSelectorProposedTranslationBody";
export default {
  name: "SxSentenceSelector",
  components: {
    SxSentenceSelectorProposedTranslationBody,
    SxSentenceSelectorActionButtons,
    MwRow,
    MwCol,
    SxTranslationSelector,
    MwButton,
    MwIcon
  },
  data() {
    return {
      mwIconArrowPrevious,
      mwIconLinkExternal,
      mwIconClose,
      selectedProvider: "",
      translation: null,
      translationOptionsActive: false,
      sourceSectionTitle: this.$route.params.sourceSectionTitle
    };
  },
  computed: {
    ...mapState({
      suggestion: state => state.suggestions.currentSectionSuggestion
    }),
    defaultMTProvider() {
      return this.$store.getters["mediawiki/getDefaultMTProvider"](
        this.suggestion.sourceLanguage,
        this.suggestion.targetLanguage
      );
    },
    proposedSentenceTranslation() {
      return (
        this.selectedSentence.proposedTranslations[this.selectedProvider] || ""
      );
    },
    sentences() {
      return this.currentPageSection.sentences;
    },
    mtProviders() {
      return this.$store.getters["mediawiki/getSupportedMTProviders"](
        this.suggestion.sourceLanguage,
        this.suggestion.targetLanguage
      );
    },
    /**
     * @return PageSection
     */
    currentPageSection() {
      return this.$store.getters["mediawiki/getPageSection"](
        this.suggestion.sourceLanguage,
        this.suggestion.sourceTitle,
        this.sourceSectionTitle
      );
    },
    sectionSourceContent() {
      return this.currentPageSection?.text;
    },
    sourcePage() {
      return this.$store.getters["mediawiki/getPage"](
        this.suggestion.sourceLanguage,
        this.suggestion.sourceTitle
      );
    },
    sourceArticlePath() {
      return `https://${this.suggestion.sourceLanguage}.wikipedia.org/wiki/${this.suggestion.sourceTitle}`;
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
      if (this.selectedSentence) {
        this.translateSelectedSentence(this.selectedProvider);
      }
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
  },
  methods: {
    async translateSelectedSentence(provider) {
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
    selectSentence(sentenceIndex) {
      this.$store.dispatch("mediawiki/selectSentenceForPageSection", {
        sourceLanguage: this.suggestion.sourceLanguage,
        sourceTitle: this.suggestion.sourceTitle,
        sectionTitle: this.sourceSectionTitle,
        sentenceIndex
      });
    },
    formatSentence(sentence, index) {
      return (
        sentence.content + (index === this.sentences.length - 1 ? "" : ".")
      );
    },
    configureTranslationOptions() {
      this.translationOptionsActive = true;
    }
  }
};
</script>

<style lang="less">
@import "../../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-sentence-selector {
  .sx-sentence-selector__header {
    background-color: @background-color-base--disabled;
    box-shadow: 0 @border-width-base @border-color-base--disabled;
    .sx-sentence-selector__header--title {
      color: @color-base;
    }
  }
  .sx-sentence-selector__section {
    .sx-sentence-selector__section-header {
      .sx-sentence-selector__section-article-title {
        // TODO: User UI typography here instead of hardcoding font-size values in px.
        // "Complementary" class cannot be applied here, as it only applies to paragraphs (<p>)
        font-size: 14px;
        // TODO: Fix this to be @base20 color - currently base30
        color: @color-base--subtle;
      }
      .sx-sentence-selector__section-title {
        border-bottom: none;
        font-family: @font-family-heading-main;
      }
    }
    .sx-sentence-selector__section-contents {
      overflow: auto;
      .sx-sentence-selector__section-sentence {
        cursor: pointer;
        // TODO: Fix this to be base20 (currently base30)
        color: @color-base--subtle;
        &.sx-sentence-selector__section-sentence--selected {
          // Should we create a background variable for this color? Documentation refers to this color as Yellow90
          background-color: @wmui-color-yellow90;
          color: @color-base;
        }
        .sx-sentence-selector__section-sentence--translated {
          color: @color-base;
        }
      }
    }
  }
  .sx-sentence-selector__proposed-translation {
    border-radius: 2px 2px 0 0;
    background-color: @background-color-base;
    width: 100%;
    // TODO: Fix these with variables(?)
    box-shadow: 0 -@border-width-base 2px rgba(0, 0, 0, 0.25);
  }
}
</style>
