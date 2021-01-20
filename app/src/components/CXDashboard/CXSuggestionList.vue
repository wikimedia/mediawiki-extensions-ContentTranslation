<template>
  <div v-show="active">
    <mw-card class="cx-translation-list--suggestions pa-0 mb-0">
      <template slot="header">
        <h3
          class="mw-ui-card__title pa-4 pt-5 mb-0"
          v-text="$i18n('cx-suggestionlist-title')"
        />
      </template>
      <sx-translation-list-language-selector
        :source-languages="availableSourceLanguages"
        :target-languages="availableTargetLanguages"
      />
    </mw-card>
    <mw-card v-if="!$incompleteVersion" class="pa-0 mb-0">
      <div class="cx-translation-list__division">
        <h5 v-i18n:cx-suggestion-list-new-pages-division class="ma-0 pa-4" />
      </div>
      <mw-spinner v-if="!pageSuggestionsLoaded" />
      <cx-translation-suggestion
        v-for="(suggestion, index) in pageSuggestionsForPairSubset"
        :key="`suggestion-${index}`"
        :suggestion="suggestion"
      />
    </mw-card>
    <mw-card class="cx-translation-list--sx-suggestions pa-0 mb-0">
      <div class="cx-translation-list__division">
        <h5 v-i18n:cx-suggestionlist-expand-sections-title class="ma-0 pa-4" />
      </div>
      <mw-spinner v-if="!sectionSuggestionsLoaded" />
      <cx-translation-suggestion
        v-for="(suggestion, index) in sectionSuggestionForPair"
        :key="`suggestion-${index}`"
        class="ma-0"
        :suggestion="suggestion"
        @click="startSectionTranslation(suggestion)"
      />
    </mw-card>
    <div
      class="cx-suggestion-list__refresh-button-container d-flex justify-center"
    >
      <mw-button
        v-if="pageSuggestionsLoaded"
        class="ma-0 pa-4"
        type="text"
        :label="$i18n('cx-suggestionlist-refresh')"
        :outlined="false"
        :icon="mwIconRefresh"
        @click="showMoreSuggestions"
      />
    </div>
  </div>
</template>

<script>
import CxTranslationSuggestion from "./CXTranslationSuggestion";
import { MwSpinner, MwCard, MwButton } from "@/lib/mediawiki.ui";
import { mwIconRefresh } from "@/lib/mediawiki.ui/components/icons";
import { mapState, mapActions } from "vuex";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import SxTranslationListLanguageSelector from "./SXTranslationListLanguageSelector";
import autonymMixin from "@/mixins/autonym";

