import { ref } from "vue";
import AssertUserError from "@/utils/errors/assertUserError";
import { useStore } from "vuex";

const usePublishTranslation = () => {
  const store = useStore();
  const isPublishDialogActive = ref(false);
  const publishStatus = ref("pending");

  const closePublishDialog = () => (isPublishDialogActive.value = false);

  /**
   * @param {string|number|null} captchaAnswer
   * @param {CaptchaDetails|null} captchaDetails
   * @return {Promise<{publishFeedbackMessage: PublishFeedbackMessage|null, targetUrl: string|null}|null>}
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
      publishResponse = await store.dispatch("translator/publishTranslation", {
        captchaId: captchaDetails?.id,
        captchaAnswer,
      });
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

export default usePublishTranslation;
