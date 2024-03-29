import { mount } from "@vue/test-utils";
import SXSectionSelectorSectionListPresent from "./SXSectionSelectorSectionListPresent";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";
import { createI18n } from "vue-banana-i18n";
import { ref } from "vue";

const mockSectionSuggestion = ref(
  new SectionSuggestion({
    targetLanguage: "en",
    present: {
      "source section 0": "target section 0",
      "source section 1": "target section 1",
      "source section 2": "target section 2",
      "source section 3": "target section 3",
    },
    sourceSections: [
      "source section 0",
      "source section 1",
      "source section 2",
      "source section 3",
    ],
  })
);

jest.mock("@/composables/useCurrentSectionSuggestion", () => () => ({
  sectionSuggestion: mockSectionSuggestion,
}));

describe("SXSectionSelector Section List", () => {
  const wrapper = mount(SXSectionSelectorSectionListPresent, {
    global: {
      plugins: [createI18n()],
    },
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component has correct header", () => {
    const header = wrapper.find("h4");
    expect(header.text()).toBe("cx-sx-section-selector-present-sections-title");
  });

  it("Component has correct number of section items", () => {
    const items = wrapper.find(".sx-section-selector__sections-list > li");
    expect(items.length).toBe(
      mockSectionSuggestion.value.presentSections.length
    );
  });
});
