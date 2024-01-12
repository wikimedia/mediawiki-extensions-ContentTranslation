import useApplicationState from "@/composables/useApplicationState";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const useSectionTranslationStart = () => {
  const store = useStore();
  const router = useRouter();

  /**
   * @param {string} title
   * @param {string} eventSource
   * @return {Promise<void>}
   */
  return async (title, eventSource) => {
    const { sourceLanguage, targetLanguage } = useApplicationState(store);
    /** @type {SectionSuggestion|null} */
    const suggestion = await store.dispatch(
      "suggestions/loadSectionSuggestion",
      {
        sourceLanguage: sourceLanguage.value,
        targetLanguage: targetLanguage.value,
        sourceTitle: title,
      }
    );

    if (!suggestion) {
      return;
    }

    store.dispatch("application/initializeSectionTranslation", suggestion);
    router.push({
      name: "sx-translation-confirmer",
      query: { eventSource },
    });
  };
};

export default useSectionTranslationStart;
