import { useStore } from "vuex";
import useURLHandler from "@/composables/useURLHandler";

const useSuggestionsStore = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    currentSuggestionFilters,
  } = useURLHandler();

  const { maxSuggestionsPerSlice } = store.state.suggestions;

  /**
   * @param {number} sliceIndex
   * @returns {SectionSuggestion[]}
   */
  const getSectionSuggestionsSliceByIndex = (sliceIndex) => {
    const sectionSuggestionsForPair = store.getters[
      "suggestions/getSectionSuggestionsForPair"
    ](sourceLanguage.value, targetLanguage.value);

    const currentSectionSuggestions = sectionSuggestionsForPair.filter(
      (suggestion) =>
        suggestion.suggestionProvider.type ===
          currentSuggestionFilters.value.type &&
        suggestion.suggestionProvider.id === currentSuggestionFilters.value.id
    );

    return currentSectionSuggestions.slice(
      maxSuggestionsPerSlice * sliceIndex,
      maxSuggestionsPerSlice * (sliceIndex + 1)
    );
  };

  /**
   * @param {number} sliceIndex
   * @returns {ArticleSuggestion[]}
   */
  const getPageSuggestionsSliceByIndex = (sliceIndex) => {
    const pageSuggestionsForPair = store.getters[
      "suggestions/getPageSuggestionsForPair"
    ](sourceLanguage.value, targetLanguage.value);

    const currentPageSuggestions = pageSuggestionsForPair.filter(
      (suggestion) =>
        suggestion.suggestionProvider.type ===
          currentSuggestionFilters.value.type &&
        suggestion.suggestionProvider.id === currentSuggestionFilters.value.id
    );

    return currentPageSuggestions.slice(
      maxSuggestionsPerSlice * sliceIndex,
      maxSuggestionsPerSlice * (sliceIndex + 1)
    );
  };

  return {
    getPageSuggestionsSliceByIndex,
    getSectionSuggestionsSliceByIndex,
  };
};

export default useSuggestionsStore;
