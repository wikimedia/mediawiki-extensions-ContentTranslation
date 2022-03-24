import { mount } from "@vue/test-utils";
import SXSentenceSelector from "../SXSentenceSelector";
import { createI18n } from "vue-banana-i18n";
import SubSection from "../SubSection";
import mockStore from "./sentenceSelectorMockStore";
import router from "../../../router";

const i18n = createI18n();

jest.mock("../../../store", () =>
  jest.requireActual("./sentenceSelectorMockStore")
);

jest.mock("../../../plugins/ve");

describe("SXSentenceSelector", () => {
  const wrapper = mount(SXSentenceSelector, {
    global: {
      plugins: [i18n, mockStore, router],
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
