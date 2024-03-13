import usePublishingComplete from "./usePublishingComplete";
import siteApi from "@/wiki/mw/api/site";
import { createApp } from "vue";
import PageSection from "@/wiki/cx/models/pageSection";
import { createStore } from "vuex";
import Page from "@/wiki/mw/models/page";

const testPage = new Page({ title: "Football" });
const applicationModule = {
  namespaced: true,
  state: {
    currentSourceSection: new PageSection({ isLeadSection: true }),
    sourceLanguage: "en",
    targetLanguage: "sw",
  },
  getters: {
    getCurrentPage: () => testPage,
    getTargetPageTitleForPublishing: () => "Target title for publishing",
    isSandboxTarget: () => false,
  },
};

const translatorModule = {
  namespaced: true,
  actions: {
    publishTranslation: jest.fn(() =>
      Promise.resolve({
        publishFeedbackMessage: null,
        targetUrl: "Test target URL",
      })
    ),
  },
};

const store = createStore({
  modules: { application: applicationModule, translator: translatorModule },
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

jest.mock("@/wiki/mw/api/site", () => ({
  addWikibaseLink: jest.fn(),
}));
Object.defineProperty(window, "location", { value: {}, writable: true });

describe("test `usePublishingComplete` composable", () => {
  const data = mockLoadComposableInApp(() => usePublishingComplete());
  const completePublishing = data.result;
  const targetURL = "test_target_url";
  it("should call addWikibaseLink when source title is main namespace", async () => {
    await completePublishing(targetURL);

    expect(siteApi.addWikibaseLink).toHaveBeenCalledTimes(1);
  });

  it("Should NOT call addWikibaseLink when source title is user namespace", async () => {
    siteApi.addWikibaseLink.mockClear();
    testPage.title = "User:Nikg/Football";

    await completePublishing(targetURL);

    expect(siteApi.addWikibaseLink).toHaveBeenCalledTimes(0);
  });
});
