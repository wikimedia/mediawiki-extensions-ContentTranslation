import ArticleSuggestion from "@/wiki/cx/models/articleSuggestion";
import PageCollection from "@/wiki/cx/models/pageCollection";

export default class CollectionArticleSuggestion extends ArticleSuggestion {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} [options.targetTitle]
   * @param {number} options.langLinksCount
   * @param {string} options.wikidataId
   * @param {string} options.size
   * @param {{ type: string, id: string }|null} options.suggestionProvider
   * @param {{ name: string, description: string|null, end_date: string|null, articles_count: number, articles_by_language_count: object }} collection
   */
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    langLinksCount,
    wikidataId,
    size,
    suggestionProvider = null,
    collection = {},
  }) {
    super({
      sourceLanguage,
      targetLanguage,
      sourceTitle,
      targetTitle,
      langLinksCount,
      wikidataId,
      size,
      suggestionProvider,
    });

    this.collection = new PageCollection(collection);
  }
}
