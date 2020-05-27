import pageApi from "../../wiki/mw/api/page";
import siteApi from "../../wiki/mw/api/site";

const state = {
  pages: [],
  languageInfo: {},
  supportedLanguageCodes: []
};

const mutations = {
  addPage(state, article) {
    state.pages.push(article);
  },
  setLanguageInfo(state, languageInfo) {
    state.languageInfo = languageInfo;
  },
  setSupportedLanguageCodes(state, languageCodes) {
    state.supportedLanguageCodes = languageCodes;
  }
};

// Computed properties for stores.
const getters = {
  getPage: state => (language, title) =>
    state.pages.find(
      page =>
        page.language === language &&
        (page.title === title || page.alias === title)
    )
};

const actions = {
  fetchPage({ commit }, request) {
    const titles = request.titles;
    const chunkSize = 50;
    for (let i = 0; i < titles.length; i += chunkSize) {
      const titlesSubset = titles.slice(i, i + chunkSize);
      pageApi
        .fetchMetadata(request.language, titlesSubset)
        .then(metadataList => {
          for (let i = 0; i < metadataList.length; i++) {
            commit("addPage", metadataList[i]);
          }
        });
    }
  },
  fetchLanguageInfo({ commit }, request) {
    siteApi.fetchLanguageInfo().then(languageInfo => {
      commit("setLanguageInfo", languageInfo);
    });
  },
  fetchSupportedLanguageCodes({ commit }) {
    siteApi.fetchSupportedLanguageCodes().then(languageCodes => {
      commit("setSupportedLanguageCodes", languageCodes);
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
