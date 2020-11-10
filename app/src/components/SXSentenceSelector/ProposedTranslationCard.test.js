import { createLocalVue, shallowMount } from "@vue/test-utils";
import ProposedTranslationCard from "./ProposedTranslationCard";
import VueBananaI18n from "vue-banana-i18n";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";

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

  it("Editing translation is enabled when empty test provider selected", async () => {
    await wrapper.setProps({
      mtProvider: MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY,
      translation: ""
    });

    expect(wrapper.vm.isEditable).toBe(true);
  });
});
