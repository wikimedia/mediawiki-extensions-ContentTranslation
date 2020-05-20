export class Page {
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
    title
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
  }

  get id() {
    return `${this.language}/${this.title}`;
  }
}
