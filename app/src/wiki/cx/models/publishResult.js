export default class PublishResult {
  constructor({ result = "success", message = "", status = "" } = {}) {
    this.result = result;
    this.message = message;
    this.status = status;
  }

  get isSuccessful() {
    return this.result === "success";
  }
}
