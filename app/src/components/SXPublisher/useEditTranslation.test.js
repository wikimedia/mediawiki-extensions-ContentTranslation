import { createStore } from "vuex";
import router from "../../router";
import SectionSentence from "../../wiki/cx/models/sectionSentence";
import SubSection from "../../wiki/cx/models/subSection";
import PageSection from "../../wiki/cx/models/pageSection";
import Page from "../../wiki/mw/models/page";
import useEditTranslation from "./useEditTranslation";
import { createApp } from "vue";

const routerPushSpy = jest.spyOn(router, "push").mockImplementation(() => {});

/**
 * @return {Store}
 */
const createStoreWithSubSection = () => {
  const sentence = createSectionSentenceModel(
    "1",
    "Test sentence",
    "cx-segment",
    "Test translated sentence"
  );
  const subSection = createSubSectionModel(sentence);
  const sourcePage = new Page({ pagelanguage: "en", title: "Source title" });
  const targetPage = new Page({ pagelanguage: "el", title: "Target title" });

  return createStore({
    modules: {
      application: {
        namespaced: true,
        state: {
          currentSourceSection: new PageSection({
            id: 101,
            subSections: [subSection],
          }),
        },
        getters: {
          getCurrentPage: () => sourcePage,
          getCurrentTargetPage: () => targetPage,
        },
      },
    },
  });
};

const mockLoadComposableInApp = (composable) => {
  let result;
  const app = createApp({
    setup() {
      result = composable();

      // suppress missing template warning
      return () => {};
    },
  });
  app.use(router);
  app.use(createStoreWithSubSection());
  app.mount(document.createElement("div"));

  return { result, app };
};

/**
 * @param {string} segmentId
 * @param {string} innerHtml
 * @param {string} className
 * @param {string} translatedContent
 * @return {SectionSentence}
 */
const createSectionSentenceModel = (
  segmentId,
  innerHtml,
  className,
  translatedContent
) => {
  const sentenceNode = document.createElement("span");
  sentenceNode.innerHTML = innerHtml;
  sentenceNode.className = className;
  sentenceNode.dataset.segmentid = segmentId;
  const sentence = new SectionSentence({ id: "1", node: sentenceNode });
  sentence.translatedContent = translatedContent;

  return sentence;
};

/**
 * @param {SectionSentence} sentence
 * @return {SubSection}
 */
const createSubSectionModel = (sentence) => {
  const sentenceNode = sentence.node;
  const subSectionNode = document.createElement("section");
  subSectionNode.id = "cxSourceSection11";
  subSectionNode.appendChild(sentenceNode);

  return new SubSection({
    node: subSectionNode,
    sentences: [sentence],
  });
};

describe("useEditTranslation test", () => {
  it('should navigate to "sx-editor" route with the proper parameters', function () {
    const data = mockLoadComposableInApp(() => useEditTranslation());
    const editTranslation = data.result;
    editTranslation();

    expect(routerPushSpy).toHaveBeenCalledWith({
      name: "sx-editor",
      state: {
        content:
          '<section rel="cx:Section" id="cxTargetSection11"><span class="cx-segment" data-segmentid="1">Test translated sentence</span></section>',
        title: "Target title",
        isFinalEdit: true,
      },
    });
  });
});
