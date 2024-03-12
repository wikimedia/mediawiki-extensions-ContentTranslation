import { mount } from "@vue/test-utils";
import { createI18n } from "vue-banana-i18n";
import { createStore } from "vuex";
import segmentedContentConverter from "@/utils/segmentedContentConverter";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import SubSection from "../SubSection";

const i18n = createI18n();

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
    <span class="cx-segment" data-segmentid="89">Test title</span>
  </h2>
`;

const nodeHtml2 = `
  <p id="mweA">
    <span class="cx-segment" data-segmentid="109">
      The Chinese competitive game as stated by FIFA, is the earliest form of
      football for which there is scientific evidence and appears in a
      military manual dated to the second and third centuries BC.
    </span>
    <span class="cx-segment" data-segmentid="111">
      It existed during the <b id="test-b">Han dynasty</b> and possibly the Qin dynasty, in the
      second and third centuries BC.
    </span>
  </p>
`;

const mockNodes = [
  createSectionNode(nodeHtml1, "cxSourceSection17", 3),
  createSectionNode(nodeHtml2, "cxSourceSection18", 3),
];

jest.mock("@/utils/visualEditorHelper", () => ({
  __esModule: true, // this property makes it work
  getSubSectionNodes: jest.fn((html) => mockNodes),
}));

const htmlContent = "Dummy (unused) HTML Content";
const pageSections =
  segmentedContentConverter.convertSegmentedContentToPageSections(htmlContent);

/** @type SubSection **/
const mockSubSection = pageSections[0].subSections[0];
const mediawikiModule = {
  namespaced: true,
  state: {},
  getters: {
    getSupportedMTProviders: (state) => () =>
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY],
  },
};
const store = createStore({
  modules: { mediawiki: mediawikiModule },
});

const mockSelectTranslationUnitById = jest.fn((id) => {
  const sentence = mockSubSection.getSentenceById(id);
  sentence.selected = true;
});

jest.mock("../useTranslationUnitSelect", () => () => ({
  selectTranslationUnitById: mockSelectTranslationUnitById,
}));

describe("SXSentenceSelector SubSection component", () => {
  const wrapper = mount(SubSection, {
    global: { plugins: [store, i18n] },
    props: { subSection: mockSubSection },
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should emit 'bounce-translation' when already selected sentence is selected", async () => {
    let sentence = wrapper.find(".cx-segment");
    await sentence.trigger("click");

    // Find specific sentence again as content has been re-rendered
    sentence = wrapper.find(".cx-segment");
    await sentence.trigger("click");
    expect(wrapper.emitted("bounce-translation")).toBeTruthy();
  });

  it("should dispatch correct action on new sentence selected", () => {
    store.dispatch = jest.fn();
    const sentence = wrapper.findAll(".cx-segment")[1];
    sentence.trigger("click");

    expect(mockSelectTranslationUnitById).toHaveBeenCalledWith(
      sentence.element.dataset.segmentid
    );
  });

  it("should select the sentence when a child node inside it, is clicked", () => {
    // inside the contents of "nodeHtml2" const, there is a <b> element with "test-b" id
    // this <b> element is nested inside a .cx-segment element with data-segmentid equal to 111
    const boldEl = wrapper.find("#test-b");
    boldEl.trigger("click");

    // the expected value is the data-segment id of the sentence that contains the bold element
    expect(mockSelectTranslationUnitById).toHaveBeenCalledWith("111");
  });
});
