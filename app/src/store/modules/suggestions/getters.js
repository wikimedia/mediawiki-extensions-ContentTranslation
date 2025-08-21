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
};
