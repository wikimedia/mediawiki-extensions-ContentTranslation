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
   * @param {string} [options._alias] The title from this page redirected from, if any. See mw/api/page.js#fetchMetadata
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
    sections = []
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
   * For a given target section title it returns the order
   * of this section inside target page if present or -1 elsewise
   * @param {string} sectionTitle
   * @return {number}
   */
  getSectionNumberByTitle(sectionTitle) {
    const sectionIndex = this.sections.findIndex(
      section => section.originalTitle === sectionTitle
    );

    if (sectionIndex < -1) {
      return -1;
    }
    const precedingSections = this.sections.slice(0, sectionIndex);

    return (
      precedingSections.reduce(
        (count, section) =>
          count +
          section.subSections.filter(subsection => subsection.isHeadingSection)
            .length,
        0
      ) + 1
    );
  }

  /**
   * @param {string} sectionTitle
   * @return {PageSection|null}
   */
  getSectionByTitle(sectionTitle) {
    return (this.sections || []).find(
      section => section.originalTitle === sectionTitle
    );
  }
}
