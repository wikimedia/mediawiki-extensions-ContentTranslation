export default class LanguageTitleGroup {
  constructor(wikidataId, titles) {
    this.wikidataId = wikidataId;
    this.titles = titles;
  }

  getTitleForLanguage(language) {
    return this.titles.find(title => title.lang === language)?.title;
  }

  hasLanguage(language) {
    return this.titles.some(title => title.lang === language);
  }
}
