export default class SectionSuggestion {
  /**
   * Creates an instance of SectionSuggestion.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} options.targetTitle
   * @param {Object<string, string>} options.present Object that maps section titles in source article to already existing section titles in target article
   * @param {Object<string, string>} options.missing
   * @param {string[]} options.sourceSections Array of all section titles in source article ordered by their order of appearance in the article
   * @param {string[]} options.targetSections  Array of all section titles in target article  ordered by their order of appearance in the article
   */
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    present,
    missing,
    sourceSections,
    targetSections
  }) {
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

  /**
   * @return {number}
   */
  get missingSectionsCount() {
    return Object.keys(this.missingSections).length;
  }

  /**
   * @return {number}
   */
  get presentSectionsCount() {
    return Object.keys(this.presentSections || {}).length;
  }
}
