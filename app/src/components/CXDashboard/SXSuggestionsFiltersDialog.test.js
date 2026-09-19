import { shallowMount } from "@vue/test-utils";
import SXSuggestionsFiltersDialog from "./SXSuggestionsFiltersDialog.vue";
import { createI18n } from "vue-banana-i18n";
import { ref, computed } from "vue";
import {
  TOPIC_SUGGESTION_PROVIDER,
  REGIONS_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
} from "@/utils/suggestionFilterProviders";

import SuggestionFilterGroup from "@/wiki/cx/models/suggestionFilterGroup";

const mockSearchInput = ref("");
const mockSearchScope = ref("all");
const mockSearchResults = ref([]);
const mockSearchResultsLoading = ref(false);

jest.mock("./useSuggestionsFilterSearch", () => () => ({
  searchInput: mockSearchInput,
  searchScope: mockSearchScope,
  searchResults: mockSearchResults,
  searchResultsLoading: mockSearchResultsLoading,
}));

const mockAllFilters = ref([
  new SuggestionFilterGroup({
    id: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
    type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
    label: "Automatic",
    filters: [],
  }),
  new SuggestionFilterGroup({
    id: COLLECTIONS_SUGGESTION_PROVIDER,
    type: COLLECTIONS_SUGGESTION_PROVIDER,
    label: "Collections",
    filters: [],
  }),
  new SuggestionFilterGroup({
    id: REGIONS_SUGGESTION_PROVIDER,
    type: REGIONS_SUGGESTION_PROVIDER,
    label: "Regions",
    filters: [],
  }),
  new SuggestionFilterGroup({
    id: TOPIC_SUGGESTION_PROVIDER,
    type: TOPIC_SUGGESTION_PROVIDER,
    label: "Topics",
    filters: [],
  }),
]);

jest.mock("@/composables/useSuggestionsFilters", () => () => ({
  allFilters: mockAllFilters,
  isFilterSelected: jest.fn(() => false),
  selectFilter: jest.fn(),
  findSelectedFilter: jest.fn(() => ({ label: "All", icon: null })),
}));

jest.mock("./useSuggestionFiltersInstrument", () => () => ({
  logSuggestionFiltersClose: jest.fn(),
  logSuggestionFiltersConfirm: jest.fn(),
  logSuggestionFiltersSelect: jest.fn(),
}));

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      "cx-sx-suggestions-filters-tab-all": "All",
      "cx-sx-suggestions-filters-tab-collections": "Collections",
      "cx-sx-suggestions-filters-tab-regions": "Regions",
      "cx-sx-suggestions-filters-tab-topics": "Topics",
      "cx-sx-suggestions-filter-search-input-placeholder":
        "Search for any topic, collection and more",
      "cx-sx-suggestions-filter-search-input-placeholder-collections":
        "Search collections...",
      "cx-sx-suggestions-filter-search-input-placeholder-regions":
        "Search for a region or country...",
      "cx-sx-suggestions-filter-search-input-placeholder-topics":
        "Search for a topic...",
      "cx-sx-suggestions-filter-search-results-loading":
        "Search results loading...",
      "cx-sx-suggestions-filter-search-results-empty-primary":
        "No results found",
      "cx-sx-suggestions-filter-search-results-empty-secondary":
        "Try different search terms or check other tabs",
      "cx-sx-suggestions-filters-more-countries": "More countries",
      "cx-sx-suggestions-filters-view-all-collections-group": "All collections",
      "cx-sx-suggestions-filters-view-all-regions-group": "All regions",
    },
  },
});

const mountComponent = (props = {}) => {
  return shallowMount(SXSuggestionsFiltersDialog, {
    props: {
      modelValue: true,
      ...props,
    },
    global: {
      plugins: [i18n],
      provide: {
        breakpoints: computed(() => ({ mobile: false })),
      },
      stubs: {
        CdxTabs: {
          template: '<div class="cdx-tabs"><slot /></div>',
        },
        CdxTab: {
          template: '<div class="cdx-tab"><slot /></div>',
        },
        CdxMenu: {
          template: `
            <div class="cdx-menu">
              <slot name="pending" />
              <slot name="no-results" />
              <slot />
            </div>
          `,
          props: ["showPending", "menuItems", "expanded", "selected"],
          methods: {
            getHighlightedMenuItem: () => null,
            delegateKeyNavigation: () => {},
          },
        },
        MwDialog: {
          template: '<div class="mw-dialog"><slot /></div>',
        },
        MwRow: {
          template: '<div class="mw-row"><slot /></div>',
        },
        MwCol: {
          template: '<div class="mw-col"><slot /></div>',
        },
      },
    },
  });
};

describe("SXSuggestionsFiltersDialog.vue", () => {
  beforeEach(() => {
    mockSearchInput.value = "";
    mockSearchScope.value = "all";
    mockSearchResults.value = [];
    mockSearchResultsLoading.value = false;
  });

  it("sets the correct search placeholder for the All tab", () => {
    const wrapper = mountComponent();
    const textInput = wrapper.find("cdx-text-input-stub");
    expect(textInput.attributes("placeholder")).toBe(
      "Search for any topic, collection and more"
    );
    expect(textInput.attributes("aria-label")).toBe(
      "Search for any topic, collection and more"
    );
  });

  it("shows loading indicator with role=status while search is in progress", () => {
    mockSearchInput.value = "query";
    mockSearchResultsLoading.value = true;
    const wrapper = mountComponent();

    const pending = wrapper.find(
      ".sx-suggestions-filters__search-results-pending"
    );
    expect(pending.exists()).toBe(true);
    expect(pending.attributes("role")).toBe("status");
    expect(pending.attributes("aria-live")).toBe("polite");
  });

  it("does not show 'No results found' while search is in progress", () => {
    mockSearchInput.value = "query";
    mockSearchResultsLoading.value = true;
    const wrapper = mountComponent();

    const empty = wrapper.find(".sx-suggestions-filters__search-results-empty");
    expect(empty.exists()).toBe(false);
  });

  it("shows 'No results found' only after search has completed and genuinely returned zero results", () => {
    mockSearchInput.value = "query";
    mockSearchResultsLoading.value = false;
    mockSearchResults.value = [];
    const wrapper = mountComponent();

    const empty = wrapper.find(".sx-suggestions-filters__search-results-empty");
    expect(empty.exists()).toBe(true);
  });

  it("does not show 'No results found' when search returns results", () => {
    mockSearchInput.value = "query";
    mockSearchResultsLoading.value = false;
    mockSearchResults.value = [
      {
        key: "topics",
        show: true,
        items: [{ label: "France", value: "France" }],
      },
    ];
    const wrapper = mountComponent();

    const empty = wrapper.find(".sx-suggestions-filters__search-results-empty");
    expect(empty.exists()).toBe(false);
  });
});
