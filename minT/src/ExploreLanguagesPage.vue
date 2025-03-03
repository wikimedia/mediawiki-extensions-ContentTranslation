<template>
	<div class="explore-languages">
		<div class="explore-languages-header">
			<div class="explore-languages-title" @click="goToConfirm">
				<cdx-icon :icon="cdxIconArrowPrevious"></cdx-icon>
				<span> {{ $i18n( 'mint-explore-languages-header' ).text() }} </span>
			</div>
			<cdx-search-input
				v-model="searchQuery"
				class="explore-languages-input"
				:placeholder="$i18n( 'mint-explore-languages-search-input-placeholder' )"
				:disabled="loading"
			></cdx-search-input>
		</div>
		<div class="explore-languages-body">
			<cdx-card class="explore-languages-body__explanation-banner">
				<template #title>
					{{ $i18n( 'mint-explore-languages-explanation-banner-title' ) }}
				</template>
				<template #description>
					{{ $i18n( 'mint-explore-languages-explanation-banner-text' ) }}
				</template>
			</cdx-card>
			<h4>
				<!-- eslint-disable max-len -->
				{{ $i18n( 'mint-explore-languages-language-card-container-title', pageResult.sourceTitle ) }}
				<!--eslint-enable-->
			</h4>
			<mw-spinner v-if="loading"></mw-spinner>
			<div
				v-else
				class="explore-languages-body__language-card-container"
			>
				<div
					v-for="( sourceArticleInfo, index ) in activeSourceArticleInfos"
					:key="sourceArticleInfo.language"
					:ref="el => createCardElementRef( el, sourceArticleInfo.language )"
					class="explore-languages-body__language-card"
					:class="{
						'explore-languages-body__language-card--selected':
							isSelected( sourceArticleInfo.language )
					}"
					@click="selectLanguage( sourceArticleInfo.language )"
				>
					<div class="explore-languages-body__language-card__header">
						<h4>{{ getAutonym( sourceArticleInfo.language ) }}</h4>
						<cdx-radio
							v-model="sourceLanguage"
							name="article-language-radios"
							:input-value="sourceArticleInfo.language"
						></cdx-radio>
					</div>
					<div class="explore-languages-body__language-card__subheader">
						<span class="explore-languages-body__language-card__sections-count">
							{{
								$i18n(
									'mint-explore-languages-language-card-sections-count',
									sourceArticleInfo.sectionTitles.length
								)
							}}
						</span>
						<cdx-info-chip v-if="index === 0">
							{{ $i18n( 'mint-explore-languages-language-card-most-detailed-chip-label' ) }}
						</cdx-info-chip>
					</div>
					<div class="explore-languages-body__language-card__sections">
						<p
							v-for="sectionTitle in getTranslatedSections( sourceArticleInfo.language )"
							:key="sectionTitle"
						>
							{{ sectionTitle }}
						</p>
						<div
							v-if="!areSectionsLoaded( sourceArticleInfo.language )"
							class="explore-languages-body__loading-indicator"
						>
							<cdx-icon :icon="cdxIconRobot"></cdx-icon>
							<cdx-icon :icon="cdxIconEllipsis"></cdx-icon>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const { defineComponent, ref, watch, computed } = require( 'vue' );
const { cdxIconArrowPrevious, cdxIconRobot, cdxIconEllipsis } = require( './icons.json' );
const { CdxIcon, CdxInfoChip, CdxSearchInput, CdxCard, CdxRadio } = require( '@wikimedia/codex' );
const useRouter = require( './useRouter.js' );
const useApi = require( './useApi.js' );
const useCXServerToken = require( './useCXServerToken.js' );
const useSectionTitleTranslate = require( './useSectionTitleTranslate.js' );
const useState = require( './useState.js' );
const useLanguageSearch = require( './useLanguageSearch.js' );
const useLanguagesUpdate = require( './useLanguagesUpdate.js' );
const PageSearchResult = require( './pageSearchResult.js' );
const MwSpinner = require( './MwSpinner.vue' );
const debounce = require( './debounce.js' );
const getAutonym = $.uls.data.getAutonym;

