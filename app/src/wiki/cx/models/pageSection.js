/**
 * This model represents a translation section belonging to a Page model.
 * It stores section content through section sentences property, section
 * title and section id, which corresponds to the mw-section-number attribute,
 * as provided by cx server's content segmentation action.
 */
export default class PageSection {
  constructor({ id, title = null, sentences = [] } = {}) {
    this.id = id;
    this.title = title;
    this.sentences = sentences;
  }

  get html() {
    return this.sentences.reduce(
      (htmlContent, sentence) => htmlContent + sentence.originalContent,
      ""
    );
  }
}
