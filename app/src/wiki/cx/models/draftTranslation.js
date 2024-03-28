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

  /**
   * This getter returns a boolean indicating whether this is a plain article translation. By that,
   * we mean that there is no section translation row in the database that is associated with this
   * draft translation. This is the case for draft translations started on CX and never been edited on SX.
   *
   * @return {boolean}
   */
  get isArticleTranslation() {
    return !!this.translationId && !this.sectionTranslationId;
  }

  /**
   * This method returns a boolean indicating whether this translation will result in the creation
   * of a new page, if published in the main namespace. This is different from the "isArticleTranslation"
   * getter, because in addition to article translations, this getter also returns true for section
   * translations of lead sections, created in mobile editor.
   * @return {boolean}
   */
  get isLeadSectionTranslation() {
    return PageSection.isSectionLead(this.sourceSectionTitle);
  }

  sectionTitleMatches(sectionTitle) {
    if (this.isLeadSectionTranslation) {
      return PageSection.isSectionLead(sectionTitle);
    }

    return this.sourceSectionTitle === sectionTitle;
  }
}
