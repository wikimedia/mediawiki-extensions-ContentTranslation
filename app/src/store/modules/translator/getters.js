import { getTitleForPublishOption } from "../../../utils/publishHelper";

export default {
  /**
   * Get publishing title for current section for the given
   * publish target (which corresponds to a specific namespace)
   *
   * @param {object} state
   * @param {object} getters
   * @param {object} rootState
   * @return {string}
   */
  getArticleTitleForPublishing: (state, getters, rootState) => {
    const { currentSectionSuggestion, publishTarget, currentSourceSection } =
      rootState.application;
    const baseTitle =
      currentSectionSuggestion.targetTitle || currentSourceSection.title;

    return getTitleForPublishOption(baseTitle, publishTarget);
  },
  /**
   * @param {Object} state
   * @return {function(string, string): Translation[]}
   */
  getPublishedTranslationsForLanguagePair:
    (state) => (sourceLanguage, targetLanguage) =>
      state.translations.filter(
        (translationItem) =>
          translationItem.sourceLanguage === sourceLanguage &&
          translationItem.targetLanguage === targetLanguage &&
          translationItem.status === "published"
      ),
  getDraftTranslationsForLanguagePair:
    (state) => (sourceLanguage, targetLanguage) =>
      state.translations.filter(
        (translationItem) =>
          translationItem.sourceLanguage === sourceLanguage &&
          translationItem.targetLanguage === targetLanguage &&
          translationItem.status === "draft"
      ),
  getPublishedTranslations: (state) =>
    state.translations.filter(
      (translationItem) => translationItem.status === "published"
    ),
  getDraftTranslations: (state) =>
    state.translations.filter(
      (translationItem) => translationItem.status === "draft"
    ),
  // Function with dummy implementation. Needed to add real functionality later
  hasSectionTranslations: (state) =>
    state.translations.some(
      (translation) => translation.hasSectionTranslations
    ),
  /**
   * @param state
   * @return {function(sourceLanguage: string, targetLanguage: string): Translation[]}
   */
  getAllTranslationsForLanguagePair:
    (state) => (sourceLanguage, targetLanguage) =>
      state.translations.filter(
        (translation) =>
          translation.sourceLanguage === sourceLanguage &&
          translation.targetLanguage === targetLanguage
      ),
};
