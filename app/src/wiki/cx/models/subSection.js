import {
  parseTemplateName,
  isTransclusionNode,
  getTemplateData,
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
    this.blockTemplateAdaptationInfo = {};
    this.blockTemplateMTProviderUsed = "";
    this.editedTranslation = null;
    /** @type {CorporaRestoredUnit|null} */
    this.corporaRestoredUnit = null;
  }

  /**
   * Sets the adaptation info object as it is calculated by the cxserver
   * for the given MT provider.
   *
   * @param {string} provider
   * @param {{ adapted: boolean, partial: boolean, targetExists: boolean, mandatoryTargetParams: string[], optionalTargetParams: string[] }} info
   */
  setBlockTemplateAdaptationInfo(provider, info) {
    this.blockTemplateAdaptationInfo[provider] = info;
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
    translatedSubSectionNode.innerHTML = this.translatedContent;

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
    const translatedSentences = this.sentences.filter(
      (sentence) => sentence.isTranslated
    );

    return translatedSentences?.[0]?.mtProviderUsed || null;
  }

  get parallelCorporaMTContent() {
    const mtProvider = this.mtProviderUsed;
    const subSectionNode = this.node.cloneNode(true);

    if (this.isBlockTemplate && MTProviderGroup.isUserMTProvider(mtProvider)) {
      return null;
    } else if (this.isBlockTemplate) {
      subSectionNode.innerHTML =
        this.blockTemplateProposedTranslations[mtProvider];
    } else {
      const translatedSentences = this.sentences.filter(
        (sentence) => sentence.isTranslated
      );
      const sameMTProviderUsed = translatedSentences.every(
        (sentence) => sentence.mtProviderUsed === mtProvider
      );

      if (!sameMTProviderUsed || MTProviderGroup.isUserMTProvider(mtProvider)) {
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

    return subSectionNode.outerHTML;
  }

  /**
   *
   * @param {CorporaRestoredUnit} corporaUnit
   */
  restoreCorpora(corporaUnit) {
    this.corporaRestoredUnit = corporaUnit;

    const toHtmlSegments = (text) => {
      const wrapperDiv = document.createElement("div");
      wrapperDiv.innerHTML = text;
      const node = wrapperDiv.firstChild;

      return Array.from(node.getElementsByClassName("cx-segment"));
    };

    const translatedSegments = toHtmlSegments(
      this.corporaRestoredUnit.user.content
    );
    const mtSegments = toHtmlSegments(this.corporaRestoredUnit.mt.content);

    translatedSegments.forEach((segment) => {
      const sentence = this.getSentenceById(segment.dataset.segmentid);
      const mtSegment = mtSegments.find(
        (mtSegment) => mtSegment.dataset.segmentid === segment.dataset.segmentid
      );
      sentence.translatedContent = segment.innerHTML;
      const mtProvider = this.corporaRestoredUnit.mt.engine;
      sentence.addProposedTranslation(mtProvider, mtSegment.innerHTML);
      sentence.mtProviderUsed = mtProvider;
    });
  }
}
