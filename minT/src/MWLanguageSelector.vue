<template>
	<div ref="langSelectorContainer" class="mw-ui-language-selector">
		<div class="mw-ui-language-selector-header">
			<h3 v-i18n-html:mint-language-selector-title></h3>
			<cdx-button weight="quiet" @click="close">
				<cdx-icon :icon="cdxIconClose"></cdx-icon>
			</cdx-button>
		</div>
		<slot name="search">
			<div class="mw-ui-language-selector__input-container">
				<cdx-search-input
					v-model="autocompletion"
					class="mw-ui-language-selector__autocomplete"
					disabled
				></cdx-search-input>
				<cdx-search-input
					ref="searchInputElement"
					v-model="searchQuery"
					class="mw-ui-language-selector__search"
					:placeholder="placeholder"
					:autofocus="autofocus"
					@keydown.enter.prevent="onEnter"
					@keydown.down.stop.prevent="next"
					@keydown.up.stop.prevent="prev"
					@keydown.esc.prevent="close"
					@keydown.tab.prevent="onTabSelect"
				></cdx-search-input>
			</div>
		</slot>
		<section class="mw-ui-language-selector__results-container pa-0 ma-0">
			<slot v-if="suggestions.length && !searchQuery" name="suggestions">
				<section class="results px-3 pt-4">
					<p
						v-i18n-html:mint-language-selector-suggestions-header
						class="results-header ps-8 pb-2"
					></p>
					<ul class="results-languages--suggestions pa-0 ma-0">
						<li
							v-for="language in suggestions"
							:key="language"
							class="language pa-2 ps-8 ma-0"
							:lang="language"
							:dir="getDir( language )"
							:aria-selected="language === selectedLanguage || null"
							:class="language === selectedLanguage ? 'language--selected' : ''"
							tabindex="-1"
							role="option"
							@click="select( language )"
						>
							{{ getAutonym( language ) }}
						</li>
					</ul>
				</section>
			</slot>
			<slot v-if="languageListItems.length" name="search">
				<section class="results px-3 pt-4">
					<p
						v-if="suggestions.length && !searchQuery"
						v-i18n-html::mint-language-selector-all-languages-header
						class="results-header ps-8 pb-2"
					></p>
					<ul
						class="results-languages pa-0 ma-0 mb-6"
						:class="resultsDisplayClass"
					>
						<li
							v-if="allOptionEnabled && !searchQuery"
							class="language pa-2 ps-8 ma-0"
							role="option"
							:aria-selected="selectedLanguage === 'all' || null"
							tabindex="-1"
							:class="selectedLanguage === 'all' ? 'language--selected' : ''"
							@click="select( 'all' )"
						>
							{{ $i18n( 'mint-translation-list-all-languages-option-label' ).text() }}
						</li>
						<li
							v-for="language in languageListItems"
							:key="language"
							class="language pa-2 ps-8 ma-0"
							:lang="language"
							:dir="getDir( language )"
							role="option"
							:aria-selected="language === selectedLanguage || null"
							tabindex="-1"
							:class="language === selectedLanguage ? 'language--selected' : ''"
							@click="select( language )"
						>
							{{ getAutonym( language ) }}
						</li>
					</ul>
				</section>
			</slot>
			<slot v-else name="noresults">
				<section class="no-results px-3 py-4">
					<h3 class="ps-8">
						{{ $i18n( 'mint-language-selector-no-search-results' ).text() }}
					</h3>
				</section>
			</slot>
		</section>
	</div>
</template>

<script>
const { ref, watch, onMounted, computed, defineComponent } = require( 'vue' );
const useRouter = require( './useRouter.js' );
const useLanguageSearch = require( './useLanguageSearch.js' );
const useAutocompletion = require( './useAutocompletion.js' );
const useKeyboardNavigation = require( './useKeyboardNavigation.js' );
const { cdxIconClose } = require( './icons.json' );
const { CdxIcon, CdxSearchInput, CdxButton } = require( '@wikimedia/codex' );
const getAutonym = $.uls.data.getAutonym;
const getDir = $.uls.data.getDir;
const debounce = require( './debounce.js' );

function getSearchApi() {
	const apiURL = new URL( 'https://en.wikipedia.org/w/api.php' );
	apiURL.searchParams.set( 'action', 'languagesearch' );
	apiURL.searchParams.set( 'format', 'json' );
	apiURL.searchParams.set( 'origin', '*' );
	apiURL.searchParams.set( 'formatversion', 2 );

	return apiURL.toString();
}

