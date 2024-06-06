<template>
	<div class="translation-viewer">
		<div class="translation-viewer__header">
			<span>
				{{ $i18n( 'mint-view-translation-page-header' ).text() }}
			</span>
			<cdx-button weight="quiet" @click="goToHomePage">
				<cdx-icon :icon="cdxIconClose"></cdx-icon>
			</cdx-button>
		</div>
		<div class="translation-viewer__machine-translation-indicator">
			<cdx-icon :icon="cdxIconRobot"></cdx-icon>
			<div class="translation-viewer__machine-translation-indicator__languages">
				<span>{{ sourceLanguageAutonym }}</span>
				<cdx-icon :icon="cdxIconArrowNext"></cdx-icon>
				<span>{{ targetLanguageAutonym }}</span>
			</div>
		</div>
		<div class="translation-viewer__source-page-title-container">
			<h1 class="firstHeading">
				{{ sourceTitle }}
			</h1>
			<a
				class="translation-viewer__source-page-link"
				:href="sourcePageUrl"
				target="_blank">
				<span>
					{{
						$i18n(
							'mint-view-translation-page-source-article-link-label',
							sourceLanguageAutonym
						).text()
					}}
				</span>
				<cdx-icon :icon="cdxIconLinkExternal" size="x-small"></cdx-icon>
			</a>
		</div>
		<div class="translation-viewer__content-translation-entrypoint">
			<cdx-card :icon="cdxIconEdit">
				<template #title>
					{{
						$i18n( 'mint-view-translation-content-translation-entrypoint-title' ).text()
					}}
				</template>
				<template #description>
					{{
						$i18n(
							'mint-view-translation-content-translation-entrypoint-description'
						).text()
					}}
				</template>
			</cdx-card>
		</div>
		<mw-spinner v-if="loadingLeadSectionTranslation"></mw-spinner>
		<div
			v-else
			class="translation-viewer__contents"
			v-html="leadSectionContents"
		>
		</div>
		<div
			v-if="!loadingLeadSectionTranslation && sections.length"
			class="translation-viewer__sections-container"
		>
			<div v-if="!loadingSectionTitleTranslations">
				<div
					v-for="( sectionTitle, index ) in translatedSectionTitles"
					:key="`section-container-${sectionTitle}`"
				>
					<h2
						:key="`section-title-${index}`"
						class="section-heading collapsible-heading"
						@click="toggleSection( index )"
					>
						<span
							class="mf-icon mf-icon-expand mf-icon--small indicator"
							:class="{ 'mf-icon-rotate-flip': sectionExpandStatus[index] }"
						></span>
						<span class="mw-headline">{{ sectionTitle }}</span>
					</h2>
					<div v-if="sectionExpandStatus[index]" class="translation-viewer__section-contents">
						<mw-spinner v-if="!sectionTranslations[index]"></mw-spinner>
						<div v-else v-html="sectionTranslations[index]">
						</div>
					</div>
				</div>
			</div>
			<mw-spinner v-else></mw-spinner>
		</div>
		<div class="translation-viewer__footer">
			<cdx-card class="translation-viewer__footer__flat-card" :icon="cdxIconRobot">
				<template #title>
					{{ $i18n( 'mint-view-translation-page-disclaimer-header' ).text() }}
				</template>
				<template #description>
					{{
						$i18n(
							'mint-view-translation-page-disclaimer-body',
							sourceLanguageAutonym
						).text()
					}}
				</template>
				<template #supporting-text>
					<a href="https://www.mediawiki.org/wiki/MinT" target="_blank">
						{{
							$i18n( 'mint-view-translation-page-disclaimer-learn-more-link' ).text()
						}}
					</a>
				</template>
			</cdx-card>
			<div
				v-if="targetPage"
				class="translation-viewer__target-article-container"
			>
				<cdx-card class="translation-viewer__footer__flat-card" :icon="cdxIconUserGroup">
					<template #title>
						{{
							$i18n(
								'mint-view-translation-page-target-article-container-header'
							).text()
						}}
					</template>
					<template #description>
						{{
							$i18n(
								'mint-view-translation-page-target-article-container-details',
								targetLanguageAutonym
							).text()
						}}
					</template>
				</cdx-card>
				<cdx-card
					class="translation-viewer__footer__target-article-card"
					target="_blank"
					:url="targetPageUrl"
					force-thumbnail
					:thumbnail="targetPage.thumbnailData"
				>
					<template #title>
						{{ targetTitle }}
					</template>
					<template #description>
						{{ targetPage.description }}
					</template>
					<template #supporting-text>
						<cdx-icon :icon="cdxIconArticle" size="small"></cdx-icon>
						<span>
							{{
								$i18n(
									'mint-confirm-topic-page-target-article-card-read-article-label'
								).text()
							}}
						</span>
					</template>
				</cdx-card>
			</div>
		</div>
	</div>
