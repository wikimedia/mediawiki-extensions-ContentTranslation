export default {
  addTranslation(state, translation) {
    state.translations.push(translation);
  },
  setTranslationsLoaded: (state, value) => {
    state.translationsLoaded = value;
  }
};
