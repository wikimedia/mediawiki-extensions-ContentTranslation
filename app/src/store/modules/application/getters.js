export default {
  /**
   * @return {function(number): SectionSuggestion[]}
   */
  getSectionSuggestionsSliceByIndex:
    (state, getters, rootState, rootGetters) => (sliceIndex) => {
      const sectionSuggestionsForPair = rootGetters[
        "suggestions/getSectionSuggestionsForPair"
      ](state.sourceLanguage, state.targetLanguage);

      const currentSectionSuggestions = sectionSuggestionsForPair.filter(
        (suggestion) =>
          suggestion.suggestionProvider.type ===
            state.currentSuggestionFilters.type &&
          suggestion.suggestionProvider.id === state.currentSuggestionFilters.id
      );

      return currentSectionSuggestions.slice(
        rootState.suggestions.maxSuggestionsPerSlice * sliceIndex,
        rootState.suggestions.maxSuggestionsPerSlice * (sliceIndex + 1)
      );
    },

  /**
   * @return {function(number): ArticleSuggestion[]}
   */
  getPageSuggestionsSliceByIndex:
    (state, getters, rootState, rootGetters) => (sliceIndex) => {
      const pageSuggestionsForPair = rootGetters[
        "suggestions/getPageSuggestionsForPair"
      ](state.sourceLanguage, state.targetLanguage);

      const currentPageSuggestions = pageSuggestionsForPair.filter(
        (suggestion) =>
          suggestion.suggestionProvider.type ===
            state.currentSuggestionFilters.type &&
          suggestion.suggestionProvider.id === state.currentSuggestionFilters.id
      );

      return currentPageSuggestions.slice(
        rootState.suggestions.maxSuggestionsPerSlice * sliceIndex,
        rootState.suggestions.maxSuggestionsPerSlice * (sliceIndex + 1)
      );
    },
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (state) => state.publishTarget === "SANDBOX_SECTION",
};
