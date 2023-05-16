import { initializeLanguages } from "@/composables/useLanguageHelper";
import {
  getEventSourceFromUrlCampaign,
  useUrlTranslationStart,
} from "./useUrlTranslationStart";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";
import { useEventLogging } from "@/plugins/eventlogging";

/**
 * @return {string|null}
 */
const getPageTitleFromUrl = () => {
  const urlParams = new URLSearchParams(location.search);
  const isSectionTranslation = urlParams.get("sx");
  const sourceTitle = urlParams.get("page");

  if (!isSectionTranslation || !sourceTitle) {
    return null;
  }

  return sourceTitle;
};

const useDashboardInitialization = () => {
  const logEvent = useEventLogging();
  const store = useStore();
  const startSectionTranslationFromUrl = useUrlTranslationStart();

  return async () => {
    await initializeLanguages();

    const pageTitle = getPageTitleFromUrl();

    if (pageTitle) {
      startSectionTranslationFromUrl(pageTitle);

      return;
    }
    const { sourceLanguage, targetLanguage } = useApplicationState(store);
    logEvent({
      event_type: "dashboard_open",
      event_source: getEventSourceFromUrlCampaign() || "direct",
      content_translation_session_position: 0,
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

    try {
      // If translations have already been fetched, then skip
      if (!store.state.translator.translations.length) {
        await store.dispatch("translator/fetchTranslations");
      }
    } catch (error) {
      // Let translation fetching gracefully fail
      mw.log.error("[CX] Error while fetching translations", error);
    }

    store.dispatch("suggestions/initializeSuggestions");
  };
};

export default useDashboardInitialization;
