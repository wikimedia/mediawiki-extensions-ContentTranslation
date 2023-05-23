<template>
  <div v-show="active">
    <mw-card class="cx-translation-list--suggestions pa-0 mb-0">
      <template #header>
        <h3
          class="mw-ui-card__title pa-4 pt-5 mb-0"
          v-text="$i18n('cx-suggestionlist-title')"
        />
      </template>
      <sx-translation-list-language-selector
        :source-languages="supportedLanguageCodes"
        :target-languages="availableTargetLanguages"
        :selected-source-language="sourceLanguage"
        :selected-target-language="targetLanguage"
        @update:selected-source-language="updateSourceLanguage"
        @update:selected-target-language="updateTargetLanguage"
      />
    </mw-card>
    <mw-card
      ref="pageSuggestionsList"
      class="cx-translation-list--page-suggestions pa-0 mb-0"
    >
      <h5
        v-i18n:cx-suggestion-list-new-pages-division
        class="cx-translation-list__division-title ma-0 pa-4"
      />
      <cx-translation-suggestion
        v-for="(suggestion, index) in currentPageSuggestionsSlice"
        :key="`page-suggestion-${index}`"
        :suggestion="suggestion"
        @close="discardPageSuggestion(suggestion)"
        @click="startTranslation(suggestion)"
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
        @click="startTranslation(suggestion)"
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
        :icon="mwIconRefresh"
        @click="refreshSuggestions"
      />
    </div>
  </div>
</template>

<script>
import CxTranslationSuggestion from "./CXTranslationSuggestion.vue";
import { MwSpinner, MwCard, MwButton } from "@/lib/mediawiki.ui";
import { mwIconRefresh } from "@/lib/mediawiki.ui/components/icons";
import SxTranslationListLanguageSelector from "./SXTranslationListLanguageSelector.vue";
import useSuggestionListLanguages from "./useSuggestionListLanguages";
import useSuggestions from "./useSuggestions";
import { unmarkFavoriteSectionSuggestion } from "./useFavorites";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
import { useEventLogging } from "@/plugins/eventlogging";
import useApplicationState from "@/composables/useApplicationState";
import { getSuggestionListLanguagePairUpdater } from "@/composables/useLanguageHelper";
import useDraftTranslationStart from "./useDraftTranslationStart";
import PageSection from "@/wiki/cx/models/pageSection";

export default {
  name: "CxSuggestionList",
  components: {
    SxTranslationListLanguageSelector,
    CxTranslationSuggestion,
    MwCard,
    MwButton,
    MwSpinner,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useStore();
    const { sourceLanguage, targetLanguage } = useApplicationState(store);

    const { supportedLanguageCodes, availableTargetLanguages } =
      useSuggestionListLanguages();

    const updateLanguagePair = getSuggestionListLanguagePairUpdater(store);
    const updateSourceLanguage = (newSourceLanguage) =>
      updateLanguagePair(newSourceLanguage, targetLanguage.value);
    const updateTargetLanguage = (newTargetLanguage) =>
      updateLanguagePair(sourceLanguage.value, newTargetLanguage);

    const router = useRouter();
    const startDraftTranslation = useDraftTranslationStart();

    /**
     * @param {SectionSuggestion|ArticleSuggestion} suggestion
     */
    const startTranslation = (suggestion) => {
      const existingLeadTranslation = store.getters[
        "translator/getTranslation"
      ](
        suggestion.sourceTitle,
        PageSection.LEAD_SECTION_DUMMY_TITLE,
        suggestion.sourceLanguage,
        suggestion.targetLanguage
      );

      // if a draft lead translation already exists for the current section suggestion, restore it
      if (!!existingLeadTranslation) {
        startDraftTranslation(existingLeadTranslation);
      } else {
        store.dispatch("application/initializeSectionTranslation", suggestion);
        router.push({
          name: "sx-translation-confirmer",
          query: {
            previousRoute: "dashboard",
            eventSource: "suggestion_no_seed",
          },
        });
      }
    };

    const {
      currentPageSuggestionsSlice,
      currentSectionSuggestionsSlice,
      discardPageSuggestion,
      discardSectionSuggestion,
      onSuggestionRefresh,
      pageSuggestionsLoading,
      sectionSuggestionsLoading,
      showRefreshButton,
    } = useSuggestions();

    const pageSuggestionsList = ref(null);
    const logEvent = useEventLogging();

    const refreshSuggestions = () => {
      logEvent({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: sourceLanguage.value,
        translation_target_language: targetLanguage.value,
      });
      onSuggestionRefresh();
      pageSuggestionsList.value.$el.scrollIntoView({ behavior: "smooth" });
    };

    /**
     * @param {SectionSuggestion} suggestion
     */
    const markFavoriteSectionSuggestion = async (suggestion) =>
      store.dispatch("suggestions/addSectionSuggestionAsFavorite", suggestion);

    /**
     * @param {ArticleSuggestion} suggestion
     */
    const markFavoritePageSuggestion = async (suggestion) =>
      store.dispatch("suggestions/addPageSuggestionAsFavorite", suggestion);

    return {
      availableTargetLanguages,
      currentPageSuggestionsSlice,
      currentSectionSuggestionsSlice,
      discardPageSuggestion,
      discardSectionSuggestion,
      mwIconRefresh,
      markFavoritePageSuggestion,
      markFavoriteSectionSuggestion,
      unmarkFavoriteSectionSuggestion,
      pageSuggestionsLoading,
      pageSuggestionsList,
      refreshSuggestions,
      sectionSuggestionsLoading,
      showRefreshButton,
      startTranslation,
      supportedLanguageCodes,
      updateSourceLanguage,
      updateTargetLanguage,
      sourceLanguage,
      targetLanguage,
    };
  },
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

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
