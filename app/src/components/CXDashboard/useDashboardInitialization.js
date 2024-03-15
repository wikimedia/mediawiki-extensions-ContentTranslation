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
import useURLHandler from "@/composables/useURLHandler";
import useFavoritesFetch from "@/components/CXDashboard/useFavoritesFetch";

const useDashboardInitialization = () => {
  const logEvent = useEventLogging();
  const store = useStore();
  const startSectionTranslationFromUrl = useUrlTranslationStart();
  const { fetchAllTranslations } = useTranslationsFetch();
  const initializeSuggestions = useSuggestionsInitialize();
  const fetchFavorites = useFavoritesFetch();
  const { pageURLParameter, sectionURLParameter, draftURLParameter } =
    useURLHandler();

  return async () => {
    const initializeLanguages = useApplicationLanguagesInitialize();
    await initializeLanguages();

    if (!!pageURLParameter.value) {
      startSectionTranslationFromUrl({
        pageTitle: pageURLParameter.value,
        isDraftTranslation: draftURLParameter.value,
        sectionTitle: sectionURLParameter.value,
      });

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
      await fetchFavorites();
    } catch (error) {
      // Let favorite fetching gracefully fail
      mw.log.error("[CX] Error while fetching favorite suggestions", error);
    }

    await fetchAllTranslations();
    initializeSuggestions();
  };
};

export default useDashboardInitialization;
