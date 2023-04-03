import useApplicationState from "@/composables/useApplicationState";

/**
 * @param {VueRouter} router
 * @param {Store} store
 * @param {string} title
 * @param {string} previousRoute
 * @param {string} eventSource
 * @return {Promise<void>}
 */
const startSectionTranslation = async (
  router,
  store,
  title,
  previousRoute,
  eventSource
) => {
  const { sourceLanguage, targetLanguage } = useApplicationState(store);
  /** @type {SectionSuggestion|null} */
  const suggestion = await store.dispatch("suggestions/loadSectionSuggestion", {
    sourceLanguage: sourceLanguage.value,
    targetLanguage: targetLanguage.value,
    sourceTitle: title,
  });

  if (!suggestion) {
    return;
  }

  store.dispatch("application/initializeSectionTranslation", suggestion);
  router.push({
    name: "sx-translation-confirmer",
    query: { previousRoute, eventSource },
  });
};

export default startSectionTranslation;
