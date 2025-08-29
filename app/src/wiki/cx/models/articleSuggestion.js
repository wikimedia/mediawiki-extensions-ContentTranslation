import { getArticleDifficultyBySize } from "@/utils/translationDifficulty";
/**
 * Model representing an article suggestion for translation.
 */
export default class ArticleSuggestion {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} [options.targetTitle]
   * @param {number} options.langLinksCount
   * @param {string} options.wikidataId
   * @param {number} options.size
   * @param {string|null} options.suggestionSeed
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   */
  constructor({
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    targetTitle,
    langLinksCount,
    wikidataId,
    size,
    suggestionSeed = null,
    suggestionProvider = null,
  }) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.sourceTitle = sourceTitle;
    this.targetTitle = targetTitle;
    this.wikidataId = wikidataId;
    this.size = size;
    this.difficulty = getArticleDifficultyBySize(size);
    this.langLinksCount = langLinksCount;
    /** @type {{type: String, id: String}|null} */
    this.suggestionProvider = suggestionProvider;
    this.suggestionSeed = suggestionSeed;
    this.isListable = true;
  }

  /**
   * @returns {string}
   */
  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
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
