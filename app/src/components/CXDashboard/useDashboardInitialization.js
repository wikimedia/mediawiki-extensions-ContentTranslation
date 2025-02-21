import useApplicationLanguagesInitialize from "@/composables/useApplicationLanguagesInitialize";
import useTranslationsFetch from "@/composables/useTranslationsFetch";
import useSuggestionsInitialize from "@/composables/useSuggestionsInitialize";
import useFavoritesFetch from "./useFavoritesFetch";
import usePageCollections from "./usePageCollections";
import useDashboardOpenInstrument from "@/components/CXDashboard/useDashboardOpenInstrument";
import { watch } from "vue";

const useDashboardInitialization = () => {
  const { fetchAllTranslations } = useTranslationsFetch();
  const initializeSuggestions = useSuggestionsInitialize();
  const fetchFavorites = useFavoritesFetch();
  const { fetchPageCollections } = usePageCollections();
  const { logDashboardOpenEvent } = useDashboardOpenInstrument();
  const { applicationLanguagesInitialized } =
    useApplicationLanguagesInitialize();

  return async () => {
    fetchPageCollections();

    // Catch any possible errors during fetching favorite suggestions and
    // translations, to make sure that "initializeSuggestions" actions is dispatched,
    // even if that fetching fails. If we don't catch these errors, the suggestions
    // inside Dashboard will be empty and appendix section titles won't be fetched
    // in case of unsuccessful favorites/translations fetching.
    try {
      await fetchFavorites();
    } catch (error) {
      // Let favorite fetching gracefully fail
      mw.log.error("[CX] Error while fetching favorite suggestions", error);
    }

    await fetchAllTranslations();
    watch(
      applicationLanguagesInitialized,
      () => {
        if (applicationLanguagesInitialized.value) {
          logDashboardOpenEvent();
          initializeSuggestions();
        }
      },
      { immediate: true }
    );
  };
};

export default useDashboardInitialization;
