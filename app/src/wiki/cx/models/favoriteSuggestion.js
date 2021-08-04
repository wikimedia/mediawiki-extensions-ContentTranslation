export default class FavoriteSuggestion {
  constructor({
    title,
    sourceLanguage,
    targetLanguage,
    missingSectionsCount = 0
  } = {}) {
    this.title = title;
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.missingSectionsCount = missingSectionsCount;
  }
}
