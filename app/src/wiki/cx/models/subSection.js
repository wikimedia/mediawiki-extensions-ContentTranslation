import {
  parseTemplateName,
  isTransclusionNode,
} from "../../../utils/templateHelper";
import MTProviderGroup from "../../mw/models/mtProviderGroup";

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
    this.blockTemplateAdaptationStatus = {};
    this.blockTemplateMTProviderUsed = "";
  }

  /**
   * Sets the adaptation status object as it is calculated by the cxserver
   * for the given MT provider.
   *
   * @param {string} provider
   * @param {{ adapted: boolean, partial: boolean, targetExists: boolean }} status
   */
  setBlockTemplateAdaptationStatus(provider, status) {
    this.blockTemplateAdaptationStatus[provider] = status;
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
   * This method calculates the most used MT provider for this current subSection
   * instance and returns the corresponding translation origin to be used inside
   * the corresponding TranslationUnitPayload DTO. This origin should be a valid
   * value for the "cxc_origin" field inside "cx_corpora" table.
   * @returns {string}
   */
  get translationOrigin() {
    const predefinedProviders = {
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: "user",
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: "source",
    };
    const getOrigin = (mtProvider) =>
      predefinedProviders[mtProvider] || mtProvider;

    if (this.isBlockTemplate) {
      return getOrigin(this.blockTemplateMTProviderUsed);
    }

    /**
     * An object containing the most used MT provider for the translated sentences
     * and the count of its usage
     * @type {{ provider: string, count: number }}
     */
    const maxProviderCount = this.sentences
      .filter((sentence) => sentence.isTranslated)
      .reduce((providerCounts, sentence) => {
        const { mtProviderUsed } = sentence;
        // find the providerCount object for the given mtProvider
        let providerCount = providerCounts.find(
          (providerCount) => providerCount.provider === mtProviderUsed
        );

        // if such object doesn't exist, create it
        if (!providerCount) {
          providerCount = { provider: mtProviderUsed, count: 0 };
          providerCounts.push(providerCount);
        }
        // increase the counter for the given mtProvider
        providerCount.count++;

        return providerCounts;
      }, [])
      // find the providerCount object that has the maximum count
      .reduce((maxProviderCount, providerCount) =>
        maxProviderCount.count > providerCount.count
          ? maxProviderCount
          : providerCount
      );

    return getOrigin(maxProviderCount.provider);
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

    return this.sentences.some((sentence) => sentence.isTranslated);
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
    if (!this.blockTemplateProposedTranslations[provider]) {
      return null;
    }
    const div = document.createElement("div");
    div.innerHTML = this.blockTemplateProposedTranslations[provider];
    const templateDiv = Array.from(div.children).find((node) =>
      isTransclusionNode(node)
    );

    if (!templateDiv) {
      return "";
    }

    return parseTemplateName(templateDiv);
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
