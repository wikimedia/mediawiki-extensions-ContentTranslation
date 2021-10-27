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
   * @param {string} [options.text]
   * @param {string} [options.title]
   * @param {"mt"|"generic"} [options.type]
   * @param {"warning"|"error"} [options.status]
   */
  constructor({ text = "", title = "", type = "generic", status }) {
    this.text = text;
    this.title = title;
    this.type = type;
    this.status = status;
  }

  get isMTMessage() {
    return this.type === "mt";
  }

  get isError() {
    return this.status === "error";
  }
}
