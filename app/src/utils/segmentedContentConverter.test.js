import segmentedContentConverter from "./segmentedContentConverter";
import PageSection from "../wiki/cx/models/pageSection";

const testTitle0 = "Test Title A";
const testTitle1 = "Test Title B";
const testContent0 = "Test String A0";
const testContent1 = "Test String B0";
const testContent2 = "Test String B1";

const createSectionNode = (nodeHtml, id, sectionNumber) => {
  const section = document.createElement("section");
  section.setAttribute("id", id);
  section.setAttribute("data-mw-section-number", sectionNumber);
  section.setAttribute("rel", "cx:Section");
  section.innerHTML = nodeHtml;

  return section;
};

const nodeHtml1 = `
  <h2>
    <span class="cx-segment" data-segmentid="89">${testTitle0}</span>
  </h2>
`;
const nodeHtml2 = `
  <p id="mwGw-0">
    <span class="cx-segment" data-segmentid="123">${testContent0}</span>
  </p>
`;
const nodeHtml3 = `<h2><span class="cx-segment" data-segmentid="141">${testTitle1}</span></h2>`;
const nodeHtml4 = `
  <p id="mwGw-1">
    <span class="cx-segment" data-segmentid="142">${testContent1}</span>
  </p>
`;
const nodeHtml5 = `
  <p id="mwGw-2">
    <span class="cx-segment" data-segmentid="143">${testContent2}</span>
  </p>
`;
const mockNodes = [
  createSectionNode(nodeHtml1, "cxSourceSection0", 1),
  createSectionNode(nodeHtml2, "cxSourceSection2", 1),
  createSectionNode(nodeHtml3, "cxSourceSection3", 2),
  createSectionNode(nodeHtml4, "cxSourceSection4", 2),
  createSectionNode(nodeHtml5, "cxSourceSection5", 2)
];

jest.mock("./visualEditorHelper", () => ({
  __esModule: true, // this property makes it work
  getSubSectionNodes: jest.fn(html => mockNodes)
}));

describe("SegmentedContentConverter test", () => {
  it("convertSegmentedContentToPageSections method creates and returns expected array of pageSection models", () => {
    const htmlContent = "Dummy (unused) HTML Content";
    const pageSections = segmentedContentConverter.convertSegmentedContentToPageSections(
      htmlContent
    );
    expect(
      pageSections.every(pageSection => pageSection instanceof PageSection)
    ).toBe(true);
    expect(pageSections[0].title).toBe(testTitle0);
    expect(pageSections[1].title).toBe(testTitle1);
  });
});
