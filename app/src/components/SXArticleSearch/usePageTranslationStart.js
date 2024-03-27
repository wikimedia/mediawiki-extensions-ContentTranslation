import useSectionTranslationStart from "../../composables/useSectionTranslationStart";
import { useStore } from "vuex";
import useApplicationState from "@/composables/useApplicationState";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";

const usePageTranslationStart = () => {
  const startSectionTranslation = useSectionTranslationStart();
  const store = useStore();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);

  /**
   *
   * @param {string} pageTitle
   * @param {string} eventSource
   * @return {Promise<void>}
   */
  const doStartTranslation = (pageTitle, eventSource) => {
    return startSectionTranslation(
      pageTitle,
      sourceLanguage.value,
      targetLanguage.value,
      eventSource
    );
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
