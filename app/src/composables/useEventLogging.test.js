import useEventLogging from "@/composables/useEventLogging";
import logEvent from "@/utils/eventlogging/logEvent";
import { createStore } from "vuex";
import { loadTestComposable } from "@/utils/loadTestComposable";

jest.mock("@/utils/eventlogging/logEvent");

let mockIsDesktopSite = true;
jest.mock("@/utils/mediawikiHelper", () => ({
  get isDesktopSite() {
    return mockIsDesktopSite;
  },
}));

const store = createStore({
  modules: {
    application: { namespaced: true, state: { previousRoute: "dashboard" } },
  },
});

global.mw = { errorLogger: { logError: jest.fn() } };

jest.spyOn(window, "location", "get").mockReturnValue({
  href: "https://el.wikipedia.org/w/index.php?title=Special:ContentTranslation&from=en&to=el&page=Test",
});

describe("useEventLogging", () => {
  const data = loadTestComposable(() => useEventLogging(), [store]);
  const eventLogging = data.result;

  it("calls logEvent with the given event", () => {
    const event = {
      event_type: "test_event",
      event_source: "test_event_source",
      translation_source_language: "en",
      translation_target_language: "fr",
      translation_source_title: "Hello",
    };

    eventLogging(event);

    expect(logEvent).toHaveBeenCalledWith(event);
  });

  it("sets access_method to desktop when missing and isDesktopSite is true", () => {
    const event = {
      event_type: "test_event",
      event_source: "test_event_source",
      translation_source_language: "en",
      translation_target_language: "fr",
      translation_source_title: "Hello",
    };

    eventLogging({ ...event });

    expect(logEvent).toHaveBeenCalledWith(
      expect.objectContaining({ access_method: "desktop" })
    );
  });

  it("sets access_method to mobile web when missing and isDesktopSite is false", () => {
    mockIsDesktopSite = false;

    const event = {
      event_type: "test_event",
      event_source: "test_event_source",
      translation_source_language: "en",
      translation_target_language: "fr",
      translation_source_title: "Hello",
    };

    eventLogging(event);

    expect(logEvent).toHaveBeenCalledWith(
      expect.objectContaining({ access_method: "mobile web" })
    );
  });

  it("logs an error when a required field is null", () => {
    const event = {
      event_type: "test_event",
      event_source: null,
      translation_source_language: "en",
      translation_target_language: "fr",
      translation_source_title: "Hello",
    };

    eventLogging(event);

    expect(mw.errorLogger.logError).toHaveBeenCalledWith(
      expect.any(Error),
      "error.contenttranslation"
    );
    const errorArg = mw.errorLogger.logError.mock.calls[0][0];
    expect(errorArg.message).toBe(
      "Event test_event is missing event_source. Current URL params: https://el.wikipedia.org/w/index.php?title=Special:ContentTranslation&from=en&to=el&page=Test. Previous route: dashboard"
    );
  });
});
