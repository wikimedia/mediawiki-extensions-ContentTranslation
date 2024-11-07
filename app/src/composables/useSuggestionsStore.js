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
   * @returns {SectionSuggestion[]}
   */
  const getFilteredSectionSuggestions = () => {
    const sectionSuggestionsForPair = store.getters[
      "suggestions/getSectionSuggestionsForPair"
    ](sourceLanguage.value, targetLanguage.value);

    return sectionSuggestionsForPair.filter((suggestion) =>
      suggestion.matchesFilter(currentSuggestionFilters.value)
    );
  };

  /**
   * @param {number} sliceIndex
   * @returns {SectionSuggestion[]}
   */
  const getSectionSuggestionsSliceByIndex = (sliceIndex) => {
    const currentSectionSuggestions = getFilteredSectionSuggestions();

    return currentSectionSuggestions.slice(
      maxSuggestionsPerSlice * sliceIndex,
      maxSuggestionsPerSlice * (sliceIndex + 1)
    );
  };

  /**
   * @returns {ArticleSuggestion[]}
   */
  const getFilteredPageSuggestions = () => {
    const pageSuggestionsForPair = store.getters[
      "suggestions/getPageSuggestionsForPair"
    ](sourceLanguage.value, targetLanguage.value);

    return pageSuggestionsForPair.filter((suggestion) =>
      suggestion.matchesFilter(currentSuggestionFilters.value)
    );
  };

  /**
   * @param {number} sliceIndex
   * @returns {ArticleSuggestion[]}
   */
  const getPageSuggestionsSliceByIndex = (sliceIndex) => {
    const currentPageSuggestions = getFilteredPageSuggestions();

    return currentPageSuggestions.slice(
      maxSuggestionsPerSlice * sliceIndex,
      maxSuggestionsPerSlice * (sliceIndex + 1)
    );
  };

  return {
    getFilteredPageSuggestions,
    getFilteredSectionSuggestions,
    getPageSuggestionsSliceByIndex,
    getSectionSuggestionsSliceByIndex,
  };
};

export default useSuggestionsStore;
