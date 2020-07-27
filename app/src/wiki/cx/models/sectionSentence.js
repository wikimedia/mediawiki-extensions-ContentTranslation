export default class SectionSentence {
  constructor({
    originalContent,
    translatedContent = null,
    selected = false
  } = {}) {
    this.originalContent = originalContent;
    this.translatedContent = translatedContent;
    this.selected = selected;
  }

  get content() {
    return this.translatedContent || this.originalContent;
  }
}
