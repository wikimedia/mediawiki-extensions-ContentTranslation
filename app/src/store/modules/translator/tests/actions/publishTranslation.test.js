import actions from "../../actions";
import PageSection from "@/wiki/cx/models/pageSection";
import SubSection from "@/wiki/cx/models/subSection";
import SectionSentence from "@/wiki/cx/models/sectionSentence";
import cxTranslatorApi from "@/wiki/cx/api/translator";
import Page from "@/wiki/mw/models/page";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import PublishFeedbackMessage from "@/wiki/cx/models/publishFeedbackMessage";

const mockMessage = new PublishFeedbackMessage({
  text: "Test publishing error",
  status: "publishing error",
});

const mockMessageForSaving = new PublishFeedbackMessage({
  text: "Test saving error",
  status: "saving error",
});

jest.mock("@/wiki/cx/api/translator", () => ({
  publishTranslation: jest.fn(({ sectionNumber }) => {
    if (sectionNumber === 1) {
      return null;
    } else if (sectionNumber === 2) {
      return mockMessage;
    }
  }),
  saveTranslation: jest.fn(({ sectionNumber }) => {
    if (sectionNumber === 3) {
      return mockMessageForSaving;
    } else {
      return null;
    }
  }),
}));

describe("vuex store publishTranslation action", () => {
  const subSectionNode = document.createElement("section");
  subSectionNode.setAttribute("id", "cxSourceSection1");
  const sectionSentenceNode = document.createElement("span");
  sectionSentenceNode.className = "cx-segment";
  sectionSentenceNode.innerHTML = "Target original sentence 1";
  subSectionNode.append(sectionSentenceNode);

  const sectionSentence = new SectionSentence({
    node: sectionSentenceNode,
    originalContent: "Target original sentence 1",
    translatedContent: "Target translated sentence 1",
  });
  sectionSentence.mtProviderUsed = "empty";

  const applicationState = {
    sourceLanguage: "en",
    targetLanguage: "es",
    currentSourceSection: new PageSection({
      id: 1,
      title: "Test section title 1",
      subSections: [
        new SubSection({ node: subSectionNode, sentences: [sectionSentence] }),
      ],
    }),
    currentSectionSuggestion: new SectionSuggestion({
      sourceTitle: "Test source title 1",
    }),
  };
  applicationState.currentSourceSection.translatedTitle =
    "Test target section title 1";

  const rootState = { application: applicationState };

  const rootGetters = {
    "application/getCurrentPage": new Page({ lastrevid: 11 }),
    "mediawiki/getSupportedMTProviders": () => ["Google", "Flores"],
  };

  const getters = {
    getArticleTitleForPublishing: "Test target article title 1",
    getSectionNumberForPublishing: 1,
  };

  it("should call api saveTranslation method with the proper payload", async () => {
    await actions.publishTranslation({
      rootState,
      rootGetters,
      getters,
    });

    expect(cxTranslatorApi.saveTranslation).toHaveBeenCalledWith({
      sourceTitle: "Test source title 1",
      targetTitle: "Test target article title 1",
      sourceSectionTitle: "Test section title 1",
      targetSectionTitle: "Test target section title 1",
      sourceLanguage: "en",
      targetLanguage: "es",
      revision: 11,
      sectionId: "11_1",
      units: [
        {
          content:
            '<section id="cxSourceSection1"><span class="cx-segment">Target original sentence 1</span></section>',
          origin: "source",
          sectionId: "11_1_1",
          validate: false,
        },
        {
          content:
            '<section id="cxSourceSection1"><span class="cx-segment">Target translated sentence 1</span></section>',
          origin: "user",
          sectionId: "11_1_1",
          validate: false,
        },
      ],
      sectionNumber: 1,
    });
  });

  it("should call api publishTranslation method with the proper payload", async () => {
    await actions.publishTranslation({
      rootState,
      rootGetters,
      getters,
    });

    expect(cxTranslatorApi.publishTranslation).toHaveBeenCalledWith({
      html: '<h2>Test target section title 1</h2>\n<span class="cx-segment">Target translated sentence 1</span>',
      sourceTitle: "Test source title 1",
      targetTitle: "Test target article title 1",
      sourceSectionTitle: "Test section title 1",
      targetSectionTitle: "Test target section title 1",
      sourceLanguage: "en",
      targetLanguage: "es",
      revision: 11,
      sectionNumber: 1,
    });
  });

  it("should return null on successful publishing", async () => {
    const feedbackMessage = await actions.publishTranslation({
      rootState,
      rootGetters,
      getters,
    });

    expect(feedbackMessage).toStrictEqual(null);
  });

  it("should add the translation units to the payload", async () => {
    const blockTemplateWrapper = document.createElement("section");
    blockTemplateWrapper.setAttribute("id", "cxSourceSection12");

    const blockTemplateNode = document.createElement("div");
    blockTemplateNode.setAttribute("about", "template-about");
    blockTemplateWrapper.appendChild(blockTemplateNode);

    const subSection1 = new SubSection({
      node: blockTemplateWrapper,
      sentences: [],
    });

    subSection1.blockTemplateTranslatedContent = "Block template translation 1";
    subSection1.blockTemplateProposedTranslations = {
      Google: "Block Google translation 1",
      Flores: "Block Flores translation 1",
    };
    subSection1.blockTemplateMTProviderUsed = "Google";
    applicationState.currentSourceSection.subSections = [subSection1];

    await actions.publishTranslation({
      rootState,
      rootGetters,
      getters,
    });

    expect(cxTranslatorApi.saveTranslation).toHaveBeenCalledWith({
      sourceTitle: "Test source title 1",
      targetTitle: "Test target article title 1",
      sourceSectionTitle: "Test section title 1",
      targetSectionTitle: "Test target section title 1",
      sourceLanguage: "en",
      targetLanguage: "es",
      revision: 11,
      sectionNumber: 1,
      sectionId: "11_1",
      units: [
        {
          content: blockTemplateWrapper.outerHTML,
          sectionId: "11_1_12",
          validate: false,
          origin: "source",
        },
        {
          content:
            '<section id="cxSourceSection12">Block template translation 1</section>',
          sectionId: "11_1_12",
          validate: false,
          origin: "user",
        },
        {
          content:
            '<section id="cxSourceSection12">Block Google translation 1</section>',
          sectionId: "11_1_12",
          validate: false,
          origin: "Google",
        },
      ],
    });
  });

  it("should resolve to the publish feedback message that is returned by publishTranslation api method, when publishing fails", async () => {
    getters.getSectionNumberForPublishing = 2;
    applicationState.currentSourceSection.subSections = [];
    const feedbackMessage = await actions.publishTranslation({
      rootState,
      rootGetters,
      getters,
    });
    expect(cxTranslatorApi.publishTranslation).toHaveReturnedWith(mockMessage);
    expect(feedbackMessage).toStrictEqual(mockMessage);
  });

  it("should resolve to the publish feedback message that is returned by saveTranslation api method, when saving fails", async () => {
    getters.getSectionNumberForPublishing = 3;
    const feedbackMessage = await actions.publishTranslation({
      rootState,
      rootGetters,
      getters,
    });
    expect(cxTranslatorApi.saveTranslation).toHaveReturnedWith(
      mockMessageForSaving
    );
    expect(feedbackMessage).toStrictEqual(mockMessageForSaving);
  });

  it("should throw and error when no current section suggestion exists", async () => {
    applicationState.currentSectionSuggestion = null;

    try {
      await actions.publishTranslation({
        rootState,
        rootGetters,
        getters,
      });
    } catch (e) {
      expect(e.message).toBe(
        "Current source section cannot be empty during publishing"
      );
    }
  });
});
