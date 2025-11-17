export default {
  getFavoriteTitlesByLanguagePair:
    (state) => (sourceLanguage, targetLanguage) =>
      state.favorites
        .filter(
          (favorite) =>
            favorite.sourceLanguage === sourceLanguage &&
            favorite.targetLanguage === targetLanguage
        )
        .map((favorite) => favorite.title),
  getPageSuggestionsForPair: (state) => (sourceLanguage, targetLanguage) =>
    state.pageSuggestions.filter(
      (suggestionItem) =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage &&
        suggestionItem.isListable
    ),
  getSectionSuggestionsForPair: (state) => (sourceLanguage, targetLanguage) =>
    state.sectionSuggestions.filter(
      (suggestionItem) =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage &&
        suggestionItem.isListable
    ),
  /**
   * @param state
   * @return {function(string, string, string): SectionSuggestion}
   */
  getSectionSuggestionsForArticle:
    (state) => (sourceLanguage, targetLanguage, sourceTitle) =>
      state.sectionSuggestions.find(
        (suggestionItem) =>
          suggestionItem.sourceLanguage === sourceLanguage &&
          suggestionItem.targetLanguage === targetLanguage &&
          suggestionItem.sourceTitle === sourceTitle
      ),
  appendixTitlesExistForLanguage: (state) => (language) =>
    (state.appendixSectionTitles?.[language] || []).length > 0,
  getNextUnseenPageSuggestionByFilter:
    (state) =>
    /**
     * @param {{ type: string, id: string }} filter
     * @returns {ArticleSuggestion}
     */
    (filter) => {
      const unseenSuggestion =
        state.pageSuggestions.find(
          (suggestion) => suggestion.matchesFilter(filter) && !suggestion.seen
        ) || null;

      if (unseenSuggestion?.id) {
        state.pageSuggestions = state.pageSuggestions.filter(
          (suggestion) => suggestion.id !== unseenSuggestion.id
        );
      }

      return unseenSuggestion;
    },
  getNextUnseenSectionSuggestionByFilter:
    (state) =>
    /**
     * @param {{ type: string, id: string }} filter
     * @returns {SectionSuggestion}
     */
    (filter) => {
      const unseenSuggestion =
        state.sectionSuggestions.find(
          (suggestion) => suggestion.matchesFilter(filter) && !suggestion.seen
        ) || null;

      if (unseenSuggestion?.id) {
        state.sectionSuggestions = state.sectionSuggestions.filter(
          (suggestion) => suggestion.id !== unseenSuggestion.id
        );
      }

      return unseenSuggestion;
    },
};
