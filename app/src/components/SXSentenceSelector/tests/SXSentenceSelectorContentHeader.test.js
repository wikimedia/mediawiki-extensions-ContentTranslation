import { mount } from "@vue/test-utils";
import SXSentenceSelectorContentHeader from "../SXSentenceSelectorContentHeader";
import PageSection from "@/wiki/cx/models/pageSection";
import Page from "@/wiki/mw/models/page";
import { createStore } from "vuex";
import { ref } from "vue";

const mockValues = {
  sourceSection: ref(
    new PageSection({
      title: "Test source section title",
    })
  ),
  isSectionTitleSelected: ref(false),
};

jest.mock("@/composables/useCurrentPageSection", () => () => mockValues);

const mockCurrentPage = new Page({ title: "Test source article title" });
jest.mock("@/composables/useCurrentPages", () => () => ({
  currentSourcePage: { value: mockCurrentPage },
}));

const mockStore = createStore({
  modules: {
    application: {
      namespaced: true,
      state: { sourceLanguage: "en" },
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
