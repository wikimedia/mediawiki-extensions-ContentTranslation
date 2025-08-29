import {
  DifficultyEnum,
  getSectionDifficultyBySize,
} from "@/utils/translationDifficulty";
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
   * @param {Object<string, {size: number}>} options.sourceSectionInfo
   * @param {Object<string, number>} options.sourceSectionSizes
   * @param {string[]} options.sourceSections Array of all section titles in source article ordered by their order of appearance in the article
   * @param {string[]} options.targetSections Array of all section titles in target article ordered by their order of appearance in the article
   * @param {string|null} options.suggestionSeed
   * @param {boolean} options.isListable A boolean indicating whether we should display this section suggestion inside dashboard suggestion list
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   */
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    present,
    missing,
    sourceSectionInfo = {},
    sourceSectionSizes = {},
    sourceSections = [],
    targetSections = [],
    suggestionSeed = null,
    isListable = true,
    suggestionProvider = null,
  }) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.missingSections = missing;
    this.presentSections = present;
    this.sourceSectionInfo = sourceSectionInfo;
    this.sourceSectionSizes = sourceSectionSizes;
    this.sourceSections = sourceSections;
    this.targetSections = targetSections;
    this.suggestionSeed = suggestionSeed;
    this.isListable = isListable;
    /** @type {{type: String, id: String}|null} */
    this.suggestionProvider = suggestionProvider;
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

  getSectionDifficultyLevel(sectionTitle) {
    // TODO: update rec-api to return sourceSectionSize exactly like cx-server
    const sectionSize =
      this.sourceSectionInfo?.[sectionTitle]?.size ||
      this.sourceSectionSizes?.[sectionTitle];

    return getSectionDifficultyBySize(sectionSize);
  }

  isEasy(sectionTitle) {
    return this.getSectionDifficultyLevel(sectionTitle) === DifficultyEnum.easy;
  }

  /**
   * @return {number}
   */
  get missingSectionsCount() {
    return Object.keys(this.missingSections || {}).length;
  }

  get easyMissingSectionsCount() {
    return Object.keys(this.missingSections || {}).filter((missingSection) =>
      this.isEasy(missingSection)
    ).length;
  }

  /**
   * @return {number}
   */
  get presentSectionsCount() {
    return Object.keys(this.presentSections || {}).length;
  }

  /**
   * @return {{targetTitle: string, sourceTitle: string, isEasy: boolean}[]}
   */
  get orderedMissingSections() {
    return Object.entries(this.missingSections || {})
      .map((missing) => ({
        sourceTitle: missing[0],
        targetTitle: missing[1],
        isEasy: this.isEasy(missing[0]),
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
   * @param {{ id: string, type: string }} filter
   */
  matchesFilter(filter) {
    return (
      this.suggestionProvider?.type === filter.type &&
      this.suggestionProvider?.id === filter.id
    );
  }
}
