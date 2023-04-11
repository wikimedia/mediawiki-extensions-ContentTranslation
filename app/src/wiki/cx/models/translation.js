import PageSection from "./pageSection";

export default class Translation {
  /**
   * @param {number} id
   * @param {number} translationId
   * @param {string} sectionId
   * @param {string} sourceTitle
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string} startTimestamp
   * @param {string} lastUpdatedTimestamp
   * @param {string} status
   * @param {string} pageRevision
   * @param {string|null} targetTitle
   * @param {string|null} sourceSectionTitle
   * @param {string|null} targetSectionTitle
   */
  constructor({
    id,
    translationId,
    sectionId,
    sourceTitle,
    sourceLanguage,
    targetLanguage,
    startTimestamp,
    lastUpdatedTimestamp,
    status,
    pageRevision,
    targetTitle,
    sourceSectionTitle,
    targetSectionTitle,
  }) {
    this.id = id;
    this.translationId = translationId;
    this.sectionId = sectionId;
    this.sourceTitle = sourceTitle;
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.startTimestamp = startTimestamp;
    this.lastUpdatedTimestamp = lastUpdatedTimestamp;
    this.status = status;
    this.pageRevision = pageRevision;
    this.targetTitle = targetTitle;
    this.sourceSectionTitle = sourceSectionTitle;
    this.targetSectionTitle = targetSectionTitle;
    /**
     * A boolean property, indicating whether the translation has already been restored for continuation.
     * This property is used to avoid re-restoring a draft translation, which could override changes done
     * on top of the restored translation.
     * @type {boolean}
     */
    this.restored = false;
  }

  get isLeadSectionTranslation() {
    return (
      !this.sourceSectionTitle ||
      this.sourceSectionTitle === PageSection.LEAD_SECTION_DUMMY_TITLE
    );
  }
}
