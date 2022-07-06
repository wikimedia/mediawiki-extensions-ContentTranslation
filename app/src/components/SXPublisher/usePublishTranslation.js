import { getUrl } from "@/utils/mediawikiHelper";
import siteApi from "@/wiki/mw/api/site";
import useApplicationState from "@/composables/useApplicationState";
import { computed, ref } from "vue";

const decodeHtml = (html) => {
  const template = document.createElement("div");
  template.innerHTML = html;

  return template.innerText;
};

/**
 * @param {Store} store
 * @param {RefImpl<boolean>} isPublishDialogActive
 * @param {RefImpl<boolean>} isPublishingDisabled
 * @return {Promise<void>}
 */
const handlePublishResult = async (
  store,
  isPublishDialogActive,
  isPublishingDisabled
) => {
  if (isPublishingDisabled.value) {
    isPublishDialogActive.value = false;

    return;
  }
  const { currentSectionSuggestion: suggestion, currentSourceSection } =
    useApplicationState(store);
  const translatedTitle = currentSourceSection?.value.title;
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
    "sx-target-language": suggestion.value.targetLanguage,
  });
};

const usePublishTranslation = (store) => {
  const isPublishDialogActive = ref(false);
  const publishStatus = ref("pending");
  const publishOptionsOn = ref(false);
  const captchaDialogOn = ref(false);
  const captchaDetails = ref(null);
  /**
   * Feedback messages that contain publishing-related warnings or errors. If only
   * warnings exist inside this array, publishing is enabled. If at least one error
   * exist, publishing functionality is disabled.
   * @type {Ref<PublishFeedbackMessage[]>}
   */
  const publishFeedbackMessages = ref([]);

  const isPublishingDisabled = computed(() =>
    publishFeedbackMessages.value.some((message) => message.isError)
  );

  /**
   * @param {string|number|null} captchaAnswer
   */
  const doPublish = async (captchaAnswer = null) => {
    /**
     * Set initial publish status to "pending" before
     * publish request
     */
    publishStatus.value = "pending";
    isPublishDialogActive.value = true;

    /** @type {PublishFeedbackMessage|null} */
    const publishMessage = await store.dispatch(
      "translator/publishTranslation",
      { captchaId: captchaDetails.value?.id, captchaAnswer }
    );

    // if the feedback message is of type "captcha", set the captcha details and open the captcha dialog
    if (!!publishMessage && publishMessage.type === "captcha") {
      captchaDetails.value = publishMessage.details;
      isPublishDialogActive.value = false;
      captchaDialogOn.value = true;

      return;
    } else if (!!publishMessage) {
      publishFeedbackMessages.value.push(publishMessage);
      publishFeedbackMessages.value.sort((m1, m2) => +m2.isError - +m1.isError);
    }
    // make sure to reset captcha details, when no CAPTCHA is requested
    captchaDetails.value = null;
    publishStatus.value = isPublishingDisabled.value ? "failure" : "success";
    /**
     * Show feedback animation to user for 1 second
     * before handling the publishing result
     */
    setTimeout(
      () =>
        handlePublishResult(store, isPublishDialogActive, isPublishingDisabled),
      1000
    );
  };

  const onCaptchaDialogClose = () => {
    captchaDialogOn.value = false;
    captchaDetails.value = null;
  };

  const configureTranslationOptions = () => (publishOptionsOn.value = true);

  return {
    captchaDetails,
    captchaDialogOn,
    configureTranslationOptions,
    doPublish,
    isPublishDialogActive,
    isPublishingDisabled,
    onCaptchaDialogClose,
    publishOptionsOn,
    publishFeedbackMessages,
    publishStatus,
  };
};

export default usePublishTranslation;
