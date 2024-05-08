<template>
	<div>
		<div class="search-topic-header" @click="goToHomePage">
			<cdx-icon :icon="cdxIconArrowPrevious"></cdx-icon>
			<span v-i18n-html:mint-search-topic-page-header></span>
		</div>
		<cdx-search-input
			ref="searchInputRef"
			v-model="inputValue"
			class="search-topic-input"
			:aria-label="$i18n( 'mint-search-topic-page-input-aria-label' )"
			:placeholder="$i18n( 'mint-search-topic-page-input-placeholder' )"
		></cdx-search-input>
		<cdx-tabs
			v-model:active="currentTab"
			class="search-language-tabs"
			@update:active="onTabSelected"
		>
			<cdx-tab
				v-for="tab in tabsData"
				:key="`search-language-tab-content-${tab.name}`"
				:name="tab.name"
				:label="tab.label"
			>
				<div
					v-if="!inputValue"
					v-i18n-html:mint-search-topic-page-results-container-empty
					class="search-language-result-empty-state"
				></div>
				<div v-else class="search-language-result">
					<div class="results-container">
						<mw-spinner v-if="loadingSearch"></mw-spinner>
						<search-result-item
							v-for="item in pageResults"
							v-else
							:key="`result-item-${item.title}-${item.language}`"
							:page="item"
							@click="goToConfirm( item )"
						></search-result-item>
					</div>
				</div>
			</cdx-tab>
		</cdx-tabs>
	</div>
</template>

<script>
const { defineComponent, ref, watch, onMounted, nextTick } = require( 'vue' );
const { CdxIcon, CdxSearchInput, CdxTabs, CdxTab } = require( '@wikimedia/codex' );
const { cdxIconArrowPrevious } = require( './icons.json' );
const debounce = require( './debounce.js' );
const SearchResultItem = require( './SearchResultItem.vue' );
const useState = require( './useState.js' );
const useRouter = require( './useRouter.js' );
const useSearch = require( './useSearch.js' );
const useEventLogging = require( './useEventLogging.js' );
const MwSpinner = require( './MwSpinner.vue' );

// @vue/component
module.exports = defineComponent( {
	name: 'SearchTopic',
	components: { SearchResultItem, CdxIcon, CdxSearchInput, CdxTabs, CdxTab, MwSpinner },
	setup() {
		const inputValue = ref( null );
		const currentTab = ref( 'all' );
		const searchInputRef = ref( null );
		const { goToHomePage, navigateToPage } = useRouter();
		const { sourceLanguage, targetLanguage } = useState();
		const {
			pageResults,
			loadingSearch,
			searchAll,
			searchByLanguage,
			searchByQid,
			searchByURL
		} = useSearch();

		const onTabSelected = () => {
			pageResults.value = [];
			inputValue.value = null;
			searchInputRef.value.focus();
		};

		onMounted( async () => {
			await nextTick();
			searchInputRef.value.focus();
		} );

		const allOptionLabel = mw.message( 'mint-translation-list-all-languages-option-label' );
		let tabsData = [
			{
				name: 'all',
				label: allOptionLabel
			},
			{
				name: sourceLanguage.value,
				label: sourceLanguage.value === 'all' ? allOptionLabel : $.uls.data.getAutonym( sourceLanguage.value )
			},
			{
				name: targetLanguage.value,
				label: $.uls.data.getAutonym( targetLanguage.value )
			}
		];

		// remove duplicate "all" tab, if present
		tabsData = tabsData.filter( ( tabData, index, self ) => {
			return self.map( ( data ) => data.name ).indexOf( tabData.name ) === index;
		} );

		const isValidUrl = ( urlString ) => {
			try {
				return Boolean( new URL( urlString ) );
			} catch ( e ) {
				return false;
			}
		};

		const { logEvent, logClickEvent } = useEventLogging();

		const doSearch = ( query ) => {
			if ( !query ) {
				return;
			}

			logEvent( 'search', null, null, query );

			const wikidataIdRegex = /^Q\d+$/;
			if ( wikidataIdRegex.test( query ) ) {
				const desiredDisplayLanguage = currentTab.value === 'all' ? targetLanguage.value : currentTab.value;
				return searchByQid( query, desiredDisplayLanguage );
			}

			if ( isValidUrl( query ) ) {
				const desiredDisplayLanguage = currentTab.value === 'all' ? targetLanguage.value : currentTab.value;
				return searchByURL( query, desiredDisplayLanguage ).then( () => {
					const result = pageResults.value[ 0 ];
					if ( result && result.language !== desiredDisplayLanguage ) {
						currentTab.value = 'all';
						searchInputRef.value.focus();
					}
				} );
			}

			if ( currentTab.value === 'all' ) {
				return searchAll( query );
			} else {
				return searchByLanguage( query, currentTab.value );
			}
		};

		const debouncedSearch = debounce( doSearch, 1000 );
		watch( inputValue, () => debouncedSearch( inputValue.value ) );

		/**
		 * @param {PageSearchResult} pageResult
		 */
		const goToConfirm = ( pageResult ) => {
			logClickEvent( null, 'search_result', pageResult.title );
			navigateToPage( 'confirm', { pageResult } );
		};

		return {
			cdxIconArrowPrevious,
			inputValue,
			goToHomePage,
			goToConfirm,
			currentTab,
			tabsData,
			onTabSelected,
			pageResults,
			searchInputRef,
			loadingSearch
		};
	}
} );
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.search-topic-header {
  font-weight: @font-weight-bold;
  display: flex;
  align-items: center;
  .cdx-icon {
    margin-inline-end: @spacing-50;
  }
}
.search-topic-input {
  margin-top: @spacing-100;
}

.search-language-tabs {
  margin-top: @spacing-100;
}

.search-language-result-empty-state {
  margin-top: @spacing-250;
  color: @color-placeholder;
}

.search-language-result {
  margin-top: @spacing-250;
}
</style>
