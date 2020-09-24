import { createLocalVue, mount } from "@vue/test-utils";
import SXSentenceSelectorSentence from "./SXSentenceSelectorSentence.vue";
import SectionSentence from "../../wiki/cx/models/sectionSentence";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);

describe("SXSentenceSelector Sentence", () => {
  const store = new Vuex.Store({
    modules: { application: { namespaced: true } }
  });
  store.dispatch = jest.fn();
  const sentence = new SectionSentence({
    id: 1,
    originalContent: "Test content"
  });
  const wrapper = mount(SXSentenceSelectorSentence, {
    localVue,
    store,
    propsData: {
      sentence
    }
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component dispatches events and actions correctly on click", () => {
    wrapper.find("span").trigger("click");
    expect(wrapper.emitted("sentence-selected")).toBeTruthy();
  });

  it("Component element for selected sentence has correct class", async () => {
    const sentence = new SectionSentence({
      id: 1,
      originalContent: "Test content",
      selected: true
    });
    await wrapper.setProps({
      sentence
    });
    expect(wrapper.classes()).toContain(
      "sx-sentence-selector__section-sentence--selected"
    );
  });

  it("Component element for translated sentence has correct class", async () => {
    const sentence = new SectionSentence({
      id: 1,
      originalContent: "Test content",
      translatedContent: "Test translation"
    });
    await wrapper.setProps({
      sentence
    });
    expect(wrapper.classes()).toContain(
      "sx-sentence-selector__section-sentence--translated"
    );
  });
});
