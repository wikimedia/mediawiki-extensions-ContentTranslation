<template>
	<div class="translation-viewer">
		<div class="translation-viewer__header">
			<span>
				{{ $i18n( 'mint-view-translation-page-header' ).text() }}
			</span>
			<cdx-button weight="quiet" @click="closeViewTranslationPage">
				<cdx-icon :icon="cdxIconClose"></cdx-icon>
			</cdx-button>
		</div>
		<div
			class="translation-viewer__machine-translation-indicator"
			@click="openTranslationOptions"
		>
			<cdx-icon :icon="cdxIconRobot"></cdx-icon>
			<div class="translation-viewer__machine-translation-indicator__languages">
				<span>{{ sourceLanguageAutonym }}</span>
				<cdx-icon :icon="cdxIconArrowNext"></cdx-icon>
				<span>{{ targetLanguageAutonym }}</span>
			</div>
		</div>
		<div class="translation-viewer__source-page-title-container">
			<h1 class="firstHeading">
				{{ targetTitle }}
			</h1>
			<a
				class="translation-viewer__source-page-link"
				:href="sourcePageUrl"
				target="_blank"
			>
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
			<cdx-card :icon="cdxIconEdit" @click="onFixTranslation( 'review_translation_card' )">
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
		<!-- eslint-disable vue/no-v-html -->
		<div
			class="translation-viewer__contents mw-parser-output"
			v-html="structuredLeadSectionTranslation"
		>
		</div>
		<!-- eslint-enable -->
		<div v-if="loadingLeadSectionTranslation" class="translation-viewer__loading-indicator">
			<cdx-icon :icon="cdxIconRobot"></cdx-icon>
			<cdx-icon :icon="cdxIconEllipsis"></cdx-icon>
		</div>
		<div
			v-if="!loadingLeadSectionTranslation && sections.length"
			id="ax-translation-viewer-section-container"
			class="translation-viewer__sections-container mw-parser-output"
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
					<div
						v-if="sectionExpandStatus[index]"
						class="translation-viewer__section-contents"
					>
						<!-- eslint-disable vue/no-v-html -->
						<mw-spinner v-if="!sectionTranslations[index]"></mw-spinner>
						<div v-else v-html="sectionTranslations[index]">
						</div>
						<!-- eslint-enable -->
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
					@click="onTargetArticleClick"
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
		<view-translation-page-options
			v-model="optionsDialogOn"
			:page-result="pageResult"
			:source-page-url="sourcePageUrl"
			:target-page-url="targetPageUrl"
			@fix-translation="onFixTranslation( 'automatic_translation_menu' )"
			@share-translation="onTranslationShare"
		></view-translation-page-options>
		<cx-introduction-dialog
			v-model="fixTranslationDialogOn"
			:cx-url="cxUrl"
			@accept="logCxTranslationDialogEvent( 'accept_review_translation' )"
			@reject="logCxTranslationDialogEvent( 'reject_review_translation' )"
		></cx-introduction-dialog>
	</div>
</template>

<script>
const { wpProvParam } = require( './constants.js' );
const useState = require( './useState.js' );
const useRouter = require( './useRouter.js' );
const usePageMetadata = require( './usePageMetadata.js' );
const useUrlHelper = require( './useUrlHelper.js' );
const useSectionTranslate = require( './useSectionTranslate.js' );
const useTranslationInitialize = require( './useTranslationInitialize.js' );
const useSectionTitleTranslate = require( './useSectionTitleTranslate.js' );
const useSkeletonLoader = require( './useSkeletonLoader.js' );
const useEventLogging = require( './useEventLogging.js' );
const PageResult = require( './pageSearchResult.js' );
const MwSpinner = require( './MwSpinner.vue' );
const ViewTranslationPageOptions = require( './ViewTranslationPageOptions.vue' );
const CxIntroductionDialog = require( './CxIntroductionDialog.vue' );
const { axSurveyFeedbackName } = require( './constants.js' );
const {
	cdxIconClose,
	cdxIconRobot,
	cdxIconArrowNext,
	cdxIconUserGroup,
	cdxIconLinkExternal,
	cdxIconArticle,
	cdxIconEdit,
	cdxIconEllipsis
} = require( './icons.json' );
const getAutonym = $.uls.data.getAutonym;

