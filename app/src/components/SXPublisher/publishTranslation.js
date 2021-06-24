import { getUrl } from "@/utils/mediawikiHelper";

const decodeHtml = html => {
  const template = document.createElement("div");
  template.innerHTML = html;

  return template.innerText;
};

const handlePublishResult = (store, isPublishDialogActive) => {
  const applicationState = store.state.application;
  const suggestion = applicationState.currentSectionSuggestion;
  const publishResult = applicationState.currentPublishResult;
  const translatedTitle = applicationState.currentSourceSection?.title;

  if (!publishResult.isSuccessful) {
    isPublishDialogActive.value = false;

    return;
  }
  const articleTitle = store.getters["translator/getArticleTitleForPublishing"];
  /** Remove warning about leaving SX */
  store.commit("application/setTranslationInProgress", false);

  // sx-published-section query param will trigger 'sx.publishing.followup'
  // module to be loaded inside target article's page, after redirection
  window.location.href = getUrl(`${articleTitle}`, {
    "sx-published-section": decodeHtml(translatedTitle),
    "sx-source-page-title": decodeHtml(suggestion.sourceTitle),
    "sx-source-language": suggestion.sourceLanguage,
    "sx-target-language": suggestion.targetLanguage
  });
};

/**
 * @param {Store} store
 * @param {ComputedRef} publishStatus
 * @param {ComputedRef} isPublishDialogActive
 * @return {Promise<void>}
 */
const publishTranslation = async (
  store,
  publishStatus,
  isPublishDialogActive
) => {
  /**
   * Set initial publish status to "pending" before
   * publish request
   */
  publishStatus.value = "pending";
  isPublishDialogActive.value = true;
  await store.dispatch("translator/publishTranslation");

  const applicationState = store.state.application;
  publishStatus.value = applicationState.currentPublishResult.result;
  /**
   * Show feedback animation to user for 1 second
   * before handling the publishing result
   */
  setTimeout(() => {
    handlePublishResult(store, isPublishDialogActive);
  }, 1000);
};

export default publishTranslation;
