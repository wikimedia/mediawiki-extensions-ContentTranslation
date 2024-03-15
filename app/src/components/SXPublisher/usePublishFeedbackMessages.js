import { ref, computed } from "vue";
import useMtValidate from "./useMtValidate";

const usePublishFeedbackMessages = () => {
  const validateMT = useMtValidate();
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

  const initializePublishFeedbackMessages = async () => {
    const mtValidationMessage = await validateMT();

    if (mtValidationMessage) {
      publishFeedbackMessages.value.push(mtValidationMessage);
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
