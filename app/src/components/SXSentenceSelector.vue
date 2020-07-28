<template>
  <mw-dialog v-if="active" class="sx-sentence-selector">
    <template slot="header">
      <div class="row sx-sentence-selector__header ma-0 py-2 items-center">
        <div class="col shrink">
          <mw-button
            class="px-3"
            type="icon"
            :icon="mwIconArrowPrevious"
            @click="onClose"
          />
        </div>
        <div class="col grow px-1">
          <h4
            v-i18n:cx-sx-sentence-selector-header-title
            class="sx-sentence-selector__header--title"
          />
        </div>
        <div class="col shrink px-3">
          <mw-button
            :label="$i18n('cx-sx-sentence-selector-done-button-label')"
          />
        </div>
      </div>
    </template>
    <section class="sx-sentence-selector__section fill-height column ma-0">
      <div class="sx-sentence-selector__section-header pa-5 col shrink">
        <a
          :href="sourceArticlePath"
          target="_blank"
          class="sx-sentence-selector__section-article-title mb-1"
        >
          <strong> {{ suggestion.sourceTitle }} </strong>
          <mw-icon :icon="mwIconLinkExternal" class="ml-1"></mw-icon>
        </a>
        <h2 class="sx-sentence-selector__section-title pa-0 ma-0">
          {{ sectionSourceTitle }}
        </h2>
      </div>
      <div class="sx-sentence-selector__section-contents px-4 col grow">
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
      </div>
      <section class="sx-sentence-selector__proposed-translation col shrink">
        <div class="sx-sentence-selector__proposed-translation-body pa-5">
          <div
            class="sx-sentence-selector__proposed-translation-header row ma-0 pb-4"
          >
            <h6
              class="sx-sentence-selector__proposed-translation-title col grow pa-0 ma-0 pe-4"
              v-text="mtOptionLabel"
            />
            <div class="col shrink">
              <mw-button
                :icon="mwIconEllipsis"
                type="icon"
                class="sx-sentence-selector__translation-more-options-button pa-0"
                @click="configureTranslationOptions"
              />
            </div>
          </div>
          <div
            class="sx-sentence-selector__proposed-translation-contents pb-4"
            v-html="proposedSentenceTranslation"
          />
          <mw-button
            :icon="mwIconEdit"
            type="text"
            :label="
              $i18n('cx-sx-sentence-selector-edit-translation-button-label')
            "
            class="sx-sentence-selector__translation-edit-button pa-0"
          />
        </div>
        <div class="sx-sentence-selector__translation-action-buttons row ma-0">
          <mw-button
            :icon="mwIconPrevious"
            type="icon"
            class="col shrink pa-4"
          />
          <mw-button
            type="text"
            :label="
              $i18n('cx-sx-sentence-selector-apply-translation-button-label')
            "
            class="sx-sentence-selector__translation-apply-button col grow pa-4"
          />
          <mw-button
            type="text"
            :indicator="mwIconArrowForward"
            :label="
              $i18n('cx-sx-sentence-selector-skip-translation-button-label')
            "
            class="col shrink pa-4"
          />
        </div>
      </section>
    </section>
    <sx-translation-selector
      :active.sync="translationOptionsActive"
      :provider.sync="selectedProvider"
      :sentence="selectedSentence"
      :source-language="suggestion.sourceLanguage"
      :target-language="suggestion.targetLanguage"
    />
  </mw-dialog>
</template>

<script>
import { MwDialog, MwButton, MwIcon } from "../lib/mediawiki.ui";
import {
  mwIconArrowPrevious,
  mwIconLinkExternal,
  mwIconEllipsis,
  mwIconEdit,
  mwIconPrevious,
  mwIconArrowForward,
  mwIconClose
} from "../lib/mediawiki.ui/components/icons";

import SectionSuggestion from "../wiki/cx/models/sectionSuggestion";
import MTProviderGroup from "../wiki/mw/models/mtProviderGroup";
import SxTranslationSelector from "@/components/SXTranslationSelector";
export default {
  name: "SxSentenceSelector",
  components: { SxTranslationSelector, MwButton, MwDialog, MwIcon },
  props: {
    suggestion: {
      type: SectionSuggestion,
      required: true
    },
    sectionSourceTitle: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    mwIconArrowPrevious,
    mwIconLinkExternal,
    mwIconEllipsis,
    mwIconEdit,
    mwIconPrevious,
    mwIconArrowForward,
    mwIconClose,
    selectedProvider: null,
    translation: null,
    translationOptionsActive: false
  }),
  computed: {
    defaultMTProvider() {
      return this.$store.getters["mediawiki/getDefaultMTProvider"](
        this.suggestion.sourceLanguage,
        this.suggestion.targetLanguage
      );
    },
    proposedSentenceTranslation() {
      return this.selectedSentence.proposedTranslations[this.selectedProvider];
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
        this.sectionSourceTitle
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
    },
    mtOptionLabel() {
      if (
        Object.keys(this.extraMTOptionLabels).includes(this.selectedProvider)
      ) {
        return this.extraMTOptionLabels[this.selectedProvider];
      }

      return this.$i18n(
        "cx-sx-sentence-selector-proposed-translation-title",
        this.selectedProvider
      );
    },
    extraMTOptionLabels() {
      return {
        [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: this.$i18n(
            "cx-sx-sentence-selector-translation-options-original-card-title"
        ),
        [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: this.$i18n(
            "cx-sx-sentence-selector-translation-options-empty-card-title"
        )
      };
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
        sectionTitle: this.sectionSourceTitle,
        provider
      });
    },
    onClose() {
      this.$emit("update:active", false);
    },
    selectSentence(sentenceIndex) {
      this.$store.dispatch("mediawiki/selectSentenceForPageSection", {
        sourceLanguage: this.suggestion.sourceLanguage,
        sourceTitle: this.suggestion.sourceTitle,
        sectionTitle: this.sectionSourceTitle,
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
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";
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
        // TODO: User UI typography here instead of hardcoding font-size values in px
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
    // TODO: Fix these with variables(?)
    box-shadow: 0 -@border-width-base 2px rgba(0, 0, 0, 0.25);
    .sx-sentence-selector__proposed-translation-title {
      // TODO: Fix this to be base20 (currently base30)
      color: @color-base--subtle;
    }
    .sx-sentence-selector__translation-more-options-button {
      color: @color-base--subtle;
    }
    .sx-sentence-selector__proposed-translation-contents {
      color: @color-base;
    }
    .sx-sentence-selector__translation-edit-button {
      color: @color-primary;
    }
    .sx-sentence-selector__translation-action-buttons {
      border-top: @border-style-base @border-width-base
        @border-color-base--disabled;
      button {
        // Icon and text buttons have a minimum width of 0. Not sure if there is any reason for that rule or we can remove it.
        min-width: max-content;
        &.sx-sentence-selector__translation-apply-button {
          // TODO: Fix these to be base80. Currently base70.
          border-left: @border-style-base @border-width-base @wmui-color-base80;
          border-right: @border-style-base @border-width-base @wmui-color-base80;
        }
      }
    }
  }
}
</style>
