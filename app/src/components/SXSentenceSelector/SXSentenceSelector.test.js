import { createLocalVue, mount } from "@vue/test-utils";
import SXSentenceSelector from "./SXSentenceSelector.vue";
import SectionSentence from "../../wiki/cx/models/sectionSentence";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";
import Vuex from "vuex";
import VueBananaI18n from "vue-banana-i18n";
import MTProviderGroup from "../../wiki/mw/models/mtProviderGroup";
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueBananaI18n);

describe("SXSentenceSelector Sentence", () => {
  const sentences = [
    new SectionSentence({ id: 1 }),
    new SectionSentence({ id: 2, selected: true })
  ];

  const applicationModule = {
    namespaced: true,
    state: {
      currentSectionSuggestion: new SectionSuggestion({
        sourceLanguage: "",
        targetLanguage: ""
      }),
      currentSourceSection: {
        sentences
      }
    },
    getters: {
      isCurrentSentenceLast: () => false
    }
  };
  const mediawikiModule = {
    namespaced: true,
    state: {},
    getters: {
      getSupportedMTProviders: state => () => [],
      getDefaultMTProvider: state => () =>
        MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY
    }
  };
  const store = new Vuex.Store({
    modules: {
      application: applicationModule,
      mediawiki: mediawikiModule
    }
  });
  store.dispatch = jest.fn();

  const wrapper = mount(SXSentenceSelector, {
    localVue,
    store
  });

  it("Component should dispatch correct action on new sentence selected", () => {
    const notSelectedSentence = sentences.find(sentence => !sentence.selected);
    wrapper.vm.onSentenceSelected(notSelectedSentence);
    expect(store.dispatch).toHaveBeenCalledWith(
      "application/selectSentenceForCurrentSection",
      {
        id: notSelectedSentence.id
      }
    );
  });

  it("Component should bounce translation preview when already selected sentence is selected", done => {
    const selectedSentence = sentences.find(sentence => sentence.selected);
    wrapper.vm.onSentenceSelected(selectedSentence);
    expect(wrapper.vm.shouldProposedTranslationBounce).toBe(true);
    setTimeout(() => {
      expect(wrapper.vm.shouldProposedTranslationBounce).toBe(false);
      done();
    }, 100);
  });
});
