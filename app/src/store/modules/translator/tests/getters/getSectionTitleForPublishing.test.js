import PageSection from "../../../../../wiki/cx/models/pageSection";
import SectionSuggestion from "../../../../../wiki/cx/models/sectionSuggestion";
import testGetters from "../../getters";

describe("vuex getSectionTitleForPublishing getter", () => {
  const rootState = {
    application: {
      currentSectionSuggestion: new SectionSuggestion({ present: {} }),
      currentSourceSection: new PageSection({ isLeadSection: true }),
    },
  };

  const rootGetters = {
    "suggestions/getFirstAppendixTitleBySectionSuggestion": (suggestion) =>
      "appendix1",
  };

  it("should return an empty string, if section is a lead section", () => {
    expect(
      testGetters.getSectionTitleForPublishing({}, {}, rootState, rootGetters)
    ).toBe("");
  });

  it("should return the current section translated title (or original title if no translation), if section is a missing section and no appendix sections exist", () => {
    rootState.application.currentSourceSection = new PageSection({
      title: "missingSection1",
    });

    rootState.application.currentSourceSection.translatedTitle =
      "translatedMissing";

    rootGetters["suggestions/getFirstAppendixTitleBySectionSuggestion"] = () =>
      null;

    expect(
      testGetters.getSectionTitleForPublishing({}, {}, rootState, rootGetters)
    ).toBe("translatedMissing");
  });

  // it("missing section WITH existing appendix sections", () => {
  it("should return an empty string, if section is a missing section and appendix sections do exist", () => {
    rootGetters["suggestions/getFirstAppendixTitleBySectionSuggestion"] = () =>
      "appendix1";

    expect(
      testGetters.getSectionTitleForPublishing({}, {}, rootState, rootGetters)
    ).toBe("");
  });

  it("should return the current section translated title (or original title if no translation), if section is a present section", () => {
    rootState.application.currentSectionSuggestion = new SectionSuggestion({
      present: { presentSource1: "presentTarget1" },
    });

    rootState.application.currentSourceSection = new PageSection({
      title: "presentSource1",
    });

    expect(
      testGetters.getSectionTitleForPublishing({}, {}, rootState, rootGetters)
    ).toBe("presentTarget1");
  });
});
