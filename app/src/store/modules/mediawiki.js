import pageApi from "../../wiki/mw/api/page";
import siteApi from "../../wiki/mw/api/site";

const state = {
  pages: [],
  languageInfo: {},
  languageTitleGroups: [],
  supportedLanguageCodes: []
};

const mutations = {
  addPage(state, page) {
    state.pages.push(page);
  },
  addLanguageTitleGroup(state, group) {
    state.languageTitleGroups.push(group);
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
    ),
  getLanguageTitleGroup: state => (language, title) =>
    state.languageTitleGroups.find(group =>
      group.titles.find(
        groupTitle => groupTitle.lang === language && groupTitle.title === title
      )
    ),
  getLanguageTitleGroupByWikidataId: state => wikidataId =>
    state.languageTitleGroups.find(group => group.wikidataId === wikidataId),
  titleExistsInLanguageForGroup: (state, getters) => (wikidataId, language) =>
    (getters.getLanguageTitleGroupByWikidataId(wikidataId)?.titles || []).some(
      title => title.lang === language
    ),
  getTitleByLanguageForGroup: (state, getters) => (wikidataId, language) =>
    (getters.getLanguageTitleGroupByWikidataId(wikidataId)?.titles || []).find(
      title => title.lang === language
    )?.title
};

const actions = {
  async fetchPageMetadata({ getters, commit }, request) {
    const titles = request.titles.filter(
      title => !getters.getPage(request.language, title)
    );

    const chunkSize = 50;
    for (let i = 0; i < titles.length; i += chunkSize) {
      let titlesSubset = titles.slice(i, i + chunkSize);
      const metadataList = await pageApi.fetchPages(
        request.language,
        titlesSubset
      );
      metadataList.forEach(page => {
        commit("addPage", page);
      });
    }
  },
  fetchLanguageTitles({ commit, getters }, { language, title }) {
    if (getters.getLanguageTitleGroup(language, title)) {
      // Already exist in store.
      return;
    }
    pageApi
      .fetchLanguageTitles(language, title)
      .then(
        languageTitleGroup =>
          languageTitleGroup &&
          commit("addLanguageTitleGroup", languageTitleGroup)
      );
  },
  fetchLanguageInfo({ commit }) {
    const userLanguage=mw.config.get('wgUserLanguage');
    siteApi.fetchLanguageInfo(userLanguage).then(languageInfo => {
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
