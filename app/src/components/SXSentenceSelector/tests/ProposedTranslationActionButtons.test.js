import { mount } from "@vue/test-utils";
import ProposedTranslationActionButtons from "../ProposedTranslationActionButtons";
import { createI18n } from "vue-banana-i18n";
import mockStore from "./proposedTranslationCardMockStore";
import { nextTick } from "vue";

const i18n = createI18n();
jest.mock("../../../store", () =>
  jest.requireActual("./proposedTranslationCardMockStore")
);

describe("SXSentenceSelector Proposed Translation Action Buttons", () => {
  const wrapper = mount(ProposedTranslationActionButtons, {
    global: { plugins: [i18n, mockStore] },
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
    mockStore.state.application.currentSourceSection.selectTranslationUnitById(
      0
    );
    /** Wait for DOM to be updated **/
    await nextTick();
    const skipButton = wrapper.find("button");

    expect(skipButton.element.disabled).toBe(true);
  });

  it("should disable the 'Apply' button when sentence is first", async () => {
    mockStore.state.application.content = "";
    /** Wait for DOM to be updated **/
    await nextTick();
    const applyTranslationButton = wrapper.find(
      ".sx-sentence-selector__apply-translation-button"
    );

    expect(applyTranslationButton.element.disabled).toBe(true);
  });
});
