import { createStore } from "vuex";
import router from "../../router";
import SectionSentence from "../../wiki/cx/models/sectionSentence";
import SubSection from "../../wiki/cx/models/subSection";
import PageSection from "../../wiki/cx/models/pageSection";
import Page from "../../wiki/mw/models/page";
import useEditTranslation from "./useEditTranslation";

const routerPushSpy = jest.spyOn(router, "push").mockImplementation(() => {});

describe("useEditTranslation test", () => {
  it('should navigate to "sx-editor" route with the proper parameters', function () {
    const sentenceNode = document.createElement("span");
    sentenceNode.innerHTML = "Test sentence";
    sentenceNode.className = "cx-segment";
    sentenceNode.dataset.segmentid = "1";
    const sentence = new SectionSentence({ id: "1", node: sentenceNode });
    sentence.translatedContent = "Test translated sentence";
    const subSectionNode = document.createElement("section");
    subSectionNode.id = "cxSourceSection11";
    subSectionNode.appendChild(sentenceNode);
    const subSection = new SubSection({
      node: subSectionNode,
      sentences: [sentence],
    });

    const sourcePage = new Page({ pagelanguage: "en", title: "Source title" });
    const targetPage = new Page({ pagelanguage: "el", title: "Target title" });
    const store = createStore({
      modules: {
        application: {
          namespaced: true,
          state: {
            sourceLanguage: "en",
            targetLanguage: "el",
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
    const { editTranslation } = useEditTranslation(store, router);
    editTranslation();

    expect(routerPushSpy).toHaveBeenCalledWith({
      name: "sx-editor",
      params: {
        content:
          '<section rel="cx:Section" id="cxTargetSection11"><span class="cx-segment" data-segmentid="1">Test translated sentence</span></section>',
        sourceLanguage: "en",
        targetLanguage: "el",
        title: "Target title",
        isFinalEdit: true,
      },
    });
  });
});
