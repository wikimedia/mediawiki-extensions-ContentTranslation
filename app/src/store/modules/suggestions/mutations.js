export default {
  /**
   * @param {object} state
   * @param {ArticleSuggestion} suggestion
   */
  addPageSuggestion(state, suggestion) {
    state.pageSuggestions.push(suggestion);
  },
  addSectionSuggestion(state, suggestion) {
    state.sectionSuggestions.push(suggestion);
  },
  /**
   * @param {Object} state
   * @param {SectionSuggestion} suggestionToRemove
   */
  removeSectionSuggestionFromList(state, suggestionToRemove) {
    suggestionToRemove.isListable = false;
  },
  /**
   * @param {Object} state
   * @param {ArticleSuggestion} suggestionToRemove
   */
  removePageSuggestion(state, suggestionToRemove) {
    state.pageSuggestions = state.pageSuggestions.filter(
      (suggestion) => suggestion.id !== suggestionToRemove.id
    );
  },
  increaseSectionSuggestionsLoadingCount(state) {
    state.sectionSuggestionsLoadingCount++;
  },
  decreaseSectionSuggestionsLoadingCount(state) {
    state.sectionSuggestionsLoadingCount--;
  },
  increasePageSuggestionsLoadingCount(state) {
    state.pageSuggestionsLoadingCount++;
  },
  decreasePageSuggestionsLoadingCount(state) {
    state.pageSuggestionsLoadingCount--;
  },
  addAppendixSectionTitlesForLanguage(state, { language, titles }) {
    state.appendixSectionTitles[language] = titles;
  },
  /**
   * @param {object} state
   * @param {FavoriteSuggestion} favoriteSuggestion
   */
  addFavoriteSuggestion(state, favoriteSuggestion) {
    state.favorites.push(favoriteSuggestion);
  },
  /**
   * @param {object} state
   * @param {FavoriteSuggestion} favoriteSuggestion
   */
  removeFavoriteSuggestion(state, favoriteSuggestion) {
    const { title, sourceLanguage, targetLanguage } = favoriteSuggestion;
    state.favorites = state.favorites.filter(
      (favorite) =>
        favorite.title !== title ||
        favorite.sourceLanguage !== sourceLanguage ||
        favorite.targetLanguage !== targetLanguage
    );
  },
};
