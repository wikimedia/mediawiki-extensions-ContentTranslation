import { mount } from "@vue/test-utils";
import SXSentenceSelector from "../SXSentenceSelector";
import { createI18n } from "vue-banana-i18n";
import SubSection from "../SubSection";
import router from "@/router";
import { createEventLogging } from "@/plugins/eventlogging";
import { createStore } from "vuex";
import SubSectionModel from "@/wiki/cx/models/subSection";
import PageSection from "@/wiki/cx/models/pageSection";
import { ref } from "vue";

const i18n = createI18n();

jest.mock("../useMTProvidersInitialize", () => () => jest.fn());

jest.mock("@/plugins/ve");

const subSections = [
  new SubSectionModel({
    node: { id: "cxSourceSection1", children: [] },
    sentences: [],
  }),
  new SubSectionModel({
    node: { id: "cxSourceSection2", children: [] },
    sentences: [],
  }),
];

const mockPageSection = new PageSection({
  title: "My sentence selector section title",
  subSections,
});

const mockSelectedUnit = ref(subSections[0]);
jest.mock("@/composables/useCurrentPageSection", () => () => ({
  sourceSection: { value: mockPageSection },
  selectedContentTranslationUnit: mockSelectedUnit,
}));
jest.mock("../useInitializeSegmentSelection", () => () => jest.fn());

jest.mock("@/composables/useURLHandler", () => () => ({
  sectionURLParameter: {
    value: "My sentence selector section title",
  },
}));

const eventLogging = createEventLogging();

const mockStore = createStore({
  modules: {
    application: {
      namespaced: true,
      state: {
        translationDataLoadingCounter: 0,
      },
      mutations: {
        setPreviousRoute: () => {}, // for Vue router navigation guard
      },
    },
  },
});

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
