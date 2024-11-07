export default class PageCollection {
  /**
   * @param {string} name
   * @param {string|null} description
   * @param {string|null} end_date
   * @param {number} articles_count
   * @param {object} articles_by_language_count
   */
  constructor({
    name,
    description,
    end_date,
    articles_count,
    articles_by_language_count,
  }) {
    this.name = name;
    this.description = description;
    this.endDate = end_date;
    this.articlesCount = articles_count;
    this.articlesByLanguageCount = articles_by_language_count;
  }
}
