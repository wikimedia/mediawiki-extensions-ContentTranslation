import actions from "../../actions";
import PageSection from "../../../../../wiki/cx/models/pageSection";
import PublishResult from "../../../../../wiki/cx/models/publishResult";
import PublishFeedbackMessage from "../../../../../wiki/cx/models/publishFeedbackMessage";
jest.mock("../../../../../utils/publishHelper", () => {});

const mockScores = {
  3: "failure",
  10: "warning",
  99: "success"
};

const mockSectionScores = {
  test0: 99,
  test1: 10,
  test2: 3
};
jest.mock("../../../../../utils/mtValidator", () => {
  return {
    getMTScoreForPageSection: (section, mtProvider) => {
      return mockSectionScores[section.id];
    },
    getScoreStatus: score => mockScores[score]
  };
});

describe("vuex store validateMT action", () => {
  const dispatch = jest.fn();
  const applicationState = {
    sourceLanguage: "en",
    currentSourceSection: new PageSection({ id: "test0" }),
    currentPublishResult: new PublishResult()
  };
  const rootState = {
    application: applicationState
  };

  it("validateMT action with validation score = 99", () => {
    const isValid = actions.validateMT({ rootState, dispatch });
    expect(dispatch).toHaveBeenCalledTimes(0);
    expect(isValid).toBe(true);
  });

  it("validateMT action with validation score = 10", () => {
    applicationState.currentSourceSection.id = "test1";
    const isValid = actions.validateMT({ rootState, dispatch });
    expect(isValid).toBe(false);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(
      "application/setPublishResult",
      expect.objectContaining({
        result: "warning",
        status: "",
        messages: expect.arrayContaining([
          {
            title: expect.any(Object),
            text: expect.any(Object),
            suppressed: false
          }
        ])
      }),
      { root: true }
    );
  });

  it("validateMT action with validation score = 3", () => {
    applicationState.currentSourceSection.id = "test2";
    const isValid = actions.validateMT({ rootState, dispatch });
    expect(isValid).toBe(false);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      "application/setPublishResult",
      expect.objectContaining({
        result: "failure",
        status: "",
        messages: expect.arrayContaining([
          {
            title: expect.any(Object),
            text: expect.any(Object),
            suppressed: false
          }
        ])
      }),
      { root: true }
    );
  });

  it("validateMT action with validation score = 10 and suppressed warnings", async () => {
    applicationState.currentSourceSection.id = "test1";
    applicationState.currentPublishResult = new PublishResult({
      result: "warning",
      messages: [new PublishFeedbackMessage({ suppressed: true })]
    });
    const isValid = actions.validateMT({ rootState, dispatch });
    expect(isValid).toBe(true);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
