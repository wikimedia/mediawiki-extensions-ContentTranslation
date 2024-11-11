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
  /**
   * This getter returns the first (by order of appearance) appendix section
   * title found inside target article page. Appendix section titles for each
   * language are stored in appendixSectionTitles state variable.
   * Such titles are "References" and similar section titles.
   * If none such section is found, it returns null
   *
   * @param {Object} state
   * @return {function(SectionSuggestion): String|null}
   */
  getFirstAppendixTitleBySectionSuggestion:
    (state) =>
    /**
     * @param {SectionSuggestion} sectionSuggestion
     * @return {String|null}
     */
    (sectionSuggestion) => {
      const appendixTitles =
        state.appendixSectionTitles[sectionSuggestion.targetLanguage] || [];

      return (sectionSuggestion.targetSections || []).find((title) =>
        appendixTitles.includes(title)
      );
    },
  appendixTitlesExistForLanguage: (state) => (language) =>
    (state.appendixSectionTitles?.[language] || []).length > 0,
};
