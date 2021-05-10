import PublishFeedbackMessage from "./publishFeedbackMessage";

export default class PublishResult {
  /**
   * @param {Object} options
   * @param {string} options.result
   * @param {{text: string, title: string, suppressed: boolean}[]} [options.messages]
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
    /* @type {PublishFeedbackMessage[]} */
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
   * @return {boolean}
   */
  get hasSuppressedWarnings() {
    return this.isWarning && this.messages.every(message => message.suppressed);
  }

  /**
   * @return {PublishFeedbackMessage[]}
   */
  get activeMessages() {
    return this.messages.filter(message => !message.suppressed);
  }

  /**
   * @return {boolean}
   */
  get hasActiveMessages() {
    return this.activeMessages.length > 0;
  }

  /**
   * @return {string}
   */
  get reviewInfoStatus() {
    if (this.isSuccessful || (this.isWarning && !this.hasActiveMessages)) {
      return "default";
    }

    if (this.isWarning) {
      return "warning";
    }

    return "error";
  }
}
