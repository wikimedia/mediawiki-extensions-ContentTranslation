import { useApplicationLanguagesInitialize } from "@/composables/useLanguageHelper";
import { useUrlTranslationStart } from "./useUrlTranslationStart";
import useTranslationsFetch from "@/composables/useTranslationsFetch";
import useSuggestionsInitialize from "@/composables/useSuggestionsInitialize";
import useURLHandler from "@/composables/useURLHandler";
import useFavoritesFetch from "./useFavoritesFetch";
import usePageCollections from "./usePageCollections";
import useDashboardOpenInstrument from "@/components/CXDashboard/useDashboardOpenInstrument";

const useDashboardInitialization = () => {
  const startSectionTranslationFromUrl = useUrlTranslationStart();
  const { fetchAllTranslations } = useTranslationsFetch();
  const initializeSuggestions = useSuggestionsInitialize();
  const fetchFavorites = useFavoritesFetch();
  const { fetchPageCollections } = usePageCollections();
  const { pageURLParameter, sectionURLParameter, draftURLParameter } =
    useURLHandler();
  const { logDashboardOpenEvent } = useDashboardOpenInstrument();

  return async () => {
    fetchPageCollections();

    const initializeLanguages = useApplicationLanguagesInitialize();
    await initializeLanguages();

    if (!!pageURLParameter.value) {
      startSectionTranslationFromUrl({
        pageTitle: pageURLParameter.value,
        isDraftTranslation: draftURLParameter.value,
        sectionTitle: sectionURLParameter.value,
      });

      return;
    }

    logDashboardOpenEvent();

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
    initializeSuggestions();
  };
};

export default useDashboardInitialization;
