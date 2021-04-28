import { createLocalVue, shallowMount } from "@vue/test-utils";
import SXSentenceSelector from "./SXSentenceSelector.vue";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";
import Vuex from "vuex";
import VueBananaI18n from "vue-banana-i18n";
import SubSectionModel from "../../wiki/cx/models/subSection";
import SubSection from "./SubSection";
import SectionSentence from "@/wiki/cx/models/sectionSentence";
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueBananaI18n);
jest.mock("../../plugins/ve");

describe("SXSentenceSelector", () => {
  const subSections = [
    new SubSectionModel({ node: { id: 1 } }),
    new SubSectionModel({ node: { id: 2 } })
  ];

  const applicationModule = {
    namespaced: true,
    state: {
      currentSectionSuggestion: new SectionSuggestion({
        sourceLanguage: "",
        targetLanguage: ""
      }),
      currentSourceSection: { subSections },
      currentMTProvider: "Apertium"
    },
    getters: {
      getCurrentSelectedSentence: () => new SectionSentence(),
      isSelectedSegmentTranslated: () => false
    },
    mutations: { setIsSectionTitleSelectedForTranslation: () => {} }
  };
  const mediawikiModule = {
    namespaced: true,
    state: {},
    getters: { getSupportedMTProviders: state => () => [] }
  };
  const store = new Vuex.Store({
    modules: {
      application: applicationModule,
      mediawiki: mediawikiModule
    }
  });
  store.dispatch = jest.fn();

  const wrapper = shallowMount(SXSentenceSelector, { localVue, store });

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
