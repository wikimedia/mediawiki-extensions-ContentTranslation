import { mount } from "@vue/test-utils";
import SXSentenceSelector from "../SXSentenceSelector";
import { createI18n } from "vue-banana-i18n";
import SubSection from "../SubSection";
import { createStore } from "vuex";
import SubSectionModel from "@/wiki/cx/models/subSection";
import PageSection from "@/wiki/cx/models/pageSection";
import { ref } from "vue";

const i18n = createI18n();

jest.mock(
  "../useMTProvidersInitialize",
  () => () => jest.fn(() => Promise.resolve())
);

jest.mock("@/composables/useEditorInstrument", () => () => ({
  logEditorOpenEvent: jest.fn(),
  logEditorCloseEvent: jest.fn(),
  logEditorCloseWarnEvent: jest.fn(),
  logEditorSegmentAddEvent: jest.fn(),
}));

jest.mock("@/plugins/ve");
jest.mock("vue-router", () => ({ useRouter: jest.fn() }));

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
  sourceLanguageURLParameter: { value: "en" },
  targetLanguageURLParameter: { value: "el" },
  pageURLParameter: { value: "Moon" },
  sectionURLParameter: {
    value: "My sentence selector section title",
  },
}));

jest.mock("@/composables/useEventLogging", () => () => jest.fn());
jest.mock("@/composables/useLanguageTitlesFetch", () => () => jest.fn());
jest.mock("@/composables/usePageMetadataFetch", () => () => jest.fn());
jest.mock("@/composables/usePageSectionSelect", () => () => ({
  selectPageSectionByTitle: jest.fn(),
  selectPageSectionByIndex: jest.fn(),
}));
jest.mock("@/composables/useCurrentDraftTranslation", () => () => ({
  currentTranslation: { value: null },
}));
jest.mock("@/composables/useTranslationsFetch", () => () => ({
  fetchTranslationsByStatus: jest.fn(),
  translationsFetched: { value: { draft: false } },
}));

const mockStore = createStore({});

describe("Test SXSentenceSelector component", () => {
  const wrapper = mount(SXSentenceSelector, {
    global: {
      plugins: [i18n, mockStore],
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
