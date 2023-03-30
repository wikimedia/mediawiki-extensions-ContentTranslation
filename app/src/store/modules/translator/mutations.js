export default {
  addTranslation(state, translation) {
    state.translations.push(translation);
  },
  removeTranslationById(state, translationIdToBeRemoved) {
    state.translations = state.translations.filter(
      (translation) => translation.id !== translationIdToBeRemoved
    );
  },
  setTranslationsLoaded: (state, value) => {
    state.translationsLoaded = value;
  },
  setTranslatorStats: (state, value) => {
    state.translatorStats = value;
  },
};
