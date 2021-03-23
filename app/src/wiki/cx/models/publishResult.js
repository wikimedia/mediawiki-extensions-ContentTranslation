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
}
