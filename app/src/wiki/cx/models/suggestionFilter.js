import {
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
  COLLECTIONS_SUGGESTION_PROVIDER,
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  REGIONS_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import {
  cdxIconArticles,
  cdxIconHeart,
  cdxIconUserAvatar,
  cdxIconMapPin,
  cdxIconFolderPlaceholder,
} from "@wikimedia/codex-icons";

const filterTypeToIconMap = {
  [EDITS_SUGGESTION_PROVIDER]: cdxIconUserAvatar,
  [POPULAR_SUGGESTION_PROVIDER]: cdxIconHeart,
  [COLLECTIONS_SUGGESTION_PROVIDER]: cdxIconArticles,
};

const filterTypeToExpandableIconMap = {
  [COLLECTIONS_SUGGESTION_PROVIDER]: cdxIconFolderPlaceholder,
  [REGIONS_SUGGESTION_PROVIDER]: cdxIconMapPin,
};

export default class SuggestionFilter {
  /**
   * @param {string} id
   * @param {string} label
   * @param {string} type
   * @param {SuggestionFilter[]} subFilters
   */
  constructor({ id, label, type, subFilters = [] }) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.subFilters = subFilters;
  }

  get expandable() {
    return this.subFilters.length > 0;
  }

  get chipLabel() {
    return this.expandable
      ? `${this.label} (${this.subFilters.length})`
      : this.label;
  }

  get provider() {
    return this.type === AUTOMATIC_SUGGESTION_PROVIDER_GROUP
      ? this.id
      : this.type;
  }

  get icon() {
    return filterTypeToIconMap[this.provider] || null;
  }

  get expandableIcon() {
    return filterTypeToExpandableIconMap[this.provider] || this.icon;
  }
}
