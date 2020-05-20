export class SectionSuggestion {
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    present,
    missing
  } = {}) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.missingSections = missing;
    this.presentSections = present;
  }

  get missingSectionsCount() {
    return Object.keys(this.missingSections).length;
  }
}
