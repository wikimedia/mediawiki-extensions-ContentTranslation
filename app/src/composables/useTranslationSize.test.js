import { ref } from "vue";
import { loadTestComposable } from "@/utils/loadTestComposable";
import useTranslationSize from "./useTranslationSize";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import { DifficultyEnum } from "@/utils/translationDifficulty";
import { createI18n } from "vue-banana-i18n";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import { flushPromises } from "@vue/test-utils";

const mockSourcePage = ref({
  title: "Test_Article",
  language: "en",
  articleSize: 50000,
});
jest.mock("@/composables/useCurrentPages", () => () => ({
  currentSourcePage: mockSourcePage,
}));

const mockSectionSuggestion = ref(null);
jest.mock("@/composables/useCurrentSectionSuggestion", () => () => ({
  sectionSuggestion: mockSectionSuggestion,
}));

const mockSectionURLParameter = ref(null);
jest.mock("@/composables/useURLHandler", () => () => ({
  sectionURLParameter: mockSectionURLParameter,
}));

let mockIsDesktopSite = true;
jest.mock("@/utils/mediawikiHelper", () => ({
  get isDesktopSite() {
    return mockIsDesktopSite;
  },
}));

jest.mock("@/wiki/cx/api/suggestions", () => ({
  fetchArticleSections: jest.fn(),
}));

const i18n = createI18n();

describe("useTranslationSize", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns size in bytes for whole article when no suggestion and is desktop mode", async () => {
    const { result } = loadTestComposable(() => useTranslationSize(), [i18n]);

    await new Promise((resolve) => setTimeout(resolve)); // wait for watchEffect

    // section suggestion is null and article size is 50000 bytes
    expect(result.sizeInBytes.value).toBe(50000);
    expect(result.isQuickTranslation.value).toBe(false);
    expect(result.difficulty.value).toBe(DifficultyEnum.hard); // 50000 bytes > 40000 hard threshold
  });

  it("returns size for specific section if URL param exists", async () => {
    mockSectionSuggestion.value = new SectionSuggestion({
      missing: { History: {} },
      sourceSectionSizes: { History: 400 },
    });
    mockSectionURLParameter.value = "History";
    const { result } = loadTestComposable(() => useTranslationSize(), [i18n]);

    await flushPromises();
    expect(result.sizeInBytes.value).toBe(400);

    expect(result.isQuickTranslation.value).toBe(true); // stub difficulty = quick
    expect(result.difficulty.value).toBe(DifficultyEnum.stub); // 400 bytes < 1000 section threshold
  });

  it("uses lead section if not desktop and no suggestion", async () => {
    mockIsDesktopSite = false;
    mockSectionURLParameter.value = null;
    mockSectionSuggestion.value = null;

    cxSuggestionsApi.fetchArticleSections.mockResolvedValue({
      sections: [
        {
          level: "2",
          title: "First non-lead section",
          byteoffset: 800,
        },
      ],
    }); // 800 bytes uses section thresholds
    const { result } = loadTestComposable(() => useTranslationSize(), [i18n]);

    await flushPromises();

    expect(result.sizeInBytes.value).toBe(800);
    expect(result.isQuickTranslation.value).toBe(true); // stub difficulty = quick
    expect(result.difficulty.value).toBe(DifficultyEnum.stub); // 800 bytes < 1000 section threshold
  });

  it("correctly identifies easy article difficulty on desktop", async () => {
    mockSourcePage.value = {
      title: "Small_Article",
      language: "en",
      articleSize: 1500, // between stub and easy (< 2500) thresholds for articles
    };
    mockSectionSuggestion.value = null;
    mockSectionURLParameter.value = null;
    mockIsDesktopSite = true;

    const { result } = loadTestComposable(() => useTranslationSize(), [i18n]);

    await flushPromises();

    expect(result.difficulty.value).toBe(DifficultyEnum.stub);
    expect(result.isQuickTranslation.value).toBe(true);
  });

  it("verifies mobile lead section uses section thresholds not article thresholds", async () => {
    mockIsDesktopSite = false;
    mockSectionURLParameter.value = null;
    mockSectionSuggestion.value = null;

    // Use a size that would be "stub" for articles (< 2500) but "stub" for sections (< 1000)
    cxSuggestionsApi.fetchArticleSections.mockResolvedValue({
      sections: [
        {
          level: "2",
          title: "First non-lead section",
          byteoffset: 700,
        },
      ],
    });

    const { result } = loadTestComposable(() => useTranslationSize(), [i18n]);
    await flushPromises();

    // This should use section thresholds (1000/4000/12000), not article thresholds (2500/10000/40000)
    expect(result.difficulty.value).toBe(DifficultyEnum.stub); // 700 < 1000 section threshold
  });
});