</template>

<script>
const useState = require( './useState.js' );
const useRouter = require( './useRouter.js' );
const usePageMetadata = require( './usePageMetadata.js' );
const useUrlHelper = require( './useUrlHelper.js' );
const useSectionTranslate = require( './useSectionTranslate.js' );
const useTranslationInitialize = require( './useTranslationInitialize.js' );
const useSectionTitleTranslate = require( './useSectionTitleTranslate.js' );
const PageResult = require( './pageSearchResult.js' );
const MwSpinner = require( './MwSpinner.vue' );
const {
	cdxIconClose,
	cdxIconRobot,
	cdxIconArrowNext,
	cdxIconUserGroup,
	cdxIconLinkExternal,
	cdxIconArticle,
	cdxIconEdit
} = require( './icons.json' );
const getAutonym = $.uls.data.getAutonym;

const { defineComponent, ref, computed, watchEffect } = require( 'vue' );
const { CdxIcon, CdxButton, CdxCard } = require( '@wikimedia/codex' );

module.exports = defineComponent( {
	name: 'ViewTranslation',
	components: { CdxIcon, CdxButton, CdxCard, MwSpinner },
	props: {
		pageResult: {
			type: PageResult,
			required: true
		}
	},
	setup( props ) {
		const { sourceLanguage, targetLanguage } = useState();

		const { setURLParams } = useUrlHelper();
		setURLParams( props.pageResult, targetLanguage.value, 'translation' );

		const title = props.pageResult.sourceTitle;

		const {
			doc,
			leadSectionContents,
			loadingLeadSectionTranslation,
			initializeTranslation
		} = useTranslationInitialize();

		initializeTranslation( title );

		const sections = computed( () => {
			if ( !doc.value ) {
				return [];
			}

			const sectionsNodeList = doc.value.querySelectorAll( 'section[data-mw-section-id]:has(> h2:first-child)' );
			const sectionElements = Array.from( sectionsNodeList );

			const headerElements = sectionElements.map( ( sectionElement ) => sectionElement.querySelector( 'h2' ) );
			const sectionTitles = headerElements.map( ( header ) => header.textContent );

			return sectionElements.map( ( sectionElement, index ) => ( {
				node: sectionElement,
				title: sectionTitles[ index ]
			} ) );
		} );

		const loadingSectionTitleTranslations = ref( false );
		const { translateSectionTitle, translatedSectionTitles } = useSectionTitleTranslate();

		watchEffect( () => {
			const sectionTitleTranslationPromises = sections.value.map( translateSectionTitle );
			loadingSectionTitleTranslations.value = true;
			Promise.all( sectionTitleTranslationPromises ).then(
				() => ( loadingSectionTitleTranslations.value = false )
			);
		} );

		const { goToHomePage } = useRouter();

		const sourceLanguageAutonym = computed( () => getAutonym( sourceLanguage.value ) );
		const targetLanguageAutonym = computed( () => getAutonym( targetLanguage.value ) );

		const sectionExpandStatus = ref( [] );
		const { translateSection, sectionTranslations } = useSectionTranslate();

		const toggleSection = ( index ) => {
			sectionExpandStatus.value[ index ] = !sectionExpandStatus.value[ index ];
			if ( sectionExpandStatus.value[ index ] ) {
				translateSection( sections, index );
			}
		};
		const resetSectionExpandStatus = ( sectionValues ) => {
			sectionExpandStatus.value = sectionValues.map( () => false );
		};

		watchEffect( () => resetSectionExpandStatus( sections.value ) );

		const sourceTitle = computed(
			() => props.pageResult.getTitleByLanguage( sourceLanguage.value )
		);

		const siteMapper = new mw.cx.SiteMapper();
		const sourcePageUrl = computed(
			() => siteMapper.getPageUrl( sourceLanguage.value, sourceTitle.value )
		);

		const { findOneOrFetchPage } = usePageMetadata();
		const targetPage = ref( null );
		const targetTitle = computed(
			() => props.pageResult.getTitleByLanguage( targetLanguage.value )
		);

		if ( targetTitle.value ) {
			findOneOrFetchPage( targetLanguage.value, targetTitle.value ).then( ( page ) => {
				targetPage.value = page;
			} );
		}

		const targetPageUrl = computed( () => {
			if ( !targetPage.value ) {
				return null;
			}

			return siteMapper.getPageUrl( targetLanguage.value, targetPage.value.title );
		} );

		return {
			leadSectionContents,
			cdxIconArrowNext,
			cdxIconClose,
			cdxIconRobot,
			cdxIconUserGroup,
			cdxIconLinkExternal,
			cdxIconArticle,
			cdxIconEdit,
			goToHomePage,
			sourceLanguageAutonym,
			targetLanguageAutonym,
			loadingLeadSectionTranslation,
			sections,
			targetTitle,
			toggleSection,
			sectionExpandStatus,
			sectionTranslations,
			sourceTitle,
			sourcePageUrl,
			targetPageUrl,
			targetPage,
			translatedSectionTitles,
			loadingSectionTitleTranslations
		};
	}
} );
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.translation-viewer {
  &__header {
    background-color: @background-color-interactive;
    padding: @spacing-50 @spacing-100;
    font-weight: @font-weight-bold;
    display: flex;
    justify-content: space-between;
  }

  &__machine-translation-indicator {
    display: flex;
    margin: @spacing-100 @spacing-0;
    padding: @spacing-50 @spacing-75;
    background-color: @background-color-interactive-subtle;
    box-shadow: @box-shadow-drop-medium;
    position: sticky;
    top: @spacing-100;
    z-index: 1;

    .cdx-icon {
      margin-inline-end: @spacing-150;
    }

    &__languages {
      flex-grow: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  &__source-page-title-container h1.firstHeading,
  &__sections-container h2.section-heading {
    font-family: @font-family-serif !important;
  }

  &__source-page-title-container {
    margin-bottom: @spacing-100;
    h1 {
      margin-bottom: @spacing-100;
    }

    a.translation-viewer__source-page-link {
      .cdx-icon {
        color: @color-progressive;
        vertical-align: middle;
      }
    }
  }

  &__source-page-link {
    font-size: @font-size-small;
  }

  &__content-translation-entrypoint {
    margin-bottom: @spacing-100;
    .cdx-card {
      background-color: @background-color-interactive-subtle;
      .cdx-icon, .cdx-card__text .cdx-card__text__title {
        color: @color-progressive;
      }
    }
  }

  &__footer {
    background-color: @background-color-interactive;
    margin: 0 -@spacing-100;
    padding-bottom: @spacing-100;
    &__flat-card {
      background-color: inherit;
      border: none;
      border-top: @border-base;
    }
    &__target-article-card {
      margin-inline: @spacing-100;
    }
  }
}
</style>
