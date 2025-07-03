export default class SuggestionFilterSearchResult {
  /**
   * @param {string} label
   * @param {string} value
   * @param {string} description
   * @param {{ url: string }|null} thumbnail
   * @param {string} filterType
   * @param {string} filterId
   * @param {string|IconFlipForRtl|null} icon
   * @param {boolean} showThumbnail
   */
  constructor({
    label,
    value,
    description,
    filterType,
    filterId,
    thumbnail = null,
    icon = null,
    showThumbnail = false,
  }) {
    this.label = label;
    // Append the filter type to the filter value to distinguish filters with the same value but different types.
    // e.g. "Art" article with type "seed", and "Art" topic area with type "topic"
    this.value = value + "-" + filterType;
    this.description = description;
    this.thumbnail = thumbnail;
    this.filterType = filterType;
    this.filterId = filterId;
    this.icon = icon;
    this.showThumbnail = showThumbnail;
  }
}
