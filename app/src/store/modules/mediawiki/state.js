export default {
  /** @type {Page[]} */
  pages: [],
  /** @type {Boolean} */
  languagesRequested: false,
  languageTitleGroups: [],
  supportedLanguageCodes: [],
  /** @type {Boolean} */
  supportedLanguageCodesRequested: false,
  supportedMTProviderGroups: [],
  /**
   * Stores nearby pages to be used as suggestions for section translation
   * Format: {{ en: Page[], es: Page[], ... }}
   * @type {Object}
   */
  nearbyPages: {}
};
