export default class FeaturedCollection {
  /**
   * @param {string} name
   * @param {string} description
   * @param {string} communityName
   * @param {string} link
   * @param {string} language Useful for logging/debugging purposes
   */
  constructor(name, description, communityName, link, language) {
    this.name = name;
    this.description = description;
    this.communityName = communityName;
    this.link = link;
    this.language = language;
  }
}
