import MTProviderGroup from "../../../wiki/mw/models/mtProviderGroup";

export default {
  /**
   * @param {Object} state
   * @return {function(string, string): Page}
   */
  getPage: state => (language, title) =>
    state.pages.find(
      page =>
        page.language === language &&
        (page.title === title || page.alias === title)
    ),

  /**
   * @param {object} state
   * @return {function(string, string): LanguageTitleGroup|null}
   */
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
    provider !== MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY,
  /**
   * Get recently edited cx translations by current user if any,
   * for the current language pair.
   *
   * @param {Object} state
   * @param {Object} rootGetters
   * @param {Object} getters
   * @param {Object} rootState
   * @return {Page[]}
   */
  getRecentlyEditedPages: (state, getters, rootState, rootGetters) => {
    const sourceLanguage = rootState.application.sourceLanguage;
    const targetLanguage = rootState.application.targetLanguage;
    /** @type Translation[] */
    const translations = rootGetters[
      "translator/getAllTranslationsForLanguagePair"
    ](sourceLanguage, targetLanguage);
    const translationsSlice = translations.slice(
      0,
      rootState.suggestions.maxRecentlyEditedSuggestions
    );

    return translationsSlice
      .map(translation =>
        getters.getPage(sourceLanguage, translation.sourceTitle)
      )
      .filter(page => !!page);
  },
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
  }
};
