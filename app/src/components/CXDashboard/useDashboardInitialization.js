import store from "@/store";
import { logEvent } from "@/plugins/eventlogging";
import initializeLanguages from "@/composables/useLanguageInitialization";
import startSectionTranslationFromUrl from "./useUrlTranslationStart";

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

const initializeDashboard = async () => {
  await initializeLanguages();

  const pageTitle = getPageTitleFromUrl();

  if (pageTitle) {
    startSectionTranslationFromUrl(pageTitle);

    return;
  }
  logEvent({
    event_type: "dashboard_open",
    event_source: "direct",
    content_translation_session_position: 0
  });

  await store.dispatch("suggestions/fetchFavorites");
  await store.dispatch("translator/fetchTranslations");
  store.dispatch("suggestions/initializeSuggestions");
};

export default initializeDashboard;