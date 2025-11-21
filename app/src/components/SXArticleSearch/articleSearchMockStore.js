import { createStore } from "vuex";

const autonyms = {
  en: "English",
  de: "Deutsch",
  es: "Espanol",
  bn: "Bengali",
};

const applicationModule = {
  namespaced: true,
  mutations: {
    setSourceLanguage: () => {},
    setTargetLanguage: () => {},
    setPreviousRoute: () => {},
  },
};

const mediawikiModule = {
  namespaced: true,
  getters: {
    getLanguage: () => (languageCode) => ({
      autonym: autonyms[languageCode],
      dir: "ltr",
    }),
    getNearbyPages: () => [],
  },
  actions: {
    fetchNearbyPages: jest.fn(),
  },
};

const suggestionsModule = {
  namespaced: true,
  getters: {
    getCollectionPageSuggestions: () => () => [],
    getCollectionSectionSuggestions: () => () => [],
  },
};

export default createStore({
  modules: {
    application: applicationModule,
    mediawiki: mediawikiModule,
    suggestions: suggestionsModule,
    translator: {
      namespaced: true,
      state: { translations: [] },
      mutations: {
        clearTranslationsByStatus: jest.fn(),
      },
    },
  },
});
