import articleApi from "../../wiki/mw/api/article";
import siteApi from "../../wiki/mw/api/site";

const state = {
  articles: {},
  languageInfo: {}
};

const mutations = {
  addArticleMetadata(state, metadata) {
    const key = `${metadata.pagelanguage}/${metadata.title}`;
    // This particular way of changing the object is to get the vue reactivity correct.
    state.articles = { ...state.articles, [key]: metadata };
  },
  setLanguageInfo(state, languageInfo) {
    state.languageInfo = languageInfo;
  }
};

// Computed properties for stores.
const getters = {
  getMetadata: state => (language, title) => {
    const key = `${language}/${title}`;
    return state.articles[key];
  }
};

const actions = {
  fetchMetadata({ commit }, request) {
    articleApi
      .fetchMetadata(request.language, request.titles)
      .then(metadataList => {
        for (let i = 0; i < metadataList.length; i++) {
          commit("addArticleMetadata", metadataList[i]);
        }
      });
  },
  fetchLanguageInfo({ commit }, request) {
    siteApi.fetchLanguageInfo().then(languageInfo => {
      commit("setLanguageInfo", languageInfo);
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
