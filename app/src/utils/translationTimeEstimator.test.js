import {
  calculateSectionsSize,
  bytesToMinutes,
  getTranslationTimeMessageArgs,
  isQuickTranslationByBytes,
} from "./translationTimeEstimator";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import PageSection from "@/wiki/cx/models/pageSection";

jest.mock("@/wiki/cx/api/suggestions");

describe("test translationTimeEstimator", () => {
  describe("bytesToMinutes", () => {
    it("converts bytes to reading minutes correctly", () => {
      expect(bytesToMinutes(1000)).toBe(1); // 1000 / 5 / 200 = 1 minute
      expect(bytesToMinutes(6000)).toBe(6); // 6 minutes
      expect(bytesToMinutes(0)).toBe(0);
    });
  });

  describe("test isQuickTranslationByBytes", () => {
    it("returns true if estimated reading time is less than 15 minutes", () => {
      expect(isQuickTranslationByBytes(1000)).toBe(true); // 1 minute
      expect(isQuickTranslationByBytes(13999)).toBe(true); // still <= 14 minutes
    });

    it("returns false if estimated reading time is 15 minutes or more", () => {
      expect(isQuickTranslationByBytes(140001)).toBe(false); // just above 14 minutes
      expect(isQuickTranslationByBytes(30000)).toBe(false);
    });
  });

  describe("test getTranslationTimeMessageArgs", () => {
    it("returns message args for whole article", () => {
      const result = getTranslationTimeMessageArgs(135); // two hours and 15 minutes
      expect(result).toEqual([
        "cx-sx-translation-confirmer-translation-time-whole-article",
        2.5,
        135,
      ]);
    });

    it("returns message args for lead section", () => {
      const result = getTranslationTimeMessageArgs(5, [
        PageSection.LEAD_SECTION_DUMMY_TITLE,
      ]);
      expect(result).toEqual([
        "cx-sx-translation-confirmer-translation-time-lead-section",
        0,
        5,
      ]);
    });

    it("returns message args for single non-lead section", () => {
      const result = getTranslationTimeMessageArgs(8, ["History"]);
      expect(result).toEqual([
        "cx-sx-translation-confirmer-translation-time-single-section",
        0,
        8,
      ]);
    });

    it("returns message args for multiple sections", () => {
      // two hours and 14 minutes
      const result = getTranslationTimeMessageArgs(134, ["History", "Culture"]);
      expect(result).toEqual([
        "cx-sx-translation-confirmer-translation-time-sections",
        2,
        134,
        2,
      ]);
    });
  });

  describe("calculateSectionsSize", () => {
    const mockSourceArticle = {
      language: "en",
      title: "Test",
      articleSize: 10000,
    };

    beforeEach(() => {
      cxSuggestionsApi.fetchArticleSections.mockResolvedValue({
        sections: [
          { line: "History", level: "2", byteoffset: 200 },
          { line: "Culture", level: "2", byteoffset: 800 },
          { line: "Modern", level: "2", byteoffset: 1500 },
        ],
      });
    });

    it("calculates size of a single section", async () => {
      const size = await calculateSectionsSize(mockSourceArticle, ["History"]);
      expect(size).toBe(600); // 800 - 200
    });

    it("calculates size of multiple sections", async () => {
      const size = await calculateSectionsSize(mockSourceArticle, [
        "History",
        "Culture",
      ]);
      expect(size).toBe(600 + 700); // 800 - 200 + 1500 - 800
    });

    it("calculates size of lead section", async () => {
      const size = await calculateSectionsSize(mockSourceArticle, [
        PageSection.LEAD_SECTION_DUMMY_TITLE,
      ]);
      expect(size).toBe(200); // First level 2 offset
    });

    it("handles when sectionTitles is empty", async () => {
      const size = await calculateSectionsSize(mockSourceArticle, []);
      expect(size).toBe(0);
    });
  });
});
