export default class CaptchaDetails {
  constructor({ id, type, question, url }) {
    this.id = id;
    this.type = type;
    this.question = question;
    this.url = url;
  }
}
