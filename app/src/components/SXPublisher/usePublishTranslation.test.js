import PageSection from "@/wiki/cx/models/pageSection";
import Page from "@/wiki/mw/models/page";
import { createStore } from "vuex";
import usePublishTranslation from "./usePublishTranslation";
import siteApi from "@/wiki/mw/api/site";

jest.mock("../../utils/mediawikiHelper", () => ({ getUrl: jest.fn() }));

jest.mock("../../wiki/mw/api/site", () => ({
  addWikibaseLink: jest.fn(),
}));
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
        targetTitle: "Test target title",
      })
    ),
  },
};

const store = createStore({
  modules: { application: applicationModule, translator: translatorModule },
});

Object.defineProperty(window, "location", { value: {}, writable: true });

describe("usePublishTranslation test", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const { doPublish } = usePublishTranslation(store);

  it("should call addWikibaseLink when source title is main namespace", async () => {
    await doPublish();

    expect(siteApi.addWikibaseLink).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(1000);
    expect(siteApi.addWikibaseLink).toHaveBeenCalledTimes(1);
  });

  it("Should NOT call addWikibaseLink when source title is user namespace", async () => {
    siteApi.addWikibaseLink.mockClear();
    testPage.title = "User:Nikg/Football";

    await doPublish();

    expect(siteApi.addWikibaseLink).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(1000);
    expect(siteApi.addWikibaseLink).toHaveBeenCalledTimes(0);
  });
});
