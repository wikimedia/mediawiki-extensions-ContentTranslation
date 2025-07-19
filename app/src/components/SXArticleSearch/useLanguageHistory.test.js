import useLanguageHistory from "./useLanguageHistory";

// Mock mw.storage
global.mw = {
  storage: {
    get: jest.fn(),
    set: jest.fn(),
  },
};

describe("useLanguageHistory composable", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with empty array when no storage data exists", () => {
    mw.storage.get.mockReturnValue(null);

    const { previousLanguages } = useLanguageHistory();

    expect(previousLanguages.value).toEqual([]);
    expect(mw.storage.get).toHaveBeenCalledWith("cxPreviousLanguages");
  });

  it("should load existing data from storage on initialization", () => {
    const storedLanguages = ["es", "fr", "de"];
    mw.storage.get.mockReturnValue(JSON.stringify(storedLanguages));

    const { previousLanguages } = useLanguageHistory();

    expect(previousLanguages.value).toEqual(storedLanguages);
    expect(mw.storage.get).toHaveBeenCalledWith("cxPreviousLanguages");
  });

  it("should handle invalid JSON in storage gracefully", () => {
    mw.storage.get.mockReturnValue("invalid-json");

    const { previousLanguages } = useLanguageHistory();

    expect(previousLanguages.value).toEqual([]);
  });

  it("should add language to history and save to storage", () => {
    mw.storage.get.mockReturnValue(JSON.stringify(["fr", "de"]));

    const { previousLanguages, addLanguageToHistory } = useLanguageHistory();

    addLanguageToHistory("es");

    expect(previousLanguages.value).toEqual(["es", "fr", "de"]);
    expect(mw.storage.set).toHaveBeenCalledWith(
      "cxPreviousLanguages",
      JSON.stringify(["es", "fr", "de"])
    );
  });

  it("should move existing language to front when added again", () => {
    mw.storage.get.mockReturnValue(JSON.stringify(["es", "fr", "de"]));

    const { previousLanguages, addLanguageToHistory } = useLanguageHistory();

    addLanguageToHistory("fr");

    expect(previousLanguages.value).toEqual(["fr", "es", "de"]);
    expect(mw.storage.set).toHaveBeenCalledWith(
      "cxPreviousLanguages",
      JSON.stringify(["fr", "es", "de"])
    );
  });

  it("should not add empty or null language", () => {
    mw.storage.get.mockReturnValue(JSON.stringify(["es", "fr"]));

    const { previousLanguages, addLanguageToHistory } = useLanguageHistory();

    const initialLength = previousLanguages.value.length;

    addLanguageToHistory("");
    addLanguageToHistory(null);
    addLanguageToHistory(undefined);

    expect(previousLanguages.value.length).toBe(initialLength);
    expect(mw.storage.set).not.toHaveBeenCalled();
  });

  it("should deduplicate languages correctly", () => {
    mw.storage.get.mockReturnValue(JSON.stringify(["es", "fr", "de", "es"]));

    const { previousLanguages, addLanguageToHistory } = useLanguageHistory();

    addLanguageToHistory("es");

    // Should have only one instance of "es" at the front
    expect(previousLanguages.value).toEqual(["es", "fr", "de"]);
    expect(
      previousLanguages.value.filter((lang) => lang === "es")
    ).toHaveLength(1);
  });

  it("should maintain order for multiple additions", () => {
    mw.storage.get.mockReturnValue(JSON.stringify([]));

    const { previousLanguages, addLanguageToHistory } = useLanguageHistory();

    addLanguageToHistory("en");
    addLanguageToHistory("es");
    addLanguageToHistory("fr");

    expect(previousLanguages.value).toEqual(["fr", "es", "en"]);
  });

  it("should save to storage after each addition", () => {
    mw.storage.get.mockReturnValue(JSON.stringify(["es"]));

    const { addLanguageToHistory } = useLanguageHistory();

    addLanguageToHistory("fr");
    addLanguageToHistory("de");

    expect(mw.storage.set).toHaveBeenCalledTimes(2);
    expect(mw.storage.set).toHaveBeenNthCalledWith(
      1,
      "cxPreviousLanguages",
      JSON.stringify(["fr", "es"])
    );
    expect(mw.storage.set).toHaveBeenNthCalledWith(
      2,
      "cxPreviousLanguages",
      JSON.stringify(["de", "fr", "es"])
    );
  });
});
