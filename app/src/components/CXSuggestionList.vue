<template>
  <div v-show="active">
    <mw-card
      class="cx-translation-list--suggestions pa-0"
      :title="$i18n('cx-suggestionlist-title')"
    >
      <mw-spinner v-if="!pageSuggestionsLoaded" />
      <cx-translation-suggestion
        v-for="(suggestion, index) in pageSuggestionsForPairSubset"
        :key="`suggestion-${index}`"
        :suggestion="suggestion"
        :from="sourceLanguage"
        :to="targetLanguage"
        class="ma-0"
      />
    </mw-card>
    <mw-card
      class="cx-translation-list--sx-suggestions pa-0"
      :title="$i18n('cx-suggestionlist-expand-sections-title')"
      v-if="sectionSuggestionForPair.length"
    >
      <mw-spinner v-if="!sectionSuggestionsLoaded" />
      <cx-translation-suggestion
        v-for="(suggestion, index) in sectionSuggestionForPair"
        :key="`suggestion-${index}`"
        :suggestion="suggestion"
        :from="suggestion.sourceLanguage"
        :to="suggestion.targetLanguage"
        class="ma-0"
        @click="startSectionTranslation(suggestion)"
      />
    </mw-card>
    <mw-button
      v-if="pageSuggestionsLoaded"
      :block="true"
      :label="$i18n('cx-suggestionlist-refresh')"
      :outlined="false"
      :icon="mwIconRefresh"
      @click="showMoreSuggestions"
    />
    <sx-article-selector
      v-if="currentSectionSuggestion"
      :active="showSxArticleSelector"
      @close="onSectionTranslationDialogClose"
    />
  </div>
</template>

<script>
import MwCard from "../lib/mediawiki.ui/components/MWCard";
import CxTranslationSuggestion from "./CXTranslationSuggestion";
import SxArticleSelector from "./SXArticleSelector";
import MwSpinner from "../lib/mediawiki.ui/components/MWSpinner";
import MwButton from "../lib/mediawiki.ui/components/MWButton";
import { mwIconRefresh } from "../lib/mediawiki.ui/components/icons";
import { mapState } from "vuex";
import SectionSuggestion from "../wiki/cx/models/sectionSuggestion";

export default {
  name: "cx-suggestion-list",
  components: {
    CxTranslationSuggestion,
    SxArticleSelector,
    MwCard,
    MwButton,
    MwSpinner
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    sourceLanguage: {
      type: String,
      default: "en"
    },
    targetLanguage: {
      type: String
    }
  },
  data: () => ({
    mwIconRefresh,
    pageSuggestionsLoaded: false,
    sectionSuggestionsLoaded: true,
    showSxArticleSelector: false,
    paginationIndex: 0,
    pageSize: 3
  }),
  computed: {
    ...mapState({
      currentSectionSuggestion: state =>
        state.suggestions.currentSectionSuggestion
    }),
    pageSuggestionsForPair() {
      return this.$store.getters["suggestions/getPageSuggestionsForPair"](
        this.sourceLanguage,
        this.targetLanguage
      );
    },
    sectionSuggestionForPair() {
      return this.$store.getters["suggestions/getSectionSuggestionsForPair"](
        this.sourceLanguage,
        this.targetLanguage
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
      ](this.sourceLanguage, this.targetLanguage);
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
    active: function() {
      if (this.active) {
        if (!this.pageSuggestionsForPair?.length) {
          this.$store.dispatch("suggestions/getPageSuggestions", {
            sourceLanguage: this.sourceLanguage,
            targetLanguage: this.targetLanguage,
            seed: this.seedArticleTitle
          });
        }
        if (!this.sectionSuggestionForPair?.length) {
          this.$store.dispatch("suggestions/getSectionSuggestions", {
            sourceLanguage: this.sourceLanguage,
            targetLanguage: this.targetLanguage
          });
        }
      }
    }
  },
  methods: {
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
            sourceLanguage: this.sourceLanguage,
            targetLanguage: this.targetLanguage,
            seed: this.seedArticleTitle
          });
        }
      }
    },
    /**
     * @param {SectionSuggestion} suggestion
     */
    startSectionTranslation(suggestion) {
      this.showSxArticleSelector = true;
      this.$store.commit("suggestions/setCurrentSectionSuggestion", suggestion);
    },
    onSectionTranslationDialogClose() {
      this.showSxArticleSelector = false;
    }
  },
  mounted: function() {
    const urlParams = new URLSearchParams(location.search);
    const isSectionTranslation = urlParams.get("sx");
    const sourceLanguage = urlParams.get("from");
    const targetLanguage = urlParams.get("to");
    const sourceTitle = urlParams.get("page");
    if (isSectionTranslation && sourceTitle) {
      const suggestion = new SectionSuggestion({
        sourceLanguage,
        targetLanguage,
        sourceTitle,
        missing: {}
      });
      this.startSectionTranslation(suggestion);
      this.$store.dispatch("suggestions/loadSectionSuggestion", suggestion);
    }
  }
};
</script>
