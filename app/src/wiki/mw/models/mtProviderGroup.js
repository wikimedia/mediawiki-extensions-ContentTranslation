const ORIGINAL_TEXT_PROVIDER_KEY = "original";
const EMPTY_TEXT_PROVIDER_KEY = "empty";

/**
 * Map provider id to human readable label.
 *
 * @param {string} provider Id of the provider
 * @return {string} label
 */
function getLabelForMTProvider(provider) {
  return (
    {
      Elia: "Elia.eus",
      Flores: "NLLB-200",
      Google: "Google Translate",
      Yandex: "Yandex.Translate",
    }[provider] || provider
  );
}

export default class MTProviderGroup {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(sourceLanguage, targetLanguage, providers = []) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.providers = [
      ...providers.map(getLabelForMTProvider),
      ORIGINAL_TEXT_PROVIDER_KEY,
      EMPTY_TEXT_PROVIDER_KEY,
    ];
  }

  static get ORIGINAL_TEXT_PROVIDER_KEY() {
    return ORIGINAL_TEXT_PROVIDER_KEY;
  }

  static get EMPTY_TEXT_PROVIDER_KEY() {
    return EMPTY_TEXT_PROVIDER_KEY;
  }

  static isUserMTProvider(mtProvider) {
    return [ORIGINAL_TEXT_PROVIDER_KEY, EMPTY_TEXT_PROVIDER_KEY].includes(
      mtProvider
    );
  }
}
