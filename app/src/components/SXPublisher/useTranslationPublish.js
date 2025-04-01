import { ref } from "vue";
import AssertUserError from "@/utils/errors/assertUserError";
import { useStore } from "vuex";
import { cleanupHtml } from "@/utils/publishHelper";
import translatorApi from "@/wiki/cx/api/translator";
import PublishFeedbackMessage from "@/wiki/cx/models/publishFeedbackMessage";
import useTranslationSave from "@/composables/useTranslationSave";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentPageRevision from "@/composables/useCurrentPageRevision";
import useURLHandler from "@/composables/useURLHandler";
import usePublishInstrument from "@/composables/usePublishInstrument";

const useTranslationPublish = () => {
  const store = useStore();
  const {
    pageURLParameter: sourceTitle,
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
  } = useURLHandler();
  const { sourceSection, targetPageTitleForPublishing } =
    useCurrentPageSection();
  const revision = useCurrentPageRevision();
  const isPublishDialogActive = ref(false);
  const publishStatus = ref("pending");

  const closePublishDialog = () => (isPublishDialogActive.value = false);
  const saveTranslation = useTranslationSave();

  const {
    logPublishAttemptEvent,
    logPublishSuccessEvent,
    logPublishFailureEvent,
  } = usePublishInstrument();

  /**
   * This method publishes the current section translation using translator API client,
   * and returns a promise that resolves to an object containing two or four fields:
   * a. the "publishFeedbackMessage". This field is null when publishing is successful,
   * otherwise it contains an instance of PublishFeedbackMessage class
   * b. the "targetUrl". This field is null in case of failed publishing, but it
   * contains the URL of the translation target page, in case of success.
   * c. the "pageId". This field is present only in case of successful publishing.
   * It contains the id of the target page.
   * d. the "revisionId". This field is present only in case of successful publishing.
   * It contains the id of new revision of the target page.
   *
   * @param {string|number} captchaId
   * @param {string|number} captchaAnswer
   * @return {Promise<{
   *   publishFeedbackMessage: PublishFeedbackMessage|null,
   *   targetUrl: string|null,
   *   pageId: number|undefined,
   *   revisionId: number|undefined,
   * }>}
   */
  const sendPublishRequest = async (captchaId, captchaAnswer) => {
    logPublishAttemptEvent();

    // the return value from the "saveTranslation" api method contains the id (cxsx_id)
    // of the section translation if the request was successful. If not, the return value
    // is an instance of PublishFeedbackMessage
    const saveResponse = await saveTranslation();

    if (saveResponse instanceof PublishFeedbackMessage) {
      logPublishFailureEvent();

      return { publishFeedbackMessage: saveResponse, targetUrl: null };
    }

    // the section translation id (cxsx_id) as returned from the "sxsave" api action
    const sectionTranslationId = saveResponse;

    const targetTitle = targetPageTitleForPublishing.value;

    const isSandbox = store.getters["application/isSandboxTarget"];

    const publishPayload = {
      html: cleanupHtml(sourceSection.value.translationHtml),
      sourceTitle: sourceTitle.value,
      targetTitle,
      sourceSectionTitle: sourceSection.value.sourceSectionTitleForPublishing,
      targetSectionTitle: sourceSection.value.targetSectionTitleForPublishing,
      sourceLanguage: sourceLanguage.value,
      targetLanguage: targetLanguage.value,
      revision: revision.value,
      isSandbox,
      sectionTranslationId,
    };

    if (captchaId) {
      publishPayload.captchaId = captchaId;
      publishPayload.captchaWord = captchaAnswer;
    }

    /**
     * Publish translation and get a publish feedback error message in case of
     * failure, or null in case of successful publishing
     */
    const publishResult = await translatorApi.publishTranslation(
      publishPayload
    );

    if (publishResult.publishFeedbackMessage === null) {
      logPublishSuccessEvent(publishResult.pageId, publishResult.revisionId);
    } else {
      logPublishFailureEvent();
    }

    return publishResult;
  };

  /**
   * @param {string|number|null} captchaAnswer
   * @param {CaptchaDetails|null} captchaDetails
   * @return {Promise<{
   *   publishFeedbackMessage: PublishFeedbackMessage|null,
   *   targetUrl: string|null,
   *   pageId: number|undefined,
   *   revisionId: number|undefined,
   * }>|null}
   */
  const doPublish = async (captchaAnswer = null, captchaDetails = null) => {
    /**
     * Set initial publish status to "pending" before
     * publish request
     */
    publishStatus.value = "pending";
    isPublishDialogActive.value = true;
    let publishResponse;

    try {
      /** @type {{publishFeedbackMessage: PublishFeedbackMessage|null, targetUrl: string|null}} */
      publishResponse = await sendPublishRequest(
        captchaDetails?.id,
        captchaAnswer
      );
    } catch (error) {
      if (error instanceof AssertUserError) {
        store.commit("application/setIsLoginDialogOn", true);

        return null;
      }

      throw error;
    }

    return publishResponse;
  };

  return {
    closePublishDialog,
    doPublish,
    isPublishDialogActive,
    publishStatus,
  };
};

export default useTranslationPublish;
