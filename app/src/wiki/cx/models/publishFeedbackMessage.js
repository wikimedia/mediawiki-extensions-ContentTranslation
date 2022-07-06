import CaptchaDetails from "./captchaDetails";

/**
 * This class represents warning/error messages
 * that should be displayed to the user as feedback
 * after failed MT validation or unsuccessful publishing
 * attempt, provided either by API response, to encapsulate
 * warning/error messages or by MT validation.
 */
export default class PublishFeedbackMessage {
  /**
   * @param {Object} options
   * @param {string} [options.text] Plain text (HTML not accepted)
   * @param {string} [options.title] Plain text (HTML not accepted)
   * @param {"mt"|"generic"|"captcha"} [options.type]
   * @param {"warning"|"error"} [options.status]
   * @param {CaptchaDetails|null} [options.details] an object containing details for the message. Currently, only used for CAPTCHA support.
   */
  constructor({
    text = "",
    title = "",
    type = "generic",
    status,
    details = null,
  }) {
    this.text = text;
    this.title = title;
    this.type = type;
    this.status = status;
    this.details = details && new CaptchaDetails(details);
  }

  get isMTMessage() {
    return this.type === "mt";
  }

  get isError() {
    return this.status === "error";
  }
}
