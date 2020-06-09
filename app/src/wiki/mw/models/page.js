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
    _alias // The title from this page redirected from, if any. See mw/api/page.js#fetchMetadata
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
  }

  get id() {
    return `${this.language}/${this.title}`;
  }
}
