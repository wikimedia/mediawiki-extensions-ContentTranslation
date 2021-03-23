import PublishFeedbackMessage from "./publishFeedbackMessage";

export default class PublishResult {
  constructor({ result = "success", messages = [], status = "" } = {}) {
    this.result = result;
    this.messages =
      messages && messages.map(message => new PublishFeedbackMessage(message));
    this.status = status;
  }

  get isSuccessful() {
    return this.result === "success";
  }

  get isWarning() {
    return this.result === "warning";
  }

  get hasSuppressedWarnings() {
    return this.isWarning && this.messages.every(message => message.suppressed);
  }
}
