import translatorApi from "../../../wiki/cx/api/translator";
import pageApi from "../../../wiki/mw/api/page";
import siteApi from "../../../wiki/mw/api/site";

/**
 * Given a language and an array of titles, this action fetches
 * page metadata for each title and returns a promise that is being
 * resolved when all metadata have been fetched and stored in the state
 *
 * @param {object} context
 * @param {object} context.getters
 * @param {function} context.commit
 * @param {object} payload
 * @param {string} payload.language
 * @param {string[]} payload.titles
 * @returns {Promise<void>}
 */
function fetchPageMetadata({ getters, commit }, { language, titles }) {
  titles = titles.filter(title => !getters.getPage(language, title));

  const chunkSize = 50;

  const promises = [];

  for (let i = 0; i < titles.length; i += chunkSize) {
    const titlesSubset = titles.slice(i, i + chunkSize);
    const promise = pageApi
      .fetchPages(language, titlesSubset)
      .then(metadataList =>
        metadataList.forEach(page => commit("addPage", page))
      );
    promises.push(promise);
  }

  return Promise.all(promises);
}

function fetchLanguageTitles({ commit, getters }, { language, title }) {
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
}

function fetchSupportedLanguageCodes({ commit, state }) {
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
}

async function fetchPageContent(
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
}

/**
 * Returns a promise so that it can be awaited for
 * @param getters
 * @param commit
 * @param sourceLanguage
 * @param targetLanguage
 * @param sourceTitle
 * @return {Promise<void>}
 */
async function fetchPageSections(
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
}

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
async function fetchMTProviders(
  { commit, getters },
  { sourceLanguage, targetLanguage }
) {
  if (getters.getSupportedMTProviders(sourceLanguage, targetLanguage).length) {
    return;
  }

  const mtProviderGroup = await siteApi.fetchSupportedMTProviders(
    sourceLanguage,
    targetLanguage
  );

  commit("addMtProviderGroup", mtProviderGroup);
}

/**
 * Translates HTML content for a given language pair
 * and MT provider, and returns a promise that resolves
 * to a string containing the translation.
 *
 * @param {object} context
 * @param {object} context.getters
 * @param {object} context.rootGetters
 * @param {function} context.dispatch
 * @param {object} payload
 * @param {string} payload.sourceLanguage
 * @param {string} payload.targetLanguage
 * @param {string} payload.provider
 * @param {string} payload.originalContent
 * @return {Promise<String>}
 */
async function translateSegment(
  { getters, rootGetters, dispatch },
  { sourceLanguage, targetLanguage, provider, originalContent }
) {
  const isValidProvider = getters.isValidProviderForTranslation(
    sourceLanguage,
    targetLanguage,
    provider
  );

  if (!isValidProvider) {
    return Promise.resolve();
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
async function fetchNearbyPages({ commit, rootState, state }) {
  const { sourceLanguage } = rootState.application;

  if (state.nearbyPages[sourceLanguage]?.length) {
    return;
  }
  /** @type {Page[]} */
  const pages = await pageApi.fetchNearbyPages(sourceLanguage);

  commit("addNearbyPages", { language: sourceLanguage, pages });
}

export default {
  fetchLanguageTitles,
  fetchMTProviders,
  fetchNearbyPages,
  fetchPageContent,
  fetchPageMetadata,
  fetchPageSections,
  fetchSupportedLanguageCodes,
  translateSegment
};
