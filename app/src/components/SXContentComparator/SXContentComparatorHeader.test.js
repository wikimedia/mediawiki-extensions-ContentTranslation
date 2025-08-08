import { shallowMount } from "@vue/test-utils";
import { ref } from "vue";
import SxContentComparatorHeader from "./SXContentComparatorHeader.vue";
import { createI18n } from "vue-banana-i18n";

const mockSectionTitle = ref("Early life");
jest.mock("@/composables/useURLHandler", () => () => ({
  sectionURLParameter: mockSectionTitle,
}));

const mockSourceSection = ref({ html: "<p>Some content</p>" });
jest.mock("@/composables/useCurrentPageSection", () => () => ({
  sourceSection: mockSourceSection,
}));

const mockSectionSuggestion = ref({
  sourceLanguage: "en",
  sourceTitle: "Moon",
  sourceSections: ["Early life", "History"],
  missingSections: { "Early life": {} },
  presentSections: { History: {} },
});
const mockIsCurrentSectionPresent = ref(false);
jest.mock("@/composables/useCurrentSectionSuggestion", () => () => ({
  sectionSuggestion: mockSectionSuggestion,
  isCurrentSectionPresent: mockIsCurrentSectionPresent,
}));

jest.mock("@wikimedia/language-data", () => ({
  getDir: (lang) => (lang === "en" ? "ltr" : null),
  getAutonym: (lang) => lang,
}));

const i18n = createI18n();

describe("SxContentComparatorHeader", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SxContentComparatorHeader, {
      global: { plugins: [i18n] },
    });
  });
  it("matches snapshot", async () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("emits close when back button is clicked", async () => {
    const backButton = wrapper.findComponent({ name: "mw-button" });
    await backButton.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("close");
  });

  it("renders article and section titles with correct lang and dir", () => {
    const pageTitle = wrapper.find(
      "h4.sx-content-comparator-header__article-title"
    );
    const sectionTitle = wrapper.find(
      "h2.sx-content-comparator-header__section-title"
    );
    expect(pageTitle.text()).toBe("Moon");
    expect(pageTitle.attributes("lang")).toBe("en");
    expect(pageTitle.attributes("dir")).toBe("ltr");
    expect(sectionTitle.text()).toBe("Early life");
    expect(sectionTitle.attributes("lang")).toBe("en");
    expect(sectionTitle.attributes("dir")).toBe("ltr");
  });

  it("passes correct props to header navigation", () => {
    const nav = wrapper.findComponent({
      name: "SxContentComparatorHeaderNavigation",
    });
    expect(nav.exists()).toBe(true);
    expect(nav.props("sectionSourceTitles")).toEqual(["Early life", "History"]);
  });

  it("disables the translation button when sourceSectionContent is empty", async () => {
    mockSourceSection.value.html = null;
    await wrapper.vm.$nextTick();

    const translateButton = wrapper.findComponent(
      ".sx-content-comparator-header__translation-button"
    );
    expect(translateButton.props("disabled")).toBe(true);
  });

  it("emits 'translation-button-clicked' when translation button is clicked", async () => {
    const translateButton = wrapper.findComponent(
      ".sx-content-comparator-header__translation-button"
    );
    await translateButton.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("translation-button-clicked");
  });

  it("shows 'review contents' div when section is missing", () => {
    const review = wrapper.find(
      ".sx-content-comparator-header__review-contents"
    );
    expect(review.exists()).toBe(true);

    const mapped = wrapper.findComponent({
      name: "SxContentComparatorHeaderMappedSection",
    });
    expect(mapped.exists()).toBe(false);
  });

  it("renders mapped section component when current section is present", async () => {
    mockSectionTitle.value = "History";
    mockIsCurrentSectionPresent.value = true;
    await wrapper.vm.$nextTick();

    const review = wrapper.find(
      ".sx-content-comparator-header__review-contents"
    );
    expect(review.exists()).toBe(false);
    const mapped = wrapper.findComponent({
      name: "SxContentComparatorHeaderMappedSection",
    });
    expect(mapped.exists()).toBe(true);
  });
});
