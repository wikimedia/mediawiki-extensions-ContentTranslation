export default class ArticleSuggestion {
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    pageViews,
    wikidataId,
    rank
  } = {}) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.wikidataId = wikidataId;
    this.pageViews = pageViews;
    this.rank = rank;
  }

  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
  }
}
