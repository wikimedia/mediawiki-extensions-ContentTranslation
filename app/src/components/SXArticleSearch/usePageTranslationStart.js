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
   * @param {string} eventSource
   * @return {Promise<void>}
   */
  const doStartTranslation = (pageTitle, eventSource) => {
    const existingLeadTranslation = store.getters[
      "translator/getDraftTranslation"
    ](
      pageTitle,
      PageSection.LEAD_SECTION_DUMMY_TITLE,
      sourceLanguage.value,
      targetLanguage.value
    );

    // if a draft lead translation already exists for the given page, restore it
    if (!!existingLeadTranslation) {
      return startDraftTranslation(existingLeadTranslation);
    } else {
      return startSectionTranslation(
        pageTitle,
        sourceLanguage.value,
        targetLanguage.value,
        eventSource
      );
    }
  };
  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startRecentlyEditedSectionTranslation = (suggestedPage) =>
    doStartTranslation(suggestedPage.title, "suggestion_recent_edit");

  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startNearbySectionTranslation = (suggestedPage) =>
    doStartTranslation(suggestedPage.title, "suggestion_nearby");

  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startSearchResultSectionTranslation = (suggestedPage) =>
    doStartTranslation(suggestedPage.title, "search_result");

  /**
   * @param {ArticleSuggestion} suggestion
   * @return {Promise<void>}
   */
  const startPageSuggestion = (suggestion) =>
    doStartTranslation(suggestion.sourceTitle, "suggestion_no_seed");

  /**
   * @param {PublishedTranslation} translation
   * @return {Promise<void>}
   */
  const startPublishedTranslation = (translation) =>
    doStartTranslation(translation.sourceTitle, "continue_published");

  return {
    startRecentlyEditedSectionTranslation,
    startNearbySectionTranslation,
    startSearchResultSectionTranslation,
    startPageSuggestion,
    startPublishedTranslation,
  };
};

export default usePageTranslationStart;
