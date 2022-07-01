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

/**
 * @param {VueRouter} router
 * @param {Store} store
 * @param {function} logEvent
 */
const initializeDashboard = async (router, store, logEvent) => {
  await initializeLanguages();

  const pageTitle = getPageTitleFromUrl();

  if (pageTitle) {
    startSectionTranslationFromUrl(router, store, logEvent, pageTitle);

    return;
  }
  logEvent({
    event_type: "dashboard_open",
    event_source: "direct",
    content_translation_session_position: 0,
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
    await store.dispatch("translator/fetchTranslations");
  } catch (error) {
    // Let translation fetching gracefully fail
    mw.log.error("[CX] Error while fetching translations", error);
  }

  store.dispatch("suggestions/initializeSuggestions");
};

export default initializeDashboard;
