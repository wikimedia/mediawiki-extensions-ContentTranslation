import store from "@/store";
import router from "@/router";
import useApplicationState from "@/composables/useApplicationState";

/**
 * @param {string} title
 * @param {string} eventSource
 * @return {Promise<void>}
 */
const startSectionTranslation = async (title, eventSource) => {
  const { sourceLanguage, targetLanguage } = useApplicationState();
  const suggestion = await store.dispatch("suggestions/loadSectionSuggestion", {
    sourceLanguage: sourceLanguage.value,
    targetLanguage: targetLanguage.value,
    sourceTitle: title
  });

  store.dispatch("application/initializeSectionTranslation", suggestion);
  router.push({
    name: "sx-translation-confirmer",
    params: { previousRoute: "sx-article-search", eventSource }
  });
};

/**
 * @param {Page} suggestedPage
 * @return {Promise<void>}
 */
const startRecentlyEditedSectionTranslation = suggestedPage =>
  startSectionTranslation(suggestedPage.title, "suggestion_recent_edit");

/**
 * @param {Page} suggestedPage
 * @return {Promise<void>}
 */
const startNearbySectionTranslation = suggestedPage =>
  startSectionTranslation(suggestedPage.title, "suggestion_nearby");

/**
 * @param {Page} suggestedPage
 * @return {Promise<void>}
 */
const startSearchResultSectionTranslation = suggestedPage =>
  startSectionTranslation(suggestedPage.title, "search_result");

export {
  startRecentlyEditedSectionTranslation,
  startNearbySectionTranslation,
  startSearchResultSectionTranslation
};
