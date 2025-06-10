export default class Translation {
  /**
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
  }) {
    this.translationId = translationId;
    this.sourceTitle = sourceTitle;
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.startTimestamp = startTimestamp;
    this.lastUpdatedTimestamp = lastUpdatedTimestamp;
    this.pageRevision = pageRevision;
    this.status = status;
    this.targetTitle = targetTitle;
  }
}
