import SubSection from "./subSection";
import SectionSentence from "./sectionSentence";

describe("subSection model test", () => {
  it("should set the id properly", () => {
    const subSection = new SubSection({ node: { id: "cxSourceSection101" } });
    expect(subSection.id).toEqual("101");
    expect(subSection.node.id).toEqual("cxSourceSection" + subSection.id);
  });

  it("should return the edited translation as translated content, when it exists", () => {
    const subSection = new SubSection({ node: { id: "cxSourceSection1" } });
    subSection.editedTranslation = "Edited translation";
    expect(subSection.translatedContent).toEqual("Edited translation");
  });

  it("should return the block template translation as translated content, when subsection is a block template", () => {
    const subSectionNode = document.createElement("section", {
      id: "cxSourceSection1",
    });
    const childNode = document.createElement("div");
    childNode.setAttribute("about", "dummyAbout");
    subSectionNode.appendChild(childNode);
    const subSection = new SubSection({ node: subSectionNode });
    subSection.blockTemplateTranslatedContent = "Block template translation";
    expect(subSection.translatedContent).toEqual("Block template translation");
  });

  it("should return the contents of translated sentences as translated content, if it's not a block template and no edited translation exists", () => {
    const createSentenceVariables = (id, translatedContent) => {
      const node = document.createElement("span");
      node.className = "cx-segment";
      node.dataset.segmentid = id;
      const sentence = new SectionSentence({ id, node });
      sentence.translatedContent = translatedContent;

      return { node, sentence };
    };

    const sentenceVariables1 = createSentenceVariables(
      "1",
      "First translated sentence"
    );
    const sentenceVariables2 = createSentenceVariables(
      "2",
      "Second translated sentence"
    );

    const subSectionNode = document.createElement("section", {
      id: "cxSourceSection1",
    });
    subSectionNode.appendChild(sentenceVariables1.node);
    subSectionNode.appendChild(sentenceVariables2.node);
    const subSection = new SubSection({
      node: subSectionNode,
      sentences: [sentenceVariables1.sentence, sentenceVariables2.sentence],
    });
    expect(subSection.translatedContent).toEqual(
      '<span class="cx-segment" data-segmentid="1">First translated sentence</span><span class="cx-segment" data-segmentid="2">Second translated sentence</span>'
    );
  });
});
