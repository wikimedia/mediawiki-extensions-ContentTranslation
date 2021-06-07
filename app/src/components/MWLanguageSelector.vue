<template>
  <div ref="langSelectorContainer" class="mw-ui-language-selector">
    <slot name="search">
      <mw-input
        ref="searchInputElement"
        class="mw-ui-language-selector__search pa-4"
        :icon="mwIconSearch"
        :icon-size="20"
        :placeholder="placeholder"
        @input="onInput"
        @keydown.enter.prevent="onEnter"
        @keydown.down.prevent="next"
        @keydown.up.prevent="prev"
        @keydown.esc.prevent="close"
      />
    </slot>
    <slot v-if="suggestions.length && !searchQuery" name="suggestions">
      <section class="results px-3 pt-4">
        <p
          v-i18n:cx-sx-language-selector-suggestions
          class="results-header ps-8 pb-2"
        />
        <ul class="results-languages--suggestions pa-0 ma-0">
          <li
            v-for="language in suggestions"
            :key="language"
            class="language pa-1 ps-8"
            :lang="language"
            :dir="getDir(language)"
            :aria-selected="language === selectedLanguage"
            :class="language === selectedLanguage ? 'language--selected' : ''"
            tabindex="-1"
            role="option"
            @click="select(language)"
            v-text="getAutonym(language)"
          />
        </ul>
      </section>
    </slot>
    <slot v-if="searchResultsByScript.length" name="search">
      <section class="results px-3 pt-4">
        <p
          v-if="suggestions.length && !searchQuery"
          v-i18n:cx-sx-language-selector-all-languages
          class="results-header ps-8 pb-2"
        />
        <ul
          v-for="(chunk, cindex) in searchResultsByScript"
          :key="cindex"
          class="results-languages pa-0 ma-0 mb-6"
          :class="resultsDisplayClass"
        >
          <li
            v-for="language in chunk"
            :key="language"
            class="language pa-1 ps-8"
            :lang="language"
            :dir="getDir(language)"
            role="option"
            :aria-selected="language === selectedLanguage"
            tabindex="-1"
            :class="language === selectedLanguage ? 'language--selected' : ''"
            @click="select(language)"
            v-text="getAutonym(language)"
          />
        </ul>
      </section>
    </slot>
    <slot v-else name="noresults">
      <section class="no-results px-3 py-4">
        <h3 v-i18n:cx-sx-language-selector-no-search-results class="ps-8" />
      </section>
    </slot>
  </div>
</template>

<script>
import {
  mwIconSearch,
  mwIconClose
} from "../lib/mediawiki.ui/components/icons";
import { MwInput } from "../lib/mediawiki.ui";
import {
  getAutonym,
  getDir,
  getScript,
  sortByAutonym
} from "@wikimedia/language-data";

