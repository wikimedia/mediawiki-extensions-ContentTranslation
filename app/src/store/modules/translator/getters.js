export default {
  getTranslationsByStatus:
    (state) =>
    /**
     * @param {"draft"|"published"} status
     * @return {Translation[]}
     */
    (status) =>
      state.translations.filter(
        (translationItem) => translationItem.status === status
      ),
  userHasSectionTranslations: (state) =>
    state.translations.some(
      (translation) => !!translation.sectionTranslationId
    ),
  /**
   * @param state
   * @return {function(sourceLanguage: string, targetLanguage: string): Translation[]}
   */
  getTranslationsForLanguagePair: (state) => (sourceLanguage, targetLanguage) =>
    state.translations.filter(
      (translation) =>
        translation.sourceLanguage === sourceLanguage &&
        translation.targetLanguage === targetLanguage
    ),
};