const { defineComponent, ref, computed, watchEffect, watch } = require( 'vue' );
const { CdxIcon, CdxButton, CdxCard } = require( '@wikimedia/codex' );

/**
 * Returns true if "parts" has at least "x" number of strings.
 *
 * @param {Array} parts
 * @param {number} x
 * @return {boolean}
 */
function hasAtLeastXStrings( parts, x ) {
	if ( !Array.isArray( parts ) || !parts.length ) {
		return false;
	}

	if ( parts.length < x ) {
		return parts.every( ( item ) => typeof item === 'string' );
	}

	const stringCount = parts.filter( ( item ) => typeof item === 'string' ).length;

	return stringCount >= x;
}

module.exports = defineComponent( {
	name: 'ViewTranslation',
	components: {
		CdxIcon,
		CdxButton,
		CdxCard,
		MwSpinner,
		ViewTranslationPageOptions,
		CxIntroductionDialog
	},
	props: {
		pageResult: {
			type: PageResult,
			required: true
		}
	},
	setup( props ) {
		const { sourceLanguage, targetLanguage } = useState();

		const { logEvent } = useEventLogging();
		const pageTitle = props.pageResult.getTitleByLanguage( sourceLanguage.value );

		const { setURLParams } = useUrlHelper();
		setURLParams( props.pageResult, targetLanguage.value, 'translation' );

		const {
			doc,
			leadSectionTranslation,
			loadingLeadSectionTranslation,
			initializeTranslation
		} = useTranslationInitialize();

		const targetTitle = computed(
			() => props.pageResult.getTitleByLanguage( targetLanguage.value )
		);

		const onVisibilityChange = () => {
			const translationData = {
				// eslint-disable-next-line camelcase
				source_language: sourceLanguage.value,
				// eslint-disable-next-line camelcase
				target_language: targetLanguage.value,
				// eslint-disable-next-line camelcase
				target_title: targetTitle.value
			};

			let actionSubtype = 'visible_state';
			if ( document.hidden ) {
				actionSubtype = 'hidden_state';
			}
			logEvent( 'visibility_change', actionSubtype, 'translation_view', null, translationData );
		};

		const logViewEvent = () => {
			const unwatchLeadSectionTranslation = watch( leadSectionTranslation, () => {
				if ( hasAtLeastXStrings( leadSectionTranslation.value, 3 ) ) {
					const translationData = {
						// eslint-disable-next-line camelcase
						source_language: sourceLanguage.value,
						// eslint-disable-next-line camelcase
						target_language: targetLanguage.value,
						// eslint-disable-next-line camelcase
						source_title: pageTitle
					};
					logEvent( 'view', null, 'automatic_translation', null, translationData );
					unwatchLeadSectionTranslation();
					// Start tracking session length.
					document.addEventListener( 'visibilitychange', onVisibilityChange );
				}
			}, { deep: true } );
		};

		const { createSkeletonLoader } = useSkeletonLoader();
		const { translateSection, hideUnadaptedLinks, sectionTranslations } = useSectionTranslate();
		const structuredLeadSectionTranslation = computed( () => {
			let contents = '';
			for ( let i = 0; i < leadSectionTranslation.value.length; i++ ) {
				let currentNodeTranslation = leadSectionTranslation.value[ i ];

				if ( currentNodeTranslation === null ) {
					break;
				} else if ( currentNodeTranslation === -1 ) {
					currentNodeTranslation = createSkeletonLoader();
				}
				currentNodeTranslation = hideUnadaptedLinks( currentNodeTranslation );

				contents = contents.concat( '\n', currentNodeTranslation );
			}

			return contents;
		} );

		watch( [ sourceLanguage, targetLanguage ], () => {
			const title = props.pageResult.getTitleByLanguage( sourceLanguage.value );
			initializeTranslation( title );
			logViewEvent();
		}, { immediate: true } );

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
		const {
			translateSectionTitle,
			translatedSectionTitles,
			resetTranslatedSectionTitles
		} = useSectionTitleTranslate();

		watch( sections, () => {
			resetTranslatedSectionTitles();
			const sectionTitleTranslationPromises = sections.value.map( translateSectionTitle );
			loadingSectionTitleTranslations.value = true;
			Promise.all( sectionTitleTranslationPromises ).then(
				() => ( loadingSectionTitleTranslations.value = false )
			);
		}, { immediate: true } );

		const sourceLanguageAutonym = computed( () => getAutonym( sourceLanguage.value ) );
		const targetLanguageAutonym = computed( () => getAutonym( targetLanguage.value ) );

		const sectionExpandStatus = ref( [] );

		const toggleSection = ( index ) => {
			sectionExpandStatus.value[ index ] = !sectionExpandStatus.value[ index ];
			const sectionTitle = sections.value[ index ].title;
			const translationContext = {
				// eslint-disable-next-line camelcase
				source_type: 'section',
				// eslint-disable-next-line camelcase
				source_title: sectionTitle
			};
			if ( sectionExpandStatus.value[ index ] ) {
				logEvent( 'click', 'section_expand', null, null, translationContext );
				translateSection( sections, index );
			} else {
				logEvent( 'click', 'section_collapse', null, null, translationContext );
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

		if ( targetTitle.value ) {
			findOneOrFetchPage( targetLanguage.value, targetTitle.value ).then( ( page ) => {
				targetPage.value = page;
			} );
		}

		const targetPageUrl = computed( () => targetPage.value ?
			siteMapper.getPageUrl(
				targetLanguage.value,
				targetPage.value.title,
				{ wprov: wpProvParam }
			) : null
		);

		const cxUrl = computed( () => siteMapper.getCXUrl(
			props.pageResult.sourceTitle,
			null,
			sourceLanguage.value,
			targetLanguage.value,
			{ campaign: 'mintforreaders' }
		) );

		const { goToHomePage } = useRouter();

		const closeViewTranslationPage = () => {
			logEvent( 'click', 'close', 'automatic_translation_header' );
			document.removeEventListener( 'visibilitychange', onVisibilityChange );
			goToHomePage();
		};
		const optionsDialogOn = ref( false );
		const openTranslationOptions = () => {
			optionsDialogOn.value = true;
		};

		const onTargetArticleClick = () => {
			const translationContext = {
				// eslint-disable-next-line camelcase
				source_language: targetLanguage.value,
				// eslint-disable-next-line camelcase
				source_title: targetPage.value.title
			};

			logEvent( 'click', null, 'human_translation_card', 'translation_view', translationContext );
		};

		const fixTranslationDialogOn = ref( false );
		const onFixTranslation = ( eventSource ) => {
			const translationData = {
				// eslint-disable-next-line camelcase
				source_language: sourceLanguage.value,
				// eslint-disable-next-line camelcase
				target_language: targetLanguage.value,
				// eslint-disable-next-line camelcase
				source_title: pageTitle
			};
			logEvent( 'click', 'review_translation', eventSource, 'translation_view', translationData );
			fixTranslationDialogOn.value = true;
		};

		const logCxTranslationDialogEvent = ( actionSubtype ) => {
			const translationData = {
				// eslint-disable-next-line camelcase
				source_language: sourceLanguage.value,
				// eslint-disable-next-line camelcase
				target_language: targetLanguage.value,
				// eslint-disable-next-line camelcase
				source_title: pageTitle
			};
			logEvent( 'click', actionSubtype, 'review_translation_dialog', 'translation_view', translationData );
		};

		watch( loadingLeadSectionTranslation, () => {
			if ( loadingLeadSectionTranslation.value === false ) {
				mw.loader.using( 'ext.quicksurveys.init' )
					.then( () => {
						if ( mw.extQuickSurveys ) {
							// This approach of loading QuickSurveys is soft deprecated and maybe
							// removed. See: https://phabricator.wikimedia.org/T387846#10604715 for
							// why we went with it anyway.
							mw.extQuickSurveys.showSurvey( axSurveyFeedbackName );
						}
					} );
			}
		} );

		mw.trackSubscribe( 'event.QuickSurveysResponses', ( eventName, eventData ) => {
			if (
				eventData.surveyCodeName === axSurveyFeedbackName &&
				// We only want to log after the user has answered the complete survey
				// so log when the last question is answered
				eventData.surveyQuestionLabel === 'ax-translation-view-feedback-details-question'
			) {
				const quickSurveySessionToken = eventData.surveySessionToken;
				const translationData = {
					// eslint-disable-next-line camelcase
					source_language: sourceLanguage.value,
					// eslint-disable-next-line camelcase
					target_language: targetLanguage.value,
					// eslint-disable-next-line camelcase
					source_title: pageTitle,
					// eslint-disable-next-line camelcase
					target_title: targetTitle.value
				};
				logEvent( 'survey_response', null, 'translation_view', quickSurveySessionToken, translationData );
			}
		} );

		const onTranslationShare = () => {
			const translationData = {
				// eslint-disable-next-line camelcase
				source_language: sourceLanguage.value,
				// eslint-disable-next-line camelcase
				target_language: targetLanguage.value,
				// eslint-disable-next-line camelcase
				source_title: pageTitle,
				// eslint-disable-next-line camelcase
				target_title: targetTitle.value
			};
			logEvent( 'click', 'share_automatic_translation_external', 'automatic_translation_menu', 'translation_view', translationData );
		};

		return {
			cdxIconArrowNext,
			cdxIconClose,
			cdxIconRobot,
			cdxIconUserGroup,
			cdxIconLinkExternal,
			cdxIconArticle,
			cdxIconEdit,
			cdxIconEllipsis,
			closeViewTranslationPage,
			sourceLanguageAutonym,
			targetLanguageAutonym,
			loadingLeadSectionTranslation,
			sections,
			targetTitle,
			toggleSection,
			sectionExpandStatus,
			sectionTranslations,
			structuredLeadSectionTranslation,
			sourcePageUrl,
			targetPageUrl,
			targetPage,
			cxUrl,
			translatedSectionTitles,
			loadingSectionTitleTranslations,
			openTranslationOptions,
			optionsDialogOn,
			onTargetArticleClick,
			fixTranslationDialogOn,
			onFixTranslation,
			logCxTranslationDialogEvent,
			onTranslationShare
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
      border-color: @border-color-muted;
      .cdx-icon, .cdx-card__text .cdx-card__text__title {
        color: @color-progressive;
      }
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

  /** Feedback survey **/
  .ext-quick-survey-panel {
    margin: @spacing-100 0;
    width: auto;
    clear: unset;
    float: unset;

    /** Hide the "Back" button in the survey */
    .survey-action-buttons .cdx-button--action-default {
      display: none;
    }
  }
}

@keyframes skeleton-loading {
  0% {
    background-color: @background-color-interactive-subtle;
  }
  100% {
    background-color: @background-color-disabled;
  }
}

.infobox-skeleton-loader {
  margin-block: @spacing-100;

  .skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
  }

  &__image-placeholder {
    height: 8rem;
    width: @spacing-full;
    border-radius: @spacing-25;
    margin-bottom: @spacing-50;
  }

  &__text {
    width: @spacing-full;
    height: @spacing-75;
    margin-bottom: @spacing-50;
    border-radius: @spacing-25;
  }

  &__fat-text {
    width: @spacing-full;
    height: @spacing-125;
    margin-top: @spacing-125;
    border-radius: @spacing-25;
  }
}
</style>