// @vue/component
module.exports = defineComponent( {
	name: 'ExploreLanguagesPage',
	components: { CdxCard, CdxIcon, CdxInfoChip, CdxRadio, CdxSearchInput, MwSpinner },
	props: {
		pageResult: {
			type: PageSearchResult,
			required: true
		}
	},
	setup( props ) {
		const searchQuery = ref( null );

		const { navigateToPage } = useRouter();
		const { fetchToken } = useCXServerToken();
		const { searchByQuery, getSearchApi } = useLanguageSearch();
		const { onSourceLanguageUpdate } = useLanguagesUpdate();

		const editableResult = ref( props.pageResult );

		const goToConfirm = () => navigateToPage( 'confirm', { pageResult: editableResult.value } );

		const loading = ref( true );

		const { fetchDenseArticles } = useApi();
		const { doTranslateSectionTitle } = useSectionTitleTranslate();
		const { sourceLanguage, targetLanguage } = useState();
		const sourceArticleInfos = ref( [] );

		const availableSourceLanguages = computed(
			() => sourceArticleInfos.value.map( ( info ) => info.language )
		);

		const defaultSearchApi = getSearchApi();

		const searchResults = ref( [] );
		const onQueryChange = async () => {
			searchResults.value = await searchByQuery(
				availableSourceLanguages.value,
				searchQuery.value,
				defaultSearchApi
			);
		};

		watch( searchQuery, debounce( onQueryChange, 600 ) );

		const activeSourceArticleInfos = computed( () => {
			if ( !searchQuery.value ) {
				return sourceArticleInfos.value;
			}

			return sourceArticleInfos.value.filter(
				( articleInfo ) => searchResults.value.includes( articleInfo.language )
			);
		} );

		const sectionsLoaded = ref( {} );
		const sectionTranslations = ref( {} );

		const initialPromises = [ fetchDenseArticles( props.pageResult.qid ), fetchToken() ];

		Promise.all( initialPromises ).then( ( [ sizeInfo ] ) => {
			sourceArticleInfos.value = sizeInfo.filter(
				( sourceArticleInfo ) => sourceArticleInfo.sectionTitles.length > 0 ||
              sourceArticleInfo.language === sourceLanguage.value
			);
			loading.value = false;

			for ( const sourceArticleInfo of sourceArticleInfos.value ) {
				const currentLanguage = sourceArticleInfo.language;
				sectionsLoaded.value[ currentLanguage ] = {};
				sectionTranslations.value[ currentLanguage ] = {};

				for ( const sectionTitle of sourceArticleInfo.sectionTitles ) {
					if ( currentLanguage === targetLanguage.value ) {
						sectionsLoaded.value[ currentLanguage ][ sectionTitle ] = true;
						sectionTranslations.value[ currentLanguage ][ sectionTitle ] = sectionTitle;
					} else {
						sectionsLoaded.value[ currentLanguage ][ sectionTitle ] = false;
						sectionTranslations.value[ currentLanguage ][ sectionTitle ] = null;
					}
				}
			}
		} );

		const isSelected = ( language ) => sourceLanguage.value === language;

		const areSectionsLoaded = ( language ) => Object.values(
			sectionsLoaded.value[ language ]
		).every( ( isLoaded ) => !!isLoaded );

		const getTranslatedSections = ( language ) => {
			const translatedSectionTitles = [];

			for ( const sourceTitle in sectionTranslations.value[ language ] ) {
				if ( sectionsLoaded.value[ language ][ sourceTitle ] ) {
					const translation = sectionTranslations.value[ language ][ sourceTitle ];
					translatedSectionTitles.push( translation );
				}
			}

			return translatedSectionTitles;
		};

		const selectLanguage = ( language ) => {
			onSourceLanguageUpdate( 'article_confirmation_view', language );
			editableResult.value.setSourceLanguage( language );
		};

		const languageToCardElementMap = ref( {} );
		const createCardElementRef = ( el, language ) => {
			if ( !el ) {
				delete languageToCardElementMap.value[ language ];
			} else {
				languageToCardElementMap.value[ language ] = el;
			}
		};

		watch( languageToCardElementMap, () => {
			for ( const language in languageToCardElementMap.value ) {
				const hasTranslation = Object.values( sectionsLoaded.value[ language ] ).some(
					( isLoaded ) => isLoaded
				);
				if ( !hasTranslation ) {
					const cardElement = languageToCardElementMap.value[ language ];

					// Here we use the IntersectionObserver API, to detect when a language card DOM
					// element becomes visible in the viewport, and once the element enters the
					// viewport, we fetch the translations of the article section titles from the
					// card language to the target language
					const observer = new window.IntersectionObserver(
						( entries ) => {
							const entry = entries[ 0 ];

							if ( entry.isIntersecting ) {
								const sourceArticleInfo = sourceArticleInfos.value.find(
									( info ) => info.language === language
								);

								for ( const sectionTitle of sourceArticleInfo.sectionTitles ) {
									sectionTranslations.value[ language ][ sectionTitle ] = null;

									doTranslateSectionTitle( sectionTitle, language )
										.then( ( translation ) => {
											sectionTranslations.value[ language ][ sectionTitle ] =
												translation;
											sectionsLoaded.value[ language ][ sectionTitle ] = true;
											observer.unobserve( cardElement );
										} );
								}
							}
						},
						{ threshold: 0 }
					);

					observer.observe( cardElement );
				}
			}
		}, { deep: true } );

		return {
			areSectionsLoaded,
			cdxIconArrowPrevious,
			cdxIconRobot,
			cdxIconEllipsis,
			getTranslatedSections,
			goToConfirm,
			searchQuery,
			isSelected,
			loading,
			activeSourceArticleInfos,
			getAutonym,
			sourceLanguage,
			selectLanguage,
			createCardElementRef
		};
	}
} );
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.explore-languages {
  display: flex;
  flex-direction: column;

  &-header {
    position: sticky;
    top: @spacing-0;
    background-color: @background-color-base;
    z-index: @z-index-top;
    margin: 0 -@spacing-100;
    padding: @spacing-100 @spacing-100 @spacing-100;
    box-shadow: @box-shadow-drop-medium;

    .explore-languages-title {
      font-weight: @font-weight-bold;
      display: flex;
      align-items: center;
      margin-bottom: @spacing-150;
    }

    .cdx-icon {
      margin-inline-end: @spacing-50;
    }
  }

  @keyframes loading-indicator-background-animation {
    0% {
      background-color: @background-color-interactive-subtle;
    }
    100% {
      background-color: @background-color-disabled-subtle;
    }
  }

  &-body {
    margin: 0 -@spacing-100 -@spacing-100;
    padding: @spacing-125 @spacing-100;
    background-color: @background-color-neutral;
    height: 100%;

    &__explanation-banner {
      border-color: @border-color-subtle;
      margin-bottom: @spacing-50;
    }

    &__language-card-container {
      margin-top: @spacing-100;
    }

    &__language-card {
      padding: @spacing-100;
      margin-bottom: @spacing-100;
      background-color: @background-color-base;
      box-shadow: @box-shadow-drop-small;

      &--selected {
        background-color: @background-color-progressive-subtle;
      }

      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
          padding-top: @spacing-0;
          padding-bottom: @spacing-25;
        }
      }

      &__subheader {
        margin-bottom: @spacing-75;
      }

      &__sections-count {
        font-size: @font-size-small;
        color: @color-subtle;
        margin-inline-end: @spacing-25;
      }

      &__sections {
        p {
          margin-top: @spacing-0;
          padding-bottom: @spacing-0;
          color: @color-base;
        }
      }
    }

    &__loading-indicator {
      padding: @spacing-25 @spacing-50;
      margin-block: @spacing-50;
      animation: loading-indicator-background-animation 1s linear infinite alternate;
      .cdx-icon {
        color: @color-subtle;
        &:first-of-type {
          margin-right: @spacing-50;
        }
      }
    }
  }
}
</style>
