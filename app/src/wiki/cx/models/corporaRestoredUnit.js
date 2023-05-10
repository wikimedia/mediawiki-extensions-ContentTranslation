/**
 * @param text
 * @return {object}
 */
const toHtmlSegments = (text) => {
  if (!text) {
    return {};
  }
  const wrapperDiv = document.createElement("div");
  wrapperDiv.innerHTML = text;
  const node = wrapperDiv.firstChild;

  const segments = Array.from(node.getElementsByClassName("cx-segment"));

  return segments.reduce(
    (segmentsWrapper, segment) => ({
      ...segmentsWrapper,
      [segment.dataset.segmentid]: segment,
    }),
    {}
  );
};

export default class CorporaRestoredUnit {
  /**
   * @param {{user, source, mt, sequenceId}} unit
   * @param {{engine: null, content: string, timestamp: string}} unit.user
   * @param {{engine: null, content: string, timestamp: string}} unit.source
   * @param {{engine: string, content: string, timestamp: string}} unit.mt - current possible values for engine: "Elia"|"MinT"|"Google"|"Yandex"
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

  /**
   * @return {{mt: object, id: string, user: object}[]}
   */
  get segments() {
    // the "user" property is always set in SX, but in CX it's NOT set when MT is not modified
    // and MT is coming from an actual MT provider (e.g. Google - not 'source' or 'scratch')
    const userTranslatedSegments = toHtmlSegments(this.user?.content);

    // the "mt" property is NOT set when the MT provider is "original" or "empty" in SX,
    // and when the MT provider is 'source' in CX
    const mtSegments = toHtmlSegments(this.mt?.content);
    const segmentIds = [
      ...new Set([
        ...Object.keys(userTranslatedSegments),
        ...Object.keys(mtSegments),
      ]),
    ];

    return segmentIds.map((segmentId) => ({
      id: segmentId,
      mt: mtSegments[segmentId] || null,
      user: userTranslatedSegments[segmentId] || null,
    }));
  }
}
