import { createStore } from "vuex";
import { loadTestComposable } from "@/utils/loadTestComposable";
import useURLHandler from "@/composables/useURLHandler";
import useSupportedLanguageCodes from "@/composables/useSupportedLanguageCodes";
import useApplicationLanguagesInitialize from "@/composables/useApplicationLanguagesInitialize";

let mockWikiLanguage = "bn";
const supportedLanguageCodes = ["en", "el"];

jest.mock("@/utils/mediawikiHelper", () => ({
  siteMapper: {
    getCurrentWikiLanguageCode: () => mockWikiLanguage,
    getLanguagePairs: () =>
      Promise.resolve({
        sourceLanguages: supportedLanguageCodes,
        targetLanguages: supportedLanguageCodes,
      }),
  },
  getUrl: jest.fn(),
}));

const { supportedTargetLanguageCodes } = useSupportedLanguageCodes();

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

  it("should respect URL params when they are properly supported", async () => {
    mockURLParams.from = "en";
    mockURLParams.to = "el";
    // both source and target languages have to be supported by cxserver
    initializeURLState();
    await initializeApplicationLanguages();

    expect(sourceLanguage.value).toBe("en");
    expect(targetLanguage.value).toBe("el");

    initializeURLState();
    await initializeApplicationLanguages();

    // source language doesn't need to be enabled
    expect(sourceLanguage.value).toBe("en");
    expect(targetLanguage.value).toBe("el");
  });

  it("should fallback to wiki language (bn) as target language if URL param 'to' is not supported", async () => {
    supportedTargetLanguageCodes.value = ["bn", "en", "es"];
    // sq not supported here
    mockURLParams.to = "sq";

    initializeURLState();
    await initializeApplicationLanguages();
    expect(sourceLanguage.value).toBe("en");
    expect(targetLanguage.value).toBe("bn");
  });

  it("should fallback to default (es) as target language if 'to' URL param is not set, and current wiki language is not supported", async () => {
    mockURLParams.to = null;
    mw.storage.set("cxTargetLanguage", null);

    // fr not supported here. Supported target languages are: ["bn", "en", "es"]
    mockWikiLanguage = "fr";
    initializeURLState();
    await initializeApplicationLanguages();
    expect(sourceLanguage.value).toBe("en");
    expect(targetLanguage.value).toBe("es");
  });
});
