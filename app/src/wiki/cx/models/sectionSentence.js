import MTProviderGroup from "../../mw/models/mtProviderGroup";
export default class SectionSentence {
  constructor({
    id,
    originalContent,
    translatedContent = "",
    node = null,
    proposedTranslations = {},
    selected = false
  } = {}) {
    this.id = id;
    this.translatedContent = translatedContent;
    this.node = node;
    this.proposedTranslations = {
      ...proposedTranslations,
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: originalContent,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: ""
    };
    this.selected = selected;
  }

  get originalContent() {
    return this.proposedTranslations[
      MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY
    ];
  }

  get content() {
    return this.translatedContent || this.originalContent;
  }
}
