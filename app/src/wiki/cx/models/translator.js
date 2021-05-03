export default class Translator {
  /**
   * @param {Object} options
   * @param {string} options.id
   * @param {string} options.userName
   */
  constructor({ id, userName }) {
    this.id = id;
    this.userName = userName;
  }
}
