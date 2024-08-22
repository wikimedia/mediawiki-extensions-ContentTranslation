// suggestions.test.js
import suggestionsApi from "./suggestions";
import ArticleSuggestion from "@/wiki/cx/models/articleSuggestion"; // Update with your actual file path
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion"; // Update with your actual file path

// Mocking mw and fetch
global.mw = {
  config: {
    get: jest.fn((param) => {
      if (param === "wgRecommendToolAPIURL") {
        return "https://api.wikimedia.org/service/lw/recommendation/api/v1/translation";
      }
    }),
  },
  log: {
    error: jest.fn(),
  },
};

global.fetch = jest.fn();

describe("fetchMostPopularPageSuggestions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should correctly format the URL and call fetch", async () => {
    const testRecommendation = {
      title: "Test",
      wikidata_id: "Q1",
      langlinks_count: 9,
    };
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue([testRecommendation]),
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await suggestionsApi.fetchMostPopularPageSuggestions(
      "en",
      "fr"
    );
    expect(fetch.mock.calls[0][0].toString()).toEqual(
      "https://api.wikimedia.org/service/lw/recommendation/api/v1/translation?source=en&target=fr&count=24&search_algorithm=mostpopular"
    );
    expect(mockResponse.json).toHaveBeenCalled();
    expect(result).toEqual([
      new ArticleSuggestion({
        sourceLanguage: "en",
        targetLanguage: "fr",
        sourceTitle: "Test",
        wikidataId: "Q1",
        langLinksCount: 9,
      }),
    ]);
  });

  test("should return empty array if fetch fails", async () => {
    fetch.mockRejectedValue(new Error("Fetch failed"));

    const result = await suggestionsApi.fetchMostPopularPageSuggestions(
      "en",
      "fr"
    );

    expect(mw.log.error).toHaveBeenCalledWith(
      "Error while fetching suggestions from Recommendation API",
      expect.any(Error)
    );
    expect(result).toEqual([]);
  });
});

describe("fetchMostPopularSectionSuggestions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should correctly format the URL and call fetch", async () => {
    const testRecommendation = {
      source_title: "Test",
      target_title: "Target test",
      source_sections: ["Section1", "Section2"],
      target_sections: ["TargetSection1", "TargetSection2"],
      present: { Section1: "TargetSection1" },
      missing: { Section2: "Section2" },
    };
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue([testRecommendation]),
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await suggestionsApi.fetchMostPopularSectionSuggestions(
      "en",
      "fr"
    );
    expect(fetch.mock.calls[0][0].toString()).toEqual(
      "https://api.wikimedia.org/service/lw/recommendation/api/v1/translation/sections?source=en&target=fr&count=24&search_algorithm=mostpopular"
    );
    expect(mockResponse.json).toHaveBeenCalled();
    expect(result).toEqual([
      new SectionSuggestion({
        sourceLanguage: "en",
        targetLanguage: "fr",
        sourceTitle: "Test",
        targetTitle: "Target test",
        sourceSections: ["Section1", "Section2"],
        targetSections: ["TargetSection1", "TargetSection2"],
        missing: { Section2: "Section2" },
        present: { Section1: "TargetSection1" },
      }),
    ]);
  });

  test("should return empty array if fetch fails", async () => {
    fetch.mockRejectedValue(new Error("Fetch failed"));

    const result = await suggestionsApi.fetchMostPopularSectionSuggestions(
      "en",
      "fr"
    );

    expect(mw.log.error).toHaveBeenCalledWith(
      "Error while fetching suggestions from Recommendation API",
      expect.any(Error)
    );
    expect(result).toEqual([]);
  });
});
