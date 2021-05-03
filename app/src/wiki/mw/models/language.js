export default class Language {
  /**
   * @param {Object} options
   * @param {string} options.code The language code. (This code is MediaWiki-specific, though there are overlaps with other standards.)
   * @param {string} options.bcp47 The BCP-47 language code.
   * @param {string} options.dir The writing direction of the language (either ltr or rtl).
   * @param {string} options.autonym The autonym of the language, that is, the name in that language.
   * @param {string} options.name The name of the language in the language specified by the uselang parameter, with language fallbacks applied if necessary.
   * @param {string[]} options.fallbacks The language codes of the fallback languages configured for this language. The implicit final fallback to 'en' is not included (but some languages may fall back to 'en' explicitly).
   * @param {string[]} options.variants The language codes of the variants supported by this language.
   */
  constructor({ code, bcp47, dir, autonym, name, fallbacks, variants }) {
    this.code = code;
    this.bcp47 = bcp47;
    this.autonym = autonym;
    this.dir = dir;
    this.name = name;
    this.fallbacks = fallbacks;
    this.variants = variants;
  }
}
