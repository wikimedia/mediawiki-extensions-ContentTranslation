const providers = ["cx-published-translations"];

/**
 * This model represents a collection of section suggestion seeds
 * that belong to a specific language pair. It stores information
 * about seeds and available seed providers for the corresponding
 * language pair.
 */
export default class SuggestionSeedCollection {
  /**
   * Creates an instance of SuggestionSeedCollection.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}[]} options.seeds
   * @param {string[]} options.exhaustedProviders
   */
  constructor({
    sourceLanguage,
    targetLanguage,
    seeds = [],
    exhaustedProviders = []
  }) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.seeds = seeds;
    this.exhaustedProviders = exhaustedProviders;
  }

  /**
   * Check whether another language pair match with same language pair
   * of this instance.
   * @param sourceLanguage
   * @param targetLanguage
   * @return {boolean}
   */
  doesBelongToLanguagePair(sourceLanguage, targetLanguage) {
    return (
      this.sourceLanguage === sourceLanguage &&
      this.targetLanguage === targetLanguage
    );
  }

  /**
   * Whether all known providers of this seed collection exhausted(used up)
   *
   * @returns {boolean}
   */
  get allProvidersExhausted() {
    return providers.every(provider =>
      this.exhaustedProviders.includes(provider)
    );
  }

  /**
   * Get next provider that is not used yet, if any
   *
   * @returns {string|null}
   */
  get nextUnexhaustedProvider() {
    return providers.find(
      provider => !this.exhaustedProviders.includes(provider)
    );
  }

  /**
   * @param {string} provider
   */
  addExhaustedProvider(provider) {
    this.exhaustedProviders.push(provider);
  }

  /**
   * Return first seed and remove it from the array
   *
   * @return {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}}
   */
  getSeedArticleForSuggestion() {
    return this.seeds.shift();
  }
}
