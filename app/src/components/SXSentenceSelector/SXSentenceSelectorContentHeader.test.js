import { mount, createLocalVue } from "@vue/test-utils";
import SXSentenceSelectorContentHeader from "./SXSentenceSelectorContentHeader";
import Vuex from "vuex";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import PageSection from "@/wiki/cx/models/pageSection";
const localVue = createLocalVue();
localVue.use(Vuex);

describe("SXSentenceSelector Section Content Header", () => {
  const sourceSectionTitle = "Test source section title";
  const state = {
    currentSectionSuggestion: new SectionSuggestion({
      sourceLanguage: "en",
      sourceTitle: sourceSectionTitle
    }),
    currentSourceSection: new PageSection({
      title: sourceSectionTitle
    }),
    isSectionTitleSelectedForTranslation: false
  };
  const store = new Vuex.Store({
    modules: {
      application: {
        namespaced: true,
        state
      }
    }
  });
  const wrapper = mount(SXSentenceSelectorContentHeader, {
    store,
    localVue
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
