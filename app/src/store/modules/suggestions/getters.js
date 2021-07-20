export default {
  /**
   * @return {SuggestionSeedCollection}
   */
  findSectionSuggestionSeedCollection: state => (
    sourceLanguage,
    targetLanguage
  ) =>
    state.sectionSuggestionSeedCollections.find(collection =>
      collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage)
    ),
  /**
   * @return {SuggestionSeedCollection}
   */
  findPageSuggestionSeedCollection: state => (sourceLanguage, targetLanguage) =>
    state.pageSuggestionSeedCollections.find(collection =>
      collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage)
    ),
  getPageSuggestionsForPair: state => (sourceLanguage, targetLanguage) =>
    state.pageSuggestions.filter(
      suggestionItem =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage
    ),
  getSectionSuggestionsForPair: state => (sourceLanguage, targetLanguage) =>
    state.sectionSuggestions.filter(
      suggestionItem =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage
    ),

  /**
   * @param state
   * @return {function(string, string, string): SectionSuggestion}
   */
  getSectionSuggestionsForArticle: state => (
    sourceLanguage,
    targetLanguage,
    sourceTitle
  ) =>
    state.sectionSuggestions.find(
      suggestionItem =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage &&
        suggestionItem.sourceTitle === sourceTitle
    ),
  sectionSuggestionsForArticleExists: state => (
    sourceLanguage,
    targetLanguage,
    sourceTitle
  ) =>
    state.sectionSuggestions.some(
      suggestionItem =>
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
   * @return {function(SectionSuggestion): {String|null}}
   */
  getFirstAppendixTitleBySectionSuggestion: state =>
    /**
     * @param {SectionSuggestion} sectionSuggestion
     * @return {String|null}
     */
    sectionSuggestion => {
      const appendixTitles =
        state.appendixSectionTitles[sectionSuggestion.targetLanguage] || [];

      return (sectionSuggestion.targetSections || []).find(title =>
        appendixTitles.includes(title)
      );
    },
  appendixTitlesExistForLanguage: state => language =>
    (state.appendixSectionTitles?.[language] || []).length > 0,
  /**
   * This getter calculates and returns the number of suggestions to fetch,
   * with maxSuggestionsPerSlice state variable being the maximum. When
   * already fetched suggestions do not produce full slices of maxSuggestionsPerSlice
   * size (i.e. length % maxSuggestionsPerSlice !== 0), fetch remaining suggestions
   * to complete the slice. If suggestions slice is already full, fetch maxSuggestionsPerSlice new.
   * @param {Object} state
   * @param {Object} getters
   * @return {function(sourceLanguage: string, targetLanguage: string): number}
   */
  getNumberOfSectionSuggestionsToFetch: (state, getters) => (
    sourceLanguage,
    targetLanguage
  ) => {
    const existingSuggestionsForLanguagePair = getters.getSectionSuggestionsForPair(
      sourceLanguage,
      targetLanguage
    );

    const pageSize = state.maxSuggestionsPerSlice;

    return pageSize - (existingSuggestionsForLanguagePair.length % pageSize);
  }
};
