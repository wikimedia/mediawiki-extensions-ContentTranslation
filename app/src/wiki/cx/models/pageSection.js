import MTProviderGroup from "../../mw/models/mtProviderGroup";
import SubSection from "../../cx/models/subSection";

/**
 * This model represents a translation section belonging to a Page model.
 * It stores section content through section sub-sections, section title
 * and section id, which corresponds to the mw-section-number attribute,
 * as provided by cx server's content segmentation action.
 */
export default class PageSection {
  constructor({ id, title = null, subSections = [] } = {}) {
    this.id = id;
    this.proposedTitleTranslations = {
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: title,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: ""
    };
    this.translatedTitle = "";
    /** @type SubSection[] **/
    this.subSections = subSections;
    this.editedTranslation = null;
  }

  get originalTitle() {
    return this.proposedTitleTranslations[
      MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY
    ];
  }

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

  get html() {
    return this.subSections.reduce(
      (htmlContent, subSection) => htmlContent + subSection.originalHtml,
      ""
    );
  }

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
}
