import SectionSentence from "../../cx/models/sectionSentence";

export default class PageSection {
  constructor({ toclevel, line, anchor, text } = {}) {
    this.tocLevel = toclevel;
    this.line = line;
    this.anchor = anchor;
    this.text = text;
    const element = document.createElement("body");
    element.innerHTML = text;
    const htmlContent = element.firstElementChild.innerHTML;
    // TODO: Handle edge cases (e.g. reference after last dot)
    /**
     * @type {SectionSentence[]}
     */
    this.sentences = htmlContent.split(".").map(
      (sentence, index) =>
        new SectionSentence({
          originalContent: sentence,
          // Preselect first sentence
          selected: index === 0
        })
    );
  }
}
