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
   * @param {{size}[]} [options.revisions]
   * @param {string|null} [options._alias] The normalized page title or the title from which this page is a redirection, if any. See mw/api/page.js#fetchMetadata
   * @param {string|null} [options.content]
   * @param {PageSection[]} [options.sections]
   */
  constructor({
    description,
    langlinkscount,
    lastrevid,
    original,
    pageimage,
    pageid,
    pagelanguage,
    pageprops,
    pageviews,
    thumbnail,
    title,
    revisions,
    _alias,
    content = null,
    sections = [],
  } = {}) {
    this.language = pagelanguage;
    this.title = title;
    this.pageId = pageid;
    this.description = description;
    /**
     * @type {{ source: string, width: number, height: number }}
     */
    this.image = original;
    /**
     * @type {string}
     */
    this.imageName = pageimage;
    this.pageprops = pageprops;
    this.pageviews = pageviews;
    /**
     * @type {{ source: string, width: number, height: number }}
     */
    this.thumbnail = thumbnail;
    this.langLinksCount = langlinkscount;
    this.articleSize = revisions?.[0]?.size;
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
   * @return {PageSection|null}
   */
  get leadSection() {
    return this.sections.find((section) => section.isLeadSection);
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

  /**
   * @param {PageSection[]} updatedSections
   */
  updateSections(updatedSections) {
    for (const updatedSection of updatedSections) {
      const pageSection = this.sections.find(
        (section) => section.id === updatedSection.id
      );

      if (!pageSection) {
        return;
      }

      pageSection.updateSubSections(updatedSection.subSections);
    }
  }

  /**
   * @param {number} width
   * @returns {string|null}
   */
  getImage(width) {
    if (!this.image) {
      return null;
    }

    if (!width) {
      return this.image.source;
    }

    // the thumbnail source is in this format:
    // https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/50px-FullMoon2010.jpg
    const thumbnailSource = this.thumbnail.source;

    // Keep the part before last slash:
    // e.g. https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg
    const baseUrl = thumbnailSource.substring(
      0,
      thumbnailSource.lastIndexOf("/")
    ); // Get everything before the last '/'

    return `${baseUrl}/${width}px-${this.imageName}`;
  }
}
