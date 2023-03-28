import actions from "../../actions";
import PageSection from "@/wiki/cx/models/pageSection";
import SubSection from "@/wiki/cx/models/subSection";
import SectionSentence from "@/wiki/cx/models/sectionSentence";
import cxTranslatorApi from "@/wiki/cx/api/translator";
import Page from "@/wiki/mw/models/page";
import applicationGetters from "@/store/modules/application/getters";

jest.mock("@/wiki/cx/api/translator", () => ({
  saveTranslation: jest.fn(() => Promise.resolve()),
}));

jest.mock("@/utils/mtValidator", () => ({
  // "getMTScoreForPageSection" returns an integer from 1 to 100
  getMTScoreForPageSection: jest.fn(() => 20),
}));

describe("vuex store saveTranslation action", () => {
  const createEl = (tagName) => document.createElement(tagName);

  const sectionSentence = new SectionSentence({
    node: createEl("span"),
    originalContent: "Target original sentence 1",
    translatedContent: "Target translated sentence 1",
  });
  sectionSentence.mtProviderUsed = "empty";

  const sectionNode = createEl("section");
  const applicationState = {
    sourceLanguage: "en",
    targetLanguage: "es",
    currentSourceSection: new PageSection({
      id: 1,
      title: "Test section title 1",
      subSections: [
        new SubSection({ node: sectionNode, sentences: [sectionSentence] }),
      ],
    }),
  };
  applicationState.currentSourceSection.translatedTitle =
    "Test target section title 1";

  const rootState = { application: applicationState };

  const rootGetters = {
    "application/getCurrentPage": new Page({
      lastrevid: 11,
      title: "Test source title 1",
    }),
    "application/getTargetPageTitleForPublishing":
      "Test target article title 1",
    "mediawiki/getSupportedMTProviders": () => ["Google", "Flores"],
    "application/isSandboxTarget": false,
  };

  rootGetters["application/getCurrentRevision"] =
    applicationGetters.getCurrentRevision.apply(null, [
      applicationState,
      { getCurrentPage: rootGetters["application/getCurrentPage"] },
    ]);

  rootGetters["application/getParallelCorporaBaseId"] =
    applicationGetters.getParallelCorporaBaseId.apply(null, [
      applicationState,
      { getCurrentRevision: rootGetters["application/getCurrentRevision"] },
    ]);

  const commit = jest.fn();

  it("should add the translation units to the payload", async () => {
    const blockTemplateWrapper = createEl("section");
    blockTemplateWrapper.setAttribute("id", "cxSourceSection12");

    const blockTemplateNode = createEl("div");
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
    const subSection2 = new SubSection({
      node: blockTemplateWrapper,
      sentences: [],
    });
    applicationState.currentSourceSection.subSections = [
      subSection1,
      subSection2,
    ];

    await actions.saveTranslation({ rootState, rootGetters, commit });

    expect(cxTranslatorApi.saveTranslation).toHaveBeenCalledWith({
      sourceTitle: "Test source title 1",
      targetTitle: "Test target article title 1",
      sourceSectionTitle: "Test section title 1",
      targetSectionTitle: "Test target section title 1",
      sourceLanguage: "en",
      targetLanguage: "es",
      revision: 11,
      isSandbox: false,
      sectionId: "11_1",
      progress: {
        any: 0.5, // there are two subsections, only one of them is translated (any = 1/2)
        mt: 0.8, // score returned by "getMTScoreForPageSection" is 20 (mt = (100 - 20) / 100 = 0.8)
        human: 0.2, // score returned by "getMTScoreForPageSection" is 20 (human = 20 / 100 = 0.2)
      },
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
});
