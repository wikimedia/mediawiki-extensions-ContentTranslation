import { mount } from "@vue/test-utils";
import ProposedTranslationCard from "../ProposedTranslationCard";
import { createI18n } from "vue-banana-i18n";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import { MwSpinner } from "@/lib/mediawiki.ui";
import RetryMtCard from "../RetryMtCard.vue";
import { ref } from "vue";
import { createStore } from "vuex";

const i18n = createI18n();

const mockStore = createStore({
  modules: {
    application: {
      namespaced: true,
      state: {
        currentMTProvider: "Apertium",
        targetLanguage: "es",
      },
      mutations: {
        setCurrentMTProvider: (state, provider) => {
          state.currentMTProvider = provider;
        },
      },
    },
  },
});

const mockValues = {
  sourceSection: ref({ isSelectedTranslationUnitLast: false }),
  isSectionTitleSelected: ref(false),
  currentProposedTranslation: ref("Test translation"),
};

jest.mock("@/composables/useCurrentPageSection", () => () => mockValues);

global.ResizeObserver = jest.fn(function () {
  this.observe = () => {};
  this.unobserve = () => {};
});

describe("Test `ProposedTranslationCard` test", () => {
  const wrapper = mount(ProposedTranslationCard, {
    global: { plugins: [i18n, mockStore], renderStubDefaultSlot: true },
    shallow: true,
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
    expect(mockStore.state.application.currentMTProvider).toBe(
      MTProviderGroup.EMPTY_TEXT_PROVIDER_KEY
    );

    expect(wrapper.findComponent(MwSpinner).exists()).toBe(false);
  });

  it("Should render Retry MT card inside proposed translation card output when no proposed translation exists", async () => {
    mockStore.commit("application/setCurrentMTProvider", "Google");
    mockValues.currentProposedTranslation.value = null;

    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.findComponent(RetryMtCard).exists()).toBe(true);
  });
});
