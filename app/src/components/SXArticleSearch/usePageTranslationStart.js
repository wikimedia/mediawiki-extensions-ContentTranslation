import useSectionTranslationStart from "../../composables/useSectionTranslationStart";

const usePageTranslationStart = () => {
  const startSectionTranslation = useSectionTranslationStart();
  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startRecentlyEditedSectionTranslation = (suggestedPage) =>
    startSectionTranslation(
      suggestedPage.title,
      "sx-article-search",
      "suggestion_recent_edit"
    );

  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startNearbySectionTranslation = (suggestedPage) =>
    startSectionTranslation(
      suggestedPage.title,
      "sx-article-search",
      "suggestion_nearby"
    );

  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startSearchResultSectionTranslation = (suggestedPage) =>
    startSectionTranslation(
      suggestedPage.title,
      "sx-article-search",
      "search_result"
    );

  return {
    startRecentlyEditedSectionTranslation,
    startNearbySectionTranslation,
    startSearchResultSectionTranslation,
  };
};

export default usePageTranslationStart;
