import { useRouter } from "vue-router";
import useSuggestionLoad from "@/composables/useSuggestionLoad";
import { useStore } from "vuex";

const useSectionTranslationStart = () => {
  const store = useStore();
  const router = useRouter();
  const loadSuggestion = useSuggestionLoad();

  /**
   * @param {string} title
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string} eventSource
   * @return {Promise<void>}
   */
  return async (title, sourceLanguage, targetLanguage, eventSource) => {
    /** @type {SectionSuggestion|null} */
    const suggestion = await loadSuggestion(
      sourceLanguage,
      targetLanguage,
      title
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
