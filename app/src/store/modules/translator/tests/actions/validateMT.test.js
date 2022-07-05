import actions from "../../actions";
import PageSection from "../../../../../wiki/cx/models/pageSection";
import PublishFeedbackMessage from "../../../../../wiki/cx/models/publishFeedbackMessage";
jest.mock("../../../../../utils/publishHelper", () => {});

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
    getMTScoreForPageSection: (section, language) =>
      mockSectionScores[section.id],
    getScoreStatus: (score) => mockScores[score],
  };
});

describe("vuex store validateMT action test", () => {
  const applicationState = {
    sourceLanguage: "en",
    currentSourceSection: new PageSection({ id: "test0" }),
    publishFeedbackMessages: [new PublishFeedbackMessage({ type: "mt" })],
  };
  const rootState = {
    application: applicationState,
  };

  it("should not add any publish feedback messages when: validation score (distance) > 15 (publishing threshold)", async () => {
    const feedbackMessage = await actions.validateMT({ rootState });
    expect(feedbackMessage).toStrictEqual(null);
  });

  it("should add an MT warning publish feedback message when: 15 (warning threshold) > validation score (distance) > 5 (publishing threshold)", async () => {
    applicationState.currentSourceSection.id = "test1";
    const feedbackMessage = actions.validateMT({ rootState });
    expect(feedbackMessage).toStrictEqual(
      new PublishFeedbackMessage({
        title: mw
          .message("cx-sx-publisher-mt-abuse-message-title", 100 - 10)
          .plain(),
        text: mw.message("cx-sx-publisher-mt-abuse-message-body").plain(),
        status: "warning",
        type: "mt",
      })
    );
  });

  it("should add an MT error publish feedback message when: 5 (publishing threshold) > validation score (distance)", async () => {
    applicationState.currentSourceSection.id = "test2";
    const feedbackMessage = actions.validateMT({ rootState });
    expect(feedbackMessage).toStrictEqual(
      new PublishFeedbackMessage({
        title: mw
          .message("cx-sx-publisher-mt-abuse-error-title", 100 - 3)
          .plain(),
        text: mw.message("cx-sx-publisher-mt-abuse-error-body").plain(),
        status: "error",
        type: "mt",
      })
    );
  });
});
