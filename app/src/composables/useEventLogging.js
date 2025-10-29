import logEvent from "@/utils/eventlogging/logEvent";
import { isDesktopSite } from "@/utils/mediawikiHelper";
import { useStore } from "vuex";
import useApplicationState from "@/composables/useApplicationState";

const getErrorMessages = (eventType, missingField, previousRoute) => [
  `Event ${eventType} is missing ${missingField}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${previousRoute}`,
];

const useEventLogging = () => {
  const store = useStore();
  const { previousRoute } = useApplicationState(store);

  const nonNullFields = {
    event_source: { remove: true },
    translation_source_language: { remove: false },
    translation_target_language: { remove: false },
    translation_source_title: { remove: true },
  };

  const assertNonNullFields = (payload) => {
    for (const [field, { remove }] of Object.entries(nonNullFields)) {
      if (payload[field] === null || payload[field] === "") {
        const errorMessages = getErrorMessages(
          payload.event_type,
          field,
          previousRoute.value
        );
        mw.errorLogger.logError(
          new Error(errorMessages.join(" ")),
          "error.contenttranslation"
        );

        if (remove) {
          // Remove field entirely so it doesn't cause the event to fail validation
          delete payload[field];
        }
      }
    }
  };

  return (event) => {
    if (!event.access_method) {
      event.access_method = isDesktopSite ? "desktop" : "mobile web";
    }

    assertNonNullFields(event);

    return logEvent(event);
  };
};

export default useEventLogging;
