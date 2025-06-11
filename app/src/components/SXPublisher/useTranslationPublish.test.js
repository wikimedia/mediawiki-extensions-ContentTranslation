import PageSection from "@/wiki/cx/models/pageSection";
import SubSection from "@/wiki/cx/models/subSection";
import SectionSentence from "@/wiki/cx/models/sectionSentence";
import cxTranslatorApi from "@/wiki/cx/api/translator";
import PublishFeedbackMessage from "@/wiki/cx/models/publishFeedbackMessage";
import { createStore } from "vuex";
import { ref } from "vue";
import useTranslationPublish from "./useTranslationPublish";
import useExistingSectionPublishOption from "@/composables/useExistingSectionPublishOption";
import { loadTestComposable } from "@/utils/loadTestComposable";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

const { setExistingSectionPublishOption } = useExistingSectionPublishOption();

const mockErrorResult = {
  publishFeedbackMessage: new PublishFeedbackMessage({
    text: "Test publishing error",
    status: "publishing error",
  }),
  targetUrl: null,
};

const mockErrorPublishFeedbackMessageForSaving = new PublishFeedbackMessage({
  text: "Test saving error",
  status: "saving error",
});

jest.mock("@/wiki/cx/api/translator", () => ({
  publishTranslation: jest.fn(({ targetTitle }) => {
    // successful publishing
    if (targetTitle === "Test target article title 1") {
      return Promise.resolve({
        publishFeedbackMessage: null,
        targetUrl: "success_url",
        pageId: 1,
        revisionId: 2,
      });
    } else if (targetTitle === "Test target article title 2") {
      return Promise.resolve(mockErrorResult);
    }
  }),
}));

jest.mock("@/composables/usePublishInstrument", () => () => ({
  logPublishAttemptEvent: jest.fn(),
  logPublishSuccessEvent: jest.fn(),
  logPublishFailureEvent: jest.fn(),
}));

const createSentenceNode = () => {
  const sectionSentenceNode = document.createElement("span");
  sectionSentenceNode.className = "cx-segment";
  sectionSentenceNode.innerHTML = "Target original sentence 1";

  return sectionSentenceNode;
};

const sectionSentenceNode = createSentenceNode();

const createSubSectionNode = (sectionSentenceNode) => {
  const subSectionNode = document.createElement("section");
  subSectionNode.setAttribute("id", "cxSourceSection1");
  subSectionNode.append(sectionSentenceNode);

  return subSectionNode;
};

const subSectionNode = createSubSectionNode(sectionSentenceNode);

const sectionSentence = new SectionSentence({
  node: sectionSentenceNode,
  originalContent: "Target original sentence 1",
  translatedContent: "Target translated sentence 1",
});
sectionSentence.mtProviderUsed = "empty";

const SOURCE_SECTION_TITLE = "Test section title 1";
const currentSourceSection = new PageSection({
  id: 1,
  title: SOURCE_SECTION_TITLE,
  subSections: [
    new SubSection({ node: subSectionNode, sentences: [sectionSentence] }),
  ],
});
currentSourceSection.translatedTitle = "Test target section title 1";

const mockCurrentPageSectionValues = {
  sourceSection: ref(currentSourceSection),
  targetPageTitleForPublishing: ref("Test target article title 1"),
};

jest.mock(
  "@/composables/useCurrentPageSection",
  () => () => mockCurrentPageSectionValues
);

const mockCurrentSectionSuggestionValues = {
  sectionSuggestion: ref(
    new SectionSuggestion({
      present: { [SOURCE_SECTION_TITLE]: "Existing section title 1" },
    })
  ),
};
jest.mock(
  "@/composables/useCurrentSectionSuggestion",
  () => () => mockCurrentSectionSuggestionValues
);

jest.mock("@/composables/useURLHandler", () => () => ({
  sourceLanguageURLParameter: { value: "en" },
  targetLanguageURLParameter: { value: "es" },
  pageURLParameter: { value: "Test source title 1" },
}));

