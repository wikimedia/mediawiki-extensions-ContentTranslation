import MTProviderGroup from "../../mw/models/mtProviderGroup";
import SectionSentence from "./sectionSentence";

/**
 * This model represents a translation section belonging to a Page model.
 * It stores section content through section sub-sections, section title
 * and section id, which corresponds to the mw-section-number attribute,
 * as provided by cx server's content segmentation action.
 */
export default class PageSection {
  /**
   * Creates an instance of PageSection.
   * @param {Object} options
   * @param {string} [options.id]
   * @param {string|null} [options.title]
   * @param {boolean} [options.isLeadSection]
   * @param {SubSection[]} [options.subSections]
   */
  constructor({
    id,
    title = null,
    subSections = [],
    isLeadSection = false,
    isTitleSelected = false
  } = {}) {
    this.id = id;
    this.proposedTitleTranslations = {
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: title,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: ""
    };
    this.translatedTitle = "";
    this.subSections = subSections;
    this.editedTranslation = null;
    this.isLeadSection = isLeadSection;
    this.isTitleSelected = isTitleSelected;
  }

  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[
      MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY
    ];
  }

  /**
   * @return {string}
   */
  get title() {
    return this.translatedTitle || this.originalTitle;
  }

  /**
   * Returns sentences nested into subSections
   * @return SectionSentence[]
   */
  get sentences() {
    return this.subSections.reduce(
      (sentences, subSection) => [...sentences, ...subSection.sentences],
      []
    );
  }

  /**
   * @return {SectionSentence|null}
   */
  get selectedSentence() {
    return this.sentences.find(sentence => sentence.selected);
  }

  /**
   * @return {number}
   */
  get selectedSentenceIndex() {
    return this.sentences.findIndex(sentence => sentence.selected);
  }

  /**
   * @param {string} id
   * @return {SectionSentence|null}
   */
  getSentenceById(id) {
    return this.sentences.find(sentence => sentence.id === id);
  }

  /**
   * Returns the id of the currently selected translation unit.
   * In case of selected title, 0 is returned
   * @return {string|0}
   */
  get selectedTranslationUnitId() {
    if (this.isTitleSelected) {
      return 0;
    }

    return this.selectedSentence?.id;
  }

  /**
   * @return {boolean}
   */
  get isSelectedSentenceLast() {
    return this.selectedSentenceIndex === this.sentences.length - 1;
  }

  /**
   * @return {SectionSentence|null}
   */
  get followingSentence() {
    const nextIndex = this.selectedSentenceIndex + 1;

    return this.sentences?.[nextIndex] || null;
  }

  /**
   * @return {string}
   */
  get html() {
    return this.subSections.reduce(
      (htmlContent, subSection) => htmlContent + subSection.originalHtml,
      ""
    );
  }

  /**
   * @return {string}
   */
  get translationHtml() {
    return (
      this.editedTranslation ||
      this.subSections.reduce(
        (htmlContent, subSection) =>
          subSection.isTranslated
            ? htmlContent + subSection.translatedContent
            : htmlContent,
        ""
      )
    );
  }

  /**
   * Given an MT provider this method returns the proposed
   * translation of the PageSection as an HTML string
   * @param mtProvider
   * @return {string}
   */
  getProposedTranslationHtml(mtProvider) {
    return this.subSections.reduce(
      (htmlContent, subSection) =>
        htmlContent + subSection.getProposedTranslation(mtProvider),
      ""
    );
  }

  /**
   * @return {boolean}
   */
  get isTranslated() {
    return this.subSections.some(subSection => subSection.isTranslated);
  }

  getOriginalContentByTranslationUnitId(id) {
    if (id === 0) {
      return this.originalTitle;
    }
    const sentence = this.getSentenceById(id);

    if (sentence instanceof SectionSentence) {
      return sentence.originalContent;
    }

    return null;
  }
}
