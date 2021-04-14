export default class SectionSuggestion {
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    /**
     * Object that maps section titles in source article
     * to already existing section titles in target article
     * @param Object
     */
    present,
    missing,
    /**
     * Array of all section titles in source article
     * ordered by their order of appearance in the article
     * @param String[]
     */
    sourceSections,
    /**
     * Array of all section titles in target article
     * ordered by their order of appearance in the article
     * @param String[]
     */
    targetSections
  } = {}) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.missingSections = missing;
    this.presentSections = present;
    this.sourceSections = sourceSections;
    this.targetSections = targetSections;
  }

  /**
   * @return {string}
   */
  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
  }

  /**
   * Returns the number of missing core (non-appendix)
   * sections for the current section suggestion
   *
   * @internal
   * @param {string[]} appendixSourceTitles
   * @return {number}
   */
  missingCoreSectionsCount(appendixSourceTitles) {
    return Object.keys(this.missingSections).filter(
      sourceSectionTitle => !appendixSourceTitles.includes(sourceSectionTitle)
    ).length;
  }

  /**
   * Returns a boolean indicating if current section suggestion
   * is valid (should be stored and displayed to the user) by
   * checking if suggestion has at least one core (non-appendix)
   * missing section
   *
   * @param {string[]} appendixSourceTitles
   * @return {boolean}
   */
  isValid(appendixSourceTitles) {
    return this.missingCoreSectionsCount(appendixSourceTitles) > 0;
  }

  get missingSectionsCount() {
    return Object.keys(this.missingSections).length;
  }

  get presentSectionsCount() {
    return Object.keys(this.presentSections || {}).length;
  }
}
