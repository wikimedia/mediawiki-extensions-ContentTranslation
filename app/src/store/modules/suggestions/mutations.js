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
  increaseSectionSuggestionsLoadingCount(state) {
    state.sectionSuggestionsLoadingCount++;
  },
  decreaseSectionSuggestionsLoadingCount(state) {
    state.sectionSuggestionsLoadingCount--;
  },
  /**
   * @param state
   * @param {SectionSuggestionSeedCollection} collection
   */
  addSectionSuggestionSeedCollection(state, collection) {
    state.sectionSuggestionSeedCollections.push(collection);
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
  }
};