const mockRevision = ref(11);
jest.mock("@/composables/useCurrentPageRevision", () => () => mockRevision);

const applicationModule = {
  namespaced: true,
  getters: { isSandboxTarget: () => false },
};

const mockStore = createStore({
  modules: {
    application: applicationModule,
  },
});

const mockSaveTranslation = jest.fn(() => {
  const targetTitleForPublishing =
    mockCurrentPageSectionValues.targetPageTitleForPublishing.value;

  if (targetTitleForPublishing === "Test target article title 3") {
    return mockErrorPublishFeedbackMessageForSaving;
  } else {
    return 1234;
  }
});
jest.mock("@/composables/useTranslationSave", () => () => mockSaveTranslation);

describe(" test `useTranslationPublish` composable", () => {
  const data = loadTestComposable(() => useTranslationPublish(), [mockStore]);
  const { doPublish } = data.result;

  it("should dispatch 'saveTranslation' action", async () => {
    await doPublish();

    expect(mockSaveTranslation).toHaveBeenCalledTimes(1);
  });

  it("should call api publishTranslation method with the proper payload when publishing section as new", async () => {
    setExistingSectionPublishOption("new");
    await doPublish();

    expect(cxTranslatorApi.publishTranslation).toHaveBeenLastCalledWith({
      html: '<span class="cx-segment">Target translated sentence 1</span>',
      sourceTitle: "Test source title 1",
      targetTitle: "Test target article title 1",
      sourceSectionTitle: SOURCE_SECTION_TITLE,
      targetSectionTitle: "Test target section title 1",
      sourceLanguage: "en",
      targetLanguage: "es",
      revision: 11,
      isSandbox: false,
      sectionTranslationId: 1234,
    });
  });

  it("should call publishTranslation method with existing section title if 'expand' option is selected", async () => {
    setExistingSectionPublishOption("expand");
    await doPublish();

    expect(cxTranslatorApi.publishTranslation).toHaveBeenLastCalledWith({
      html: '<span class="cx-segment">Target translated sentence 1</span>',
      sourceTitle: "Test source title 1",
      targetTitle: "Test target article title 1",
      sourceSectionTitle: SOURCE_SECTION_TITLE,
      targetSectionTitle: "Test target section title 1",
      sourceLanguage: "en",
      targetLanguage: "es",
      revision: 11,
      isSandbox: false,
      sectionTranslationId: 1234,
      existingSectionTitle: "Existing section title 1",
    });
  });

  it("should return an object with filled target URL, pageId, revisionId, and null publishFeedbackMessage on successful publishing", async () => {
    const feedbackMessage = await doPublish();

    expect(feedbackMessage).toStrictEqual({
      publishFeedbackMessage: null,
      targetUrl: "success_url",
      pageId: 1,
      revisionId: 2,
    });
  });

  it("should resolve to an object containing the publish feedback message that is returned by publishTranslation api method and an empty target URL, when publishing fails", async () => {
    mockCurrentPageSectionValues.targetPageTitleForPublishing.value =
      "Test target article title 2";
    mockCurrentPageSectionValues.sourceSection.value.subSections = [];

    const result = await doPublish();

    expect(cxTranslatorApi.publishTranslation).toHaveReturnedWith(
      Promise.resolve(mockErrorResult)
    );
    expect(result).toStrictEqual(mockErrorResult);
  });

  it("should resolve to an object containing the publish feedback message that is returned by saveTranslation api method and an empty targetTitle, when saving fails", async () => {
    mockCurrentPageSectionValues.targetPageTitleForPublishing.value =
      "Test target article title 3";
    const result = await doPublish();

    expect(mockSaveTranslation).toHaveReturnedWith(
      mockErrorPublishFeedbackMessageForSaving
    );
    expect(result).toStrictEqual({
      publishFeedbackMessage: mockErrorPublishFeedbackMessageForSaving,
      targetUrl: null,
    });
  });
});
