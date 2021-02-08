const providers = ["cx-published-translations", "user-published-translations"];

// This model represents a collection of section suggestion seeds
// that belong to a specific language pair. It stores information
// about seeds and available seed providers for the corresponding
// language pair. Seeds are objects in the following format:
// {sourceTitle: string, sourceLanguage: string, targetLanguage: string}
export default class SectionSuggestionSeedCollection {
  constructor({
    sourceLanguage,
    targetLanguage,
    seeds = [],
    exhaustedProviders = []
  } = {}) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    /**
     * @type {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}[]}
     */
    this.seeds = seeds;
    this.exhaustedProviders = exhaustedProviders;
  }

  /**
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

  get allProvidersExhausted() {
    return providers.every(provider =>
      this.exhaustedProviders.includes(provider)
    );
  }

  get nextUnexhaustedProvider() {
    return providers.find(
      provider => !this.exhaustedProviders.includes(provider)
    );
  }

  addExhaustedProvider(provider) {
    this.exhaustedProviders.push(provider);
  }
}
