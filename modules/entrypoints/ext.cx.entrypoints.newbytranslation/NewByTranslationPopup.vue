<template>
	<div v-if="showPopup" class="cx-entrypoint-newbytranslation">
		<div class="cx-entrypoint-newbytranslation-header">
			<cdx-icon class="cx-entrypoint-newbytranslation-header__icon" :icon="cdxIconLanguage">
			</cdx-icon>
			<h6 class="cx-entrypoint-newbytranslation-header__title">
				{{ $i18n( 'cx-campaign-newbytranslation-title' ).text() }}
			</h6>
			<cdx-button
				weight="quiet"
				@click="closePopup"
			>
				<cdx-icon :icon="cdxIconClose"></cdx-icon>
			</cdx-button>
		</div>
		<div class="cx-entrypoint-newbytranslation-body">
			<p class="cx-entrypoint-newbytranslation-body__text">
				{{ $i18n( 'cx-campaign-newbytranslation-notice' ) }}
			</p>
			<cdx-card
				v-if="suggestion"
				force-thumbnail
				:thumbnail="thumbnail"
				:custom-placeholder-icon="cdxIconArticle"
				target="_blank"
				:url="cardCxUrl"
			>
				<template #title>
					{{ suggestion.title }}
				</template>
				<template v-if="suggestion.description" #description>
					{{ suggestion.description }}
				</template>
				<template #supporting-text>
					<span>{{ getAutonym( suggestion.language ) }}</span>
					<cdx-icon :icon="cdxIconArrowNext" size="x-small"></cdx-icon>
					<span>{{ getAutonym( targetLanguage ) }}</span>
				</template>
			</cdx-card>
		</div>
		<div class="cx-entrypoint-newbytranslation-footer">
			<a
				v-if="suggestion"
				class="cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--action-progressive cdx-button--weight-quiet cx-entrypoint-newbytranslation-footer__search-button"
				:href="searchCxUrl"
				target="_blank"
			>
				<cdx-icon :icon="cdxIconSearch"></cdx-icon>
				<span>{{ $i18n( 'cx-campaign-newbytranslation-search' ).text() }}</span>
			</a>
			<a
				v-else
				class="cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--action-progressive cdx-button--weight-primary cx-entrypoint-newbytranslation-footer__start-cx-button"
				:href="startCxUrl"
				target="_blank"
			>
				{{ $i18n( 'cx-campaign-newbytranslation-start' ).text() }}
			</a>
			<a
				class="cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--action-default cdx-button--weight-quiet cdx-button--icon-only"
				:href="settingsUrl"
				target="_blank"
			>
				<cdx-icon :icon="cdxIconSettings"></cdx-icon>
			</a>
		</div>
	</div>
</template>

<script>
const { computed, ref } = require( 'vue' );
const { CdxIcon, CdxButton, CdxCard } = require( '../../codex.js' );
const {
	cdxIconLanguage,
	cdxIconClose,
	cdxIconArticle,
	cdxIconArrowNext,
	cdxIconSearch,
	cdxIconSettings
} = require( '../../icons.json' );
const CAMPAIGN = 'newarticle';

// @vue/component
module.exports = {
	name: 'NewByTranslationPopup',
	components: { CdxIcon, CdxButton, CdxCard },
	props: {
		suggestion: {
			type: Object,
			default: null
		},
		targetLanguage: {
			type: String,
			required: true
		}
	},
	setup( props ) {
		const showPopup = ref( true );
		mw.hook( 'mw.cx.cta.shown' ).fire( CAMPAIGN );

		const closePopup = () => {
			showPopup.value = false;
			mw.hook( 'mw.cx.cta.reject' ).fire( CAMPAIGN );
		};

		const thumbnailSize = 160;
		let thumbnail = null;
		if ( props.suggestion && props.suggestion.thumbnail ) {
			thumbnail = {
				height: thumbnailSize,
				width: thumbnailSize,
				url: props.suggestion.thumbnail.source
			};
		}

		const getAutonym = ( language ) => $.uls.data.getAutonym( language );
		const siteMapper = new mw.cx.SiteMapper();
		const targetTitle = mw.config.get( 'wgTitle' );

		const cardCxUrl = computed( () => {
			if ( !props.suggestion ) {
				return null;
			}

			return siteMapper.getCXUrl(
				props.suggestion.title,
				targetTitle,
				props.suggestion.language,
				props.targetLanguage,
				{ campaign: CAMPAIGN }
			);
		} );

		const searchCxUrl = computed( () => {
			if ( !props.suggestion ) {
				return null;
			}

			return siteMapper.getCXUrl(
				null,
				targetTitle,
				null,
				props.targetLanguage,
				{ campaign: CAMPAIGN }
			);
		} );

		const startCxUrl = computed( () => siteMapper.getCXUrl(
			null,
			targetTitle,
			null,
			props.targetLanguage,
			{ campaign: CAMPAIGN }
		) );

		const settingsUrl = mw.util.getUrl( 'Special:Preferences#mw-prefsection-rendering-languages' );
		return {
			showPopup,
			closePopup,
			cdxIconLanguage,
			cdxIconClose,
			cdxIconArticle,
			cdxIconArrowNext,
			cdxIconSearch,
			cdxIconSettings,
			thumbnail,
			getAutonym,
			cardCxUrl,
			searchCxUrl,
			startCxUrl,
			settingsUrl
		};
	}
};
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.cx-entrypoint-newbytranslation {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background: @background-color-base;
  padding: @spacing-75;
  border: @border-base;
  filter: drop-shadow(0 2px 1px rgba(0,0,0,0.3));

  &-header {
    display: flex;
    align-items: center;

    &__icon {
      background-color: @background-color-progressive-subtle;
      color: @color-progressive;
      border-radius: @border-radius-circle;
      padding: @spacing-50;
      margin-inline-end: @spacing-100;
    }

    &__title {
      margin-inline-end: auto;
    }
  }

  &-body {
    padding: @spacing-0 @spacing-50;
    margin: @spacing-0 @spacing-250;

    &__text {
      margin-bottom: @spacing-100;
    }

    .cdx-card {
      padding: @spacing-0;
      box-shadow: @box-shadow-drop-small;

      .cdx-thumbnail__image {
        height: 84px;
        width: 84px;
      }

      .cdx-card__text {
        margin-block: auto;

        .cdx-card__text__description {
          margin-top: @spacing-0;
        }
      }
    }
  }

  &-footer {
    padding-inline-start: @spacing-50;
    margin-inline-start: @spacing-250;
    margin-block-start: @spacing-100;
    display: flex;

    &__search-button, &__start-cx-button {
      margin-inline-end: auto;
    }

    &__search-button {
      margin-inline-start: -@spacing-100;

      .cdx-icon {
        margin-inline-end: @spacing-50;
      }
    }
  }
}
</style>
