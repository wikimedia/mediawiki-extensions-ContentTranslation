export class SectionSuggestion {
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    present,
    missing,
    availableSourceLanguages
  } = {}) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.missingSections = missing;
    this.presentSections = present;
    this.availableSourceLanguages = availableSourceLanguages || [];
  }

  get missingSectionsCount() {
    return Object.keys(this.missingSections).length;
  }

  get presentSectionsCount() {
    return Object.keys(this.presentSections || {}).length;
  }
}
