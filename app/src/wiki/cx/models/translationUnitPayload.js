/**
 * This class represents a Data Transfer Object,
 * containing all the needed information for a
 * translation unit that should be stored inside
 * "cx_corpora" table.
 */
export default class TranslationUnitPayload {
  /**
   * @param {string} baseSectionId the base section id that will be used as "cxsx_section_id" inside "cx_section_translations" for the page section that the translation unit belongs to
   * @param {string} subSectionId the id of the subsection that the translation unit belongs to
   * @param {string} content the content of the translated translation unit (i.e. subsection)
   * @param {boolean} validate abuse filter validation flag
   * @param {string} origin the content origin, i.e. the most used MT provider for this subsection
   */
  constructor({
    baseSectionId,
    subSectionId,
    content,
    validate = false,
    origin,
  } = {}) {
    this.baseSectionId = baseSectionId;
    this.subSectionId = subSectionId;
    this.content = content;
    this.validate = validate;
    this.origin = origin;
  }

  /**
   * This getter returns the value to be stored as "cxc_section_id" field inside "cx_corpora" table,
   * in the following form: "{page_revision_id}_{page_section_id}_{subsection_id}"
   *
   * @returns {string}
   */
  get sectionId() {
    return `${this.baseSectionId}_${this.subSectionId}`;
  }

  /**
   * @returns {{origin: string, sectionId: string, content: string, validate: boolean}}
   */
  get payload() {
    return {
      content: this.content,
      sectionId: this.sectionId,
      origin: this.origin,
      validate: false,
    };
  }
}
