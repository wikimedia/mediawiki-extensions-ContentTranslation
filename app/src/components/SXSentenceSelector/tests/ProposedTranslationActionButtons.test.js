import { mount } from "@vue/test-utils";
import ProposedTranslationActionButtons from "../ProposedTranslationActionButtons";
import { createI18n } from "vue-banana-i18n";
import { nextTick, ref } from "vue";

const i18n = createI18n();
const mockValues = {
  sourceSection: ref({ isSelectedTranslationUnitLast: false }),
  isSectionTitleSelected: ref(false),
  currentProposedTranslation: ref("Test translation"),
};

jest.mock("@/composables/useCurrentPageSection", () => () => mockValues);

describe("Test ProposedTranslationActionButtons SFC", () => {
  const wrapper = mount(ProposedTranslationActionButtons, {
    global: { plugins: [i18n] },
  });

  const previousSentenceButton = wrapper.find(
    ".sx-sentence-selector__previous-sentence-button"
  );
  const applyTranslationButton = wrapper.find(
    ".sx-sentence-selector__apply-translation-button"
  );
  const skipTranslationButton = wrapper.find(
    ".sx-sentence-selector__skip-translation-button"
  );

  it("Component output should match snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should emit correct vuex actions on action buttons click", () => {
    previousSentenceButton.trigger("click");
    expect(wrapper.emitted("select-previous-segment")).toBeTruthy();

    applyTranslationButton.trigger("click");
    expect(wrapper.emitted("apply-translation")).toBeTruthy();

    skipTranslationButton.trigger("click");
    expect(wrapper.emitted("skip-translation")).toBeTruthy();
  });

  it("should disable 'Previous' button when section title is selected", async () => {
    mockValues.isSectionTitleSelected.value = true;
    await nextTick();
    expect(previousSentenceButton.element.disabled).toBe(true);
  });

  it("should disable the 'Apply' button when no proposed translation exists", async () => {
    mockValues.currentProposedTranslation.value = null;
    await nextTick();
    expect(applyTranslationButton.element.disabled).toBe(true);
  });
});
