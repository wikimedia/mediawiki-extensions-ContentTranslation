import { mount, createLocalVue } from "@vue/test-utils";
import ProposedTranslationHeader from "./ProposedTranslationHeader";
import VueBananaI18n from "vue-banana-i18n";
import MTProviderGroup from "../../wiki/mw/models/mtProviderGroup";

const localVue = createLocalVue();
localVue.use(VueBananaI18n);

describe("SXSentenceSelector Proposed Translation Header", () => {
  const wrapper = mount(ProposedTranslationHeader, {
    localVue,
    propsData: {
      mtProvider: "Apertium"
    }
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component emits 'configure-options' event on ellipsis icon button click", async () => {
    const button = wrapper.find(
      ".sx-sentence-selector__proposed-translation__header-settings-button"
    );
    await button.trigger("click");
    expect(wrapper.emitted("configure-options")).toBeTruthy();
  });

  it("Component calculates extra MT option labels correctly", () => {
    const expectedLabels = {
      [MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY]:
        "cx-sx-sentence-selector-translation-options-original-card-title",
      [MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY]:
        "cx-sx-sentence-selector-translation-options-empty-card-title"
    };
    expect(wrapper.vm.extraMTOptionLabels).toEqual(expectedLabels);
  });

  it("Component calculates mtOptionLabel correctly for regular mtProvider (e.g. OpusMT, Apertium, Google, Yandex)", () => {
    expect(wrapper.vm.mtOptionLabel).toBe(
      "cx-sx-sentence-selector-proposed-translation-title"
    );
  });

  it("Component calculates mtOptionLabel correctly for extra MT option label", () => {
    wrapper.setProps({
      mtProvider: MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY
    });
    expect(wrapper.vm.mtOptionLabel).toBe(
      "cx-sx-sentence-selector-translation-options-original-card-title"
    );
  });
});
