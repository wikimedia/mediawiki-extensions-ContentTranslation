import { mount } from "@vue/test-utils";
import SXSentenceSelector from "../SXSentenceSelector";
import { createI18n } from "vue-banana-i18n";
import SubSection from "../SubSection";
import mockStore from "./sentenceSelectorMockStore";
import router from "@/router";
import { createEventLogging } from "@/plugins/eventlogging";

const i18n = createI18n();

jest.mock("../useMTProvidersInitialize", () => () => jest.fn());

jest.mock("@/store", () => jest.requireActual("./sentenceSelectorMockStore"));

jest.mock("@/plugins/ve");
jest.mock("../useInitializeSegmentSelection", () => () => jest.fn());

jest.mock("@/composables/useURLHandler", () => () => ({
  sectionURLParameter: {
    value: "My sentence selector section title",
  },
}));

const eventLogging = createEventLogging();

describe("Test SXSentenceSelector component", () => {
  const wrapper = mount(SXSentenceSelector, {
    global: {
      plugins: [i18n, mockStore, eventLogging, router],
      renderStubDefaultSlot: true,
    },
    shallow: true,
  });

  it("Component should bounce translation preview when already selected sentence is selected", (done) => {
    const subSectionWrapper = wrapper.findComponent(SubSection);
    subSectionWrapper.trigger("bounce-translation");
    expect(wrapper.vm.shouldProposedTranslationBounce).toBe(true);
    setTimeout(() => {
      expect(wrapper.vm.shouldProposedTranslationBounce).toBe(false);
      done();
    }, 100);
  });
});