const defaultSearchApi = getSearchApi();

// @vue/component
module.exports = defineComponent( {
	name: 'MwLanguageSelector',
	components: {
		CdxSearchInput,
		CdxButton,
		CdxIcon
	},
	props: {
		placeholder: {
			type: String,
			default: ''
		},
		autofocus: {
			type: Boolean,
			// eslint-disable-next-line vue/no-boolean-default
			default: true
		},
		languages: {
			type: Array,
			default: () => [],
			validator: ( languages ) =>
				languages.every( ( language ) => typeof language === 'string' )
		},
		allOptionEnabled: {
			type: Boolean,
			default: false
		},
		/**
		 * Suggested languages
		 */
		suggestions: {
			type: Array,
			default: () => [],
			validator: ( languages ) =>
				languages.every( ( language ) => typeof language === 'string' )
		},
		/**
		 * Search API URL for language search.
		 */
		searchAPI: {
			type: String,
			default: defaultSearchApi
		},
		onSelect: {
			type: Function,
			default: null
		}
	},
	emits: [ 'select', 'close' ],
	setup( props, context ) {
		const {
			searchByQuery,
			getSearchResultsByScript,
			getResultsDisplayClass
		} = useLanguageSearch();

		const searchInputElement = ref( null );
		const searchQuery = ref( '' );
		const searchResults = ref( [] );
		const searchResultsByScript = computed( () =>
			getSearchResultsByScript( searchResults.value )
		);

		const resultsDisplayClass = computed( () =>
			getResultsDisplayClass( searchResults.value )
		);

		const { closeLanguageSelector } = useRouter();

		const close = () => {
			context.emit( 'close' );
			closeLanguageSelector();
		};

		const select = ( language ) => {
			props.onSelect( language );
			context.emit( 'select', language );
			close();
		};

		const { autocompletion, onTabSelect } = useAutocompletion(
			searchQuery,
			searchResults
		);

		const { next, prev, langSelectorContainer, selectedLanguage } = useKeyboardNavigation(
			searchQuery,
			searchResults,
			props.suggestions
		);

		const onEnter = () => {
			// If the search value is a known language, select it
			if ( searchQuery.value && props.languages.includes( searchQuery.value ) ) {
				select( searchQuery.value );

				return;
			}

			// If there is an actively selected language, select it
			if ( selectedLanguage.value ) {
				select( selectedLanguage.value );

				return;
			}

			// If there is only one search result, select it
			if ( searchResults.value.length === 1 ) {
				select( searchResults.value[ 0 ] );
			}
		};

		const onQueryChange = async () => {
			searchResults.value = await searchByQuery(
				props.languages,
				searchQuery.value,
				props.searchAPI
			);
		};

		watch( searchQuery, debounce( onQueryChange, 300 ) );

		onMounted( async () => {
			if ( props.autofocus ) {
				// Focus the search input field, but use a small timeout
				// to take care of transitions and other competing focus fields in container
				setTimeout( () => searchInputElement.value.focus(), 500 );
			}
			// Initialize with an empty search
			searchResults.value = await searchByQuery(
				props.languages,
				'',
				props.searchAPI
			);
		} );

		const languageListItems = computed(
			// eslint-disable-next-line es-x/no-array-prototype-flat
			() => searchResultsByScript.value.flatMap( ( chunk ) => chunk )
		);

		return {
			autocompletion,
			close,
			getAutonym,
			getDir,
			langSelectorContainer,
			next,
			onEnter,
			onTabSelect,
			prev,
			resultsDisplayClass,
			searchInputElement,
			searchQuery,
			select,
			selectedLanguage,
			cdxIconClose,
			languageListItems
		};
	}
} );
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.mw-ui-language-selector {
  // reset the padding added by ancestor divs (e.g. #bodyContent)
  margin: -@spacing-100;
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 0 @spacing-100;
    h3 {
      font-size: @font-size-medium;
    }
  }

  &__input-container {
    position: relative;
  }

  &__autocomplete,
  &__search {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: @box-shadow-drop-small;
    border: 0;
    background-color: transparent;
    .cdx-text-input__input {
      padding-block: @spacing-75;
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

  &__results-container {
    overflow: auto;
    height: 50vh;
    margin-top: @spacing-300;
    padding: @spacing-100 0;
  }

  &__results {
    padding: 1em;
    overflow-y: auto;
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

  &__inputcontainer {
    position: relative;
    height: 1em;
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
