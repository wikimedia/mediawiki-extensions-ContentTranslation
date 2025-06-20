import { ref } from "vue";
import { loadTestComposable } from "@/utils/loadTestComposable";
import useTranslationSize from "./useTranslationSize";
import * as translationTimeEstimator from "@/utils/translationTimeEstimator";
import { createI18n } from "vue-banana-i18n";

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

// Mock just `calculateSectionsSize`, keep others real
jest.mock("@/utils/translationTimeEstimator", () => {
  const originalModule = jest.requireActual("@/utils/translationTimeEstimator");

  return {
    ...originalModule,
    calculateSectionsSize: jest.fn(), // only this method is mocked
  };
});

const i18n = createI18n();

describe("useTranslationSize", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns estimated time message for whole article when no suggestion and is desktop mode", async () => {
    const { result } = loadTestComposable(() => useTranslationSize(), [i18n]);

    await new Promise((resolve) => setTimeout(resolve)); // wait for watchEffect

    // section suggestion is null and article size is 50000 bytes (= 50 minutes)
    expect(result.timeEstimateMessage.value).toBe(
      "cx-sx-translation-confirmer-translation-time-whole-article"
    );
    expect(result.isQuickTranslation.value).toBe(false);
  });

  it("returns size for specific section if URL param exists", async () => {
    mockSectionSuggestion.value = {
      missingSections: {
        History: {},
      },
    };
    mockSectionURLParameter.value = "History";

    translationTimeEstimator.calculateSectionsSize.mockResolvedValue(10000); // equals 10 minutes

    const { result } = loadTestComposable(() => useTranslationSize(), [i18n]);

    await new Promise((resolve) => setTimeout(resolve));

    expect(translationTimeEstimator.calculateSectionsSize).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Test_Article" }),
      ["History"]
    );
    expect(result.timeEstimateMessage.value).toBe(
      "cx-sx-translation-confirmer-translation-time-single-section"
    );
    expect(result.isQuickTranslation.value).toBe(true);
  });

  it("uses lead section if not desktop and no suggestion", async () => {
    mockIsDesktopSite = false;
    mockSectionURLParameter.value = null;
    mockSectionSuggestion.value = null;

    translationTimeEstimator.calculateSectionsSize.mockResolvedValue(3000); // equals 3 minutes
    const { result } = loadTestComposable(() => useTranslationSize(), [i18n]);

    await new Promise((resolve) => setTimeout(resolve));

    expect(result.timeEstimateMessage.value).toBe(
      "cx-sx-translation-confirmer-translation-time-lead-section"
    );
    expect(result.isQuickTranslation.value).toBe(true);
  });
});
