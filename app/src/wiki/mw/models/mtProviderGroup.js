const ORIGINAL_TEXT_PROVIDER_KEY = "original";
const EMPTY_TEXT_PROVIDER_KEY = "empty";

export default class MTProviderGroup {
  constructor(sourceLanguage, targetLanguage, providers) {
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.providers = [
      ...(providers || []),
      this.constructor.ORIGINAL_TEXT_PROVIDER_KEY,
      this.constructor.EMPTY_TEXT_PROVIDER_KEY
    ];
  }

  static get ORIGINAL_TEXT_PROVIDER_KEY() {
    return ORIGINAL_TEXT_PROVIDER_KEY;
  }

  static get EMPTY_TEXT_PROVIDER_KEY() {
    return EMPTY_TEXT_PROVIDER_KEY;
  }
}
