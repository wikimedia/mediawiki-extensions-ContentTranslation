import { mount, createLocalVue } from "@vue/test-utils";
import SXSectionSelectorSectionListPresent from "./SXSectionSelectorSectionListPresent";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";
import VueBananaI18n from "vue-banana-i18n";
const localVue = createLocalVue();
localVue.use(VueBananaI18n);
import "html-loader";

describe("SXSectionSelector Section List", () => {
  const suggestion = new SectionSuggestion({
    targetLanguage: "en",
    present: {
      "source section 0": "target section 0",
      "source section 1": "target section 1",
      "source section 2": "target section 2",
      "source section 3": "target section 3"
    }
  });

  const wrapper = mount(SXSectionSelectorSectionListPresent, {
    localVue,
    propsData: {
      suggestion
    }
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
    expect(items.length).toBe(suggestion.presentSections.length);
  });
});
