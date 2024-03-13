import { ref } from "vue";

const useCaptcha = () => {
  const captchaDialogOn = ref(false);
  const captchaDetails = ref(null);

  /**
   * @param {PublishFeedbackMessage} publishFeedbackMessage
   * @return {boolean}
   */
  const handleCaptchaError = (publishFeedbackMessage) => {
    // if the feedback message is of type "captcha", set the captcha details and open the captcha dialog
    if (!!publishFeedbackMessage && publishFeedbackMessage.type === "captcha") {
      captchaDetails.value = publishFeedbackMessage.details;
      captchaDialogOn.value = true;

      return true;
    } else {
      // make sure to reset captcha details, when no CAPTCHA is requested
      captchaDetails.value = null;
    }

    return false;
  };

  const onCaptchaDialogClose = () => {
    captchaDialogOn.value = false;
    captchaDetails.value = null;
  };

  return {
    captchaDetails,
    captchaDialogOn,
    handleCaptchaError,
    onCaptchaDialogClose,
  };
};

export default useCaptcha;
