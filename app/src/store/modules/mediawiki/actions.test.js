import { ref } from "vue";
import actions from "./actions";
import Page from "@/wiki/mw/models/page";
jest.mock("@/utils/mediawikiHelper");

const mockSourceLanguage = ref("en");
jest.mock("@/composables/useURLHandler", () => () => ({
  sourceLanguageURLParameter: mockSourceLanguage,
}));

const mockNearbyPages = {
  en: [new Page(), new Page()],
  es: [new Page(), new Page()],
  de: [],
};

jest.mock("@/wiki/mw/api/page", () => {
  return {
    fetchNearbyPages: (language) => {
      if (mockNearbyPages[language]) {
        return Promise.resolve(mockNearbyPages[language]);
      }

      return Promise.reject();
    },
  };
});

describe("vuex store mediawiki/actions", () => {
  const commit = jest.fn();
  const state = {
    nearbyPages: { en: mockNearbyPages.en },
  };
  it("fetchNearbyPages action with existing nearby pages for current language", async () => {
    mockSourceLanguage.value = "en";
    await actions.fetchNearbyPages({ commit, state });
    expect(commit).toHaveBeenCalledTimes(0);
  });

  it("fetchNearbyPages action with empty nearby pages for current language", async () => {
    mockSourceLanguage.value = "es";
    await actions.fetchNearbyPages({ commit, state });
    expect(commit).toHaveBeenCalledWith("addNearbyPages", {
      language: "es",
      pages: mockNearbyPages.es,
    });
  });

  it("fetchNearbyPages action with empty pages coming from api should store an empty array inside nearbyPages", async () => {
    mockSourceLanguage.value = "de";
    await actions.fetchNearbyPages({ commit, state });
    expect(commit).toHaveBeenCalledWith("addNearbyPages", {
      language: "de",
      pages: [],
    });
  });
});
