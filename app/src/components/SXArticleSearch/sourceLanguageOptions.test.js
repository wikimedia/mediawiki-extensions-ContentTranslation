import { ref } from "vue";
import getSourceLanguageOptions from "./sourceLanguageOptions";

jest.mock("@wikimedia/language-data", () => ({
  getAutonym: (code) => `autonym-for-${code}`,
}));

jest.mock("@/lib/mediawiki.ui/components/icons", () => ({
  mwIconEllipsis: "mock-ellipsis-icon",
}));

describe("getSourceLanguageOptions", () => {
  const optionValues = (options) => options.map((o) => o.value);

  it('returns up to 3 language options plus the "more" icon option', () => {
    const suggested = ref(["en", "fr", "de", "es", "it"]); // 5 items, but slice to 3
    const computedOptions = getSourceLanguageOptions(suggested);

    expect(optionValues(computedOptions.value)).toEqual([
      "en",
      "fr",
      "de",
      "other",
    ]);
    expect(computedOptions.value[0]).toMatchObject({
      value: "en",
      props: {
        label: "autonym-for-en",
        type: "text",
        class: "px-0 py-4 mx-4",
      },
    });

    expect(computedOptions.value[3]).toMatchObject({
      value: "other",
      props: {
        icon: "mock-ellipsis-icon",
        type: "icon",
        class: "px-0 py-4 me-4 ms-auto",
      },
    });
  });

  it("updates options reactively when suggested languages change", () => {
    const suggested = ref(["en", "fr", "de"]);
    const computedOptions = getSourceLanguageOptions(suggested);

    expect(optionValues(computedOptions.value)).toEqual([
      "en",
      "fr",
      "de",
      "other",
    ]);

    // Change suggested languages dynamically
    suggested.value = ["ja", "en", "fr", "de"];

    // The computed should update automatically
    expect(optionValues(computedOptions.value)).toEqual([
      "ja",
      "en",
      "fr",
      "other",
    ]);
  });

  it("does not regenerate options if top 3 suggested languages have the same elements (different order)", () => {
    const suggested = ref(["ja", "en", "fr", "de"]);
    const computedOptions = getSourceLanguageOptions(suggested);

    expect(optionValues(computedOptions.value)).toEqual([
      "ja",
      "en",
      "fr",
      "other",
    ]);

    suggested.value = ["fr", "ja", "en", "de"];
    expect(optionValues(computedOptions.value)).toEqual([
      "ja",
      "en",
      "fr",
      "other",
    ]);

    suggested.value = ["en", "ja", "fr", "de"];
    expect(optionValues(computedOptions.value)).toEqual([
      "ja",
      "en",
      "fr",
      "other",
    ]);
  });

  it("regenerates options if a new language enters top 3 slice", () => {
    const suggested = ref(["ja", "en", "fr", "de"]);
    const computedOptions = getSourceLanguageOptions(suggested);

    expect(optionValues(computedOptions.value)).toEqual([
      "ja",
      "en",
      "fr",
      "other",
    ]);

    suggested.value = ["de", "ja", "en", "fr"];
    expect(optionValues(computedOptions.value)).toEqual([
      "de",
      "ja",
      "en",
      "other",
    ]);
  });
});
