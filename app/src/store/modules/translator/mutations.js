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
  setTranslatorStats: (state, value) => {
    state.translatorStats = value;
  },
};
