export default class SuggestionFilterGroup {
  /**
   * @param {string} id
   * @param {string} label
   * @param {SuggestionFilter[]} filters
   */
  constructor({ id, label, filters }) {
    this.id = id;
    this.label = label;
    this.filters = filters;
  }
}
