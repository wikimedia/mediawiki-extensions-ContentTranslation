import usePublishingComplete from "./usePublishingComplete";
import siteApi from "@/wiki/mw/api/site";
import { createApp, ref } from "vue";
import PageSection from "@/wiki/cx/models/pageSection";
import { createStore } from "vuex";
import Page from "@/wiki/mw/models/page";

const mockValues = {
  sourceSection: ref(new PageSection({ isLeadSection: true })),
  targetPageTitleForPublishing: ref("Target title for publishing"),
};

jest.mock("@/composables/useCurrentPageSection", () => () => mockValues);

const mockCurrentPage = ref(new Page({ title: "Football" }));

jest.mock("@/composables/useCurrentPages", () => () => ({
  currentSourcePage: mockCurrentPage,
}));

const store = createStore({
  modules: {
    application: {
      namespaced: true,
      state: {
        sourceLanguage: "en",
        targetLanguage: "sw",
      },
      getters: {
        isSandboxTarget: () => false,
      },
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
    mockCurrentPage.value.title = "User:Nikg/Football";

    await completePublishing(targetURL);

    expect(siteApi.addWikibaseLink).toHaveBeenCalledTimes(0);
  });
});
