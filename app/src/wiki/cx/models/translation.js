export default class Translation {
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
  } = {}) {
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
