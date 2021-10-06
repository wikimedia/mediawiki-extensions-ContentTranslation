import { createLocalVue, shallowMount } from "@vue/test-utils";
import SXSentenceSelector from "../SXSentenceSelector";
import Vuex from "vuex";
import VueBananaI18n from "vue-banana-i18n";
import SubSection from "../SubSection";
import mockStore from "./sentenceSelectorMockStore";
import CompositionApi from "@vue/composition-api";

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(Vuex);
localVue.use(VueBananaI18n);

jest.mock("@/store", () => jest.requireActual("./sentenceSelectorMockStore"));

jest.mock("@/plugins/ve");

describe("SXSentenceSelector", () => {
  const wrapper = shallowMount(SXSentenceSelector, {
    localVue,
    store: mockStore
  });

  it("Component should bounce translation preview when already selected sentence is selected", done => {
    const subSectionWrapper = wrapper.findComponent(SubSection);
    subSectionWrapper.vm.$emit("bounce-translation");
    expect(wrapper.vm.shouldProposedTranslationBounce).toBe(true);
    setTimeout(() => {
      expect(wrapper.vm.shouldProposedTranslationBounce).toBe(false);
      done();
    }, 100);
  });
});
