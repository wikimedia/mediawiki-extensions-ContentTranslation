export default {
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
  removeSectionSuggestion(state, suggestionToRemove) {
    state.sectionSuggestions = state.sectionSuggestions.filter(
      suggestion => suggestion.id !== suggestionToRemove.id
    );
  },
  /**
   * @param {Object} state
   * @param {ArticleSuggestion} suggestionToRemove
   */
  removePageSuggestion(state, suggestionToRemove) {
    state.pageSuggestions = state.pageSuggestions.filter(
      suggestion => suggestion.id !== suggestionToRemove.id
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
  /**
   * @param state
   * @param {SuggestionSeedCollection} collection
   */
  addSectionSuggestionSeedCollection(state, collection) {
    state.sectionSuggestionSeedCollections.push(collection);
  },
  /**
   * @param state
   * @param {SuggestionSeedCollection} collection
   */
  addPageSuggestionSeedCollection(state, collection) {
    state.pageSuggestionSeedCollections.push(collection);
  },
  /**
   * @param state
   * @param {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}} seed
   */
  addSectionSuggestionSeed(state, seed) {
    const { sourceLanguage, targetLanguage } = seed;
    const seedCollection = state.sectionSuggestionSeedCollections.find(
      collection =>
        collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage)
    );
    seedCollection.seeds.push(seed);
  },
  /**
   * @param state
   * @param {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}} seed
   */
  addPageSuggestionSeed(state, seed) {
    const { sourceLanguage, targetLanguage } = seed;
    const seedCollection = state.pageSuggestionSeedCollections.find(
      collection =>
        collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage)
    );
    seedCollection.seeds.push(seed);
  },
  removeSectionSuggestionSeed(state, seed) {
    const { sourceLanguage, targetLanguage } = seed;
    const seedCollection = state.sectionSuggestionSeedCollections.find(
      collection =>
        collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage)
    );
    seedCollection.seeds = seedCollection.seeds.filter(
      existingSeed => existingSeed.sourceTitle !== seed.sourceTitle
    );
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
      favorite =>
        favorite.title !== title ||
        favorite.sourceLanguage !== sourceLanguage ||
        favorite.targetLanguage !== targetLanguage
    );
  }
};
