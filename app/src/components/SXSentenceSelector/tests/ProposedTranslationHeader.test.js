import { mount } from "@vue/test-utils";
import ProposedTranslationHeader from "../ProposedTranslationHeader";
import { createI18n } from "vue-banana-i18n";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import { createStore } from "vuex";

const i18n = createI18n();

describe("SXSentenceSelector Proposed Translation Header", () => {
  const applicationModule = {
    namespaced: true,
    state: { currentMTProvider: "Apertium" },
  };
  const store = createStore({ modules: { application: applicationModule } });

  const wrapper = mount(ProposedTranslationHeader, {
    global: { plugins: [store, i18n] },
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

  it("Component calculates mtOptionLabel correctly for regular mtProvider (e.g. OpusMT, Apertium, Google, Yandex)", () => {
    expect(wrapper.vm.mtOptionLabel).toBe(
      "cx-sx-sentence-selector-suggested-translation-title"
    );
  });

  it("Component calculates mtOptionLabel correctly for extra MT option label", () => {
    store.state.application.currentMTProvider =
      MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY;
    expect(wrapper.vm.mtOptionLabel).toBe(
      "cx-sx-sentence-selector-translation-options-original-card-title"
    );
  });
});
