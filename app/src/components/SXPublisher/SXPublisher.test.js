import { shallowMount, flushPromises } from "@vue/test-utils";
import SxPublisher from "./SXPublisher.vue";
import { createI18n } from "vue-banana-i18n";
import { ref } from "vue";
import { MwRow, MwCol } from "@/lib/mediawiki.ui";

const mockIsPublishDialogActive = ref(false);
const mockPublishStatus = ref("pending");
const mockDoPublish = jest.fn();
jest.mock("./useTranslationPublish", () => () => ({
  doPublish: mockDoPublish,
  isPublishDialogActive: mockIsPublishDialogActive,
  publishStatus: mockPublishStatus,
  closePublishDialog: jest.fn(),
}));

const mockIsPublishingDisabled = ref(false);
const mockPublishFeedbackMessages = ref([]);
jest.mock("./usePublishFeedbackMessages", () => () => ({
  publishFeedbackMessages: mockPublishFeedbackMessages,
  isPublishingDisabled: mockIsPublishingDisabled,
  addPublishFeedbackMessage: jest.fn(),
  clearPublishFeedbackMessages: jest.fn(),
  initializePublishFeedbackMessages: jest.fn(),
}));

const mockCaptchaDialogOn = ref(false);
const mockCaptchaDetails = ref(null);
jest.mock("./useCaptcha", () => () => ({
  captchaDetails: mockCaptchaDetails,
  captchaDialogOn: mockCaptchaDialogOn,
  handleCaptchaError: jest.fn().mockReturnValue(false),
  onCaptchaDialogClose: jest.fn(),
}));

const mockSourceSection = ref({
  title: "Formation",
  translationHtml: "<p>Translated content</p>",
});
jest.mock("@/composables/useCurrentPageSection", () => () => ({
  sourceSection: mockSourceSection,
}));

const mockIsCurrentSectionPresent = ref(false);
jest.mock("@/composables/useCurrentSectionSuggestion", () => () => ({
  sectionSuggestion: {
    value: {
      missingSections: { Formation: "Formación" },
      presentSections: { History: "Historia" },
      targetTitle: "Target Page",
    },
  },
  isCurrentSectionPresent: mockIsCurrentSectionPresent,
}));

jest.mock("@/composables/useURLHandler", () => () => ({
  targetLanguageURLParameter: { value: "es" },
  sectionURLParameter: { value: "History" },
}));

jest.mock("@/composables/usePublishTarget", () => () => ({
  target: { value: "NEW_SECTION" },
  PUBLISHING_TARGETS: {
    NEW_SECTION: "NEW_SECTION",
    EXPAND: "EXPAND",
    REPLACE: "REPLACE",
    SANDBOX: "SANDBOX",
  },
}));

jest.mock("./usePublishingComplete", () => () => jest.fn());
jest.mock("./useEditTranslation", () => () => jest.fn());

jest.mock("@/utils/mediawikiHelper", () => ({
  siteMapper: {
    getPageUrl: jest.fn(() => "https://es.wikipedia.org/wiki/Target_Page"),
  },
}));

const i18n = createI18n();

const options = {
  global: {
    plugins: [i18n],
    stubs: { MwRow: false, MwCol: false },
  },
};
describe("SXPublisher.vue", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("matches the snapshot", () => {
    const wrapper = shallowMount(SxPublisher, options);
    expect(wrapper.element).toMatchSnapshot();
  });
  it("renders translated section title", () => {
    const wrapper = shallowMount(SxPublisher, options);

    const title = wrapper.find("h2.sx-publisher__section-preview__title");

    expect(title.text()).toBe("Formation");
  });

  it("shows expected publishing result for NEW_SECTION target", () => {
    const wrapper = shallowMount(SxPublisher, options);
    const resultMessage = wrapper.find(
      "h6.sx-publisher__publish-panel__expected-publishing-result"
    );
    expect(resultMessage.text()).toBe(
      "cx-sx-publisher-publish-panel-new-section-result"
    );
  });

  it("calls publishTranslation on publish event", async () => {
    const wrapper = shallowMount(SxPublisher, options);
    await wrapper
      .findComponent({ name: "SxPublisherHeader" })
      .vm.$emit("publish-translation");
    await flushPromises();
    expect(mockDoPublish).toHaveBeenCalledTimes(1); // placeholder
  });

  it("clears and initializes feedback when closing options panel", async () => {
    const wrapper = shallowMount(SxPublisher, options);
    // clear mocks after mounting the component to avoid counting method calls on "mounted"
    jest.clearAllMocks();
    wrapper.vm.publishOptionsOn = true;

    await flushPromises();

    wrapper.vm.publishOptionsOn = false;
    await flushPromises();

    expect(wrapper.vm.clearPublishFeedbackMessages).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.initializePublishFeedbackMessages).toHaveBeenCalledTimes(
      1
    );
  });

  it("generates the correct target anchor with anchor when target section already exists", async () => {
    const wrapper = shallowMount(SxPublisher, options);
    mockIsCurrentSectionPresent.value = true;
    await flushPromises();

    const link = wrapper.find(
      "a.sx-publisher__publish-panel__existing-target-section-link"
    );
    expect(link.attributes("href")).toBe(
      "https://es.wikipedia.org/wiki/Target_Page#Historia"
    );
    expect(link.text()).toContain("Historia");
  });

  it("shows captcha dialog when captchaDialogOn is true", async () => {
    const wrapper = shallowMount(SxPublisher, options);
    wrapper.vm.captchaDialogOn = true;
    await flushPromises();
    expect(
      wrapper.findComponent({ name: "SxPublisherCaptchaDialog" }).exists()
    ).toBe(true);
  });
});
