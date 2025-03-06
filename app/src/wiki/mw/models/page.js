export default class Page {
  /**
   * @param {Object} options
   * @param {string} [options.description]
   * @param {number} [options.langlinkscount]
   * @param {number} [options.lastrevid]
   * @param {{ source: string, width: number, height: number }|null} [options.original]
   * @param {string|null} [options.pageimage]
   * @param {number} [options.pageid]
   * @param {string} [options.pagelanguage]
   * @param {{wikibase_item: string}} [options.pageprops]
   * @param {object} [options.pageviews]
   * @param {{ source: string, width: number, height: number }|null} [options.thumbnail]
   * @param {string} [options.title]
   * @param {{size}[]} [options.revisions]
   * @param {string|undefined} [options._alias] The normalized page title or the title from which this page is a redirection, if any. See mw/api/page.js#fetchMetadata
   * @param {string|null} [options.content]
   * @param {PageSection[]} [options.sections]
   */
  constructor({
    description,
    langlinkscount,
    lastrevid,
    original = null,
    pageimage = null,
    pageid,
    pagelanguage,
    pageprops,
    pageviews,
    thumbnail = null,
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
    /** @type {{ source: string, width: number, height: number }|null} */
    this.image = original;
    /** @type {string|null} */
    this.imageName = pageimage;
    this.pageprops = pageprops;
    this.pageviews = pageviews;
    /** @type {{ source: string, width: number, height: number }|null} */
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

    // Build a regex to find the "<width>px-" part before the exact image name
    // Escape special regex characters in the image name to safely use it in the regex
    const pattern = new RegExp(
      `/\\d+px-${this.imageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`
    );

    // Replace the original thumbnail width with the new width while keeping the thumbnail path intact
    return thumbnailSource.replace(pattern, `/${width}px-${this.imageName}`);
  }
}
