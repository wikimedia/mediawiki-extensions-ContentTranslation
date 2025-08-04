import { ref, computed } from "vue";
import useMtValidate from "./useMtValidate";
import canUserPublish from "@/utils/userPublishingPermissions";
import PublishFeedbackMessage from "@/wiki/cx/models/publishFeedbackMessage";
import usePublishTarget from "@/composables/usePublishTarget";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

const usePublishFeedbackMessages = () => {
  const validateMT = useMtValidate();

  const { target, PUBLISHING_TARGETS } = usePublishTarget();
  const { targetPageTitleForPublishing } = useCurrentPageSection();

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
   * @param {PublishFeedbackMessage} publishFeedbackMessage
   */
  const addPublishFeedbackMessage = (publishFeedbackMessage) => {
    publishFeedbackMessages.value.push(publishFeedbackMessage);
    publishFeedbackMessages.value.sort((m1, m2) => +m2.isError - +m1.isError);
  };

  const clearPublishFeedbackMessages = () => {
    publishFeedbackMessages.value = [];
  };

  const initializePublishFeedbackMessages = () => {
    // Check user publishing permissions
    if (!canUserPublish() && target.value !== PUBLISHING_TARGETS.SANDBOX) {
      const permissionMessage = new PublishFeedbackMessage({
        text: mw.message("cx-publish-permission-error").text(),
        title: mw.message("cx-publish-permission-error-title").text(),
        type: "generic",
        status: "error",
      });
      addPublishFeedbackMessage(permissionMessage);
    }

    // Validate machine translation
    const mtValidationMessage = validateMT();

    if (mtValidationMessage) {
      addPublishFeedbackMessage(mtValidationMessage);
    }

    if (!mw.Title.newFromText(targetPageTitleForPublishing.value)) {
      addPublishFeedbackMessage(
        new PublishFeedbackMessage({
          text: mw.message("cx-tools-linter-invalid-character-message").text(),
          title: mw.message("cx-tools-linter-invalid-character").text(),
          type: "generic",
          status: "error",
        })
      );
    }
  };

  return {
    addPublishFeedbackMessage,
    clearPublishFeedbackMessages,
    publishFeedbackMessages,
    isPublishingDisabled,
    initializePublishFeedbackMessages,
  };
};

export default usePublishFeedbackMessages;
