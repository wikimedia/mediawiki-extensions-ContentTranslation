import { useRouter } from "vue-router";
import useSuggestionLoad from "@/composables/useSuggestionLoad";
import useURLHandler from "@/composables/useURLHandler";
import useDashboardTranslationStartInstrument from "@/composables/useDashboardTranslationStartInstrument";

/**
 * This composable returns a function that, based on the provided parameters, loads
 * a suggestion (section or page suggestion, depending on whether the target article exists),
 * set the appropriate URL params accordingly, and navigates the user to the Confirmation Step.
 * By "loading" a suggestion, we mean that we load the page metadata for the source article.
 * For section suggestions we also fetch the missing/present sections, etc.
 *
 * @example
 * const startTranslation = useTranslationStart();
 * await startTranslation('Hello World', 'en', 'es', 'no_suggestion_seed');
 */
const useTranslationStart = () => {
  const router = useRouter();
  const loadSuggestion = useSuggestionLoad();
  const { setTranslationURLParams } = useURLHandler();
  const { setStartTranslationEventSource, setStartTranslationEventContext } =
    useDashboardTranslationStartInstrument();

  /**
   * @param {string} title
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string} eventSource
   * @param {string|null} eventContext
   * @return {Promise<void>}
   */
  return async (
    title,
    sourceLanguage,
    targetLanguage,
    eventSource,
    eventContext = null,
    navigateToRoute = true
  ) => {
    /** @type {SectionSuggestion|ArticleSuggestion|null} */
    const suggestion = await loadSuggestion(
      sourceLanguage,
      targetLanguage,
      title
    );

    if (!suggestion) {
      return;
    }

    setTranslationURLParams(suggestion);
    setStartTranslationEventSource(eventSource);
    setStartTranslationEventContext(eventContext);

    if (navigateToRoute) {
      router.push({
        name: "sx-translation-confirmer",
      });
    }
  };
};

export default useTranslationStart;
