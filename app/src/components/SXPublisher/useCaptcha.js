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

  let hCaptchaWidget = null;

  /**
   * Get the hCaptcha fields for the next publish request.
   *
   * @param {CaptchaDetails} details The CAPTCHA details of the failed request
   * @param {HTMLElement} container Element for the hCaptcha notices
   * @param {boolean} sentToken True if the failed request had a token
   * @return {Promise<{captchaword: string, wgConfirmEditForceShowCaptcha: boolean|undefined}>}
   */
  const solveHCaptcha = async (details, container, sentToken) => {
    await mw.loader.using("ext.confirmEdit.CaptchaWidget");

    if (!hCaptchaWidget) {
      hCaptchaWidget = new mw.libs.confirmEdit.CaptchaWidget({
        container,
        interfaceName: "contenttranslation",
      });
    }

    const shouldResubmit = await hCaptchaWidget.updateForFailure(details);

    if (sentToken && !shouldResubmit) {
      // The server refused the token. Stop, to prevent a loop.
      throw new Error(mw.message("cx-captcha-dialog-error").text());
    }

    // updateForFailure() already renders a widget that was rendered before.
    if (!hCaptchaWidget.captchaRendered) {
      await hCaptchaWidget.renderCaptcha();
    }

    return hCaptchaWidget.getCaptchaDataForSubmission();
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
    solveHCaptcha,
  };
};

export default useCaptcha;
