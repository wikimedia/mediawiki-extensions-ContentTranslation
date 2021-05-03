export default class Translation {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} [options.targetTitle]
   * @param {string} options.status
   * @param {string} options.id
   * @param {string} options.sourceURL
   * @param {string} [options.targetURL]
   * @param {string} [options.startTimestamp]
   * @param {string} [options.lastUpdateTimestamp]
   * @param {string} [options.lastUpdatedTranslator]
   * @param {string} [options.startedTranslator]
   * @param {string} [options.cxVersion]
   * @param {Object} options.progress
   */
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    status,
    id,
    sourceURL,
    targetURL,
    startTimestamp,
    lastUpdateTimestamp,
    progress = {},
    startedTranslator,
    lastUpdatedTranslator,
    cxVersion
  }) {
    this.id = id;
    this.cxVersion = cxVersion;
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.sourceURL = sourceURL;
    this.targetURL = targetURL;
    this.progress = progress;
    this.status = status;
    this.startedTranslator = startedTranslator;
    this.lastUpdatedTranslator = lastUpdatedTranslator;
    this.lastUpdateTimestamp = lastUpdateTimestamp;
    this.startTimestamp = startTimestamp;
  }
}
