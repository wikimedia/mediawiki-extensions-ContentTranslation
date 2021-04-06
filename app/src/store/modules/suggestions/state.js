import appendixTitles from "../../../utils/appendix/appendixTitles.json";
export default {
  /** @type ArticleSuggestion[] */
  pageSuggestions: [],
  /** @type SectionSuggestion[] */
  sectionSuggestions: [],
  favorites: {},
  /**
   * Counter that indicates how many section suggestion fetching
   * requests are currently in progress
   * @type Number
   */
  sectionSuggestionsLoadingCount: 0,
  /**
   * Maximum number of suggestions being displayed in the dashboard
   * at the same time
   */
  maxSuggestionsPerSlice: 5,
  /**
   * Stores collections of seeds for different language pairs
   * Each seed collection corresponds to a specific language pair
   * and contains all available seeds to be used for section
   * suggestion fetching. Having this information stored prevents
   * unnecessary requests to fetch seeds every time they are needed
   * @type SectionSuggestionSeedCollection[]
   */
  sectionSuggestionSeedCollections: [],
  /**
   * Stores appendix section titles, grouped by language
   * @type Object - { language1: [titles1], ... }
   */
  appendixSectionTitles: appendixTitles,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
};
