export default {
  addPage(state, page) {
    state.pages.push(page);
  },

  addLanguageTitleGroup(state, group) {
    state.languageTitleGroups.push(group);
  },

  /**
   * @param {Object} state
   * @param {MTProviderGroup} mtProviderGroup
   */
  addMtProviderGroup(state, mtProviderGroup) {
    state.supportedMTProviderGroups.push(mtProviderGroup);
  },

  /**
   * @param {object} state
   * @param {Page} page
   * @param {PageSection[]} sections
   */
  setPageSections(state, { page, sections }) {
    page.sections = sections;
  },

  /**
   * Adds an entry inside nearbyPages state variable object
   * with given language as key and given page models as value
   * @param {Object} state
   * @param {Object} payload
   * @param {string} language current application source language
   * @param {Page[]} pages array of nearby pages as Page models
   */
  addNearbyPages(state, { language, pages }) {
    state.nearbyPages[language] = pages;
  },
};
