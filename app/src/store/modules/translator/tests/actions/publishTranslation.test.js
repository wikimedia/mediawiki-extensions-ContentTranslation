import actions from "../../actions";
import PageSection from "../../../../../wiki/cx/models/pageSection";
import PublishResult from "../../../../../wiki/cx/models/publishResult";
import cxTranslatorApi from "../../../../../wiki/cx/api/translator";
import Page from "../../../../../wiki/mw/models/page";
import SectionSuggestion from "../../../../../wiki/cx/models/sectionSuggestion";

const mockPublishResult = new PublishResult();
jest.mock("../../../../../wiki/cx/api/translator", () => {
  return {
    publishTranslation: jest.fn(() => mockPublishResult)
  };
});

describe("vuex store publishTranslation action", () => {
  let mockValidMT = true;
  const mockActions = {
    validateMT: jest.fn(() => mockValidMT),
    "application/setPublishResult": jest.fn()
  };
  const dispatch = jest.fn(action => mockActions[action]());

  const applicationState = {
    sourceLanguage: "en",
    targetLanguage: "es",
    currentSourceSection: new PageSection({ title: "test section title" }),
    currentSectionSuggestion: new SectionSuggestion({
      sourceTitle: "test source title"
    }),
    publishTarget: "NEW_SECTION"
  };

  const rootState = {
    application: applicationState
  };

  const rootGetters = {
    "application/getCurrentPage": new Page({
      title: "test source page",
      lastrevid: 77
    }),
    "application/getCurrentTargetPage": new Page(),
    "suggestions/getFirstAppendixTitleBySectionSuggestion": () => "Notas"
  };

  const getters = {
    getArticleTitleForPublishing: "Test target article title",
    getSectionTitleForPublishing: "Test target section title",
    getSectionNumberForPublishing: 4,
    getCleanHTMLForPublishing: "<div>Test</div>"
  };

  it("publishTranslation with valid section", async () => {
    applicationState.currentSourceSection.translatedTitle =
      "test translated section title";
    await actions.publishTranslation({
      rootState,
      dispatch,
      rootGetters,
      getters
    });

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      "application/setPublishResult",
      mockPublishResult,
      { root: true }
    );

    expect(cxTranslatorApi.publishTranslation).toHaveBeenCalledTimes(1);
    expect(cxTranslatorApi.publishTranslation).toHaveBeenCalledWith({
      html: "<div>Test</div>",
      sourceTitle: "test source title",
      targetTitle: "Test target article title",
      sourceSectionTitle: "test section title",
      targetSectionTitle: "Test target section title",
      sourceLanguage: "en",
      targetLanguage: "es",
      revision: 77,
      sectionNumber: 4
    });
  });

  it("publishTranslation without current section suggestion throws error", async () => {
    applicationState.currentSectionSuggestion = null;

    try {
      await actions.publishTranslation({
        rootState,
        dispatch,
        rootGetters,
        getters
      });
    } catch (e) {
      expect(e.message).toBe(
        "Current source section cannot be empty during publishing"
      );
    }
  });
});
