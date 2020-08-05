import PageSection from "@/wiki/cx/models/pageSection";
import SectionSentence from "@/wiki/cx/models/sectionSentence";

/**
 * This function receives html segmented content as it is returned
 * from cxserver and converts it to an array of PageSection objects
 * @param htmlContent
 * @return {PageSection[]}
 */
const convertSegmentedContentToPageSections = htmlContent => {
  const parser = new DOMParser();

  /** @type Document **/
  const pageDocument = parser.parseFromString(htmlContent, "text/html");
  /** @type NodeList **/
  const sectionNodeList = pageDocument.querySelectorAll(
    "section[rel='cx:Section']:not([data-mw-section-number='0'])"
  );

  /**
   * Node group is an object in the following format: { id: 1, nodes: [] }
   * It groups DOM nodes that have the same mw-section-number attribute
   * and thus belonging to the same translation section
   * @type Object[]
   **/
  const nodeGroups = Array.from(sectionNodeList).reduce(
    addNodeToNodeGroupCollection,
    []
  );

  return nodeGroups.map(nodeGroup => {
    /** First node in array is a DOM node for h2, containing section title */
    const [h2Node, ...contentNodes] = nodeGroup.nodes;
    return new PageSection({
      id: nodeGroup.id,
      title: h2Node.textContent.trim(),
      sentences: convertNodesToSentences(contentNodes)
    });
  });
};

/**
 * Split provided section node to
 * @param sectionNodes
 * @return {SectionSentence[]}
 */
const convertNodesToSentences = sectionNodes =>
  sectionNodes.reduce(
    (sectionSentences, node) => [
      ...sectionSentences,
      ...Array.from(node.getElementsByClassName("cx-segment")).map(
        sentenceNode =>
          new SectionSentence({
            id: sentenceNode.dataset.segmentid,
            originalContent: sentenceNode.innerHTML,
            node: sentenceNode
          })
      )
    ],
    []
  );

/**
 * Given a collection of node groups and a section DOM node, it adds the section node
 * to the nodes array of the corresponding node group object if it exists. If not,
 * it creates a new node group appropriately and adds it to the collection. It returns
 * the updated node group collection.
 * @param {Object[]} nodeGroups
 * @param {Node} sectionNode
 * @return {Object[]}
 */
const addNodeToNodeGroupCollection = (nodeGroups, sectionNode) => {
  const nodeGroup = nodeGroups.find(
    node => node.id === sectionNode.dataset.mwSectionNumber
  );
  if (nodeGroup) {
    nodeGroup.nodes.push(sectionNode);
    return nodeGroups;
  }
  const newNodeGroup = {
    id: sectionNode.dataset.mwSectionNumber,
    nodes: [sectionNode]
  };
  nodeGroups.push(newNodeGroup);
  return nodeGroups;
};

export default {
  convertSegmentedContentToPageSections
};
