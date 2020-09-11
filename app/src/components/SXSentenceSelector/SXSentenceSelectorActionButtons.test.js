import { mount, createLocalVue } from "@vue/test-utils";
import SXSentenceSelectorActionButtons from "./SXSentenceSelectorActionButtons";
import VueBananaI18n from "vue-banana-i18n";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueBananaI18n);

describe("SXSentenceSelector Action Buttons", () => {
  const state = {
    isFirstSentence: false
  };
  const store = new Vuex.Store({
    modules: {
      application: {
        namespaced: true,
        state,
        getters: {
          isCurrentSentenceFirst: state => state.isFirstSentence
        }
      }
    }
  });
  store.dispatch = jest.fn();
  const translation = "Test translation";
  const wrapper = mount(SXSentenceSelectorActionButtons, {
    store,
    localVue,
    propsData: {
      translation
    }
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component emits correct actions on action buttons click", () => {
    const previousSentenceButton = wrapper.find(
      ".sx-sentence-selector__previous-sentence-button"
    );
    previousSentenceButton.trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith(
      "application/selectPreviousSentence"
    );

    const applyTranslationButton = wrapper.find(
      ".sx-sentence-selector__apply-translation-button"
    );
    applyTranslationButton.trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith(
      "application/applyTranslationToSelectedSentence",
      {
        translation
      }
    );

    const skipTranslationButton = wrapper.find(
      ".sx-sentence-selector__skip-translation-button"
    );
    skipTranslationButton.trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith(
      "application/selectNextSentence"
    );
  });

  it("Previous button is disabled when sentence is first in array", async () => {
    state.isFirstSentence = true;
    /** Wait for DOM to be updated **/
    await wrapper.vm.$nextTick();
    const skipButton = wrapper.find("button");

    expect(skipButton.attributes("disabled")).toBe("disabled");
  });
});
