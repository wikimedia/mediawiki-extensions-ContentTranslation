const ORIGINAL_TEXT_PROVIDER_KEY = "original";
const EMPTY_TEXT_PROVIDER_KEY = "empty";

/**
 * object that maps provider ids to human-readable labels
 * @type {{Google: string, Yandex: string, Elia: string}}
 */
const mTProviderLabels = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate",
};

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
      ...providers,
      ORIGINAL_TEXT_PROVIDER_KEY,
      EMPTY_TEXT_PROVIDER_KEY,
    ];
  }

  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(mtProvider) {
    return mTProviderLabels[mtProvider] || mtProvider;
  }

  /**
   * Given a language pair, this static method returns the key to be used to store the
   * preferred MT provider for this language pair inside localStorage (Web Storage API)
   *
   *
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   */
  static getStorageKey(sourceLanguage, targetLanguage) {
    return ["cxMTProvider", sourceLanguage, targetLanguage].join("-");
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
