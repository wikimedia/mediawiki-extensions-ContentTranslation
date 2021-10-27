import { getUrl } from "@/utils/mediawikiHelper";
import useApplicationState from "@/composables/useApplicationState";
import store from "@/store";
import { ref } from "@vue/composition-api";

const decodeHtml = html => {
  const template = document.createElement("div");
  template.innerHTML = html;

  return template.innerText;
};

const handlePublishResult = isPublishDialogActive => {
  const {
    currentSectionSuggestion: suggestion,
    currentSourceSection
  } = useApplicationState();

  const translatedTitle = currentSourceSection?.title;

  const errorExists = store.getters["application/isPublishingDisabled"];

  if (errorExists) {
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

const usePublishTranslation = () => {
  const isPublishDialogActive = ref(false);
  const publishStatus = ref("pending");
  const publishOptionsOn = ref(false);

  const doPublish = async () => {
    /**
     * Set initial publish status to "pending" before
     * publish request
     */
    publishStatus.value = "pending";
    isPublishDialogActive.value = true;
    await store.dispatch("translator/publishTranslation");

    const errorExists = store.getters["application/isPublishingDisabled"];
    publishStatus.value = errorExists ? "failure" : "success";
    /**
     * Show feedback animation to user for 1 second
     * before handling the publishing result
     */
    setTimeout(() => {
      handlePublishResult(isPublishDialogActive);
    }, 1000);
  };

  const configureTranslationOptions = () => (publishOptionsOn.value = true);

  return {
    configureTranslationOptions,
    doPublish,
    isPublishDialogActive,
    publishOptionsOn,
    publishStatus
  };
};

export default usePublishTranslation;
