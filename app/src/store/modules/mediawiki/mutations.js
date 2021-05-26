import Vue from "vue";

export default {
  addPage(state, page) {
    state.pages.push(page);
  },

  addLanguageTitleGroup(state, group) {
    state.languageTitleGroups.push(group);
  },

  setSupportedLanguageCodes(state, languageCodes) {
    state.supportedLanguageCodes = languageCodes;
  },

  /**
   * @param {Object} state
   * @param {MTProviderGroup} mtProviderGroup
   */
  addMtProviderGroup(state, mtProviderGroup) {
    state.supportedMTProviderGroups.push(mtProviderGroup);
  },

  setPageSections(state, { page, sections }) {
    Vue.set(page, "sections", sections);
  },

  setLanguagesRequested(state, value) {
    state.languagesRequested = value;
  },

  setSupportedLanguageCodesRequested(state, value) {
    state.supportedLanguageCodesRequested = value;
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
    Vue.set(state.nearbyPages, language, pages);
  }
};
