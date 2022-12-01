import { mount } from "@vue/test-utils";
import SXSentenceSelectorContentHeader from "../SXSentenceSelectorContentHeader";
import PageSection from "@/wiki/cx/models/pageSection";
import Page from "@/wiki/mw/models/page";
import { createStore } from "vuex";

const state = {
  sourceLanguage: "en",
  currentSourceSection: new PageSection({
    title: "Test source section title",
  }),
  isSectionTitleSelectedForTranslation: false,
};

const mockStore = createStore({
  modules: {
    application: {
      namespaced: true,
      state,
      getters: {
        getCurrentPage: () => new Page({ title: "Test source article title" }),
      },
    },
  },
});

describe("SXSentenceSelector Section Content Header", () => {
  const wrapper = mount(SXSentenceSelectorContentHeader, {
    global: { plugins: [mockStore] },
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
