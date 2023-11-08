import useSectionTranslationStart from "../../composables/useSectionTranslationStart";
import useDraftTranslationStart from "@/components/CXDashboard/useDraftTranslationStart";
import { useStore } from "vuex";
import PageSection from "@/wiki/cx/models/pageSection";
import useApplicationState from "@/composables/useApplicationState";

const usePageTranslationStart = () => {
  const startSectionTranslation = useSectionTranslationStart();
  const startDraftTranslation = useDraftTranslationStart();
  const store = useStore();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);

  /**
   *
   * @param {string} pageTitle
   * @param {string} previousRoute
   * @param {string} eventSource
   * @return {Promise<void>}
   */
  const doStartTranslation = (pageTitle, previousRoute, eventSource) => {
    const existingLeadTranslation = store.getters["translator/getTranslation"](
      pageTitle,
      PageSection.LEAD_SECTION_DUMMY_TITLE,
      sourceLanguage.value,
      targetLanguage.value
    );

    // if a draft lead translation already exists for the given page, restore it
    if (!!existingLeadTranslation) {
      return startDraftTranslation(existingLeadTranslation);
    } else {
      return startSectionTranslation(pageTitle, previousRoute, eventSource);
    }
  };
  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startRecentlyEditedSectionTranslation = (suggestedPage) =>
    doStartTranslation(
      suggestedPage.title,
      "sx-article-search",
      "suggestion_recent_edit"
    );

  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startNearbySectionTranslation = (suggestedPage) =>
    doStartTranslation(
      suggestedPage.title,
      "sx-article-search",
      "suggestion_nearby"
    );

  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startSearchResultSectionTranslation = (suggestedPage) =>
    doStartTranslation(
      suggestedPage.title,
      "sx-article-search",
      "search_result"
    );

  /**
   * @param {ArticleSuggestion} suggestion
   * @return {Promise<void>}
   */
  const startPageSuggestion = (suggestion) =>
    doStartTranslation(
      suggestion.sourceTitle,
      "dashboard",
      "suggestion_no_seed"
    );

  return {
    startRecentlyEditedSectionTranslation,
    startNearbySectionTranslation,
    startSearchResultSectionTranslation,
    startPageSuggestion,
  };
};

export default usePageTranslationStart;
