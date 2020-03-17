import cxTranslatorApi from "../../wiki/cx/translator";

const state = {
  username: mw.config.get("wgUserName"),
  publishedTranslations: [],
  draftTranslations: [],
  savedForLaterTranslations: []
};

const mutations = {
  setPublishedTranslations(state, publishedTranslations) {
    state.publishedTranslations = publishedTranslations;
  },
  setDraftTranslations(state, draftTranslations) {
    state.draftTranslations = draftTranslations;
  }
};

// Computed properties for stores.
const getters = {};

const actions = {
  init({ dispatch }) {
    dispatch("publishedTranslations");
    dispatch("draftTranslations");
  },
  publishedTranslations({ commit, dispatch }) {
    cxTranslatorApi.fetchPublishedTranslations().then(publishedTranslations => {
      commit("setPublishedTranslations", publishedTranslations);
      for (let i = 0; i < publishedTranslations.length; i++) {
        dispatch(
          "wikipedia/fetchMetadata",
          {
            language: publishedTranslations[i].translation.sourceLanguage,
            titles: [publishedTranslations[i].translation.sourceTitle]
          },
          { root: true }
        );
      }
    });
  },
  draftTranslations({ commit, dispatch }) {
    cxTranslatorApi.fetchDraftTranslations().then(draftTranslations => {
      commit("setDraftTranslations", draftTranslations);
      for (let i = 0; i < draftTranslations.length; i++) {
        dispatch(
          "wikipedia/fetchMetadata",
          {
            language: draftTranslations[i].translation.sourceLanguage,
            titles: [draftTranslations[i].translation.sourceTitle]
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
