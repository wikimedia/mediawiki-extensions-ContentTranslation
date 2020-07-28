import cxTranslatorApi from "../../wiki/cx/api/translator";

const state = {
  username: mw.config.get("wgUserName"),
  translations: [],
  translationsLoaded: false
};

const mutations = {
  addTranslation(state, translation) {
    state.translations.push(translation);
  },
  setTranslationsLoaded: (state, value) => {
    state.translationsLoaded = value;
  }
};

const getters = {
  getPublishedTranslationsForLanguagePair: state => (
    sourceLanguage,
    targetLanguage
  ) => {
    return state.translations.filter(
      translationItem =>
        translationItem.sourceLanguage === sourceLanguage &&
        translationItem.targetLanguage === targetLanguage &&
        translationItem.status === "published"
    );
  },
  getDraftTranslationsForLanguagePair: state => (
    sourceLanguage,
    targetLanguage
  ) => {
    return state.translations.filter(
      translationItem =>
        translationItem.sourceLanguage === sourceLanguage &&
        translationItem.targetLanguage === targetLanguage &&
        translationItem.status === "draft"
    );
  },
  getPublishedTranslations: state => () => {
    return state.translations.filter(
      translationItem => translationItem.status === "published"
    );
  },
  getDraftTranslations: state => () => {
    return state.translations.filter(
      translationItem => translationItem.status === "draft"
    );
  },
  // Function with dummy implementation. Needed to add real functionality later
  hasSectionTranslations: state => () =>
    state.translations.some(translation => translation.hasSectionTranslations)
};

const actions = {
  init({ dispatch }) {
    dispatch("getTanslations");
  },
  getTanslations({ commit, dispatch }) {
    cxTranslatorApi.fetchTranslations().then(translations => {
      const queue = {};
      for (let i = 0; i < translations.length; i++) {
        const translation = translations[i];
        commit("addTranslation", translation);
        queue[translation.sourceLanguage] =
          queue[translation.sourceLanguage] || [];
        queue[translation.sourceLanguage].push(translation.sourceTitle);
      }
      commit("setTranslationsLoaded", true);
      // Fetch metadata for each source article.
      for (let sourceLanguage in queue) {
        dispatch(
          "mediawiki/fetchPageMetadata",
          {
            language: sourceLanguage,
            titles: queue[sourceLanguage]
          },
          { root: true }
        );
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
