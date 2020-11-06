import { createLocalVue, shallowMount } from "@vue/test-utils";
import ProposedTranslationCard from "./ProposedTranslationCard";
import VueBananaI18n from "vue-banana-i18n";

const localVue = createLocalVue();
localVue.use(VueBananaI18n);

describe("SXSentenceSelector Proposed Translation Card", () => {
  const translationContent = "<div>Test translation</div>";
  const wrapper = shallowMount(ProposedTranslationCard, {
    localVue,
    propsData: {
      mtProvider: "Apertium",
      translation: translationContent,
      shouldBounce: false
    }
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component renders provided translation correctly", () => {
    const translationElement = wrapper.find(
      ".sx-sentence-selector__proposed-translation__contents"
    );
    expect(translationElement.text()).toBe("Test translation");
  });
});
