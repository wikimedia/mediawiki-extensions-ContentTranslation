<template>
	<div>
		<div class="confirm-topic-header">
			<cdx-icon :icon="cdxIconRobot"></cdx-icon>
			<span v-i18n-html:mint-confirm-topic-page-header></span>
		</div>
		<div
			ref="confirmTopicReviewRef"
			class="confirm-topic-preview"
			tabindex="0"
			@click.stop="goToTranslation"
		>
			<div
				class="confirm-topic-preview__thumbnail-container"
				:class="{
					'confirm-topic-preview__thumbnail-container--no-thumbnail':
						!pageResult.thumbnail
				}"
			>
				<div
					v-if="pageResult.thumbnail"
					class="mw-ui-thumbnail"
					:style="thumbnailStyle"></div>
				<div
					v-else
					class="mw-ui-thumbnail"
					:style="thumbnailStyle">
					<!--lg size is not supported for codex icons,-->
					<!--but we still use it here, to reset default "medium" size styles-->
					<cdx-icon
						class="thumbnail-placeholder"
						size="lg"
						:icon="cdxIconArticle"></cdx-icon>
				</div>
			</div>
			<div class="confirm-topic-preview__translation-container">
				<h3 class="confirm-topic-preview__translation-container__source-title">
					{{ pageResult.sourceTitle }}
				</h3>
				<h3
					v-if="targetTitle"
					class="confirm-topic-preview__translation-container__target-title"
				>
					{{ targetTitle }}
				</h3>
				<p
					v-if="translation && !loadingTranslation"
					class="confirm-topic-preview__translation-container__translation"
					v-html="translation"
				></p>
				<mw-spinner v-else-if="loadingTranslation"></mw-spinner>
				<p class="confirm-topic-preview__translation-container__details">
					<cdx-icon :icon="cdxIconSpecialPages"></cdx-icon>
					<span
						v-i18n-html:mint-confirm-topic-page-automatic-translation-indicator-text
					></span>
				</p>
			</div>
		</div>
		<p
			v-if="pageResult.langLinksCount > 1"
			ref="languageSelectorExplanationRef"
			v-i18n-html:mint-confirm-topic-page-language-selector-explanation="[
				sourcePageUrl,
				sourceLanguageAutonym,
				pageResult.langLinksCount
			]"
		></p>
		<div v-if="pageResult.langLinksCount > 1" class="confirm-topic-language-selector">
			<cdx-button @click="openSourceLanguageSelector">
				{{ sourceLanguageAutonym }}
			</cdx-button>
			<cdx-icon :icon="cdxIconArrowNext"></cdx-icon>
			<cdx-button @click="openTargetLanguageSelector">
				{{ targetLanguageAutonym }}
			</cdx-button>
		</div>
		<div class="confirm-topic-go-back-link-container">
			<cdx-button weight="quiet" @click="goToSearch">
				<cdx-icon :icon="cdxIconSearch"></cdx-icon>
				{{ $i18n( 'mint-confirm-topic-page-go-to-search-button-label' ).text() }}
			</cdx-button>
		</div>
		<div v-if="targetPage" class="confirm-topic-original-target-article-container">
			<div class="confirm-topic-original-target-article-container__header">
				<cdx-icon :icon="cdxIconUserGroup"></cdx-icon>
				<span>
					{{
						$i18n(
							'mint-confirm-topic-page-target-article-link-container-header',
							targetLanguageAutonym
						).text()
					}}
				</span>
			</div>
			<cdx-card
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
						{{ $i18n( 'mint-confirm-topic-page-target-article-card-read-article-label' ).text() }}
					</span>
				</template>
			</cdx-card>
			<div class="confirm-topic-original-target-article-container__details">
				{{
					$i18n(
						'mint-confirm-topic-page-target-article-link-container-details',
						targetLanguageAutonym
					).text()
				}}
			</div>
		</div>
	</div>
</template>

