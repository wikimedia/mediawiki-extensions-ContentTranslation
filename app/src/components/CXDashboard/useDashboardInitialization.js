import store from "@/store";
import initializeLanguages from "@/composables/useLanguageInitialization";
import useApplicationState from "@/composables/useApplicationState";

/**
 * @return {Promise<SectionSuggestion|null>}
 */
const loadSectionSuggestionFromUrl = async () => {
  const urlParams = new URLSearchParams(location.search);
  const isSectionTranslation = urlParams.get("sx");
  const sourceTitle = urlParams.get("page");
  const { sourceLanguage, targetLanguage } = useApplicationState();

  if (!isSectionTranslation || !sourceTitle) {
    return null;
  }

  return await store.dispatch("suggestions/loadSectionSuggestion", {
    sourceLanguage: sourceLanguage.value,
    targetLanguage: targetLanguage.value,
    sourceTitle
  });
};

const initializeDashboard = async router => {
  await initializeLanguages();
  /** @type {SectionSuggestion|null} */
  const suggestion = await loadSectionSuggestionFromUrl();

  if (suggestion) {
    store.dispatch("application/initializeSectionTranslation", suggestion);
    router.push({
      name: "sx-translation-confirmer",
      params: { previousRoute: "dashboard" }
    });

    return;
  }

  await store.dispatch("suggestions/fetchFavorites");
  await store.dispatch("translator/fetchTranslations");
  store.dispatch("suggestions/initializeSuggestions");
};

export default initializeDashboard;
