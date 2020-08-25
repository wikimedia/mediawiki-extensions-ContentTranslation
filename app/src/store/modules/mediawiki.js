import pageApi from "../../wiki/mw/api/page";
import siteApi from "../../wiki/mw/api/site";
import Language from "../../wiki/mw/models/language";
import MTProviderGroup from "../../wiki/mw/models/mtProviderGroup";
import translatorApi from "../../wiki/cx/api/translator";
import Vue from "vue";
import Page from "../../wiki/mw/models/page";

const state = {
  /** @type {Page[]} */
  pages: [],
  /** @type {Language[]} */
  languages: [],
  languageTitleGroups: [],
  supportedLanguageCodes: [],
  supportedMTProviderGroups: []
};

const mutations = {
  addPage(state, page) {
    state.pages.push(page);
  },
  addLanguageTitleGroup(state, group) {
    state.languageTitleGroups.push(group);
  },
  setLanguages(state, languages) {
    state.languages = languages;
  },
  setSupportedLanguageCodes(state, languageCodes) {
    state.supportedLanguageCodes = languageCodes;
  },
  /**
   * @param mtProviderGroup
   */
  addMtProviderGroup(state, mtProviderGroup) {
    state.supportedMTProviderGroups.push(mtProviderGroup);
  },
  setPageSections(state, { page, sections }) {
    Vue.set(page, "sections", sections);
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
    )?.title,
  /**
   * Get the language object for the given language code
   * @param {String} languageCode
   * @returns {Language}
   */
  getLanguage: state => languageCode =>
    state.languages.find(language => language.code === languageCode),
  getPageSection: state => (page, sectionTitle) =>
    (page?.sections || []).find(section => section.title === sectionTitle),
  /**
   * Get MTProviderGroup for the given language pair
   * @param {String} sourceLanguage
   * @param {String} targetLanguage
   * @returns {MTProviderGroup}
   */
  getSupportedMTProviders: state => (sourceLanguage, targetLanguage) =>
    state.supportedMTProviderGroups.find(
      mtProviderGroup =>
        mtProviderGroup.sourceLanguage === sourceLanguage &&
        mtProviderGroup.targetLanguage === targetLanguage
    )?.providers,
  getDefaultMTProvider: (state, getters) => (sourceLanguage, targetLanguage) =>
    getters.getSupportedMTProviders(sourceLanguage, targetLanguage)[0]
};

const actions = {
  /**
   * @param {String} language
   * @param {Array<String>} titles
   * @returns {Promise<void>}
   */
  async fetchPageMetadata({ getters, commit }, { language, titles }) {
    titles = titles.filter(title => !getters.getPage(language, title));

    const chunkSize = 50;
    for (let i = 0; i < titles.length; i += chunkSize) {
      let titlesSubset = titles.slice(i, i + chunkSize);
      const metadataList = await pageApi.fetchPages(language, titlesSubset);
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
  fetchLanguages({ commit }) {
    const userLanguage = mw.config.get("wgUserLanguage");
    siteApi.fetchLanguages(userLanguage).then(languages => {
      commit("setLanguages", languages);
    });
  },
  fetchSupportedLanguageCodes({ commit }) {
    siteApi.fetchSupportedLanguageCodes().then(languageCodes => {
      commit("setSupportedLanguageCodes", languageCodes);
    });
  },
  async fetchPageContent(
    { commit, getters, dispatch },
    { sourceLanguage, targetLanguage, sourceTitle }
  ) {
    let page = getters.getPage(sourceLanguage, sourceTitle);
    if (!page) {
      page = await pageApi.fetchPageContent(
        sourceLanguage,
        targetLanguage,
        sourceTitle
      );
      commit("addPage", page);
    }

    if (page.content) {
      return;
    }

    pageApi
      .fetchPageContent(sourceLanguage, targetLanguage, sourceTitle)
      .then(
        /** @type Page */ responsePage => (page.content = responsePage.content)
      );
  },
  /**
   * Returns a promise so that it can be awaited for
   * @param getters
   * @param commit
   * @param sourceLanguage
   * @param targetLanguage
   * @param sourceTitle
   * @return {Promise<PageSection[]>}
   */
  async fetchPageSections(
    { getters, commit },
    { sourceLanguage, targetLanguage, sourceTitle }
  ) {
    const page = getters.getPage(sourceLanguage, sourceTitle);
    if (!page) {
      return;
    }

    return pageApi
      .fetchPageSections(sourceLanguage, targetLanguage, sourceTitle)
      .then(sections => commit("setPageSections", { page, sections }));
  },
  fetchMTProviders({ commit }, { sourceLanguage, targetLanguage }) {
    siteApi
      .fetchSupportedMTProviders(sourceLanguage, targetLanguage)
      .then(mtProviderGroup => commit("addMtProviderGroup", mtProviderGroup));
  },
  /**
   * Translate selected sentence for a section defined
   * by given source language, title and section title,
   * from source language to given target language.
   * @param rootGetters
   * @param {String} sourceLanguage
   * @param {String} targetLanguage
   * @param {String} sourceTitle
   * @param {String} sectionTitle
   * @param {String} provider
   * @return {Promise<void>}
   */
  async translateSelectedSentence(
    { rootGetters },
    { sourceLanguage, targetLanguage, sourceTitle, sectionTitle, provider }
  ) {
    const selectedSentence = rootGetters[
      "application/getSelectedSentenceForPageSection"
    ](sourceLanguage, sourceTitle, sectionTitle);

    if (
      !selectedSentence ||
      provider === MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
    ) {
      return;
    }

    if (!selectedSentence.proposedTranslations[provider]) {
      let translation;
      try {
        translation = await translatorApi.fetchSentenceTranslation(
          sourceLanguage,
          targetLanguage,
          provider,
          selectedSentence.originalContent
        );
      } catch (error) {
        // Fall back to original content
        translation = selectedSentence.originalContent;
      }

      Vue.set(selectedSentence.proposedTranslations, provider, translation);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
