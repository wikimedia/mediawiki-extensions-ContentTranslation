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
  fetchPageMetadata({ getters, commit }, request) {
    const titles = request.titles.filter(
      title => !getters.getPage(request.language, title)
    );

    const chunkSize = 50;
    for (let i = 0; i < titles.length; i += chunkSize) {
      let titlesSubset = titles.slice(i, i + chunkSize);
      pageApi
        .fetchPages(request.language, titlesSubset)
        .then(metadataList =>
          metadataList.forEach(page => commit("addPage", page))
        );

      titlesSubset = titlesSubset.filter(
        title => !getters.getLanguageTitleGroup(request.language, title)
      );
      pageApi
        .fetchTitles(request.language, titlesSubset)
        .then(groupList =>
          groupList.forEach(group => commit("addLanguageTitleGroup", group))
        );
    }
  },
  fetchLanguageInfo({ commit }) {
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
