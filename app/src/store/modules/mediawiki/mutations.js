import Vue from "vue";

export default {
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
  },

  setLanguagesRequested(state, value) {
    state.languagesRequested = value;
  },

  setSupportedLanguageCodesRequested(state, value) {
    state.supportedLanguageCodesRequested = value;
  }
};
