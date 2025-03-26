import { createApp, ref } from "vue";
import useSuggestedSourceLanguages from "./useSuggestedSourceLanguages";

const supportedLanguageCodes = ["aa", "ab", "ar", "ig", "fr", "it", "ja"];
jest.mock("@/composables/useSupportedLanguageCodes", () => () => ({
  supportedSourceLanguageCodes: { value: supportedLanguageCodes },
}));

jest.mock("@/composables/useURLHandler", () => () => ({
  sourceLanguageURLParameter: { value: "en" },
  targetLanguageURLParameter: { value: "es" },
}));

Object.defineProperty(global.navigator, "language", {
  value: "ar-dz",
  writable: false,
});
Object.defineProperty(global.navigator, "languages", {
  value: ["nl-be", "en", "es", "de"],
  writable: false,
});

mw.config.get = (name) => {
  if (name === "wgContentLanguage") {
    return "ab";
  } else if (name === "wgUserLanguage") {
    return "aa";
  } else if (name === "wgULSAcceptLanguageList") {
    return ["it-ch", "ja"];
  }
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
  app.mount(document.createElement("div"));

  return { result, app };
};

describe("useSuggestedSourceLanguages test", () => {
  const data = mockLoadComposableInApp(() => useSuggestedSourceLanguages());
  const { getSuggestedSourceLanguages } = data.result;

  it(`should return a computed property containing wgUserLanguage, wgContentLanguage, browser language, previous
    languages and browser accept-languages except for current source and target languages`, () => {
    const previousLanguages = ref(["ig", "fr"]);
    const suggestedSourceLanguages =
      getSuggestedSourceLanguages(previousLanguages);
    expect(suggestedSourceLanguages.value).toStrictEqual([
      "aa",
      "ab",
      "ar",
      "ig",
      "fr",
      "it",
      "ja",
    ]);
  });
});
