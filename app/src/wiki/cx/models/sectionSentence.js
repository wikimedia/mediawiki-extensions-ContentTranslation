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
    selected = false,
  } = {}) {
    this.id = id;
    this.translatedContent = translatedContent;
    this.mtProviderUsed = "";
    // TODO Node object does not seem to be used anywhere. Remove? */
    this.node = node;
    this.proposedTranslations = {
      ...proposedTranslations,
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: originalContent,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: "",
    };
    this.selected = selected;
  }

  reset() {
    this.proposedTranslations = {
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: "",
    };
    this.translatedContent = "";
    this.mtProviderUsed = "";
    this.selected = false;
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

  get mtProposedTranslationUsed() {
    return this.proposedTranslations[this.mtProviderUsed];
  }

  /**
   * This method sets the proposed translation for the given MT provider,
   * inside "proposedTranslations" object property.
   *
   * @param {string} mtProvider
   * @param {string} proposedTranslation
   */
  addProposedTranslation(mtProvider, proposedTranslation) {
    // If space after full stop has been trimmed by the MT provider,
    // restore the space.
    if (
      this.originalContent.endsWith(" ") &&
      !proposedTranslation.endsWith(" ")
    ) {
      proposedTranslation += " ";
    }
    this.proposedTranslations[mtProvider] = proposedTranslation;
  }
}
