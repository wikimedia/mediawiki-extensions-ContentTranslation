import startSectionTranslation from "../../composables/useSectionTranslationStart";

const usePageTranslationStart = (router, store) => {
  const doStartSectionTranslation = startSectionTranslation.bind(
    null,
    router,
    store
  );
  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startRecentlyEditedSectionTranslation = suggestedPage =>
    doStartSectionTranslation(
      suggestedPage.title,
      "sx-article-search",
      "suggestion_recent_edit"
    );

  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startNearbySectionTranslation = suggestedPage =>
    doStartSectionTranslation(
      suggestedPage.title,
      "sx-article-search",
      "suggestion_nearby"
    );

  /**
   * @param {Page} suggestedPage
   * @return {Promise<void>}
   */
  const startSearchResultSectionTranslation = suggestedPage =>
    doStartSectionTranslation(
      suggestedPage.title,
      "sx-article-search",
      "search_result"
    );

  return {
    startRecentlyEditedSectionTranslation,
    startNearbySectionTranslation,
    startSearchResultSectionTranslation
  };
};

export default usePageTranslationStart;
