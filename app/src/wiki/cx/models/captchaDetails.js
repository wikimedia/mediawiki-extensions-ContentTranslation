export default class CaptchaDetails {
  constructor({ id, type, question, url, key, error }) {
    this.id = id;
    this.type = type;
    this.question = question;
    this.url = url;
    // hCaptcha only
    this.key = key;
    this.error = error;
  }
}
