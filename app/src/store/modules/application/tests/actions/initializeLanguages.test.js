import actions from "../../actions";

let mockWikiLanguage = "de";
jest.mock("../../../../../utils/mediawikiHelper", () => {
  return {
    siteMapper: {
      getCurrentWikiLanguageCode() {
        return mockWikiLanguage;
      }
    }
  };
});

describe("vuex application/actions/initializeLanguages tests", () => {
  const rootState = {
    mediawiki: {
      enabledTargetLanguages: null,
      supportedLanguageCodes: ["en", "es", "el", "de"]
    }
  };
  const commit = jest.fn();

  let translateInTarget = false;

  mw.config.get = parameter => {
    if (parameter === "wgContentTranslationTranslateInTarget") {
      return translateInTarget;
    }

    return null;
  };

  let urlFrom;
  let urlTo;
  jest.spyOn(URLSearchParams.prototype, "get").mockImplementation(key => {
    if (key === "from") {
      return urlFrom;
    } else if (key === "to") {
      return urlTo;
    } else {
      return null;
    }
  });

  it("should respect URL params when they are supported", () => {
    expect(mw.config.get("wgContentTranslationTranslateInTarget")).toBe(false);
    urlFrom = "en";
    urlTo = "el";
    actions.initializeLanguages({ rootState, commit });
    expect(commit).toHaveBeenNthCalledWith(1, "setSourceLanguage", "en");
    expect(commit).toHaveBeenNthCalledWith(2, "setTargetLanguage", "el");
  });

  it("should fallback to wiki language as target language if URL param 'to' not supported or provided", () => {
    // bn not supported here
    urlTo = "bn";
    actions.initializeLanguages({ rootState, commit });
    expect(commit).toHaveBeenNthCalledWith(3, "setSourceLanguage", "en");
    expect(commit).toHaveBeenNthCalledWith(4, "setTargetLanguage", "de");
  });

  it("should fallback to default as target language if no URL param 'to', not supported current wiki language and no enabled languages", () => {
    urlTo = null;
    rootState.mediawiki.supportedLanguageCodes = ["en", "es"];
    actions.initializeLanguages({ rootState, commit });
    expect(commit).toHaveBeenNthCalledWith(5, "setSourceLanguage", "en");
    expect(commit).toHaveBeenNthCalledWith(6, "setTargetLanguage", "es");
  });

  it("should fallback to first enabled language as target language if no URL param 'to' and not supported current wiki language", () => {
    rootState.mediawiki.enabledTargetLanguages = ["bn", "ig", "en"];
    actions.initializeLanguages({ rootState, commit });
    expect(commit).toHaveBeenNthCalledWith(7, "setSourceLanguage", "en");
    expect(commit).toHaveBeenNthCalledWith(8, "setTargetLanguage", "bn");
  });
});
