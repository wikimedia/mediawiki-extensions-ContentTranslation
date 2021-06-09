import PageSection from "../wiki/cx/models/pageSection";
import SectionSentence from "../wiki/cx/models/sectionSentence";
import SubSection from "../wiki/cx/models/subSection";
import { getSubSectionNodes } from "./visualEditorHelper";

/**
 * This function receives html segmented content as it is returned
 * from cxserver and converts it to an array of PageSection objects
 *
 * @param htmlContent
 * @return {PageSection[]}
 */
const convertSegmentedContentToPageSections = htmlContent => {
  /** @type {Node[]} */
  const subSectionNodeList = Array.from(getSubSectionNodes(htmlContent));
  /**
   * sectionNodeGroups is an array of arrays. Each sub-array
   * contains all sub-section HTML nodes that belong to the
   * same section
   * @type {Node[][]}
   **/
  const sectionNodeGroups = groupSubSectionNodes(subSectionNodeList);

  return sectionNodeGroups.map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    sectionNodes => {
      /** First node in array is a DOM node for h2, containing section title */
      const [firstNode, ...contentNodes] = sectionNodes;
      let title = "";
      const id = firstNode.dataset.mwSectionNumber;

      // If firstNode is an h2 element then current section is a regular section.
      // If not, current section is a lead section since only lead sections do not
      // have a section title
      if (firstNode.querySelector("h2")) {
        title = firstNode.textContent.trim();
      } else {
        contentNodes.unshift(firstNode);
      }
      const subSections = contentNodes.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        node =>
          new SubSection({
            sentences: convertNodeToSentences(node),
            node
          })
      );

      const isLeadSection = !title;

      return new PageSection({ id, title, subSections, isLeadSection });
    }
  );
};

/**
 * Given a NodeList of all html nodes returned by CX Server, this method
 * returns an array of arrays. Each nested array contains all html nodes
 * that belong to the same section.
 * @param {Node[]} subSectionNodeList
 * @return {Node[][]}
 */
const groupSubSectionNodes = subSectionNodeList => {
  const groups = subSectionNodeList.reduce((groups, sectionNode) => {
    const id = sectionNode.dataset.mwSectionNumber;
    groups[id] = groups[id] ? [...groups[id], sectionNode] : [sectionNode];

    return groups;
  }, {});

  return Object.values(groups);
};

/**
 * Split provided section node to
 * @param node
 * @return {SectionSentence[]}
 */
const convertNodeToSentences = node =>
  Array.from(node.getElementsByClassName("cx-segment")).map(
    sentenceNode =>
      new SectionSentence({
        id: sentenceNode.dataset.segmentid,
        originalContent: sentenceNode.innerHTML,
        node: sentenceNode
      })
  );

export default {
  convertSegmentedContentToPageSections
};
