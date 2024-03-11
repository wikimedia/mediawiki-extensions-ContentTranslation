import pageApi from "../../../wiki/mw/api/page";
import siteApi from "../../../wiki/mw/api/site";
import segmentedContentConverter from "../../../utils/segmentedContentConverter";

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
  titles = titles.filter((title) => !getters.getPage(language, title));

  const chunkSize = 50;

  const promises = [];

  for (let i = 0; i < titles.length; i += chunkSize) {
    const titlesSubset = titles.slice(i, i + chunkSize);
    const promise = pageApi
      .fetchPages(language, titlesSubset)
      .then((metadataList) =>
        metadataList.forEach((page) => commit("addPage", page))
      );
    promises.push(promise);
  }

  return Promise.all(promises);
}

/**
 * This action fetches all language codes supported by cxserver,
 * that can be used as source/target languages.
 *
 * @param {object} context
 * @param {function} context.commit
 * @param {object} context.state
 */
async function fetchSupportedLanguageCodes({ commit, state }) {
  // If supported language codes have already been fetched, then skip
  if (
    !state.supportedLanguageCodes.length &&
    !state.supportedLanguageCodesRequested
  ) {
    commit("setSupportedLanguageCodesRequested", true);
    const languageCodes = await siteApi.fetchSupportedLanguageCodes();
    commit("setSupportedLanguageCodes", languageCodes);
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
  fetchNearbyPages,
  fetchPageMetadata,
  fetchSupportedLanguageCodes,
};
