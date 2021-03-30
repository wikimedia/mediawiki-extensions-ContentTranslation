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
        @source-language-selected="updateSourceLanguage"
        @target-language-selected="updateTargetLanguage"
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
      <cx-translation-suggestion
        v-for="(suggestion, index) in currentSectionSuggestionsSlice"
        :key="`suggestion-${index}`"
        class="ma-0"
        :suggestion="suggestion"
        @click.native="startSectionTranslation(suggestion)"
      />
      <mw-spinner v-if="sectionSuggestionsLoading" />
    </mw-card>
    <div
      class="cx-suggestion-list__refresh-button-container d-flex justify-center"
    >
      <mw-button
        v-if="showRefreshButton"
        class="ma-0 pa-4"
        type="text"
        :label="$i18n('cx-suggestionlist-refresh')"
        :outlined="false"
        :icon="mwIconRefresh"
        @click="onSuggestionRefresh"
      />
    </div>
  </div>
</template>

<script>
import CxTranslationSuggestion from "./CXTranslationSuggestion";
import { MwSpinner, MwCard, MwButton } from "@/lib/mediawiki.ui";
import { mwIconRefresh } from "@/lib/mediawiki.ui/components/icons";
import { mapState, mapActions, mapGetters } from "vuex";
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
    currentSectionSuggestionsSliceIndex: 0,
    currentPageSuggestionsSliceIndex: 0,
    maxSlices: 4
  }),
  computed: {
    ...mapState({
      supportedLanguageCodes: state =>
        state.mediawiki.supportedLanguageCodes || [],
      selectedSourceLanguage: state => state.application.sourceLanguage,
      selectedTargetLanguage: state => state.application.targetLanguage,
      maxSuggestionsPerSlice: state => state.suggestions.maxSuggestionsPerSlice
    }),
    ...mapGetters({
      pageSuggestionsForPair: "application/getCurrentPageSuggestions",
      sectionSuggestionsForPair: "application/getCurrentSectionSuggestions",
      publishedTranslations: "application/getCurrentPublishedTranslations"
    }),
    showRefreshButton: vm =>
      vm.$incompleteVersion
        ? !vm.sectionSuggestionsLoading
        : !vm.pageSuggestionsLoaded,
    sectionSuggestionsLoading: vm =>
      vm.$store.state.suggestions.sectionSuggestionsLoadingCount > 0,
    availableSourceLanguages() {
      return this.supportedLanguageCodes
        .filter(languageCode => languageCode !== this.selectedTargetLanguage)
        .map(languageCode => ({
          name: this.getAutonym(languageCode),
          code: languageCode
        }));
    },
    availableTargetLanguages() {
      // If SectionTranslationTargetLanguage configuration parameter is set,
      // target language selection is disabled (only available target
      // language is the one set in SectionTranslationTargetLanguage).
      const mwTargetLanguage = mw.config.get(
        "wgSectionTranslationTargetLanguage"
      );
      const supportedCodes = mwTargetLanguage
        ? [mwTargetLanguage]
        : this.supportedLanguageCodes;
      return supportedCodes
        .filter(languageCode => languageCode !== this.selectedSourceLanguage)
        .map(languageCode => ({
          name: this.getAutonym(languageCode),
          code: languageCode
        }));
    },
    /** @return {ArticleSuggestion[]} */
    pageSuggestionsForPairSubset() {
      return this.pageSuggestionsForPair.slice(
        this.currentPageSuggestionsSliceIndex * this.maxSuggestionsPerSlice,
        this.currentPageSuggestionsSliceIndex *
          (this.maxSuggestionsPerSlice + 1)
      );
    },
    /** @return {SectionSuggestion[]} */
    currentSectionSuggestionsSlice: vm =>
      vm.getSectionSuggestionsSlice(vm.currentSectionSuggestionsSliceIndex),
    seedArticleTitle() {
      if (
        this.currentPageSuggestionsSliceIndex <
        this.publishedTranslations.length
      ) {
        // Use one of the published translation's source title as seed title.
        // The recommendation api will give articles similar to this title
        // from source language to translate to target language.
        return this.publishedTranslations[this.currentPageSuggestionsSliceIndex]
          .sourceTitle;
      }
      return null;
    }
  },
  watch: {
    pageSuggestionsForPair: function() {
      if (this.$incompleteVersion) {
        return;
      }

      this.pageSuggestionsLoaded = true;
    },
    selectedSourceLanguage() {
      if (this.$incompleteVersion) {
        return;
      }
      this.fetchPageSuggestions({
        sourceLanguage: this.selectedSourceLanguage,
        targetLanguage: this.selectedTargetLanguage
      });
      this.pageSuggestionsLoaded = false;
    },
    selectedTargetLanguage() {
      if (this.$incompleteVersion) {
        return;
      }
      this.fetchPageSuggestions({
        sourceLanguage: this.selectedSourceLanguage,
        targetLanguage: this.selectedTargetLanguage
      });
      this.pageSuggestionsLoaded = false;
    }
  },
  methods: {
    ...mapActions({
      fetchPageSuggestions: "suggestions/fetchPageSuggestions",
      startSectionTranslation: "application/startSectionTranslation"
    }),
    onSuggestionRefresh() {
      this.$incompleteVersion
        ? this.showMoreSectionSuggestions()
        : this.showMoreSuggestions();
    },
    // Much like showMoreSuggestions method below, this method refreshes
    // section suggestions slice. Basically that can be split in these scenarios:
    // 1. Section suggestion slice is not full (less than 5 suggestions are displayed to the user
    //    In this case, refreshing suggestions will add enough suggestions to fill this suggestion slice
    // 2. Section suggestion slice is full. In this case another whole section suggestion slice will be
    //    fetched (5 more suggestions)
    // 3. Section suggestion slice is full and total number of suggestion slices is 4 (20 section suggestions
    //    have been fetched). In this case, no new suggestions are being fetched, instead first section
    //    suggestions slice is being shown. If user keeps refreshing, suggestion slice will continue to be updated
    //    but no new suggestions will be fetched, only already fetched suggestions will be displayed.
    async showMoreSectionSuggestions() {
      const currentSectionSuggestions = this.getSectionSuggestionsSlice(
        this.currentSectionSuggestionsSliceIndex
      );
      const isCurrentPageFull = !(
        currentSectionSuggestions.length % this.maxSuggestionsPerSlice
      );

      const nextIndex =
        (this.currentSectionSuggestionsSliceIndex + 1) % this.maxSlices;

      // If next page has not been fetched yet, fetch it now
      if (
        !isCurrentPageFull ||
        !this.getSectionSuggestionsSlice(nextIndex).length
      ) {
        await this.$store.dispatch(
          "suggestions/fetchNextSectionSuggestionsPage"
        );
      }
      isCurrentPageFull &&
        (this.currentSectionSuggestionsSliceIndex = nextIndex);
    },
    /**
     * @param {Number} sliceIndex
     * @return {SectionSuggestion[]}
     */
    getSectionSuggestionsSlice(sliceIndex) {
      const sliceStart = sliceIndex * this.maxSuggestionsPerSlice;
      return this.sectionSuggestionsForPair.slice(
        sliceStart,
        sliceStart + this.maxSuggestionsPerSlice
      );
    },
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
        this.currentPageSuggestionsSliceIndex * this.maxSuggestionsPerSlice +
          this.maxSuggestionsPerSlice >=
        this.pageSuggestionsForPair.length
      ) {
        // Start over
        this.currentPageSuggestionsSliceIndex = 0;
      } else {
        this.currentPageSuggestionsSliceIndex++;
        // There is a seed article, So fetch suggestions based on that.
        // But it will be appended to the list of suggestions.
        // So, refreshing does not mean fetching suggestions from next
        // seed article. These suggesions will appear after the previous
        // suggestions are shown.
        if (this.seedArticleTitle) {
          this.fetchPageSuggestions({
            sourceLanguage: this.selectedSourceLanguage,
            targetLanguage: this.selectedTargetLanguage,
            seed: this.seedArticleTitle
          });
        }
      }
    },
    updateSourceLanguage(sourceLanguage) {
      this.$store.dispatch("application/updateSourceLanguage", sourceLanguage);
    },
    updateTargetLanguage(targetLanguage) {
      this.$store.dispatch("application/updateTargetLanguage", targetLanguage);
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
