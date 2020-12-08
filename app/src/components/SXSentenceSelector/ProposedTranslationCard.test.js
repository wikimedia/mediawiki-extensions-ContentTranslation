import { createLocalVue, shallowMount } from "@vue/test-utils";
import ProposedTranslationCard from "./ProposedTranslationCard";
import VueBananaI18n from "vue-banana-i18n";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import Vuex from "vuex";
import { MwSpinner } from "@/lib/mediawiki.ui";

const localVue = createLocalVue();
localVue.use(VueBananaI18n);
localVue.use(Vuex);

describe("SXSentenceSelector Proposed Translation Card", () => {
  const state = {
    currentMTProvider: "Apertium",
    content: "<div>Test translation</div>"
  };
  const applicationModule = {
    namespaced: true,
    state,
    getters: {
      getCurrentProposedTranslation: () => state.content
    }
  };
  const store = new Vuex.Store({ modules: { application: applicationModule } });

  const wrapper = shallowMount(ProposedTranslationCard, {
    localVue,
    store,
    propsData: { shouldBounce: false }
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
    state.content = "";
    await wrapper.vm.$nextTick();
    const editButton = wrapper.find(
      ".sx-sentence-selector__proposed-translation-edit-button"
    );
    expect(editButton.attributes("disabled")).toBe("true");

    state.currentMTProvider = MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY;
    await wrapper.vm.$nextTick();
    expect(editButton.attributes("disabled")).toBeFalsy();
  });

  it("Loading indicator is hidden when card has no translation", () => {
    expect(store.state.application.currentMTProvider).toBe(
      MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
    );

    expect(wrapper.findComponent(MwSpinner).exists()).toBe(false);
  });
});
