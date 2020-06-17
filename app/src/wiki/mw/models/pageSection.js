export default class PageSection {
  constructor({ toclevel, line, anchor, text } = {}) {
    this.tocLevel = toclevel;
    this.line = line;
    this.anchor = anchor;
    this.text = text;
  }
}
