import { useApplicationLanguagesInitialize } from "@/composables/useLanguageHelper";
import {
  getEventSourceFromUrlCampaign,
  useUrlTranslationStart,
} from "./useUrlTranslationStart";
import useApplicationState from "@/composables/useApplicationState";
import useTranslationsFetch from "@/composables/useTranslationsFetch";
import { useStore } from "vuex";
import { useEventLogging } from "@/plugins/eventlogging";
import useSuggestionsInitialize from "@/composables/useSuggestionsInitialize";

/**
 * @return {{isDraftTranslation: boolean, pageTitle: string, sectionTitle: string|null}|null}
 */
const getTranslationParamsFromUrl = () => {
  const urlParams = new URLSearchParams(location.search);
  const isSectionTranslation = urlParams.get("sx");
  const pageTitle = urlParams.get("page");

  if (!isSectionTranslation || !pageTitle) {
    return null;
  }
  const sectionTitle = urlParams.get("section");
  const isDraftTranslation = !!urlParams.get("draft");

  return { pageTitle, isDraftTranslation, sectionTitle };
};

const useDashboardInitialization = () => {
  const logEvent = useEventLogging();
  const store = useStore();
  const startSectionTranslationFromUrl = useUrlTranslationStart();
  const fetchTranslations = useTranslationsFetch(store);
  const initializeSuggestions = useSuggestionsInitialize();

  return async () => {
    const initializeLanguages = useApplicationLanguagesInitialize();
    await initializeLanguages();

    const translationParams = getTranslationParamsFromUrl();

    if (!!translationParams) {
      startSectionTranslationFromUrl(translationParams);

      return;
    }
    const { sourceLanguage, targetLanguage, previousRoute } =
      useApplicationState(store);

    const getEventSource = () => {
      const navigationEventSources = {
        "sx-article-search": "return_from_search",
        "sx-translation-confirmer": "return_from_confirmation",
        "sx-section-selector": "return_from_section_selection",
        "sx-sentence-selector": "editor_close",
      };

      const navigationEventSource = navigationEventSources[previousRoute.value];

      if (navigationEventSource) {
        return navigationEventSource;
      }

      return getEventSourceFromUrlCampaign() || "direct";
    };

    logEvent({
      event_type: "dashboard_open",
      event_source: getEventSource(),
      translation_source_language: sourceLanguage.value,
      translation_target_language: targetLanguage.value,
    });

    // Catch any possible errors during fetching favorite suggestions and
    // translations, to make sure that "initializeSuggestions" actions is dispatched,
    // even if that fetching fails. If we don't catch these errors, the suggestions
    // inside Dashboard will be empty and appendix section titles won't be fetched
    // in case of unsuccessful favorites/translations fetching.
    try {
      await store.dispatch("suggestions/fetchFavorites");
    } catch (error) {
      // Let favorite fetching gracefully fail
      mw.log.error("[CX] Error while fetching favorite suggestions", error);
    }

    await fetchTranslations();
    initializeSuggestions();
  };
};

export default useDashboardInitialization;
