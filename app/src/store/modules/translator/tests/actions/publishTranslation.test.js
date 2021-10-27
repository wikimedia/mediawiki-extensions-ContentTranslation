import actions from "../../actions";
import PageSection from "@/wiki/cx/models/pageSection";
import cxTranslatorApi from "@/wiki/cx/api/translator";
import Page from "@/wiki/mw/models/page";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import applicationMutations from "@/store/modules/application/mutations";
import PublishFeedbackMessage from "@/wiki/cx/models/publishFeedbackMessage";

const mockMessage = new PublishFeedbackMessage({
  text: "Test error",
  status: "error"
});

jest.mock("@/wiki/cx/api/translator", () => ({
  publishTranslation: jest.fn(({ sectionNumber }) => {
    if (sectionNumber === 1) {
      return null;
    } else if (sectionNumber === 2) {
      return mockMessage;
    }
  })
}));

describe("vuex store publishTranslation action", () => {
  const commit = jest.fn((mutation, payload) => {
    if (mutation === "application/addPublishFeedbackMessage") {
      applicationMutations.addPublishFeedbackMessage(applicationState, payload);
    }
  });

  const applicationState = {
    sourceLanguage: "en",
    targetLanguage: "es",
    currentSourceSection: new PageSection({ title: "Test section title 1" }),
    currentSectionSuggestion: new SectionSuggestion({
      sourceTitle: "Test source title 1"
    }),
    publishFeedbackMessages: []
  };

  const rootState = {
    application: applicationState
  };

  const rootGetters = {
    "application/getCurrentPage": new Page({ lastrevid: 11 })
  };

  const getters = {
    getArticleTitleForPublishing: "Test target article title 1",
    getSectionTitleForPublishing: "Test target section title 1",
    getSectionNumberForPublishing: 1,
    getCleanHTMLForPublishing: "<div>Test 1</div>"
  };

  it("should call api publishTranslation method with the proper payload", async () => {
    await actions.publishTranslation({
      rootState,
      commit,
      rootGetters,
      getters
    });

    expect(cxTranslatorApi.publishTranslation).toHaveBeenCalledTimes(1);
    expect(cxTranslatorApi.publishTranslation).toHaveBeenCalledWith({
      html: "<div>Test 1</div>",
      sourceTitle: "Test source title 1",
      targetTitle: "Test target article title 1",
      sourceSectionTitle: "Test section title 1",
      targetSectionTitle: "Test target section title 1",
      sourceLanguage: "en",
      targetLanguage: "es",
      revision: 11,
      sectionNumber: 1
    });
  });

  it("should not add any publish feedback message on successful publishing", async () => {
    await actions.publishTranslation({
      rootState,
      commit,
      rootGetters,
      getters
    });

    expect(applicationState.publishFeedbackMessages).toStrictEqual([]);
  });

  it("should add the publish feedback message that is returned by publishTranslation api method, when publishing fails", async () => {
    getters.getSectionNumberForPublishing = 2;
    await actions.publishTranslation({
      rootState,
      commit,
      rootGetters,
      getters
    });
    expect(cxTranslatorApi.publishTranslation).toHaveBeenCalledWith({
      html: "<div>Test 1</div>",
      sourceTitle: "Test source title 1",
      targetTitle: "Test target article title 1",
      sourceSectionTitle: "Test section title 1",
      targetSectionTitle: "Test target section title 1",
      sourceLanguage: "en",
      targetLanguage: "es",
      revision: 11,
      sectionNumber: 2
    });
    expect(applicationState.publishFeedbackMessages).toStrictEqual([
      mockMessage
    ]);
  });

  it("should throw and error when no current section suggestion exists", async () => {
    applicationState.currentSectionSuggestion = null;

    try {
      await actions.publishTranslation({
        rootState,
        commit,
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
