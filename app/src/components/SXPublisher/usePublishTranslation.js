import { getUrl } from "@/utils/mediawikiHelper";
import siteApi from "../../wiki/mw/api/site";
import useApplicationState from "@/composables/useApplicationState";
import store from "@/store";
import { ref } from "@vue/composition-api";

const decodeHtml = html => {
  const template = document.createElement("div");
  template.innerHTML = html;

  return template.innerText;
};

const handlePublishResult = async isPublishDialogActive => {
  const {
    currentSectionSuggestion: suggestion,
    currentSourceSection
  } = useApplicationState();

  const translatedTitle = currentSourceSection?.value.title;

  const errorExists = store.getters["application/isPublishingDisabled"];

  if (errorExists) {
    isPublishDialogActive.value = false;

    return;
  }

  const isSandboxTarget = store.getters["application/isSandboxTarget"];

  // Publishing is Successful
  if (currentSourceSection.value.isLeadSection && !isSandboxTarget) {
    // Add wikibase link, wait for it, but failure is acceptable
    try {
      await siteApi.addWikibaseLink(
        suggestion.value.sourceLanguage,
        suggestion.value.targetLanguage,
        suggestion.value.sourceTitle,
        translatedTitle
      );
    } catch (error) {
      mw.log.error("Error while adding wikibase link", error);
    }
  }
  const articleTitle = store.getters["translator/getArticleTitleForPublishing"];
  /** Remove warning about leaving SX */
  store.commit("application/setTranslationInProgress", false);

  // sx-published-section query param will trigger 'sx.publishing.followup'
  // module to be loaded inside target article's page, after redirection
  window.location.href = getUrl(`${articleTitle}`, {
    "sx-published-section": decodeHtml(translatedTitle),
    "sx-source-page-title": decodeHtml(suggestion.value.sourceTitle),
    "sx-source-language": suggestion.value.sourceLanguage,
    "sx-target-language": suggestion.value.targetLanguage
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
