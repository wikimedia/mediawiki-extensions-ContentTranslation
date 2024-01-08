export default {
  clearTranslationsByStatus(state, status) {
    state.translations = state.translations.filter(
      (translation) => translation.status !== status
    );
  },
  addTranslation(state, translation) {
    state.translations.push(translation);
  },
  removeTranslationBySectionTranslationId(state, idToBeRemoved) {
    state.translations = state.translations.filter(
      (translation) => translation.sectionTranslationId !== idToBeRemoved
    );
  },
  removeCXTranslation(state, idToBeRemoved) {
    state.translations = state.translations.filter(
      (translation) => translation.translationId !== idToBeRemoved
    );
  },
  /**
   * @param state
   * @param {"draft"|"published"} status
   * @param {boolean} value
   */
  setTranslationsLoaded: (state, { status, value }) => {
    state.translationsLoaded[status] = value;
  },
  setTranslatorStats: (state, value) => {
    state.translatorStats = value;
  },
};
