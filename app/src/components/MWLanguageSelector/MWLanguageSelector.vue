<template>
  <div ref="langSelectorContainer" class="mw-ui-language-selector">
    <slot name="search">
      <div class="mw-ui-language-selector__inputcontainer pa-4 mb-4">
        <!--      TODO: Use modelValue inside mw-input and use v-model="" directly-->
        <mw-input
          v-model:value="autocompletion"
          :icon="mwIconSearch"
          :icon-size="20"
          class="mw-ui-language-selector__autocomplete pa-4"
          disabled
        />
        <!--      TODO: Use modelValue inside mw-input and use v-model="" directly-->
        <mw-input
          ref="searchInputElement"
          v-model:value="searchQuery"
          class="mw-ui-language-selector__search pa-4"
          :icon="mwIconSearch"
          :icon-size="20"
          :placeholder="placeholder"
          :autofocus="autofocus"
          @keydown.enter.prevent="onEnter"
          @keydown.down.stop.prevent="next"
          @keydown.up.stop.prevent="prev"
          @keydown.esc.prevent="close"
          @keydown.tab.prevent="onTabSelect"
        />
      </div>
    </slot>
    <section class="mw-ui-language-selector__resultscontainer pa-0 ma-0">
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
              class="language pa-2 ps-8 ma-0"
              :lang="language"
              :dir="getDir(language)"
              :aria-selected="language === selectedLanguage || null"
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
              class="language pa-2 ps-8 ma-0"
              :lang="language"
              :dir="getDir(language)"
              role="option"
              :aria-selected="language === selectedLanguage || null"
              tabindex="-1"
              :class="language === selectedLanguage ? 'language--selected' : ''"
              @click="select(language)"
              v-text="getAutonym(language)"
            />
            <li
              v-if="allOptionEnabled && !searchQuery"
              v-i18n:cx-translation-list-all-languages-option-label
              class="language pa-2 ps-8 ma-0"
              role="option"
              :aria-selected="selectedLanguage === 'all' || null"
              tabindex="-1"
              :class="selectedLanguage === 'all' ? 'language--selected' : ''"
              @click="select('all')"
            />
          </ul>
        </section>
      </slot>
      <slot v-else name="noresults">
        <section class="no-results px-3 py-4">
          <h3 v-i18n:cx-sx-language-selector-no-search-results class="ps-8" />
        </section>
      </slot>
    </section>
  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from "vue";
import {
  searchByQuery,
  getSearchApi,
  getSearchResultsByScript,
  getResultsDisplayClass,
} from "./languagesearch";
import autocomplete from "./autocompletion";
import keyboardNavigation from "./keyboardnav";
import { mwIconSearch, mwIconClose } from "@/lib/mediawiki.ui/components/icons";
import { MwInput } from "../../lib/mediawiki.ui";
import { getAutonym, getDir } from "@wikimedia/language-data";
import debounce from "@/utils/debounce";

export default {
  name: "MwLanguageSelector",

  components: {
    MwInput,
  },

  props: {
    placeholder: {
      type: String,
      default: "",
    },
    autofocus: {
      type: Boolean,
      default: true,
    },
    languages: {
      type: Array,
      default: () => [],
      validator: (languages) =>
        languages.every((language) => typeof language === "string"),
    },
    allOptionEnabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Suggested languages
     **/
    suggestions: {
      type: Array,
      default: () => [],
      validator: (languages) =>
        languages.every((language) => typeof language === "string"),
    },
    /**
     * Search API URL for language search.
     */
    searchAPI: {
      type: String,
      default: getSearchApi,
    },
  },

  emits: ["select", "close"],

  setup(props, context) {
    const searchInputElement = ref(null);
    const searchQuery = ref("");
    const searchResults = ref([]);
    const searchResultsByScript = computed(() =>
      getSearchResultsByScript(searchResults.value)
    );

    const resultsDisplayClass = computed(() =>
      getResultsDisplayClass(searchResults.value)
    );

    const select = (language) => context.emit("select", language);
    const close = () => context.emit("close");

    const { autocompletion, onTabSelect } = autocomplete(
      searchQuery,
      searchResults
    );
    const { next, prev, langSelectorContainer, selectedLanguage } =
      keyboardNavigation(searchQuery, searchResults, props.suggestions);

    const onEnter = () => {
      // If the search value is a known language, select it
      if (searchQuery.value && props.languages.includes(searchQuery.value)) {
        select(searchQuery.value);

        return;
      }

      // If there is an actively selected language, select it
      if (selectedLanguage.value) {
        select(selectedLanguage.value);

        return;
      }

      // If there is only one search result, select it
      if (searchResults.value.length === 1) {
        select(searchResults.value[0]);

        return;
      }
    };

    const onQueryChange = async () => {
      searchResults.value = await searchByQuery(
        props.languages,
        searchQuery.value,
        props.searchAPI
      );
    };

    watch(searchQuery, debounce(onQueryChange, 300));

    onMounted(async () => {
      if (props.autofocus) {
        // Focus the search input field, but use a small timeout
        // to take care of transitions and other competing focus fields in container
        setTimeout(() => searchInputElement.value.focus(), 500);
      }
      // Initialize with an empty search
      searchResults.value = await searchByQuery(
        props.languages,
        "",
        props.searchAPI
      );
    });

    return {
      autocompletion,
      close,
      getAutonym,
      getDir,
      langSelectorContainer,
      mwIconClose,
      mwIconSearch,
      next,
      onEnter,
      onTabSelect,
      prev,
      resultsDisplayClass,
      searchInputElement,
      searchQuery,
      searchResultsByScript,
      select,
      selectedLanguage,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.mw-ui-language-selector {
  &__autocomplete,
  &__search {
    box-shadow: @box-shadow-drop-medium;
    border: 0;
    background-color: transparent;
    .mw-ui-input__input {
      background-color: transparent;
    }
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

  &__resultscontainer {
    overflow: auto;
    height: 50vh;
  }

  .no-results,
  .results {
    &-header {
      color: #72777d;
    }
  }

  .results-languages,
  .results-languages--suggestions {
    text-align: left;
    .language {
      color: @color-base;
      &--selected,
      &:hover,
      &:focus {
        background-color: @background-color-interactive;
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
    color: #72777d;
  }

  &__inputcontainer {
    position: relative;
    height: 1em;
  }

  &__search,
  &__autocomplete {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
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
    cursor: pointer;
  }
}
</style>
