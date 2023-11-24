import {
  parseTemplateName,
  isTransclusionNode,
  getTemplateData,
  targetTemplateExists,
  getTemplateAdaptationInfo,
} from "../../../utils/templateHelper";
import MTProviderGroup from "../../mw/models/mtProviderGroup";
import TranslationUnitPayload from "./translationUnitPayload";

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
    // Node id is expected to be in the following form: "cxSourceSectionXX"
    // where XX is a non-negative integer. This integer is stored as id for
    // the current SubSection instance
    this.id = node.id.replace(/\D/g, "");
    this.sentences = sentences;
    this.node = node;
    this.blockTemplateSelected = false;
    this.blockTemplateTranslatedContent = "";
    this.blockTemplateProposedTranslations = {};
    /**
     * The adaptation info for block templates are stored by cxserver inside the "data-cx" attribute
     * of the template HTML. However, this attribute is being dropped during the template adaptation
     * (see "templateAdapter/adaptTemplateFromCXServer" method), so we need store this information
     * before it's lost.
     *
     * Object containing block template adaptation information per MT provider in the following form:
     * {
     *   "Google": { adapted: boolean, partial: boolean, targetExists: boolean, mandatoryTargetParams: string[], optionalTargetParams: string[] }
     * }
     * @type {{ adapted: boolean, partial: boolean, targetExists: boolean, mandatoryTargetParams: string[], optionalTargetParams: string[] }}
     */
    this.blockTemplateAdaptationInfo = {};
    this.blockTemplateMTProviderUsed = "";
    this.editedTranslation = null;
    /** @type {CorporaRestoredUnit|null} */
    this.corporaRestoredUnit = null;
  }

  reset() {
    this.blockTemplateSelected = false;
    this.blockTemplateTranslatedContent = "";
    this.blockTemplateProposedTranslations = {};
    this.blockTemplateAdaptationInfo = {};
    this.blockTemplateMTProviderUsed = "";
    this.editedTranslation = null;
    this.corporaRestoredUnit = null;
    this.sentences.forEach((sentence) => sentence.reset());
  }

  /**
   * Given the MT provider and the HTML string of the template as returned by cxserver,
   * this method checks if the HTML contains any nested transclusion node and if the template
   * actually exists in the target language (based on the adaptation information provided by
   * cxserver through the data-cx attribute) and in case the above conditions are met, it sets
   * a key-value pair to the "blockTemplateAdaptationInfo" for this subsection, with the key
   * being the given MT provider and the value being the parsed JSON object that was stored
   * inside the data-cx attribute of the template HTML.
   *
   * @param {string} provider the MT provider used for the template translation
   * @param {string} templateHtml the HTML string of the template
   */
  setBlockTemplateAdaptationInfoByHtml(provider, templateHtml) {
    let div = document.createElement("div");
    div.innerHTML = templateHtml;

    // for restored draft corpora, the given template HTML is wrapped inside a <section> element
    // with "rel" attribute set to "cx:Section". We need to use the element, that holds the template
    // definition, which is expected to be the first child inside the <section> wrapper
    if (div.firstElementChild.getAttribute("rel") === "cx:Section") {
      div = div.firstElementChild;
    }

    /** @type {HTMLElement|null} */
    const templateElement = Array.from(div.children).find((node) =>
      isTransclusionNode(node)
    );

    // If both nested transclusion node and target template also exists (based on the data-cx attribute)
    if (templateElement && targetTemplateExists(templateElement)) {
      this.blockTemplateAdaptationInfo[provider] =
        getTemplateAdaptationInfo(templateElement);
    }
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
    if (this.editedTranslation !== null) {
      return this.editedTranslation;
    }

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

    segments.forEach((segment) => {
      const sentence = this.getSentenceById(segment.dataset.segmentid);

      if (sentence.isTranslated) {
        segment.innerHTML = sentence.translatedContent;

        return;
      }
      segment.parentNode.removeChild(segment);
    });

    return subSectionNode.innerHTML;
  }

  /**
   * This getter returns the proposed translation that was used for translating
   * the current subSection. If the current subSection is a block template,
   * then the proposed translation that was used for this block template is
   * returned. If not, then the proposed translations that was used for
   * translating each translated section sentence are returned.
   *
   * @returns {string|null}
   */
  get proposedContentForMTValidation() {
    if (this.isBlockTemplate) {
      return this.blockTemplateProposedTranslations[
        this.blockTemplateMTProviderUsed
      ];
    }

    // Clone node before modifying it, so that original node is always available
    const subSectionNode = this.node.cloneNode(true);
    const segments = Array.from(
      subSectionNode.getElementsByClassName("cx-segment")
    );

    segments.forEach((segment) => {
      const sentence = this.getSentenceById(segment.dataset.segmentid);

      if (sentence.isTranslated) {
        segment.innerHTML = sentence.mtProposedTranslationUsed;

        return;
      }
      segment.parentNode.removeChild(segment);
    });

    return subSectionNode.innerHTML;
  }

  get isTranslated() {
    if (this.editedTranslation) {
      return true;
    }

    if (this.isBlockTemplate) {
      return !!this.blockTemplateTranslatedContent;
    }

    return this.sentences.some((sentence) => sentence.isTranslated);
  }

  get targetSectionId() {
    return `cxTargetSection${this.id}`;
  }

  /**
   * @param id
   * @return {SectionSentence}
   */
  getSentenceById(id) {
    return this.sentences.find((sentence) => sentence.id === id);
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
   * @return {HTMLElement|null}
   */
  get transclusionNode() {
    return Array.from(this.node.children).find((node) =>
      isTransclusionNode(node)
    );
  }

  /**
   * This method returns an object containing the source template parameters
   * and their values, in the following form:
   * { paramName1: { wt: "paramValue1" }, paramName2: { wt: "paramValue2" } }
   *
   * @return {object}
   */
  get sourceTemplateParams() {
    const sourceTemplateData = getTemplateData(this.transclusionNode);

    return sourceTemplateData?.params || {};
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

    return parseTemplateName(this.transclusionNode);
  }

  /**
   * Given an MT provider, this method returns an object containing the
   * target template parameters and their values, in the following form:
   * { paramName1: { wt: "paramValue1" }, paramName2: { wt: "paramValue2" } }
   *
   * @param {string} provider MT provider
   * @return {Element}
   */
  getTargetTemplateNodeByProvider(provider) {
    if (!this.blockTemplateProposedTranslations[provider]) {
      return null;
    }
    const div = document.createElement("div");
    div.innerHTML = this.blockTemplateProposedTranslations[provider];

    return Array.from(div.children).find((node) => isTransclusionNode(node));
  }

  /**
   * Given an MT provider, this method returns the template
   * name based on the corresponding proposed translation of
   * a block template subsection. If the block template
   * translation has not yet been fetched, null is returned.
   * If the translation has been fetched but no template node
   * can be found, then an empty string is returned.
   *
   * @param {string} provider MT provider
   * @return {string|null} Target block template name
   */
  getTargetBlockTemplateNameByProvider(provider) {
    const templateDiv = this.getTargetTemplateNodeByProvider(provider);

    return (templateDiv && parseTemplateName(templateDiv)) || "";
  }

  /**
   * Given an MT provider, this method returns an object containing the
   * target template parameters and their values, in the following form:
   * { paramName1: { wt: "paramValue1" }, paramName2: { wt: "paramValue2" } }
   *
   * @param {string} provider MT provider
   * @return {object|null}
   */
  getTargetTemplateParamsByProvider(provider) {
    const transclusionNode = this.getTargetTemplateNodeByProvider(provider);

    if (!transclusionNode) {
      return null;
    }
    const targetTemplateData = getTemplateData(transclusionNode);

    return targetTemplateData?.params || null;
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

  /**
   *
   * @param {string} baseSectionId the base section id that will be used as "cxsx_section_id" inside "cx_section_translations"
   * @returns {TranslationUnitPayload[]}
   */
  getParallelCorporaTranslationPayloads(baseSectionId) {
    const translatedSubSectionNode = this.node.cloneNode(true);
    translatedSubSectionNode.setAttribute(
      "data-mw-cx-source",
      this.mtProviderUsed
    );
    translatedSubSectionNode.innerHTML = this.translatedContent;

    const templateElement = Array.from(translatedSubSectionNode.children).find(
      (node) => isTransclusionNode(node)
    );

    // if this subsection is a block template and a nested transclusion node exists,
    // add the block template adaptation info as "data-cx" attribute to the element
    // that holds the template definition, so that we can restore block template translations
    // properly
    if (this.isBlockTemplate && templateElement) {
      templateElement.dataset.cx = JSON.stringify([
        this.blockTemplateAdaptationInfo[this.mtProviderUsed],
      ]);
    }
    const payloads = [
      new TranslationUnitPayload({
        baseSectionId,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source",
      }),
      new TranslationUnitPayload({
        baseSectionId,
        subSectionId: this.id,
        content: translatedSubSectionNode.outerHTML,
        origin: "user",
      }),
    ];

    if (this.parallelCorporaMTContent) {
      payloads.push(
        new TranslationUnitPayload({
          baseSectionId,
          subSectionId: this.id,
          content: this.parallelCorporaMTContent,
          origin: this.mtProviderUsed,
        })
      );
    }

    return payloads;
  }

  /**
   * This getter returns:
   * 1. if the subsection is an adapted block template, it returns the MT provider
   * selected when the template was adapted
   * 2. if not, it returns the MT provider used to translate the first translated
   * sentence of the subsection
   * 3. if section is not translated, it returns null
   * @return {string|null}
   */
  get mtProviderUsed() {
    if (this.blockTemplateMTProviderUsed) {
      return this.blockTemplateMTProviderUsed;
    }

    return this.translatedSentences?.[0]?.mtProviderUsed || null;
  }

  get translatedSentences() {
    if (this.isBlockTemplate) {
      return [];
    }

    return this.sentences.filter((sentence) => sentence.isTranslated);
  }

  get parallelCorporaMTContent() {
    const mtProvider = this.mtProviderUsed;
    const subSectionNode = this.node.cloneNode(true);

    // no content can exist for the "mt" corpora translation unit,
    // without a non-empty provider that is NOT of "user" type
    if (!mtProvider || MTProviderGroup.isUserMTProvider(mtProvider)) {
      return null;
    }

    if (this.isBlockTemplate) {
      subSectionNode.innerHTML =
        this.blockTemplateProposedTranslations[mtProvider];

      const templateElement = Array.from(subSectionNode.children).find((node) =>
        isTransclusionNode(node)
      );

      // if this subsection is a block template and a nested transclusion node exists,
      // add the block template adaptation info as "data-cx" attribute to the element
      // that holds the template definition, so that we can restore block template translations
      // properly
      if (templateElement) {
        templateElement.dataset.cx = JSON.stringify([
          this.blockTemplateAdaptationInfo[mtProvider],
        ]);
      }
    } else {
      const sameMTProviderUsed = this.translatedSentences.every(
        (sentence) => sentence.mtProviderUsed === mtProvider
      );

      if (!sameMTProviderUsed) {
        return null;
      }

      // Clone node before modifying it, so that original node is always available
      const segments = Array.from(
        subSectionNode.getElementsByClassName("cx-segment")
      );

      segments.forEach((segment) => {
        const sentence = this.getSentenceById(segment.dataset.segmentid);

        if (sentence.isTranslated) {
          segment.innerHTML = sentence.mtProposedTranslationUsed;

          return;
        }
        segment.parentNode.removeChild(segment);
      });
    }
    subSectionNode.setAttribute("data-mw-cx-source", mtProvider);

    return subSectionNode.outerHTML;
  }
}
