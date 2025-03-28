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
			<h1 v-if="targetTitle !== null" class="firstHeading">
				{{ targetTitle }}
			</h1>
			<translation-loading-indicator v-else></translation-loading-indicator>
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
	</div>
	<div class="translation-viewer__contents mw-parser-output">
		<translation-loading-indicator v-if="!leadSection">
		</translation-loading-indicator>
		<section-content-translation
			v-else
			:section="leadSection"
		></section-content-translation>
		<div
			v-if="textLeadSubSectionsTranslated"
			id="ax-translation-viewer-section-container"
			class="translation-viewer__sections-container"
		>
			<div v-if="!loadingSectionTitleTranslations">
				<div
					v-for="( section, index ) in nonLeadSections"
					:key="`section-container-${section.title}`"
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
						<span v-if="!!section.titleTranslation" class="mw-headline">
							{{ section.titleTranslation }}
						</span>
						<mw-spinner v-else></mw-spinner>
					</h2>
					<section-content-translation
						v-if="sectionExpandStatus[index]"
						:section="section"
					></section-content-translation>
				</div>
			</div>
			<translation-loading-indicator v-else></translation-loading-indicator>
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
const useEventLogging = require( './useEventLogging.js' );
const useTargetTitle = require( './useTargetTitle.js' );
const PageResult = require( './pageSearchResult.js' );
const MwSpinner = require( './MwSpinner.vue' );
const ViewTranslationPageOptions = require( './ViewTranslationPageOptions.vue' );
const CxIntroductionDialog = require( './CxIntroductionDialog.vue' );
const { axSurveyFeedbackName } = require( './constants.js' );
const TranslationLoadingIndicator = require( './TranslationLoadingIndicator.vue' );
const SectionContentTranslation = require( './SectionContentTranslation.vue' );
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

const { defineComponent, ref, computed, watchEffect, watch } = require( 'vue' );
const { CdxIcon, CdxButton, CdxCard } = require( '@wikimedia/codex' );

