import pageApi from "../../../wiki/mw/api/page";
import siteApi from "../../../wiki/mw/api/site";
import MTProviderGroup from "../../../wiki/mw/models/mtProviderGroup";
import translatorApi from "../../../wiki/cx/api/translator";

export default {
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

  getPageSection: state => (page, sectionTitle) => {
    return (page?.sections || []).find(
      section => section.originalTitle === sectionTitle
    );
  },

  /**
   * Get MTProviderGroup for the given language pair
   * @param {String} sourceLanguage
   * @param {String} targetLanguage
   * @returns {String[]} - Array of supported providers
   */
  getSupportedMTProviders: state => (sourceLanguage, targetLanguage) =>
    state.supportedMTProviderGroups.find(
      mtProviderGroup =>
        mtProviderGroup.sourceLanguage === sourceLanguage &&
        mtProviderGroup.targetLanguage === targetLanguage
    )?.providers || [],

  isValidProviderForTranslation: (state, getters) => (
    sourceLanguage,
    targetLanguage,
    provider
  ) =>
    getters
      .getSupportedMTProviders(sourceLanguage, targetLanguage)
      .includes(provider) &&
    provider !== MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
};

const actions = {
  /**
   * @param {String} language
   * @param {Array<String>} titles
   * @returns {Promise<void>}
   */
  fetchPageMetadata({ getters, commit }, { language, titles }) {
    titles = titles.filter(title => !getters.getPage(language, title));

    const chunkSize = 50;
    for (let i = 0; i < titles.length; i += chunkSize) {
      let titlesSubset = titles.slice(i, i + chunkSize);
      // Avoid async/await here, so that requests can be sent in parallel
      pageApi.fetchPages(language, titlesSubset).then(metadataList => {
        metadataList.forEach(page => {
          commit("addPage", page);
        });
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

  fetchLanguages({ commit, state }) {
    // If languages have already been fetched, then skip
    if (!state.languages.length && !state.languagesRequested) {
      commit("setLanguagesRequested", true);
      siteApi.fetchLanguages().then(languages => {
        commit("setLanguages", languages);
      });
    }
  },

  fetchSupportedLanguageCodes({ commit, state }) {
    // If supported language codes have already been fetched, then skip
    if (
      !state.supportedLanguageCodes.length &&
      !state.supportedLanguageCodesRequested
    ) {
      commit("setSupportedLanguageCodesRequested", true);
      siteApi.fetchSupportedLanguageCodes().then(languageCodes => {
        commit("setSupportedLanguageCodes", languageCodes);
      });
    }
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

  /**
   * For a given language pair, this method checks for already existing
   * MT providers in the store, and if none, it fetches supported MT
   * providers and saves them to the store.
   * @param commit
   * @param getters
   * @param sourceLanguage
   * @param targetLanguage
   * @return {Promise<void>}
   */
  async fetchMTProviders(
    { commit, getters },
    { sourceLanguage, targetLanguage }
  ) {
    if (
      getters.getSupportedMTProviders(sourceLanguage, targetLanguage).length
    ) {
      return;
    }

    const mtProviderGroup = await siteApi.fetchSupportedMTProviders(
      sourceLanguage,
      targetLanguage
    );

    commit("addMtProviderGroup", mtProviderGroup);
  },

  /**
   * Translates HTML content for a given language pair
   * and MT provider, and returns a promise that resolves
   * to a string containing the translation.
   * @param getters
   * @param sourceLanguage
   * @param targetLanguage
   * @param provider
   * @param originalContent
   * @return {Promise<String>}
   */
  async translateSegment(
    { getters, rootGetters, dispatch },
    { sourceLanguage, targetLanguage, provider, originalContent }
  ) {
    const isValidProvider = getters.isValidProviderForTranslation(
      sourceLanguage,
      targetLanguage,
      provider
    );

    if (!isValidProvider) {
      return;
    }

    try {
      const token = await dispatch(
        "application/getCXServerToken",
        {},
        { root: true }
      );
      return await translatorApi.fetchSegmentTranslation(
        sourceLanguage,
        targetLanguage,
        provider,
        originalContent,
        token
      );
    } catch (error) {
      // Fall back to original content
      return originalContent;
    }
  }
};
