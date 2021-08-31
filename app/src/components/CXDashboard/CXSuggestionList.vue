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
        :source-languages="supportedLanguageCodes"
        :target-languages="availableTargetLanguages"
        @source-language-selected="updateSourceLanguage"
        @target-language-selected="updateTargetLanguage"
      />
    </mw-card>
    <mw-card v-if="!!favorites.length" class="pa-0 mb-0">
      <h5
        v-i18n:cx-suggestion-list-favorites-division
        class="cx-translation-list__division-title ma-0 pa-4"
      />
      <cx-translation-suggestion
        v-for="(suggestion, index) in favorites"
        :key="`favorite-${index}`"
        :suggestion="suggestion"
        @click.native="startFavoriteTranslation(suggestion)"
        @bookmark="unmarkFavoriteSectionSuggestion(suggestion)"
      />
    </mw-card>
    <mw-card class="pa-0 mb-0">
      <h5
        v-i18n:cx-suggestion-list-new-pages-division
        class="cx-translation-list__division-title ma-0 pa-4"
      />
      <cx-translation-suggestion
        v-for="(suggestion, index) in currentPageSuggestionsSlice"
        :key="`page-suggestion-${index}`"
        :suggestion="suggestion"
        @close="discardPageSuggestion(suggestion)"
        @click.native="startPageTranslation(suggestion)"
        @bookmark="markFavoritePageSuggestion(suggestion)"
      />
      <mw-spinner v-if="pageSuggestionsLoading" />
    </mw-card>
    <mw-card class="cx-translation-list--sx-suggestions pa-0 mb-0">
      <h5
        v-i18n:cx-suggestionlist-expand-sections-title
        class="cx-translation-list__division-title ma-0 pa-4"
      />
      <cx-translation-suggestion
        v-for="(suggestion, index) in currentSectionSuggestionsSlice"
        :key="`section-suggestion-${index}`"
        class="ma-0"
        :suggestion="suggestion"
        @close="discardSectionSuggestion(suggestion)"
        @click.native="startSectionTranslation(suggestion)"
        @bookmark="markFavoriteSectionSuggestion(suggestion)"
      />
      <mw-spinner v-if="sectionSuggestionsLoading" />
    </mw-card>
    <div class="cx-suggestion-list__refresh-button-container justify-center">
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
import SxTranslationListLanguageSelector from "./SXTranslationListLanguageSelector";
import useSuggestionListLanguages from "./useSuggestionListLanguages";
import useSuggestions from "./useSuggestions";
import { computed } from "@vue/composition-api";

export default {
  name: "CxSuggestionList",
  components: {
    SxTranslationListLanguageSelector,
    CxTranslationSuggestion,
    MwCard,
    MwButton,
    MwSpinner
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const contextRoot = context.root;
    const store = contextRoot.$store;

    const favorites = computed(() => store.state.suggestions.favorites || []);

    const {
      supportedLanguageCodes,
      availableTargetLanguages
    } = useSuggestionListLanguages();

    const updateSourceLanguage = sourceLanguage =>
      store.dispatch("application/updateSourceLanguage", sourceLanguage);

    const updateTargetLanguage = targetLanguage =>
      store.dispatch("application/updateTargetLanguage", targetLanguage);

    const router = context.root.$router;

    /**
     * @param {SectionSuggestion} suggestion
     */
    const startSectionTranslation = suggestion => {
      store.dispatch("application/initializeSectionTranslation", suggestion);
      router.push({ name: "sx-translation-confirmer" });
      contextRoot.$logEvent({
        event_type: "dashboard_translation_start",
        event_source: "suggestion_no_seed"
      });
    };

    const startPageTranslation = suggestion => {
      store.dispatch("application/initializeSectionTranslation", suggestion);
      router.push({ name: "sx-translation-confirmer" });
    };

    const {
      currentPageSuggestionsSlice,
      currentSectionSuggestionsSlice,
      discardPageSuggestion,
      discardSectionSuggestion,
      onSuggestionRefresh,
      pageSuggestionsLoading,
      sectionSuggestionsLoading,
      showRefreshButton
    } = useSuggestions(contextRoot);

    /**
     * @param {SectionSuggestion} suggestion
     */
    const markFavoriteSectionSuggestion = async suggestion =>
      store.dispatch("suggestions/addSectionSuggestionAsFavorite", suggestion);

    /**
     * @param {ArticleSuggestion} suggestion
     */
    const markFavoritePageSuggestion = async suggestion =>
      store.dispatch("suggestions/addPageSuggestionAsFavorite", suggestion);

    /**
     * @param {FavoriteSuggestion} suggestion
     */
    const unmarkFavoriteSectionSuggestion = async suggestion =>
      store.dispatch("suggestions/removeFavoriteSuggestion", suggestion);

    const startFavoriteTranslation = suggestion => {
      store.dispatch("application/startFavoriteSectionTranslation", suggestion);
      router.push({ name: "sx-translation-confirmer" });
    };

    return {
      availableTargetLanguages,
      currentPageSuggestionsSlice,
      currentSectionSuggestionsSlice,
      discardPageSuggestion,
      discardSectionSuggestion,
      favorites,
      mwIconRefresh,
      markFavoritePageSuggestion,
      markFavoriteSectionSuggestion,
      unmarkFavoriteSectionSuggestion,
      onSuggestionRefresh,
      pageSuggestionsLoading,
      sectionSuggestionsLoading,
      showRefreshButton,
      startFavoriteTranslation,
      startSectionTranslation,
      startPageTranslation,
      supportedLanguageCodes,
      updateSourceLanguage,
      updateTargetLanguage
    };
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
.cx-translation-list__division-title {
  background: @background-color-framed;
  color: @color-accessory;
}
.cx-suggestion-list__refresh-button-container {
  background: @background-color-base;
  border-top: @border-width-base @border-style-base
    @background-color-notice--framed;
}
</style>