module.exports = defineComponent( {
	name: 'ViewTranslation',
	components: {
		CdxIcon,
		CdxButton,
		CdxCard,
		MwSpinner,
		ViewTranslationPageOptions,
		CxIntroductionDialog,
		TranslationLoadingIndicator,
		SectionContentTranslation
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
		const { setURLParams } = useUrlHelper();
		setURLParams( props.pageResult, targetLanguage.value, 'translation' );

		const {
			nonLeadSections,
			leadSection,
			initializeTranslation
		} = useTranslationInitialize();

		const { targetTitle, initializeTargetTitle } = useTargetTitle();
		initializeTargetTitle( props.pageResult );

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

		const isAnyLeadSubsectionGroupTranslated = computed( () => !!leadSection.value &&
			leadSection.value.subSectionGroups.some(
				( group, index ) => leadSection.value.isSubSectionGroupTranslationDone( index )
			)
		);

		const textLeadSubSectionsTranslated = computed( () => {
			if ( !leadSection.value ) {
				return false;
			}

			const textGroupIndexes = [];
			for ( const index in leadSection.value.subSectionGroups ) {
				if ( !leadSection.value.hasSubSectionGroupInfobox( index ) ) {
					textGroupIndexes.push( index );
				}
			}

			return textGroupIndexes.every(
				( index ) => leadSection.value.isSubSectionGroupTranslationDone( index )
			);
		} );

		const logViewEvent = () => {
			const unwatchLeadSectionTranslation = watch( isAnyLeadSubsectionGroupTranslated, () => {
				if ( isAnyLeadSubsectionGroupTranslated.value ) {
					const translationData = {
						// eslint-disable-next-line camelcase
						source_language: sourceLanguage.value,
						// eslint-disable-next-line camelcase
						target_language: targetLanguage.value,
						// eslint-disable-next-line camelcase
						source_title: props.pageResult.sourceTitle
					};
					logEvent( 'view', null, 'automatic_translation', null, translationData );
					unwatchLeadSectionTranslation();
					// Start tracking session length.
					document.addEventListener( 'visibilitychange', onVisibilityChange );
				}
			}, { deep: true } );
		};

		watch( [ sourceLanguage, targetLanguage ], () => {
			initializeTranslation( props.pageResult.sourceTitle );
			initializeTargetTitle( props.pageResult );
			logViewEvent();
		}, { immediate: true } );

		const loadingSectionTitleTranslations = ref( false );
		const {
			translateSectionTitle,
			resetTranslatedSectionTitles
		} = useSectionTitleTranslate();

		const sourceLanguageAutonym = computed( () => getAutonym( sourceLanguage.value ) );
		const targetLanguageAutonym = computed( () => getAutonym( targetLanguage.value ) );

		const sectionExpandStatus = ref( [] );
		const { translateSection } = useSectionTranslate();

		const toggleSection = ( index, skipLogging = false ) => {
			sectionExpandStatus.value[ index ] = !sectionExpandStatus.value[ index ];
			const sectionTitle = nonLeadSections.value[ index ].title;
			const translationContext = {
				// eslint-disable-next-line camelcase
				source_type: 'section',
				// eslint-disable-next-line camelcase
				source_title: sectionTitle
			};

			let actionSubtype = 'section_collapse';
			if ( sectionExpandStatus.value[ index ] ) {
				translateSection( nonLeadSections.value[ index ] );
				actionSubtype = 'section_expand';
			}

			if ( skipLogging ) {
				return;
			}

			logEvent( 'click', actionSubtype, null, null, translationContext );
		};

		const resetSectionExpandStatus = ( sectionValues ) => {
			sectionExpandStatus.value = sectionValues.map( () => false );
		};

		watchEffect( () => resetSectionExpandStatus( nonLeadSections.value ) );

		const siteMapper = new mw.cx.SiteMapper();
		const sourcePageUrl = computed(
			() => siteMapper.getPageUrl( sourceLanguage.value, props.pageResult.sourceTitle )
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
				source_title: props.pageResult.sourceTitle
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
				source_title: props.pageResult.sourceTitle
			};
			logEvent( 'click', actionSubtype, 'review_translation_dialog', 'translation_view', translationData );
		};

		let isQuickSurveyLoaded = false;
		watch( textLeadSubSectionsTranslated, () => {

			if ( textLeadSubSectionsTranslated.value === true ) {
				// section title translation should start after all the non-infobox subsections
				// of the lead section have been translated
				resetTranslatedSectionTitles( nonLeadSections );
				const sectionTitleTranslationPromises = nonLeadSections.value.map(
					translateSectionTitle
				);
				loadingSectionTitleTranslations.value = true;
				Promise.all( sectionTitleTranslationPromises ).then(
					() => {
						loadingSectionTitleTranslations.value = false;

						// Load all the references so that they can be clicked on
						nonLeadSections.value.forEach( ( section, index ) => {
							if ( section.isReference ) {
								toggleSection( index, true );
							}
						} );
					}
				);

				if ( !isQuickSurveyLoaded ) {
					mw.loader.using( 'ext.quicksurveys.init' )
						.then( () => {
							if ( mw.extQuickSurveys ) {
								// This approach of loading QuickSurveys is soft deprecated and
								// maybe removed. See: https://phabricator.wikimedia.org/T387846#10604715
								// for why we went with it anyway.
								mw.extQuickSurveys.showSurvey( axSurveyFeedbackName );
								isQuickSurveyLoaded = true;
							}
						} );

				}
			} else if ( isQuickSurveyLoaded ) {
				// Remove the QuickSurvey while the lead section is loading
				isQuickSurveyLoaded = false;
				const quickSurveyElement = document.querySelector( '.ext-quick-survey-panel' );
				if ( quickSurveyElement ) {
					quickSurveyElement.parentElement.remove();
				}
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
					source_title: props.pageResult.sourceTitle,
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
				source_title: props.pageResult.sourceTitle,
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
			closeViewTranslationPage,
			sourceLanguageAutonym,
			targetLanguageAutonym,
			leadSection,
			nonLeadSections,
			targetTitle,
			toggleSection,
			sectionExpandStatus,
			sourcePageUrl,
			targetPageUrl,
			targetPage,
			cxUrl,
			loadingSectionTitleTranslations,
			openTranslationOptions,
			optionsDialogOn,
			onTargetArticleClick,
			fixTranslationDialogOn,
			onFixTranslation,
			logCxTranslationDialogEvent,
			onTranslationShare,
			textLeadSubSectionsTranslated
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

  &__contents {
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

    /* Highlight clicked reference in blue to help navigation */
    /* The Cite extension CSS does not load on this special page */
    ol.references li:target,
    sup.reference:target {
      background-color: @background-color-progressive-subtle;
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
