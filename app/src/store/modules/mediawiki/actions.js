import pageApi from "../../../wiki/mw/api/page";

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

export default { fetchNearbyPages };
