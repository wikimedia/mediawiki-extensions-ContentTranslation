import PageSection from "../../../../../wiki/cx/models/pageSection";
import Page from "../../../../../wiki/mw/models/page";
import SectionSuggestion from "../../../../../wiki/cx/models/sectionSuggestion";
import testGetters from "../../getters";

describe("vuex getSectionNumberForPublishing getter", () => {
  const rootState = {
    application: {
      currentSectionSuggestion: new SectionSuggestion({}),
      currentSourceSection: new PageSection({ isLeadSection: true }),
    },
  };

  const getters = {};
  const rootGetters = {
    "application/getCurrentTargetPage": new Page(),
    "suggestions/getFirstAppendixTitleBySectionSuggestion": (suggestion) =>
      "appendix1",
  };

  it("should return 0 when section is a lead section", () => {
    expect(
      testGetters.getSectionNumberForPublishing(
        {},
        getters,
        rootState,
        rootGetters
      )
    ).toBe(0);
  });

  it("should return the position of the section, if the section is present", () => {
    rootState.application.currentSectionSuggestion = new SectionSuggestion({
      present: { presentSource1: "presentTarget1" },
    });
    rootState.application.currentSourceSection = new PageSection({
      title: "presentSource1",
    });

    const targetPage = new Page();

    targetPage.getSectionNumberByTitle = (title) => {
      if (title === "presentTarget1") {
        return 5;
      } else if (title === "appendix1") {
        return 10;
      }

      return 20;
    };
    rootGetters["application/getCurrentTargetPage"] = targetPage;
    expect(
      testGetters.getSectionNumberForPublishing(
        {},
        getters,
        rootState,
        rootGetters
      )
    ).toBe(5);
  });

  it("should return the position of the first appendix section, if the section is missing and appendix sections exist", () => {
    rootState.application.currentSectionSuggestion = new SectionSuggestion({
      present: {},
    });

    expect(
      testGetters.getSectionNumberForPublishing(
        {},
        getters,
        rootState,
        rootGetters
      )
    ).toBe(10);
  });

  it("should return 'new', if the section is missing and no appendix sections exist", () => {
    rootState.application.currentSectionSuggestion = new SectionSuggestion({
      present: {},
    });

    rootGetters["suggestions/getFirstAppendixTitleBySectionSuggestion"] = () =>
      null;

    expect(
      testGetters.getSectionNumberForPublishing(
        {},
        getters,
        rootState,
        rootGetters
      )
    ).toBe("new");
  });
});
