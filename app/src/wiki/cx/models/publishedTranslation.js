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
   * @param {string} targetTitle
   * @param {string} targetUrl
   * @param {object[]} sectionTranslations
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
    targetUrl,
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
    this.targetUrl = targetUrl;
    this.sectionTranslations = sectionTranslations;
  }
}
