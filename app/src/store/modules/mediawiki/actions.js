import pageApi from "../../../wiki/mw/api/page";
import siteApi from "../../../wiki/mw/api/site";
import translatorApi from "../../../wiki/cx/api/translator";

export default {
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
  },

  /**
   * Fetch nearby suggestions for current source language
   * based on user location, and store them to state, so that they
   * can be reused when "Search for an article" screen is mounted again.
   * If such suggestions already exist, the actions returns without doing anything.
   *
   * @param {Object} context
   * @param {Function} context.commit
   * @param {Object} context.rootState
   * @return {Promise<void>}
   */
  async fetchNearbyPages({ commit, rootState, state }) {
    const { sourceLanguage } = rootState.application;

    if (state.nearbyPages[sourceLanguage]?.length) {
      return;
    }
    /** @type {Page[]} */
    const pages = await pageApi.fetchNearbyPages(sourceLanguage);

    commit("addNearbyPages", { language: sourceLanguage, pages });
  }
};