<script>
const { computed, defineComponent, ref, onMounted, watchEffect, watch } = require( 'vue' );
const { CdxIcon, CdxButton, CdxCard } = require( '@wikimedia/codex' );
const {
	cdxIconRobot,
	cdxIconArticle,
	cdxIconSpecialPages,
	cdxIconArrowNext,
	cdxIconSearch,
	cdxIconUserGroup
} = require( './icons.json' );
const MwSpinner = require( './MwSpinner.vue' );
const PageSearchResult = require( './pageSearchResult.js' );
const useState = require( './useState.js' );
const useRouter = require( './useRouter.js' );
const useLeadSectionTranslationFetch = require( './useLeadSectionTranslationFetch.js' );
const useMintLanguages = require( './useMintLanguages.js' );
const usePageMetadata = require( './usePageMetadata.js' );
const useUrlHelper = require( './useUrlHelper.js' );
const useEventLogging = require( './useEventLogging.js' );
const getAutonym = $.uls.data.getAutonym;

// @vue/component
module.exports = defineComponent( {
	name: 'ConfirmTopic',
	components: { CdxIcon, CdxButton, MwSpinner, CdxCard },
	props: {
		pageResult: {
			type: PageSearchResult,
			required: true
		}
	},
	setup( props ) {
		const { sourceLanguage, targetLanguage, setSourceLanguage, setTargetLanguage } = useState();
		setSourceLanguage( props.pageResult.sourceLanguage );

		const { setURLParams } = useUrlHelper();
		setURLParams( props.pageResult, targetLanguage.value, 'confirm' );

		const languageSelectorExplanationRef = ref( null );
		const confirmTopicReviewRef = ref( null );
		onMounted( () => {
			confirmTopicReviewRef.value.focus();
		} );

		watch( languageSelectorExplanationRef, () => {
			if ( languageSelectorExplanationRef.value ) {
				const sourceArticleLink = languageSelectorExplanationRef.value.querySelector( 'a' );
				sourceArticleLink.setAttribute( 'target', '_blank' );
				sourceArticleLink.classList.remove( 'external' );
			}
		}, { immediate: true } );

		const thumbnailStyle = computed( () => {
			const style = {
				height: '192px'
			};

			const thumbnailSource = props.pageResult.thumbnail && props.pageResult.thumbnail.source;
			if ( thumbnailSource ) {
				style[ 'background-image' ] = `url(${ thumbnailSource })`;
				style[ 'background-size' ] = 'cover';
				style[ 'background-position' ] = 'center';
			}

			return style;
		} );

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

		const translation = ref( null );
		const loadingTranslation = ref( true );
		const { translateLeadSection } = useLeadSectionTranslationFetch();

		const doTranslateLeadSection = async ( pageTitle, sourceLang, targetLang ) => {
			loadingTranslation.value = true;
			try {
				translation.value = await translateLeadSection( pageTitle, sourceLang, targetLang );
			} catch ( error ) {
				mw.log.error( 'Error while translating lead section contents', error );
			} finally {
				loadingTranslation.value = false;
			}
		};

		watchEffect( () => {
			props.pageResult.setSourceLanguage( sourceLanguage.value );
			const title = props.pageResult.sourceTitle;
			doTranslateLeadSection( title, sourceLanguage.value, targetLanguage.value );
		} );

		const { navigateToPage, openLanguageSelector } = useRouter();
		const goToSearch = () => navigateToPage( 'search' );

		const { logClickEvent } = useEventLogging();
		const goToTranslation = () => {
			const actionContext = `${ sourceLanguage.value };${ targetLanguage.value }`;
			logClickEvent( 'open', 'auto_translation_card', actionContext );
			navigateToPage( 'translation', { pageResult: props.pageResult } );
		};

		const { mintLanguages } = useMintLanguages();

		const openSourceLanguageSelector = () => {
			openLanguageSelector( false, setSourceLanguage, props.pageResult.languages );
		};
		const openTargetLanguageSelector = () => {
			const languages = mintLanguages.value[ sourceLanguage.value ];
			openLanguageSelector( false, setTargetLanguage, languages );
		};

		const sourceLanguageAutonym = computed( () => getAutonym( sourceLanguage.value ) );
		const targetLanguageAutonym = computed( () => getAutonym( targetLanguage.value ) );

		const siteMapper = new mw.cx.SiteMapper();
		const sourcePageUrl = computed(
			() => siteMapper.getPageUrl( sourceLanguage.value, props.pageResult.sourceTitle )
		);
		const targetPageUrl = computed( () => {
			return targetPage.value ?
				siteMapper.getPageUrl( targetLanguage.value, targetPage.value.title ) :
				null;
		} );

		const onTargetArticleClick = () => logClickEvent( null, 'human_translation_card' );

		return {
			thumbnailStyle,
			cdxIconRobot,
			cdxIconArticle,
			cdxIconSpecialPages,
			cdxIconArrowNext,
			cdxIconSearch,
			cdxIconUserGroup,
			translation,
			goToSearch,
			goToTranslation,
			sourceLanguageAutonym,
			targetLanguageAutonym,
			loadingTranslation,
			openSourceLanguageSelector,
			openTargetLanguageSelector,
			targetTitle,
			targetPage,
			targetPageUrl,
			onTargetArticleClick,
			sourcePageUrl,
			confirmTopicReviewRef,
			languageSelectorExplanationRef
		};
	}
} );
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.confirm-topic-header {
  font-weight: @font-weight-bold;
  margin-bottom: @spacing-150;
  .cdx-icon {
    margin-inline-end: @spacing-50;
  }
}

