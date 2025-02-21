import { createStore } from "vuex";
import { loadTestComposable } from "@/utils/loadTestComposable";
import useURLHandler from "@/composables/useURLHandler";
import useApplicationLanguagesInitialize from "@/composables/useApplicationLanguagesInitialize";

let mockWikiLanguage = "bn";
jest.mock("@/utils/mediawikiHelper", () => ({
  siteMapper: { getCurrentWikiLanguageCode: () => mockWikiLanguage },
  getUrl: jest.fn(),
}));

const mediawikiState = {
  enabledTargetLanguages: null,
  supportedLanguageCodes: [],
};
const supportedLanguageCodes = ["en", "es", "el", "de", "bn", "ig", "ha", "sq"];

const store = createStore({
  modules: {
    application: {
      namespaced: true,
      state: {},
      mutations: {
        setSourceLanguage: jest.fn(),
        setTargetLanguage: jest.fn(),
      },
    },
    mediawiki: {
      namespaced: true,
      state: mediawikiState,
      actions: {
        fetchSupportedLanguageCodes: () =>
          (mediawikiState.supportedLanguageCodes = supportedLanguageCodes),
      },
      mutations: {
        setEnabledTargetLanguages(state, languages) {
          state.enabledTargetLanguages = languages;
        },
      },
    },
  },
});

mw.config.get = (parameter) => {
  return parameter === "wgContentTranslationTranslateInTarget" ? false : null;
};

const mockURLParams = {
  from: null,
  to: null,
};

global.URLSearchParams = jest.fn().mockImplementation(() => {
  const params = new Map([
    ["from", mockURLParams.from],
    ["to", mockURLParams.to],
  ]);

  return {
    get: jest.fn((key) => params.get(key) || null),
    set: jest.fn((key, value) => params.set(key, value)),
    delete: jest.fn((key) => params.delete(key)),
    entries: jest.fn(() => Array.from(params.entries())[Symbol.iterator]()),
    [Symbol.iterator]: function () {
      return this.entries();
    },
  };
});

jest.mock("vue-banana-i18n", () => ({ useI18n: jest.fn() }));

describe("useApplicationLanguagesInitialize composable test", () => {
  const data = loadTestComposable(
    () => useApplicationLanguagesInitialize(),
    [store]
  );
  const { initializeApplicationLanguages } = data.result;

  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    initializeURLState,
  } = useURLHandler();

  // supportedLanguages refer to all languages that are supported by cxserver

  it("should respect URL params when they are properly supported/enabled", async () => {
    mockURLParams.from = "en";
    mockURLParams.to = "el";
    // both source and target languages have to be supported by cxserver
    // target language should also be enabled for Section Translation if enabledTargetLanguages
    // (in configuration parameter SectionTranslationTargetLanguages) are defined
    initializeURLState();
    await initializeApplicationLanguages();

    expect(sourceLanguage.value).toBe("en");
    expect(targetLanguage.value).toBe("el");

    store.commit("mediawiki/setEnabledTargetLanguages", ["el"]);
    initializeURLState();
    await initializeApplicationLanguages();

    // source language doesn't need to be enabled
    expect(sourceLanguage.value).toBe("en");
    expect(targetLanguage.value).toBe("el");
  });

  it("should fallback to wiki language (bn) as target language if URL param 'to' not supported or not enabled", async () => {
    // sq not enabled here
    mockURLParams.to = "sq";
    store.commit("mediawiki/setEnabledTargetLanguages", ["bn", "ig", "ha"]);

    initializeURLState();
    await initializeApplicationLanguages();
    expect(sourceLanguage.value).toBe("en");
    expect(targetLanguage.value).toBe("bn");

    // fr not supported here
    mockURLParams.to = "fr";
    initializeURLState();

    await initializeApplicationLanguages();
    expect(sourceLanguage.value).toBe("en");
    expect(targetLanguage.value).toBe("bn");
  });

  it("should fallback to default (es) as target language if no URL param 'to', not supported current wiki language and no enabled languages", async () => {
    mockURLParams.to = null;
    store.commit("mediawiki/setEnabledTargetLanguages", null);
    mw.storage.set("cxTargetLanguage", null);

    // fr not supported here
    mockWikiLanguage = "fr";
    initializeURLState();
    await initializeApplicationLanguages();
    expect(sourceLanguage.value).toBe("en");
    expect(targetLanguage.value).toBe("es");
  });

  it("should fallback to first enabled language as target language if no URL param 'to' and not supported/enabled current wiki language (fr)", async () => {
    mockURLParams.to = null;
    initializeURLState();
    store.commit("mediawiki/setEnabledTargetLanguages", ["ig", "ha"]);

    await initializeApplicationLanguages();
    expect(sourceLanguage.value).toBe("en");
    expect(targetLanguage.value).toBe("ig");
  });
});
