import MTProviderGroup from "../../mw/models/mtProviderGroup";
export default class SectionSentence {
  constructor({
    originalContent,
    translatedContent = "",
    proposedTranslations = {},
    selected = false
  } = {}) {
    this.originalContent = originalContent;
    this.translatedContent = translatedContent;
    this.proposedTranslations = {
      ...proposedTranslations,
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: originalContent,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: ""
    };
    this.selected = selected;
  }

  get content() {
    return this.translatedContent || this.originalContent;
  }
}
