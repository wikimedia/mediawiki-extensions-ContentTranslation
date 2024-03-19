import PageSection from "@/wiki/cx/models/pageSection";
import PublishFeedbackMessage from "@/wiki/cx/models/publishFeedbackMessage";
import { createStore } from "vuex";
import { createApp, ref } from "vue";
import useMtValidate from "@/components/SXPublisher/useMtValidate";

jest.mock("@/utils/publishHelper", () => {});

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
jest.mock("@/utils/mtValidator", () => {
  return {
    getMTScoreForPageSection: (section, language) =>
      mockSectionScores[section.id],
    getScoreStatus: (score) => mockScores[score],
  };
});

const mockValues = {
  sourceSection: ref(new PageSection({ id: "test0" })),
};

jest.mock("@/composables/useCurrentPageSection", () => () => mockValues);

const store = createStore({
  modules: {
    application: {
      namespaced: true,
      state: { targetLanguage: "el" },
    },
  },
});

const mockLoadComposableInApp = (composable) => {
  let result;
  const app = createApp({
    setup() {
      result = composable();

      // suppress missing template warning
      return () => {};
    },
  });
  app.use(store);
  app.mount(document.createElement("div"));

  return { result, app };
};

describe("vuex store validateMT action test", () => {
  const data = mockLoadComposableInApp(() => useMtValidate());
  const validateMT = data.result;

  it("should not add any publish feedback messages when: validation score (distance) > 15 (publishing threshold)", async () => {
    const feedbackMessage = await validateMT();
    expect(feedbackMessage).toStrictEqual(null);
  });

  it("should add an MT warning publish feedback message when: 15 (warning threshold) > validation score (distance) > 5 (publishing threshold)", async () => {
    mockValues.sourceSection.value.id = "test1";
    const feedbackMessage = validateMT();

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
    mockValues.sourceSection.value.id = "test2";

    const feedbackMessage = validateMT();

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
