import store from "@/store";
import initializeLanguages from "@/composables/useLanguageInitialization";
import startSectionTranslation from "@/composables/useSectionTranslationStart";

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
    startSectionTranslation(pageTitle, "dashboard", "direct_preselect");

    return;
  }

  await store.dispatch("suggestions/fetchFavorites");
  await store.dispatch("translator/fetchTranslations");
  store.dispatch("suggestions/initializeSuggestions");
};

export default initializeDashboard;
