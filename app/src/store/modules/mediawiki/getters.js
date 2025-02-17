import MTProviderGroup from "../../../wiki/mw/models/mtProviderGroup";

export default {
  /**
   * In case of a null or empty title, this getter should
   * return null
   * @param {Object} state
   * @return {function(string, string|null): Page|null}
   */
  getPage: (state) => (language, title) =>
    state.pages.find(
      (page) =>
        page.language === language &&
        (page.title === title || (page.alias && page.alias === title))
    ),
  /**
   * @param {object} state
   * @return {function(string, string): LanguageTitleGroup|null}
   */
  getLanguageTitleGroup: (state) => (language, title) =>
    state.languageTitleGroups.find((group) =>
      group.titles.find(
        (groupTitle) =>
          groupTitle.lang === language && groupTitle.title === title
      )
    ),

  /**
   * Get MTProviderGroup for the given language pair
   * @param {object} state
   * @returns {function(sourceLanguage: string, targetLanguage: string): string[]} - method returning an array of supported providers
   */
  getSupportedMTProviders: (state) => (sourceLanguage, targetLanguage) =>
    state.supportedMTProviderGroups.find(
      (mtProviderGroup) =>
        mtProviderGroup.sourceLanguage === sourceLanguage &&
        mtProviderGroup.targetLanguage === targetLanguage
    )?.providers || [],

  isValidProviderForTranslation:
    (state, getters) => (sourceLanguage, targetLanguage, provider) =>
      getters
        .getSupportedMTProviders(sourceLanguage, targetLanguage)
        .includes(provider) &&
      provider !== MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY,

  /**
   * Get nearby articles (based on user location) in current source language
   *
   * @param {Object} state
   * @param {Object} getters
   * @param {Object} rootState
   * @return {Page[]}
   */
  getNearbyPages: (state, getters, rootState) => {
    const sourceLanguage = rootState.application.sourceLanguage;

    return state.nearbyPages[sourceLanguage];
  },
};
