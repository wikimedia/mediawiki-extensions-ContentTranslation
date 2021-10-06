import { createLocalVue, shallowMount } from "@vue/test-utils";
import ProposedTranslationCard from "../ProposedTranslationCard";
import VueBananaI18n from "vue-banana-i18n";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import Vuex from "vuex";
import CompositionApi from "@vue/composition-api";
import { MwSpinner } from "@/lib/mediawiki.ui";
import mockStore from "./proposedTranslationCardMockStore";
const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(VueBananaI18n);
localVue.use(Vuex);

jest.mock("@/store", () =>
  jest.requireActual("./proposedTranslationCardMockStore")
);

describe("SXSentenceSelector Proposed Translation Card", () => {
  const wrapper = shallowMount(ProposedTranslationCard, {
    localVue,
    store: mockStore
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
    const editButton = wrapper.find(
      ".sx-sentence-selector__proposed-translation-edit-button"
    );

    mockStore.commit(
      "application/setCurrentMTProvider",
      MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
    );
    await wrapper.vm.$nextTick();
    expect(editButton.attributes("disabled")).toBeFalsy();
  });

  it("Loading indicator is hidden when card has no translation", () => {
    mockStore.commit(
      "application/setCurrentMTProvider",
      MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
    );

    expect(mockStore.state.application.currentMTProvider).toBe(
      MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
    );

    expect(wrapper.findComponent(MwSpinner).exists()).toBe(false);
  });
});
