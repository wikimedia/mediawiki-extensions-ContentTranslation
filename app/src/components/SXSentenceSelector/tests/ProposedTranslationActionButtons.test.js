import { mount, createLocalVue } from "@vue/test-utils";
import ProposedTranslationActionButtons from "../ProposedTranslationActionButtons";
import VueBananaI18n from "vue-banana-i18n";
import Vuex from "vuex";
import CompositionApi from "@vue/composition-api";
import mockStore from "./proposedTranslationCardMockStore";

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(Vuex);
localVue.use(VueBananaI18n);
jest.mock("@/store", () =>
  jest.requireActual("./proposedTranslationCardMockStore")
);

describe("SXSentenceSelector Proposed Translation Action Buttons", () => {
  const wrapper = mount(ProposedTranslationActionButtons, {
    store: mockStore,
    localVue
  });

  it("Component output should match snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should emit correct vuex actions on action buttons click", () => {
    const previousSentenceButton = wrapper.find(
      ".sx-sentence-selector__previous-sentence-button"
    );
    previousSentenceButton.trigger("click");
    expect(wrapper.emitted("select-previous-segment")).toBeTruthy();

    const applyTranslationButton = wrapper.find(
      ".sx-sentence-selector__apply-translation-button"
    );
    applyTranslationButton.trigger("click");
    expect(wrapper.emitted("apply-translation")).toBeTruthy();

    const skipTranslationButton = wrapper.find(
      ".sx-sentence-selector__skip-translation-button"
    );
    skipTranslationButton.trigger("click");
    expect(wrapper.emitted("skip-translation")).toBeTruthy();
  });

  it("should disable 'Previous' button when sentence is first", async () => {
    mockStore.commit("application/selectTranslationUnit", 0);
    /** Wait for DOM to be updated **/
    await wrapper.vm.$nextTick();
    const skipButton = wrapper.find("button");

    expect(skipButton.attributes("disabled")).toBe("disabled");
  });

  it("should disable the 'Apply' button when sentence is first", async () => {
    mockStore.state.application.content = "";
    /** Wait for DOM to be updated **/
    await wrapper.vm.$nextTick();
    const applyTranslationButton = wrapper.find(
      ".sx-sentence-selector__apply-translation-button"
    );

    expect(applyTranslationButton.attributes("disabled")).toBe("disabled");
  });
});
