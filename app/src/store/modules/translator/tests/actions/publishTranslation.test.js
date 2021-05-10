import actions from "../../actions";
import PageSection from "../../../../../wiki/cx/models/pageSection";
import PublishResult from "../../../../../wiki/cx/models/publishResult";
import cxTranslatorApi from "../../../../../wiki/cx/api/translator";
import Page from "../../../../../wiki/mw/models/page";
import SectionSuggestion from "../../../../../wiki/cx/models/sectionSuggestion";
import {
  calculateHtmlToPublish,
  calculateNewSectionNumber,
  getTitleForPublishOption
} from "../../../../../utils/publishHelper";

const mockPublishHtml = "<div>Test</div>";
let mockSectionNumber = 4;
jest.mock("../../../../../utils/publishHelper", () => {
  return {
    calculateHtmlToPublish: jest.fn(() => mockPublishHtml),
    calculateNewSectionNumber: jest.fn(() => mockSectionNumber),
    getTitleForPublishOption: jest.fn(() => "test target title")
  };
});

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
    currentSourceSection: new PageSection({ title: "test section title" }),
    currentSectionSuggestion: new SectionSuggestion({
      sourceTitle: "test source title",
      sourceLanguage: "en",
      targetLanguage: "es"
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

  it("publishTranslation with valid section (no MT abuse)", async () => {
    applicationState.currentSourceSection.translatedTitle =
      "test translated section title";
    await actions.publishTranslation({
      rootState,
      dispatch,
      rootGetters
    });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, "validateMT");
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      "application/setPublishResult",
      mockPublishResult,
      { root: true }
    );
    expect(calculateHtmlToPublish).toHaveBeenCalledTimes(1);
    expect(calculateHtmlToPublish).toHaveBeenCalledWith(
      expect.any(SectionSuggestion),
      expect.any(PageSection),
      expect.any(Page),
      expect.any(String)
    );
    expect(calculateNewSectionNumber).toHaveBeenCalledTimes(1);
    expect(calculateNewSectionNumber).toHaveBeenCalledWith(
      expect.any(SectionSuggestion),
      expect.any(PageSection),
      expect.any(String),
      expect.any(Page)
    );
    expect(getTitleForPublishOption).toHaveBeenCalledTimes(1);
    expect(cxTranslatorApi.publishTranslation).toHaveBeenCalledTimes(1);
    expect(cxTranslatorApi.publishTranslation).toHaveBeenCalledWith({
      html: mockPublishHtml,
      sourceTitle: "test source title",
      targetTitle: "test target title",
      sourceSectionTitle: "test section title",
      targetSectionTitle: "test translated section title",
      sourceLanguage: "en",
      targetLanguage: "es",
      revision: 77,
      sectionNumber: 4
    });
  });

  it("publishTranslation with MT abuse", async () => {
    mockValidMT = false;
    await actions.publishTranslation({
      rootState,
      dispatch,
      rootGetters
    });
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(3, "validateMT");
  });

  it("publishTranslation without current section suggestion throws error", async () => {
    applicationState.currentSectionSuggestion = null;

    try {
      await actions.publishTranslation({
        rootState,
        dispatch,
        rootGetters
      });
    } catch (e) {
      expect(e.message).toBe(
        "Current source section cannot be empty during publishing"
      );
    }
  });
});
