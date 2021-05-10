import SectionSentence from "./sectionSentence";

/**
 * This model represents a sub-section (paragraph, h3, h4) belonging to a
 * Page Section model. It stores section content through section sentences
 * property and sub-section id as provided by cx server's content
 * segmentation action.
 */
export default class SubSection {
  /**
   * @param {Object} options
   * @param {SectionSentence[]} options.sentences
   * @param {HTMLElement} options.node
   */
  constructor({ sentences, node }) {
    this.id = node.id;
    this.sentences = sentences;
    this.node = node;
  }

  /**
   * @return {boolean}
   */
  get isHeadingSection() {
    return this.node.firstElementChild instanceof HTMLHeadingElement;
  }

  get originalHtml() {
    return this.node.outerHTML;
  }

  get translatedContent() {
    /**
     * Clone node before modifying it, so that original node
     * is always available
     */
    const subSectionNode = this.node.cloneNode(true);
    const segments = Array.from(
      subSectionNode.getElementsByClassName("cx-segment")
    );

    segments.forEach(segment => {
      const sentence = this.getSentenceById(segment.dataset.segmentid);

      if (sentence.isTranslated) {
        segment.innerHTML = sentence.translatedContent;

        return;
      }
      segment.parentNode.removeChild(segment);
    });

    return subSectionNode.innerHTML;
  }

  getProposedTranslation(mtProvider) {
    return this.sentences.reduce((mtTranslation, sentence) => {
      if (sentence.isTranslated) {
        mtTranslation += sentence.proposedTranslations[mtProvider];
      }

      return mtTranslation;
    }, "");
  }

  get isTranslated() {
    return this.sentences.some(sentence => sentence.isTranslated);
  }

  /**
   * @param id
   * @return {SectionSentence}
   */
  getSentenceById(id) {
    return this.sentences.find(sentence => sentence.id === id);
  }
}
