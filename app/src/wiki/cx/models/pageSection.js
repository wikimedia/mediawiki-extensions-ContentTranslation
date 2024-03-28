import MTProviderGroup from "../../mw/models/mtProviderGroup";
import SectionSentence from "./sectionSentence";
import SubSection from "../../../wiki/cx/models/subSection";
import mtValidator from "../../../utils/mtValidator";

const LEAD_SECTION_DUMMY_TITLE = "__LEAD_SECTION__";

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
   * @param {string|null} [options.title] the title of the section or the page title when section is a lead section
   * @param {boolean} [options.isLeadSection]
   * @param {SubSection[]} [options.subSections]
   */
  constructor({
    id,
    title = null,
    subSections = [],
    isLeadSection = false,
    isTitleSelected = false,
  } = {}) {
    this.id = id;
    this.proposedTitleTranslations = {
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: title,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: "",
    };
    this.mtProviderUsedForTitle = "";
    this.translatedTitle = "";
    this.subSections = subSections;
    this.isLeadSection = isLeadSection;
    this.isTitleSelected = isTitleSelected;
  }

  /**
   * @param {SubSection[]} updatedSubSections
   */
  updateSubSections(updatedSubSections) {
    for (const updatedSubSection of updatedSubSections) {
      const subSection = this.subSections.find(
        (subSection) => subSection.id === updatedSubSection.id
      );

      if (!subSection) {
        return;
      }

      subSection.node = updatedSubSection.node;
      subSection.sentences = updatedSubSection.sentences;
    }
  }

  reset() {
    this.proposedTitleTranslations = {
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]: "",
    };
    this.translatedTitle = "";
    this.subSections.forEach((subSection) => subSection.reset());
  }

  static get LEAD_SECTION_DUMMY_TITLE() {
    return LEAD_SECTION_DUMMY_TITLE;
  }

  static isSectionLead(sectionTitle) {
    return !sectionTitle || sectionTitle === LEAD_SECTION_DUMMY_TITLE;
  }

  set originalTitle(title) {
    this.proposedTitleTranslations[MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY] =
      title;
  }

  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[
      MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY
    ];
  }

  get mtProposedTranslationUsedForTitle() {
    const translatedSubSections = this.subSections.filter(
      (subSection) => subSection.isTranslated
    );

    // if the MT provider used for title translation is not set (this is true for restored draft translations),
    // let's use the MT provider used for translating the first translated subsection. This may not be always valid,
    // but it's an acceptable workaround for the vast majority of the use cases, given that we do not store the
    // MT provider used for title translation in any persistent storage (db) and thus we cannot use such information
    // during draft translation restoration
    const provider =
      this.mtProviderUsedForTitle || translatedSubSections?.[0]?.mtProviderUsed;

    return this.proposedTitleTranslations[provider];
  }

  /**
   * @return {string}
   */
  get title() {
    return this.translatedTitle || this.originalTitle;
  }

  /**
   * This getter returns an array containing all nested
   * translation units inside the subsections of the current
   * page section. These translation units can be either
   * instances of SubSection model (in case a subsection is
   * a block template), or instances of SectionSentence model.
   *
   * @return {(SubSection|SectionSentence)[]}
   */
  get contentTranslationUnits() {
    return this.subSections.reduce(
      (units, subSection) => [...units, ...subSection.translationUnits],
      []
    );
  }

  /**
   * @return {SubSection|SectionSentence|null}
   */
  get lastTranslatedContentTranslationUnit() {
    // Content translation units are already sorted in order of appearance
    return [...this.contentTranslationUnits]
      .reverse()
      .find((unit) => unit.isTranslated);
  }

  /**
   * @return {SubSection|SectionSentence|null}
   */
  get selectedContentTranslationUnit() {
    return this.contentTranslationUnits.find((unit) => unit.selected);
  }

  /**
   * @return {number}
   */
  get selectedContentTranslationUnitIndex() {
    return this.contentTranslationUnits.findIndex((unit) => unit.selected);
  }

  /**
   * @param {string} id
   * @return {SubSection|SectionSentence|null}
   */
  getContentTranslationUnitById(id) {
    return this.contentTranslationUnits.find((unit) => unit.id === id);
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

    return this.selectedContentTranslationUnit?.id;
  }

  /**
   * @return {boolean}
   */
  get isSelectedTranslationUnitLast() {
    return (
      this.selectedContentTranslationUnitIndex ===
      this.contentTranslationUnits.length - 1
    );
  }

  /**
   * @return {SectionSentence|null}
   */
  get followingTranslationUnit() {
    const nextIndex = this.selectedContentTranslationUnitIndex + 1;

    return this.contentTranslationUnits?.[nextIndex];
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

  set editedTranslation(editedTranslation) {
    const editedElement = document.createElement("div");

    editedElement.innerHTML = editedTranslation;
    const editedSubSectionNodes = Array.from(editedElement.children);

    /**
     * @param {SubSection} subSection
     * @returns {Element}
     */
    const findEditedNodeBySubSection = (subSection) =>
      editedSubSectionNodes.find(
        (node) => node.id === subSection.targetSectionId
      );

    this.subSections.forEach((subSection) => {
      const subSectionNode = findEditedNodeBySubSection(subSection);
      let subSectionTranslation = "";

      if (subSectionNode) {
        subSectionTranslation = subSectionNode.innerHTML;
      }
      subSection.editedTranslation = subSectionTranslation;
    });
  }

  /**
   * @return {string}
   */
  get translationHtml() {
    return this.subSections
      .filter((subSection) => subSection.isTranslated)
      .reduce(
        (htmlContent, subSection) => htmlContent + subSection.translatedContent,
        ""
      );
  }

  /**
   * This getter returns the proposed translation of the PageSection as
   * an HTML string, to be used for calculating the percentage of the modified MT
   *
   * @return {string}
   */
  get proposedTranslationHTMLForMTValidation() {
    return this.subSections
      .filter((subSection) => subSection.isTranslated)
      .reduce(
        (htmlContent, subSection) =>
          htmlContent + subSection.proposedContentForMTValidation,
        ""
      );
  }

  /**
   * @return {boolean}
   */
  get isTranslated() {
    return this.subSections.some((subSection) => subSection.isTranslated);
  }

  getOriginalContentByTranslationUnitId(id) {
    if (id === 0) {
      return this.originalTitle;
    }
    const unit = this.getContentTranslationUnitById(id);

    if (unit instanceof SubSection) {
      return unit.transclusionNode.outerHTML;
    } else if (unit instanceof SectionSentence) {
      return unit.originalContent;
    }

    return null;
  }

  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }

  resetSelection() {
    this.isTitleSelected = false;
    this.contentTranslationUnits.forEach((unit) => {
      if (unit instanceof SubSection) {
        unit.blockTemplateSelected = false;
      } else if (unit instanceof SectionSentence) {
        unit.selected = false;
      }
    });
  }

  selectTranslationUnitById(id) {
    this.resetSelection();

    if (id === 0) {
      this.isTitleSelected = true;

      return;
    }
    const unit = this.getContentTranslationUnitById(id);

    if (unit instanceof SubSection) {
      unit.blockTemplateSelected = true;
    } else if (unit instanceof SectionSentence) {
      unit.selected = true;
    }
  }

  /**
   * Given a translation unit id (or 0 for section title)
   * and an MT provider, this method returns a boolean
   * indicating whether the corresponding translation
   * unit has a proposed translation for this MT provider.
   * This method is used inside "translateTranslationUnitById"
   * action, to make sure we don't fetch translation for
   * translation units that have already been translated.
   *
   * @param {string|0} id
   * @param {string} mtProvider
   * @return {boolean}
   */
  hasProposedTranslationByTranslationUnitId(id, mtProvider) {
    if (id === 0) {
      return this.proposedTitleTranslations.hasOwnProperty(mtProvider);
    }
    const unit = this.getContentTranslationUnitById(id);

    if (unit instanceof SubSection) {
      return !!unit.blockTemplateProposedTranslations.hasOwnProperty(
        mtProvider
      );
    } else if (unit instanceof SectionSentence) {
      return unit.proposedTranslations.hasOwnProperty(mtProvider);
    }
  }

  /**
   * Given an MT provider, this method returns the proposed translation for the
   * currently selected translation unit (title/block template/sentence).
   * @param {string} mtProvider
   * @returns {string|null}
   */
  getProposedTranslationByMtProvider(mtProvider) {
    const unit = this.selectedContentTranslationUnit;

    if (this.isTitleSelected) {
      return this.proposedTitleTranslations[mtProvider] || "";
    } else if (unit instanceof SubSection) {
      return unit.blockTemplateProposedTranslations[mtProvider] || "";
    } else if (unit instanceof SectionSentence) {
      return unit.proposedTranslations[mtProvider] || "";
    }

    return null;
  }

  /**
   * This method sets the applied translation and the MT provider used
   * for the selected translation unit
   * @param {string} translation
   * @param {string} provider
   */
  setTranslationForSelectedTranslationUnit(translation, provider) {
    if (this.isTitleSelected) {
      this.translatedTitle = translation;
      this.mtProviderUsedForTitle = provider;

      return;
    }

    if (this.selectedContentTranslationUnit instanceof SubSection) {
      this.selectedContentTranslationUnit.blockTemplateTranslatedContent =
        translation;
      this.selectedContentTranslationUnit.blockTemplateMTProviderUsed =
        provider;
    } else if (this.selectedContentTranslationUnit instanceof SectionSentence) {
      this.selectedContentTranslationUnit.translatedContent = translation;
      this.selectedContentTranslationUnit.mtProviderUsed = provider;
    }
  }

  getTranslationProgress(language) {
    const translatedSubsections = this.subSections.filter(
      (subSection) => subSection.isTranslated
    );

    const any = translatedSubsections.length / this.subSections.length;

    const humanScore =
      mtValidator.getMTScoreForPageSection(this, language) / 100;

    return { any, mt: 1 - humanScore, human: humanScore };
  }

  /**
   * Lead section should also be stored in the "cx_section_translations" database table.
   * Since the "cxsx_source_section_title" field is non-nullable inside that table,
   * we should just give an empty string for lead sections, as empty strings are allowed
   * as valid values for non-nullable fields in MySQL.
   *
   * @return {string}
   */
  get sourceSectionTitleForPublishing() {
    return this.isLeadSection ? LEAD_SECTION_DUMMY_TITLE : this.originalTitle;
  }

  /**
   * Lead section should also be stored in the "cx_section_translations" database table.
   * Since the "cxsx_target_section_title" field is non-nullable inside that table,
   * we should just give an empty string for lead sections, as empty strings are allowed
   * as valid values for non-nullable fields in MySQL.
   *
   * @return {string}
   */
  get targetSectionTitleForPublishing() {
    return this.isLeadSection ? LEAD_SECTION_DUMMY_TITLE : this.title;
  }

  /**
   * @return {boolean}
   */
  get isSelectedTranslationUnitTranslated() {
    if (this.isTitleSelected) {
      return !!this.translatedTitle;
    }

    return !!this.selectedContentTranslationUnit?.isTranslated;
  }

  /**
   * This getter returns the translation units that should be stored
   * inside "cx_corpora" table when the current page section is
   * published. A TranslationUnitPayload DTO is created for each
   * translated subsection and finally an array of such DTOs is
   * returned by the getter.
   *
   * @param {string} baseSectionId
   * @returns {TranslationUnitPayload[]}
   */
  getParallelCorporaUnits(baseSectionId) {
    return this.subSections
      .filter((subSection) => subSection.isTranslated)
      .reduce(
        (units, subSection) => [
          ...units,
          ...subSection.getParallelCorporaTranslationPayloads(baseSectionId),
        ],
        []
      );
  }
}
