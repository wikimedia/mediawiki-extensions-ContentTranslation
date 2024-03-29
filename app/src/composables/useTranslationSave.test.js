import PageSection from "@/wiki/cx/models/pageSection";
import SubSection from "@/wiki/cx/models/subSection";
import SectionSentence from "@/wiki/cx/models/sectionSentence";
import translatorApi from "@/wiki/cx/api/translator";
import { createStore } from "vuex";
import { createApp, ref } from "vue";
import useTranslationSave from "@/composables/useTranslationSave";

jest.mock("@/wiki/cx/api/translator", () => ({
  saveTranslation: jest.fn(() => Promise.resolve()),
}));

jest.mock("@/utils/mtValidator", () => ({
  // "getMTScoreForPageSection" returns an integer from 1 to 100
  getMTScoreForPageSection: jest.fn(() => 20),
}));

const createEl = (tagName) => document.createElement(tagName);

const sectionSentence = new SectionSentence({
  node: createEl("span"),
  originalContent: "Target original sentence 1",
  translatedContent: "Target translated sentence 1",
});
sectionSentence.mtProviderUsed = "empty";

const sectionNode = createEl("section");
const currentSourceSection = new PageSection({
  id: 1,
  title: "Test section title 1",
  subSections: [
    new SubSection({ node: sectionNode, sentences: [sectionSentence] }),
  ],
});
currentSourceSection.translatedTitle = "Test target section title 1";

const mockValues = {
  sourceSection: ref(currentSourceSection),
  targetPageTitleForPublishing: ref(
    "Test useTranslationSave target title for publishing"
  ),
};

jest.mock("@/composables/useCurrentPageSection", () => () => mockValues);

jest.mock("@/composables/useURLHandler", () => () => ({
  pageURLParameter: { value: "Test source title 1" },
}));

const mockRevision = ref(11);
jest.mock("@/composables/useCurrentPageRevision", () => () => mockRevision);

const applicationModule = {
  namespaced: true,
  state: {
    sourceLanguage: "en",
    targetLanguage: "es",
  },
  getters: {
    isSandboxTarget: () => false,
  },
};

const mediawikiModule = {
  namespaced: true,
  getters: {
    getSupportedMTProviders: () => () => ["Google", "MinT"],
  },
};

const store = createStore({
  modules: {
    application: applicationModule,
    mediawiki: mediawikiModule,
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

describe("Test 'useTranslationSave' composable", () => {
  const data = mockLoadComposableInApp(() => useTranslationSave());
  const saveTranslation = data.result;

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
      MinT: "Block MinT translation 1",
    };
    subSection1.blockTemplateMTProviderUsed = "Google";
    const subSection2 = new SubSection({
      node: blockTemplateWrapper,
      sentences: [],
    });

    currentSourceSection.subSections = [subSection1, subSection2];

    await saveTranslation();

    expect(translatorApi.saveTranslation).toHaveBeenCalledWith({
      sourceTitle: "Test source title 1",
      targetTitle: "Test useTranslationSave target title for publishing",
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
            '<section id="cxSourceSection12" data-mw-cx-source="Google">Block template translation 1</section>',
          sectionId: "11_1_12",
          validate: false,
          origin: "user",
        },
        {
          content:
            '<section id="cxSourceSection12" data-mw-cx-source="Google">Block Google translation 1</section>',
          sectionId: "11_1_12",
          validate: false,
          origin: "Google",
        },
      ],
    });
  });
});
