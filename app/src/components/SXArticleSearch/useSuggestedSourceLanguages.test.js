import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import CompositionApi, { ref } from "@vue/composition-api";
import useSuggestedSourceLanguages from "./useSuggestedSourceLanguages";

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(Vuex);

Object.defineProperty(global.navigator, "language", {
  value: "ar-dz",
  writable: false
});
Object.defineProperty(global.navigator, "languages", {
  value: ["nl-be", "en", "es", "de"],
  writable: false
});

// Application state: { sourceLanguage: "en", targetLanguage: "es" }
jest.mock("@/store", () => jest.requireActual("./articleSearchMockStore"));

mw.config.get = name => {
  if (name === "wgContentLanguage") {
    return "ab";
  } else if (name === "wgUserLanguage") {
    return "aa";
  } else if (name === "wgULSAcceptLanguageList") {
    return ["it-ch", "ja"];
  }
};
describe("useSuggestedSourceLanguages test", () => {
  it(`should return a computed property containing wgUserLanguage, wgContentLanguage, browser language, previous
    languages and browser accept-languages except for current source and target languages`, () => {
    const previousLanguages = ref(["ig", "fr"]);
    const suggestedSourceLanguages = useSuggestedSourceLanguages(
      previousLanguages
    );
    expect(suggestedSourceLanguages.value).toStrictEqual([
      "aa",
      "ab",
      "ar",
      "ig",
      "fr",
      "it",
      "ja"
    ]);
  });
});
