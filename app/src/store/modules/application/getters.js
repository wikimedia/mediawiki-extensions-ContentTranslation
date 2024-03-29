export default {
  /**
   * @return {ArticleSuggestion[]}
   */
  getCurrentPageSuggestions: (state, getters, rootState, rootGetters) =>
    rootGetters["suggestions/getPageSuggestionsForPair"](
      state.sourceLanguage,
      state.targetLanguage
    ),

  /**
   * @return {SectionSuggestion[]}
   */
  getCurrentSectionSuggestions: (state, getters, rootState, rootGetters) =>
    rootGetters["suggestions/getSectionSuggestionsForPair"](
      state.sourceLanguage,
      state.targetLanguage
    ),

  /**
   * @param state
   * @param getters
   * @param rootState
   * @return {function(number): SectionSuggestion[]}
   */
  getSectionSuggestionsSliceByIndex:
    (state, getters, rootState) => (sliceIndex) =>
      getters.getCurrentSectionSuggestions.slice(
        rootState.suggestions.maxSuggestionsPerSlice * sliceIndex,
        rootState.suggestions.maxSuggestionsPerSlice * (sliceIndex + 1)
      ),

  /**
   * @param state
   * @param getters
   * @param rootState
   * @return {function(number): ArticleSuggestion[]}
   */
  getPageSuggestionsSliceByIndex: (state, getters, rootState) => (sliceIndex) =>
    getters.getCurrentPageSuggestions.slice(
      rootState.suggestions.maxSuggestionsPerSlice * sliceIndex,
      rootState.suggestions.maxSuggestionsPerSlice * (sliceIndex + 1)
    ),

  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (state) => state.publishTarget === "SANDBOX_SECTION",
};
