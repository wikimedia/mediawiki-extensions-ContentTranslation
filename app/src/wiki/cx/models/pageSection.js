import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";

/**
 * This model represents a translation section belonging to a Page model.
 * It stores section content through section sentences property, section
 * title and section id, which corresponds to the mw-section-number attribute,
 * as provided by cx server's content segmentation action.
 */
export default class PageSection {
  constructor({ id, title = null, sentences = [] } = {}) {
    this.id = id;
    this.proposedTitleTranslations = {
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: title,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: ""
    };
    this.translatedTitle = "";
    this.sentences = sentences;
  }

  get originalTitle() {
    return this.proposedTitleTranslations[
      MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY
    ];
  }

  get title() {
    return this.translatedTitle || this.originalTitle;
  }

  get html() {
    return this.sentences.reduce(
      (htmlContent, sentence) => htmlContent + sentence.originalContent,
      ""
    );
  }

  get translationHtml() {
    return this.sentences.reduce(
      (htmlContent, sentence) => htmlContent + sentence.content,
      ""
    );
  }
}
