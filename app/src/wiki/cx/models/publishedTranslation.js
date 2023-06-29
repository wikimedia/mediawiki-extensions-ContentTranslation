import Translation from "./translation";

export default class PublishedTranslation extends Translation {
  /**
   * @param {number} sectionTranslationId
   * @param {number} translationId
   * @param {string} sourceTitle
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string} startTimestamp
   * @param {string} lastUpdatedTimestamp
   * @param {string} pageRevision
   * @param {string} status
   * @param {string|null} targetTitle
   */
  constructor({
    translationId,
    sourceTitle,
    sourceLanguage,
    targetLanguage,
    startTimestamp,
    lastUpdatedTimestamp,
    pageRevision,
    status,
    targetTitle,
    sectionTranslations,
  }) {
    super({
      translationId,
      sourceTitle,
      sourceLanguage,
      targetLanguage,
      startTimestamp,
      lastUpdatedTimestamp,
      pageRevision,
      status,
      targetTitle,
    });
    this.sectionTranslations = sectionTranslations;
  }
}
