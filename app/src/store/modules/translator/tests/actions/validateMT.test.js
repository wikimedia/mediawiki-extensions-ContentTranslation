import actions from "../../actions";
import PageSection from "../../../../../wiki/cx/models/pageSection";
import PublishFeedbackMessage from "../../../../../wiki/cx/models/publishFeedbackMessage";
jest.mock("../../../../../utils/publishHelper", () => {});
import applicationMutations from "../../../../../store/modules/application/mutations";

const mockScores = {
  3: "failure",
  10: "warning",
  99: "success",
};

const mockSectionScores = {
  test0: 99,
  test1: 10,
  test2: 3,
};
jest.mock("../../../../../utils/mtValidator", () => {
  return {
    getMTScoreForPageSection: (section, mtProvider) => {
      return mockSectionScores[section.id];
    },
    getScoreStatus: (score) => mockScores[score],
  };
});

describe("vuex store validateMT action test", () => {
  const applicationState = {
    sourceLanguage: "en",
    currentSourceSection: new PageSection({ id: "test0" }),
    publishFeedbackMessages: [new PublishFeedbackMessage({ type: "mt" })],
  };
  const commit = jest.fn((mutation, payload) => {
    if (mutation === "application/clearMTPublishFeedbackMessages") {
      applicationMutations.clearMTPublishFeedbackMessages(applicationState);
    } else if (mutation === "application/addMTPublishFeedbackMessage") {
      applicationMutations.addMTPublishFeedbackMessage(
        applicationState,
        payload
      );
    }
  });
  const rootState = {
    application: applicationState,
  };

  it("should not add any publish feedback messages when: validation score (distance) > 15 (publishing threshold)", () => {
    actions.validateMT({ rootState, commit });
    expect(applicationState.publishFeedbackMessages).toStrictEqual([]);
  });

  it("should add an MT warning publish feedback message when: 15 (warning threshold) > validation score (distance) > 5 (publishing threshold)", () => {
    applicationState.currentSourceSection.id = "test1";
    actions.validateMT({ rootState, commit });
    expect(applicationState.publishFeedbackMessages).toStrictEqual([
      new PublishFeedbackMessage({
        title: mw
          .message("cx-sx-publisher-mt-abuse-message-title", 100 - 10)
          .plain(),
        text: mw.message("cx-sx-publisher-mt-abuse-message-body").plain(),
        status: "warning",
        type: "mt",
      }),
    ]);
  });

  it("should add an MT error publish feedback message when: 5 (publishing threshold) > validation score (distance)", () => {
    applicationState.currentSourceSection.id = "test2";
    actions.validateMT({ rootState, commit });
    expect(applicationState.publishFeedbackMessages).toStrictEqual([
      new PublishFeedbackMessage({
        title: mw
          .message("cx-sx-publisher-mt-abuse-error-title", 100 - 3)
          .plain(),
        text: mw.message("cx-sx-publisher-mt-abuse-error-body").plain(),
        status: "error",
        type: "mt",
      }),
    ]);
  });
});
