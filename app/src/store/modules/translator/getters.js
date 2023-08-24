export default {
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
  getAllTranslationsForLanguagePair:
    (state) => (sourceLanguage, targetLanguage) =>
      state.translations.filter(
        (translation) =>
          translation.sourceLanguage === sourceLanguage &&
          translation.targetLanguage === targetLanguage
      ),
  getTranslation:
    (state) => (pageTitle, sectionTitle, sourceLanguage, targetLanguage) =>
      state.translations.find(
        /** @param {Translation} translation */
        (translation) =>
          translation.sourceTitle === pageTitle &&
          translation.sourceSectionTitle === sectionTitle &&
          translation.sourceLanguage === sourceLanguage &&
          translation.targetLanguage === targetLanguage
      ),
  translationExists:
    (state) =>
    /**
     * @param {Translation} translation
     */
    (translation) => {
      const existingTranslations = state.translations.filter(
        (existing) => existing.status === translation.status
      );

      const sectionTranslationExists = existingTranslations.some(
        (existing) =>
          !!existing.sectionTranslationId &&
          existing.sectionTranslationId === translation.sectionTranslationId
      );

      const translationExists = existingTranslations.some(
        (existing) =>
          !existing.sectionTranslationId &&
          existing.translationId === translation.translationId
      );

      return sectionTranslationExists || translationExists;
    },
};