export default {
  name: "CxSuggestionList",
  components: {
    SxTranslationListLanguageSelector,
    CxTranslationSuggestion,
    MwCard,
    MwButton,
    MwSpinner
  },
  mixins: [autonymMixin],
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    mwIconRefresh,
    pageSuggestionsLoaded: false,
    sectionSuggestionsLoaded: false,
    paginationIndex: 0,
    pageSize: 3
  }),
  computed: {
    ...mapState({
      supportedLanguageCodes: state =>
        state.mediawiki.supportedLanguageCodes || [],
      selectedSourceLanguage: state => state.application.sourceLanguage,
      selectedTargetLanguage: state => state.application.targetLanguage
    }),
    availableSourceLanguages() {
      return this.supportedLanguageCodes
        .filter(languageCode => languageCode !== this.selectedTargetLanguage)
        .reduce(
          (languages, languageCode) => [
            ...languages,
            { name: this.getAutonym(languageCode), code: languageCode }
          ],
          []
        );
    },
    availableTargetLanguages() {
      return this.supportedLanguageCodes
        .filter(languageCode => languageCode !== this.selectedSourceLanguage)
        .reduce(
          (languages, languageCode) => [
            ...languages,
            { name: this.getAutonym(languageCode), code: languageCode }
          ],
          []
        );
    },
    pageSuggestionsForPair() {
      return this.$store.getters["suggestions/getPageSuggestionsForPair"](
        this.selectedSourceLanguage,
        this.selectedTargetLanguage
      );
    },
    sectionSuggestionForPair() {
      return this.$store.getters["suggestions/getSectionSuggestionsForPair"](
        this.selectedSourceLanguage,
        this.selectedTargetLanguage
      );
    },
    pageSuggestionsForPairSubset() {
      return this.pageSuggestionsForPair.slice(
        this.paginationIndex * this.pageSize,
        this.paginationIndex * this.pageSize + this.pageSize
      );
    },
    publishedTranslations() {
      return this.$store.getters[
        "translator/getPublishedTranslationsForLanguagePair"
      ](this.selectedSourceLanguage, this.selectedTargetLanguage);
    },
    seedArticleTitle() {
      if (this.paginationIndex < this.publishedTranslations.length) {
        // Use one of the published translation's source title as seed title.
        // The recommendation api will give articles similar to this title
        // from source language to translate to target language.
        return this.publishedTranslations[this.paginationIndex].sourceTitle;
      }
      return null;
    }
  },
  watch: {
    pageSuggestionsForPair: function() {
      this.pageSuggestionsLoaded = true;
    },
    sectionSuggestionForPair: function() {
      this.sectionSuggestionsLoaded = true;
    },
    active: {
      handler() {
        if (this.active) {
          if (!this.pageSuggestionsForPair?.length) {
            this.getPageSuggestions({
              sourceLanguage: this.selectedSourceLanguage,
              targetLanguage: this.selectedTargetLanguage,
              seed: this.seedArticleTitle
            });
          }
          if (!this.sectionSuggestionForPair?.length) {
            this.getSectionSuggestions({
              sourceLanguage: this.selectedSourceLanguage,
              targetLanguage: this.selectedTargetLanguage
            });
          }
        }
      },
      immediate: true
    },
    selectedSourceLanguage() {
      this.getPageSuggestions({
        sourceLanguage: this.selectedSourceLanguage,
        targetLanguage: this.selectedTargetLanguage
      });
      this.pageSuggestionsLoaded = false;
    },
    selectedTargetLanguage() {
      this.getPageSuggestions({
        sourceLanguage: this.selectedSourceLanguage,
        targetLanguage: this.selectedTargetLanguage
      });
      this.pageSuggestionsLoaded = false;
    }
  },
  async mounted() {
    const suggestion = await this.$store.dispatch(
      "application/loadSectionSuggestionFromUrl"
    );

    suggestion && this.startSectionTranslation(suggestion);
  },
  methods: {
    ...mapActions({
      getPageSuggestions: "suggestions/getPageSuggestions",
      getSectionSuggestions: "suggestions/getSectionSuggestions"
    }),
    showMoreSuggestions() {
      // 1. Get X(=24) suggestions using the sourceTitle of the I(=0)th most
      //    recent published translation
      // 2. Keep showing those suggestions 3 at a time
      // 3. Once we run out of suggestions, load X more suggestions
      //    using the sourceTitle of the I++th most recent published translation.
      //    This will append to what pageSuggestionsForPair (and pageSuggestionsForPairSubset) returns.
      // 4. Repeat until we have gone over all published translations
      // 5. Since no seed is available, once all suggestions are shown,
      //    go to first set of suggestions based on first seed we used.
      if (
        this.paginationIndex * this.pageSize + this.pageSize >=
        this.pageSuggestionsForPair.length
      ) {
        // Start over
        this.paginationIndex = 0;
      } else {
        this.paginationIndex++;
        // There is a seed article, So fetch suggestions based on that.
        // But it will be appended to the list of suggestions.
        // So, refreshing does not mean fetching suggestions from next
        // seed article. These suggesions will appear after the previous
        // suggestions are shown.
        if (this.seedArticleTitle) {
          this.$store.dispatch("suggestions/getPageSuggestions", {
            sourceLanguage: this.selectedSourceLanguage,
            targetLanguage: this.selectedTargetLanguage,
            seed: this.seedArticleTitle
          });
        }
      }
    },
    /**
     * @param {SectionSuggestion} suggestion
     */
    startSectionTranslation(suggestion) {
      this.$router.push({ name: "sx-article-selector" });
      this.$store.commit("application/setCurrentSectionSuggestion", suggestion);
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.cx-translation-list--suggestions {
  .mw-ui-card__title {
    height: auto;
  }
}
.cx-translation-list__division {
  background: @background-color-framed;
  // Fix this to be base20 (currently base30)
  h6 {
    color: @color-base--subtle;
  }
}
.cx-suggestion-list__refresh-button-container {
  background: @background-color-base;
  border-top: @border-width-base @border-style-base
    @background-color-notice--framed;
}
</style>
