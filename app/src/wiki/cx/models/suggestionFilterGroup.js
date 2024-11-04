export default class SuggestionFilterGroup {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id, label, filters }) {
    this.id = id;
    this.label = label;
    this.filters = filters;
  }
}
