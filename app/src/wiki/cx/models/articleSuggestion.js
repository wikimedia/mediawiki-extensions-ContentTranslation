/**
 * Model representing an article suggestion for translation.
 */
export default class ArticleSuggestion {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} [options.targetTitle]
   * @param {number} options.langLinksCount
   * @param {string} options.wikidataId
   */
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    langLinksCount,
    wikidataId
  }) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.wikidataId = wikidataId;
    this.langLinksCount = langLinksCount;
  }

  /**
   * @returns {string}
   */
  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
  }
}
