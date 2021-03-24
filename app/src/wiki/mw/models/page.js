export default class Page {
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
    _alias, // The title from this page redirected from, if any. See mw/api/page.js#fetchMetadata
    content = null,
    sections = [] // Array of PageSection objects
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
    /** @type {PageSection[]} */
    this.sections = sections;
  }

  get id() {
    return `${this.language}/${this.title}`;
  }

  /**
   * For a given target section title it returns the order
   * of this section inside target page if present or -1 elsewise
   * @param {String} sectionTitle
   * @return {Number}
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
            .length +
          1,
        0
      ) + 1
    );
  }
}
