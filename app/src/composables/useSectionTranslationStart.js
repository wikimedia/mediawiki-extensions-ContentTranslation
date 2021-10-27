import store from "@/store";
import router from "@/router";
import useApplicationState from "@/composables/useApplicationState";

/**
 * @param {string} title
 * @param {string} previousRoute
 * @param {string} eventSource
 * @return {Promise<void>}
 */
const startSectionTranslation = async (title, previousRoute, eventSource) => {
  const { sourceLanguage, targetLanguage } = useApplicationState();
  /** @type {SectionSuggestion|null} */
  const suggestion = await store.dispatch("suggestions/loadSectionSuggestion", {
    sourceLanguage: sourceLanguage.value,
    targetLanguage: targetLanguage.value,
    sourceTitle: title
  });

  if (!suggestion) {
    return;
  }

  store.dispatch("application/initializeSectionTranslation", suggestion);
  router.push({
    name: "sx-translation-confirmer",
    params: { previousRoute, eventSource }
  });
};

export default startSectionTranslation;
