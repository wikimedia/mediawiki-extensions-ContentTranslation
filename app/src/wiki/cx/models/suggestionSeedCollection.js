/**
 * This model represents a collection of section suggestion seeds
 * that belong to a specific language pair. It stores information
 * about seeds.
 */
export default class SuggestionSeedCollection {
  /**
   * Creates an instance of SuggestionSeedCollection.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   */
  constructor({ sourceLanguage, targetLanguage }) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    // shuffle seeds array to avoid having using the same seeds after every refresh
    this.seeds = [];
  }

  /**
   * Check whether another language pair match with same language pair
   * of this instance.
   * @param sourceLanguage
   * @param targetLanguage
   * @return {boolean}
   */
  matchesLanguagePair(sourceLanguage, targetLanguage) {
    return (
      this.sourceLanguage === sourceLanguage &&
      this.targetLanguage === targetLanguage
    );
  }

  /**
   * Return first seed and remove it from the array
   *
   * @return {string|undefined}
   */
  shiftSeeds() {
    return this.seeds.shift();
  }
}
