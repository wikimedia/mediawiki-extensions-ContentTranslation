export default class Page {
  /**
   * @param {Object} options
   * @param {string} [options.description]
   * @param {string|number} [options.langlinkscount]
   * @param {string} [options.lastrevid]
   * @param {string} [options.original]
   * @param {string} [options.pageid]
   * @param {string} [options.pagelanguage]
   * @param {{wikibase_item: string}} [options.pageprops]
   * @param {string} [options.pageviews]
   * @param {string} [options.thumbnail]
   * @param {string} [options.title]
   * @param {string|null} [options._alias] The title from this page redirected from, if any. See mw/api/page.js#fetchMetadata
   * @param {string} [options.content]
   * @param {PageSection[]} [options.sections]
   */
  constructor({
    description,
    langlinkscount,
    lastrevid,
    original,
    pageid,
    pagelanguage,
    pageprops,
    pageviews,
    thumbnail,
    title,
    _alias,
    content = null,
    sections = [],
  } = {}) {
    this.language = pagelanguage;
    this.title = title;
    this.pageId = pageid;
    this.description = description;
    this.image = original;
    this.pageprops = pageprops;
    this.pageviews = pageviews;
    this.thumbnail = thumbnail;
    this.langLinksCount = langlinkscount;
    this.revision = lastrevid;
    this.alias = _alias;
    this.wikidataId = pageprops?.wikibase_item;
    this.content = content;
    this.sections = sections;
  }

  /**
   * @return {string}
   */
  get id() {
    return `${this.language}/${this.title}`;
  }

  /**
   * @param {string} sectionTitle
   * @return {PageSection|null}
   */
  getSectionByTitle(sectionTitle) {
    return (this.sections || []).find(
      (section) => section.originalTitle === sectionTitle
    );
  }
}
