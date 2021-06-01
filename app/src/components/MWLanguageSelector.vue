<template>
  <div class="mw-ui-language-selector">
    <slot name="search">
      <mw-input
        ref="selectElement"
        class="mw-ui-language-selector__search pa-4"
        :icon="mwIconSearch"
        :icon-size="20"
        :placeholder="placeholder"
        @input="onInput"
        @keydown="onKeydown"
      />
    </slot>
    <slot v-if="suggestions.length && !searchQuery" name="suggestions">
      <section class="results px-3 pt-4">
        <p
          v-i18n:cx-sx-language-selector-suggestions
          class="results-header ps-8 pb-2"
        />
        <section class="results-languages--suggestions">
          <span
            v-for="language in suggestions"
            :key="language"
            class="language pa-1 ps-8"
            :lang="language"
            :dir="getDir(language)"
            role="button"
            @click="select(language)"
            v-text="getAutonym(language)"
          />
        </section>
      </section>
    </slot>
    <slot v-if="searchResultsByScript.length" name="search">
      <section class="results px-3 pt-4">
        <p
          v-if="suggestions.length && !searchQuery"
          v-i18n:cx-sx-language-selector-all-languages
          class="results-header ps-8 pb-2"
        />
        <section
          v-for="(chunk, cindex) in searchResultsByScript"
          :key="cindex"
          class="results-languages mb-6"
          :class="resultsDisplayClass"
        >
          <span
            v-for="language in chunk"
            :key="language"
            class="language pa-1 ps-8"
            :lang="language"
            :dir="getDir(language)"
            role="button"
            @click="select(language)"
            v-text="getAutonym(language)"
          />
        </section>
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
    }
  },
  watch: {
    /**
     * @param {string} query
     */
    searchQuery: async function(query) {
      this.searchResults = await this.search(query);
    }
  },
  mounted: async function() {
    if (this.autofocus) {
      this.$refs.selectElement.focus();
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
    },
    onKeydown(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        // handle enter
        this.select(event.target.value);
      }

      if (event.keyCode === 27) {
        // handle escape
        this.$emit("close");
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
  &__result {
    cursor: pointer;
    &:hover {
      background-color: @background-color-code;
    }
    &-code {
      color: @color-base--subtle;
    }
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
      &:hover {
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
