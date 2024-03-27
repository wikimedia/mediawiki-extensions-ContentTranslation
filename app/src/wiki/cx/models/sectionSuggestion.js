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
   * @param {string[]} options.targetSections Array of all section titles in target article ordered by their order of appearance in the article
   * @param {boolean} options.isListable A boolean indicating whether we should display this section suggestion inside dashboard suggestion list
   */
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    present,
    missing,
    sourceSections = [],
    targetSections = [],
    isListable = true,
  }) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.missingSections = missing;
    this.presentSections = present;
    this.sourceSections = sourceSections;
    this.targetSections = targetSections;
    this.isListable = isListable;
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
   * @param {string[]} appendixTargetTitles
   * @return {number}
   */
  missingCoreSectionsCount(appendixTargetTitles) {
    return Object.values(this.missingSections).filter(
      (targetSectionTitle) => !appendixTargetTitles.includes(targetSectionTitle)
    ).length;
  }

  /**
   * Given an array of appendix section titles in target language,
   * this method returns a boolean indicating if current section suggestion
   * is valid (should be stored and displayed to the user) by
   * checking if suggestion has at least one core (non-appendix)
   * missing section
   *
   * @param {string[]} appendixTargetTitles
   * @return {boolean}
   */
  isValid(appendixTargetTitles) {
    return this.missingCoreSectionsCount(appendixTargetTitles) > 0;
  }

  /**
   * @return {number}
   */
  get missingSectionsCount() {
    return Object.keys(this.missingSections || {}).length;
  }

  /**
   * @return {number}
   */
  get presentSectionsCount() {
    return Object.keys(this.presentSections || {}).length;
  }

  /**
   * @return {{targetTitle: string, sourceTitle: string}[]}
   */
  get orderedMissingSections() {
    return Object.entries(this.missingSections || {})
      .map((missing) => ({
        sourceTitle: missing[0],
        targetTitle: missing[1],
      }))
      .sort(
        (section1, section2) =>
          this.sourceSections.indexOf(section1.sourceTitle) -
          this.sourceSections.indexOf(section2.sourceTitle)
      );
  }

  /**
   * @return {{targetTitle: string, sourceTitle: string}[]}
   */
  get orderedPresentSections() {
    return Object.entries(this.presentSections || {})
      .map((present) => ({
        sourceTitle: present[0],
        targetTitle: present[1],
      }))
      .sort(
        (section1, section2) =>
          this.sourceSections.indexOf(section1.sourceTitle) -
          this.sourceSections.indexOf(section2.sourceTitle)
      );
  }

  /**
   * @param {string} sectionTitle
   * @return {boolean}
   */
  hasSectionTitle(sectionTitle) {
    return this.sourceSections.includes(sectionTitle);
  }
}
