import PageSection from "../../../../../wiki/cx/models/pageSection";
import Page from "../../../../../wiki/mw/models/page";
import SectionSuggestion from "../../../../../wiki/cx/models/sectionSuggestion";
import testGetters from "../../getters";

jest.mock("../../../../../utils/publishHelper", () => {
  return {
    cleanupHtml: jest.fn((html) => `clean:${html}`),
    prependNewSectionToAppendixSection: jest.fn(
      (section, appendixSection) =>
        `prepend:${section.title}-${appendixSection.title}`
    ),
  };
});

describe("vuex getCleanHTMLForPublishing getter", () => {
  const currentSourceSection = new PageSection({
    title: "presentSourceSection1",
    isLeadSection: true,
  });
  const rootState = {
    application: {
      currentSectionSuggestion: new SectionSuggestion({
        present: {},
      }),
      currentSourceSection,
    },
  };

  const rootGetters = {
    "application/getCurrentTargetPage": new Page(),
    "suggestions/getFirstAppendixTitleBySectionSuggestion": (suggestion) =>
      "appendix1",
  };

  it("should return the clean HTML of the section's translation, when section is a lead section", () => {
    Object.defineProperty(currentSourceSection, "translationHtml", {
      get: function () {
        return "leadTranslation";
      },
      configurable: true,
    });

    expect(
      testGetters.getCleanHTMLForPublishing({}, {}, rootState, rootGetters)
    ).toBe(`clean:leadTranslation`);
  });

  it("should return the clean HTML of the section's translation, when section is a present section", () => {
    rootState.application.currentSectionSuggestion = new SectionSuggestion({
      present: { presentSourceSection1: "presentTargetSection1" },
    });
    Object.defineProperty(currentSourceSection, "translationHtml", {
      get: function () {
        return "presentTranslation";
      },
      configurable: true,
    });
    currentSourceSection.isLeadSection = false;
    expect(
      testGetters.getCleanHTMLForPublishing({}, {}, rootState, rootGetters)
    ).toBe(`clean:presentTranslation`);
  });

  it("should return the clean HTML of the section's translation, when section is a missing section and no appendix sections exist", () => {
    rootState.application.currentSectionSuggestion = new SectionSuggestion({
      present: {},
    });
    rootGetters["suggestions/getFirstAppendixTitleBySectionSuggestion"] = () =>
      null;
    Object.defineProperty(currentSourceSection, "translationHtml", {
      get: function () {
        return "noAppendixTranslation";
      },
    });
    expect(
      testGetters.getCleanHTMLForPublishing({}, {}, rootState, rootGetters)
    ).toBe(`clean:noAppendixTranslation`);
  });

  it("should return the section header, plus the clean HTML of the section's translation, plus the header of the 1st appendix section, plus the clean HTML of the appendix section contents", () => {
    rootState.application.currentSectionSuggestion = new SectionSuggestion({
      present: {},
    });

    rootGetters["suggestions/getFirstAppendixTitleBySectionSuggestion"] = () =>
      "appendix2";

    const appendixSection = new PageSection({ title: "appendix2" });
    currentSourceSection.translatedTitle = "presentTarget1";
    const sections = [currentSourceSection, appendixSection];
    rootGetters["application/getCurrentTargetPage"] = new Page({
      sections,
    });
    expect(
      testGetters.getCleanHTMLForPublishing({}, {}, rootState, rootGetters)
    ).toBe(`prepend:presentTarget1-appendix2`);
  });
});
