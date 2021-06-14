import MTProviderGroup from "../../mw/models/mtProviderGroup";
export default class SectionSentence {
  /**
   * @param {Object} options
   * @param {string} options.id
   * @param {string} options.originalContent
   * @param {string} options.translatedContent
   * @param {Element} options.node
   * @param {Object<string, string>} options.proposedTranslations
   * @param {boolean} options.selected
   */
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
    // TODO Node object does not seem to be used anywhere. Remove? */
    this.node = node;
    this.proposedTranslations = {
      ...proposedTranslations,
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: originalContent,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: ""
    };
    this.selected = selected;
  }

  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[
      MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY
    ];
  }

  /**
   * @return {string}
   */
  get content() {
    return this.translatedContent || this.originalContent;
  }

  /**
   * @return {boolean}
   */
  get isTranslated() {
    return this.translatedContent !== "";
  }
}
