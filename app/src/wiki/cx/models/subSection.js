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
    this.blockTemplateSelected = false;
    this.blockTemplateTranslatedContent = "";
    this.blockTemplateProposedTranslations = {};
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

  /**
   * This getter returns a string containing the translated content
   * of this subsection. If the subsection is a block template, it
   * returns the translated contents of this template. If not, it
   * returns the contents of all translated sentences within this
   * section.
   *
   * @return {string}
   */
  get translatedContent() {
    if (this.isBlockTemplate) {
      return this.blockTemplateTranslatedContent;
    }
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
    if (this.isBlockTemplate) {
      return !!this.blockTemplateTranslatedContent;
    }

    return this.sentences.some(sentence => sentence.isTranslated);
  }

  /**
   * @param id
   * @return {SectionSentence}
   */
  getSentenceById(id) {
    return this.sentences.find(sentence => sentence.id === id);
  }

  /**
   * This getter returns a boolean indicating whether this subsection
   * has been selected as a block template or not.
   *
   * @type {boolean}
   */
  get selected() {
    return this.isBlockTemplate && this.blockTemplateSelected;
  }

  /**
   * This getters returns a boolean indicating whether
   * this subsection is a block template or not.
   *
   * @return {boolean}
   */
  get isBlockTemplate() {
    return !!this.transclusionNode;
  }

  /**
   * This getter returns the first transclusion node
   * inside this subsection, if it exists or null.
   * otherwise.
   *
   * @return {Element|null}
   */
  get transclusionNode() {
    return Array.from(this.node.children).find(node =>
      isTransclusionNode(node)
    );
  }

  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    if (!this.isBlockTemplate) {
      return null;
    }
    const mwData = JSON.parse(this.transclusionNode.dataset?.mw || "{}");
    const templateData = mwData?.parts?.[0]?.template?.target || { wt: null };

    return templateData.wt;
  }

  /**
   * This getter returns the translation units, nested inside
   * this subsection. If the subsection is a block template,
   * an array containing only the current subsection model is
   * returned. Otherwise, an array including all nested section
   * sentences is returned.
   *
   * @return {SubSection[]|SectionSentence[]}
   */
  get translationUnits() {
    if (this.isBlockTemplate) {
      return [this];
    }

    return this.sentences;
  }
}

/**
 * Given an Element node, this method returns a boolean
 * indicating whether this node is a transclusion node or not.
 *
 * @param {Element} node
 * @return {boolean}
 */
const isTransclusionNode = node =>
  !!(
    node.attributes.about ||
    (node.attributes.typeof &&
      node
        .getAttribute("typeof")
        .match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/))
  );
