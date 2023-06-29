import Translation from "./translation";
import PageSection from "@/wiki/cx/models/pageSection";

export default class DraftTranslation extends Translation {
  /**
   * @param {number} sectionTranslationId
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
   * @param {{any: number, mt: number, human: number}} progress
   */
  constructor({
    sectionTranslationId,
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
    progress,
  }) {
    super({
      translationId,
      sourceTitle,
      sourceLanguage,
      targetLanguage,
      startTimestamp,
      lastUpdatedTimestamp,
      pageRevision,
      status,
      targetTitle,
    });
    this.sectionTranslationId = sectionTranslationId;
    this.sectionId = sectionId;
    this.sourceSectionTitle = sourceSectionTitle;
    this.targetSectionTitle = targetSectionTitle;
    this.progress = progress;
    /**
     * A boolean property, indicating whether the translation has already been restored for continuation.
     * This property is used to avoid re-restoring a draft translation, which could override changes done
     * on top of the restored translation.
     * @type {boolean}
     */
    this.restored = false;
  }

  /**
   * Used inside CXTranslationList.vue
   * @return {`sx-${number}`|`cx-${number}`}
   */
  get key() {
    return (
      (this.sectionTranslationId && `sx-${this.sectionTranslationId}`) ||
      `cx-${this.translationId}`
    );
  }

  get isLeadSectionTranslation() {
    return (
      !this.sourceSectionTitle ||
      this.sourceSectionTitle === PageSection.LEAD_SECTION_DUMMY_TITLE
    );
  }
}