.confirm-topic-preview {
  padding: @spacing-100;
  margin-block-end: @spacing-100;

  && {
    &:focus {
      outline: @border-width-thick @border-style-base @color-progressive;
    }
  }

  &__thumbnail-container {
    &--no-thumbnail {
      .mw-ui-thumbnail {
        display: flex;
        background-color: @background-color-neutral;
        .cdx-icon {
          height: @spacing-400;
          margin: auto;
          color: @color-progressive--hover;
        }
      }
    }
  }

  & &__translation-container {
    &__source-title {
      margin-top: @spacing-100;
      padding: @spacing-0;
    }
    &__target-title {
      padding: @spacing-0;
    }
    &__translation {
      width: @spacing-full;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      background: @background-color-base;
      padding: @spacing-0;
      p {
        padding: @spacing-0;
        margin: @spacing-0;
      }
    }
    &__details {
      .cdx-icon {
        color: @color-progressive;
      }
      color: @color-progressive;
      font-size: @font-size-medium;
      font-weight: @font-weight-bold;
    }
  }
}

.confirm-topic-language-selector {
  margin-top: @spacing-50;
  text-align: center;
  .cdx-icon {
    margin: @spacing-0 @spacing-50;
  }
}

.confirm-topic-go-back-link-container {
  margin: @spacing-200 @spacing-0;
  text-align: center;
}

.confirm-topic-original-target-article-container {
  border-top: @border-base;
  padding: @spacing-100;
  background-color: @background-color-progressive-subtle;
  &__header {
    font-weight: @font-weight-bold;
    margin-bottom: @spacing-75;
  }
  & .confirm-topic-original-target-article {
    background-color: @background-color-base;
    border: @border-base;
    .cdx-menu-item {
      margin-bottom: @spacing-0;
    }

    p {
      margin-top: @spacing-0;
      margin-left: @spacing-75;
      padding-left: @spacing-300;
      font-size: @font-size-small;
      color: @color-subtle;
      & .cdx-icon {
        color: @color-subtle;
      }
    }
  }

  &__details {
    margin-top: @spacing-50;
    font-size: @font-size-small;
    color: @color-subtle;
  }
}
</style>