export default {
  name: "MwLanguageSelector",
  components: {
    MwInput
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    autofocus: {
      type: Boolean,
      default: true
    },
    languages: {
      type: Array,
      default: () => [],
      validator: languages =>
        languages.every(language => typeof language === "string")
    },
    /**
     * Suggested languages
     **/
    suggestions: {
      type: Array,
      default: () => [],
      validator: languages =>
        languages.every(language => typeof language === "string")
    },
    /**
     * Search API URL for language search.
     */
    searchAPI: {
      type: String,
      default: () => {
        const apiURL = new URL("https://en.wikipedia.org/w/api.php");
        apiURL.searchParams.set("action", "languagesearch");
        apiURL.searchParams.set("format", "json");
        apiURL.searchParams.set("origin", "*");
        apiURL.searchParams.set("formatversion", 2);

        return apiURL.toString();
      }
    }
  },
  data: () => ({
    mwIconSearch,
    mwIconClose,
    searchQuery: "",
    selectedLanguage: "",
    selectedIndex: -1,
    searchResults: []
  }),
  computed: {
    searchResultsByScript: vm => {
      let chunkSize;
      const languagesByScript = [...vm.searchResults.sort(sortByAutonym)];
      const resultsCount = vm.searchResults.length;
      if (resultsCount < 10) chunkSize = resultsCount;
      if (resultsCount < 30) chunkSize = 10;
      if (resultsCount >= 30) chunkSize = 15;
      const chunks = [];

      while (languagesByScript.length) {
        chunks.push(languagesByScript.splice(0, chunkSize));
      }

      return chunks;
    },
    resultsDisplayClass: vm => {
      const resultsCount = vm.searchResults.length;
      if (resultsCount < 10) return "few-results";
      if (resultsCount < 30) return "some-results";
      if (resultsCount >= 30) return "many-results";
    },
    shownLanguages: vm =>
      !!vm.searchQuery
        ? vm.searchResults
        : [...vm.suggestions, ...vm.searchResults]
  },
  watch: {
    /**
     * @param {string} query
     */
    searchQuery: async function(query) {
      this.searchResults = await this.search(query);
    },
    selectedIndex: function() {
      if (this.selectedIndex < 0) {
        // Reset
        this.selectedLanguage = "";

        return;
      }
      this.selectedLanguage = this.shownLanguages[this.selectedIndex];
      this.$refs.langSelectorContainer
        .querySelectorAll(`.language[lang="${this.selectedLanguage}"]`)[0]
        ?.scrollIntoView(false);
    }
  },
  mounted: async function() {
    if (this.autofocus) {
      this.$refs.searchInputElement.focus();
    }
    // Initialize with an empty search
    this.searchResults = await this.search();
  },
  methods: {
    getAutonym,
    getDir,
    select(language) {
      this.$emit("select", language);
    },
    onInput(value) {
      this.searchQuery = value;
      this.selectedIndex = -1;
    },
    onEnter() {
      // If the search value is a known language, select it
      if (this.searchQuery && this.languages.includes(this.searchQuery)) {
        this.select(this.searchQuery);

        return;
      }

      // If there is an actively selected language, select it
      if (this.selectedLanguage) {
        this.select(this.selectedLanguage);

        return;
      }

      // If there is only one search result, select it
      if (this.searchResults.length === 1) {
        this.select(this.searchResults[0]);

        return;
      }
    },
    close() {
      this.$emit("close");
    },
    next() {
      this.selectedIndex++;

      if (this.selectedIndex >= this.shownLanguages.length) {
        this.selectedIndex = 0;
      }
    },
    prev() {
      this.selectedIndex--;

      if (this.selectedIndex < 0) {
        this.selectedIndex = 0;
      }
    },

    /**
     * @param {string} [query]
     * @return {Promise<string[]>}
     */
    search: async function(query) {
      if (!query || query.trim().length === 0) {
        return this.languages;
      }

      // See if the search query is a language code
      const exactMatch = this.languages.filter(
        code => query.toLowerCase() === code.toLowerCase()
      );

      if (exactMatch.length) {
        return exactMatch;
      }

      const filterResults = this.languages.filter(
        code =>
          // Search using autonym
          getAutonym(code)
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          // Search using script name
          getScript(code)
            .toLowerCase()
            .includes(query.toLowerCase())
      );

      if (filterResults.length) {
        return filterResults;
      }

      // We did not find any results from client side search.
      // Attempt a search using the given search API
      if (this.searchAPI) {
        const searchApiResults = await this.searchWithAPI(this.searchQuery);

        // Remove the languages not known to this selector.
        return searchApiResults.filter(code => this.languages.includes(code));
      }

      return [];
    },

    /**
     * @param {string} query
     * @return {Promise<string[]>}
     */
    searchWithAPI: function(query) {
      const apiURL = new URL(this.searchAPI);
      apiURL.searchParams.set("search", query);

      return fetch(apiURL.toString())
        .then(response => response.json())
        .then(result => Object.keys(result.languagesearch || {}));
    }
  }
};
</script>

<style lang="less">
@import "../lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.mw-ui-language-selector {
  &__search {
    box-shadow: 0 @border-width-base 2px rgba(0, 0, 0, 0.25);
    border: 0;
    .mw-ui-input__content {
      margin: 0;
      .mw-ui-input__input {
        padding: 0 0 0 8px;
        height: 20px;
      }
    }
  }
  &__results {
    padding: 1em;
    overflow-y: auto;
  }

  .no-results,
  .results {
    overflow: auto;
    &-header {
      color: @color-base--subtle;
    }
  }

  .results-languages,
  .results-languages--suggestions {
    text-align: left;
    .language {
      color: @wmui-color-base10;
      &--selected,
      &:hover,
      &:focus {
        background-color: @wmui-color-base80;
      }
    }
    column-gap: 4px;
    &.few-results {
      column-count: 1;
    }
    &.some-results {
      column-count: 2;
    }
    &.many-results {
      column-count: 3;
    }
  }
  .results-languages--suggestions {
    column-count: 3;
  }

  h3 {
    color: @wmui-color-base30;
  }

  @media (max-width: 600px) {
    .results-languages {
      &.few-results,
      &.some-results,
      &.many-results {
        column-count: 1;
      }
    }
    .results-languages--suggestions {
      column-count: 2;
    }
    .col-break {
      display: none;
    }
  }

  .language {
    display: block;
    font-size: 1em;
    text-decoration: none;
    max-width: 160px;
  }
}
</style>
