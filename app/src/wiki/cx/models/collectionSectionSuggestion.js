import SectionSuggestion from "./sectionSuggestion";
import PageCollection from "./pageCollection";

export default class CollectionSectionSuggestion extends SectionSuggestion {
  /**
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
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   * @param {{ name: string, description: string|null, end_date: string|null, articles_count: number, articles_by_language_count: object }} collection
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
    suggestionProvider = null,
    collection = {},
  }) {
    super({
      sourceLanguage,
      targetLanguage,
      sourceTitle,
      targetTitle,
      present,
      missing,
      sourceSections,
      targetSections,
      isListable,
      suggestionProvider,
    });

    this.collection = new PageCollection(collection);
  }
}
