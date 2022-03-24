import { ref } from "vue";
import useSuggestedSourceLanguages from "./useSuggestedSourceLanguages";

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
describe("useSuggestedSourceLanguages test", () => {
  it(`should return a computed property containing wgUserLanguage, wgContentLanguage, browser language, previous
    languages and browser accept-languages except for current source and target languages`, () => {
    const previousLanguages = ref(["ig", "fr"]);
    const sourceLanguage = ref("en");
    const targetLanguage = ref("es");
    const suggestedSourceLanguages = useSuggestedSourceLanguages(
      sourceLanguage,
      targetLanguage,
      previousLanguages
    );
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
