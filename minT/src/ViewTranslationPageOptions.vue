<template>
	<div
		class="translation-viewer__options-overlay"
		:style="{ display: modelValue ? 'flex' : 'none' }"
		@click.self="closeOverlay"
	>
		<div class="translation-viewer__options-overlay__content">
			<div class="translation-viewer__options-overlay__header">
				<h4>
					<cdx-icon :icon="cdxIconRobot"></cdx-icon>
					<span>
						{{ $i18n( 'mint-view-translation-overlay-header' ).text() }}
					</span>
				</h4>
				<cdx-button weight="quiet" @click="closeOverlay">
					<cdx-icon :icon="cdxIconClose"></cdx-icon>
				</cdx-button>
			</div>
			<div class="translation-viewer__options-overlay__body">
				<div class="translation-viewer__options-overlay__language-selector">
					<cdx-button @click="openSourceLanguageSelector">
						{{ sourceLanguageAutonym }}
					</cdx-button>
					<cdx-icon
						class="translation-viewer__options-overlay__language-selector__arrow-icon"
						:icon="cdxIconArrowNext"
					></cdx-icon>
					<cdx-button @click="openTargetLanguageSelector">
						{{ targetLanguageAutonym }}
					</cdx-button>
				</div>
				<hr>
				<div class="translation-viewer__options-overlay__actions-container">
					<a :href="sourcePageUrl" target="_blank">
						<cdx-icon :icon="cdxIconArticle"></cdx-icon>
						<span>
							{{
								$i18n(
									'mint-view-translation-overlay-source-article-link-label',
									sourceLanguageAutonym
								).text()
							}}
						</span>
					</a>
					<a
						v-if="targetPageUrl"
						:href="targetPageUrl"
						target="_blank">
						<cdx-icon :icon="cdxIconArticle"></cdx-icon>
						<span>
							{{
								$i18n(
									'mint-view-translation-overlay-target-article-link-label',
									targetLanguageAutonym
								).text()
							}}
						</span>
					</a>
					<a :href="cxUrl" target="_blank">
						<cdx-icon :icon="cdxIconEdit"></cdx-icon>
						<span>
							{{
								$i18n( 'mint-view-translation-overlay-cx-entrypoint-label' ).text()
							}}
						</span>
					</a>
					<a v-if="isShareSupported" @click="shareTranslation">
						<cdx-icon :icon="cdxIconShare"></cdx-icon>
						<span>
							{{
								$i18n( 'mint-view-translation-overlay-share-button-label' ).text()
							}}
						</span>
					</a>
					<a href="https://www.mediawiki.org/wiki/Talk:MinT" target="_blank">
						<cdx-icon :icon="cdxIconFeedback"></cdx-icon>
						<span>
							{{
								$i18n( 'mint-view-translation-overlay-feedback-link-label' ).text()
							}}
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const useMintLanguages = require( './useMintLanguages.js' );
const useRouter = require( './useRouter.js' );
const useState = require( './useState.js' );
const PageResult = require( './pageSearchResult.js' );
const { CdxIcon, CdxButton } = require( '@wikimedia/codex' );
const { defineComponent, computed } = require( 'vue' );
const {
	cdxIconRobot,
	cdxIconArrowNext,
	cdxIconClose,
	cdxIconArticle,
	cdxIconEdit,
	cdxIconShare,
	cdxIconFeedback
} = require( './icons.json' );
const getAutonym = $.uls.data.getAutonym;

module.exports = defineComponent( {
	name: 'ViewTranslationOptions',
	components: { CdxIcon, CdxButton },
	props: {
		modelValue: {
			type: Boolean,
			required: true
		},
		pageResult: {
			type: PageResult,
			required: true
		},
		sourcePageUrl: {
			type: String,
			required: true
		},
		targetPageUrl: {
			type: String,
			required: false,
			default: null
		}
	},
	emits: [ 'update:modelValue' ],
	setup( props, context ) {
		const { sourceLanguage, targetLanguage, setSourceLanguage, setTargetLanguage } = useState();
		const sourceLanguageAutonym = computed( () => getAutonym( sourceLanguage.value ) );
		const targetLanguageAutonym = computed( () => getAutonym( targetLanguage.value ) );

		const closeOverlay = () => ( context.emit( 'update:modelValue', false ) );

		const { openLanguageSelector } = useRouter();

		const { mintLanguages } = useMintLanguages();
		const openSourceLanguageSelector = () => {
			openLanguageSelector( false, setSourceLanguage, props.pageResult.languages );
			closeOverlay();
		};

		const openTargetLanguageSelector = () => {
			const languages = mintLanguages.value[ sourceLanguage.value ];
			openLanguageSelector( false, setTargetLanguage, languages );
			closeOverlay();
		};

		const siteMapper = new mw.cx.SiteMapper();
		const cxUrl = computed( () =>
			siteMapper.getCXUrl(
				props.pageResult.sourceTitle,
				null,
				sourceLanguage.value,
				targetLanguage.value
			)
		);

		const isShareSupported = navigator.canShare && navigator.canShare( { url: location.href } );
		const shareTranslation = () => navigator.share( { url: location.href } );

		return {
			openSourceLanguageSelector,
			openTargetLanguageSelector,
			cdxIconRobot,
			cdxIconArrowNext,
			cdxIconClose,
			cdxIconArticle,
			cdxIconEdit,
			cdxIconShare,
			cdxIconFeedback,
			closeOverlay,
			cxUrl,
			shareTranslation,
			isShareSupported,
			sourceLanguageAutonym,
			targetLanguageAutonym
		};
	}
} );
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.translation-viewer__options-overlay {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: @z-index-above-content;
    left: @spacing-0;
    top: @spacing-0;
    width: @size-full;
    height: @size-full;
    background-color: @background-color-backdrop-dark;
    align-items: center;
    justify-content: center;

    &__content {
      background-color: @background-color-base;
      margin-top: auto;
      padding: @spacing-100;
      width: @size-full;
      height: @size-half;
      box-shadow: @box-shadow-drop-medium;
      animation: fadeIn 0.4s;
      border-radius: @spacing-50 @spacing-50 @spacing-0 @spacing-0;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      h4 {
        .cdx-icon {
          margin-right: @spacing-25;
        }
        padding: @spacing-0;
      }
    }

    &__language-selector {
      margin-top: @spacing-150;
      margin-bottom: @spacing-150;
      text-align: center;
      &__arrow-icon {
        margin-inline: @spacing-50;
      }
    }

    &__actions-container {
      a {
        padding: @spacing-50 @spacing-0;
        display: block;
        color: inherit;
        span {
          margin-inline-start: @spacing-25;
          font-weight: @font-weight-bold;
        }
      }
    }
  }
</style>
