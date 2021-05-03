export default class LanguageTitleGroup {
  /**
   * @param {string} wikidataId
   * @param {{ lang: string, title: string}[]} titles
   */
  constructor(wikidataId, titles) {
    this.wikidataId = wikidataId;
    this.titles = titles;
  }

  /**
   * @param {string} language
   * @return {string|null}
   */
  getTitleForLanguage(language) {
    return this.titles.find(title => title.lang === language)?.title;
  }

  /**
   * @param {string} language
   * @return {boolean}
   */
  hasLanguage(language) {
    return this.titles.some(title => title.lang === language);
  }
}
