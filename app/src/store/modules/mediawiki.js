import pageApi from "../../wiki/mw/api/page";
import siteApi from "../../wiki/mw/api/site";
import Language from "../../wiki/mw/models/language";
import MTProviderGroup from "../../wiki/mw/models/mtProviderGroup";
import SectionSentence from "../../wiki/cx/models/sectionSentence";
import translatorApi from "../../wiki/cx/api/translator";
import Vue from "vue";
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
  getPageSection: (state, getters) => (language, title, sectionTitle) =>
    (getters.getPage(language, title)?.sections || []).find(
      section => section.line === sectionTitle
    ),
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
    getters.getSupportedMTProviders(sourceLanguage, targetLanguage)[0],
  /**
   * Get selected sentence for a section defined by
   * the given language, title and source title
   * @param {String} sourceLanguage
   * @param {String} sourceTitle
   * @param {String} sectionTitle
   * @return {SectionSentence|null}
   */
  getSelectedSentenceForPageSection: (state, getters) => (
    sourceLanguage,
    sourceTitle,
    sectionTitle
  ) => {
    const section = getters.getPageSection(
      sourceLanguage,
      sourceTitle,
      sectionTitle
    );
    if (!section) {
      return null;
    }
    return section.sentences.find(sentence => sentence.selected);
  }
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
  async fetchPageContent({ commit, getters, dispatch }, { language, title }) {
    let page = getters.getPage(language, title);

    if (!page) {
      await dispatch("fetchPageMetadata", { language, titles: [title] });
      page = getters.getPage(language, title);
    }

    if (!page.sections.length) {
      dispatch("fetchPageSections", { language, title });
    }

    if (page.content) {
      return;
    }

    pageApi
      .fetchPageContent(language, title)
      .then(content => (page.content = content));
  },
  fetchPageSections({ getters }, { language, title }) {
    const page = getters.getPage(language, title);

    if (!page) {
      return;
    }
    pageApi.fetchPageSections(language, title).then(sections => {
      page.sections = sections;
    });
  },
  fetchMTProviders({ commit }, { sourceLanguage, targetLanguage }) {
    siteApi
      .fetchSupportedMTProviders(sourceLanguage, targetLanguage)
      .then(mtProviderGroup => commit("addMtProviderGroup", mtProviderGroup));
  },
  selectSentenceForPageSection(
    { getters },
    { sourceLanguage, sourceTitle, sectionTitle, sentenceIndex }
  ) {
    const section = getters.getPageSection(
      sourceLanguage,
      sourceTitle,
      sectionTitle
    );

    const selectedSentence = getters.getSelectedSentenceForPageSection(
      sourceLanguage,
      sourceTitle,
      sectionTitle
    );

    selectedSentence.selected = false;
    section.sentences[sentenceIndex].selected = true;
  },
  /**
   * Translate selected sentence for a section defined
   * by given source language, title and section title,
   * from source language to given target language.
   * @param {String} sourceLanguage
   * @param {String} targetLanguage
   * @param {String} sourceTitle
   * @param {String} sectionTitle
   * @param {String} provider
   * @return {Promise<void>}
   */
  async translateSelectedSentence(
    { getters },
    { sourceLanguage, targetLanguage, sourceTitle, sectionTitle, provider }
  ) {
    const selectedSentence = getters.getSelectedSentenceForPageSection(
      sourceLanguage,
      sourceTitle,
      sectionTitle
    );

    if (provider === MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY) {
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
