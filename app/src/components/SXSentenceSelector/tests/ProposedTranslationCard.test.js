import { mount } from "@vue/test-utils";
import ProposedTranslationCard from "../ProposedTranslationCard";
import { createI18n } from "vue-banana-i18n";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import { MwSpinner } from "@/lib/mediawiki.ui";
import mockStore from "./proposedTranslationCardMockStore";

const i18n = createI18n();

jest.mock("@/store", () =>
  jest.requireActual("./proposedTranslationCardMockStore")
);

describe("SXSentenceSelector Proposed Translation Card", () => {
  const wrapper = mount(ProposedTranslationCard, {
    global: { plugins: [i18n, mockStore], renderStubDefaultSlot: true },
    shallow: true
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
    expect(editButton.attributes("disabled")).toBe("false");
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
