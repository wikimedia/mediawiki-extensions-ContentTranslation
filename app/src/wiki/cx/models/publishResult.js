import PublishFeedbackMessage from "./publishFeedbackMessage";

export default class PublishResult {
  /**
   * @param {Object} options
   * @param {string} options.result
   * @param {{text: string, title: string}[]} [options.messages]
   * @param {string} [options.status]
   */
  constructor(
    { result, messages, status = "" } = {
      result: "success"
    }
  ) {
    this.result = result;
    // TODO: Construct PublishFeedbackMessage while creating PublishResult instead of
    // creating them here.
    /** @type {PublishFeedbackMessage[]} */
    this.messages =
      messages && messages.map(message => new PublishFeedbackMessage(message));
    this.status = status;
  }

  /**
   * @return {boolean}
   */
  get isSuccessful() {
    return this.result === "success";
  }

  /**
   * @return {boolean}
   */
  get isWarning() {
    return this.result === "warning";
  }

  /**
   * @return {string}
   */
  get reviewInfoStatus() {
    if (this.isSuccessful) {
      return "default";
    } else if (this.isWarning) {
      return "warning";
    } else {
      return "error";
    }
  }
}
