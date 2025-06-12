export default class SuggestionFilterGroup {
  /**
   * @param {string} id
   * @param {string} label
   * @param {string} type
   * @param {SuggestionFilter[]} filters
   */
  constructor({ id, label, type, filters }) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.filters = filters;
  }
}
