export default class CorporaRestoredUnit {
  /**
   * @param {{user, source, mt, sequenceId}} unit
   * @param {{engine: null, content: string, timestamp: string}} unit.user
   * @param {{engine: null, content: string, timestamp: string}} unit.source
   * @param {{engine: string, content: string, timestamp: string}} unit.mt - current possible values for engine: "Elia"|"Flores"|"Google"|"Yandex"
   * @param {number} unit.sequenceId
   */
  constructor({ user, source, mt, sequenceId }) {
    this.user = user;
    this.source = source;
    this.mt = mt;
    this.sequenceId = sequenceId;
  }

  /**
   * @return {Node}
   */
  get sourceSectionEl() {
    const restoredSectionDiv = document.createElement("div");
    restoredSectionDiv.innerHTML = this.source.content;

    return restoredSectionDiv.firstChild;
  }

  /**
   * @return {number}
   */
  get pageSectionId() {
    return parseInt(this.sourceSectionEl.dataset.mwSectionNumber);
  }

  get subSectionId() {
    return this.sourceSectionEl.id.replace(/\D/g, "");
  }
}
