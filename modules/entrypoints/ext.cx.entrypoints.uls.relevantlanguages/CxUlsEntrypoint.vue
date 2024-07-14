<template>
	<div
		v-show="showPanel"
		class="cx-uls-entrypoint"
	>
		<div class="cx-uls-entrypoint__header row">
			<div class="col shrink">
				<button class="cx-uls-entrypoint__close-button" @click.stop="close">
					<span class="cx-uls-entrypoint__close-button__icon">
					</span>
				</button>
			</div>
			<div class="col grow">
				<h5
					class="cx-uls-entrypoint__header-title"
					:lang="sourceLanguage"
					:dir="getDir( sourceLanguage )"
					v-text="$i18n( 'cx-uls-relevant-languages-panel-header' )"
				>
				</h5>
			</div>
		</div>
		<div class="cx-uls-entrypoint__body">
			<p
				class="cx-uls-entrypoint__body__message"
				:lang="sourceLanguage"
				:dir="getDir( sourceLanguage )"
				v-text="$i18n( 'cx-uls-relevant-languages-panel-message' )"
			>
			</p>
			<div class="cx-uls-entrypoint__body__translation-links row">
				<a
					v-for="language in slicedLanguages"
					:key="'link-' + language"
					class="cx-uls-entrypoint__body__translation-link"
					:href="getCXUrlByTargetLanguage( language )"
				>
					<span class="cx-uls-entrypoint__body__translation-link-icon">
						<span class="cx-uls-entrypoint__body__translation-link-icon__add">
						</span>
					</span>
					<span
						class="cx-uls-entrypoint__body__translation-link-text"
						:lang="language"
						:dir="getDir( language )"
						v-text="getAutonym( language )"
					></span>
				</a>
				<a
					class="cx-uls-entrypoint__body__translation-link"
					:href="getCXUrlByTargetLanguage( slicedLanguages[0] )"
				>
					<span class="cx-uls-entrypoint__body__translation-link-icon">
						<span class="cx-uls-entrypoint__body__translation-link-icon__ellipsis">
						</span>
					</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
const Vue = require( 'vue' );

// @vue/component
module.exports = {
	compilerOptions: { whitespace: 'condense' },
	name: 'CxUlsEntrypoint',
	props: {
		languages: {
			type: Array,
			required: true
		},
		onClose: {
			type: Function,
			required: true
		}
	},
	setup: ( props ) => {
		const showPanel = Vue.ref( true );
		const siteMapper = new mw.cx.SiteMapper();
		const slicedLanguages = Vue.computed( () => props.languages.slice( 0, 2 ) );

		const close = () => {
			showPanel.value = false;
			props.onClose();
		};

		const sourceLanguage = siteMapper.getCurrentWikiLanguageCode();

		const getCXUrlByTargetLanguage = ( targetLanguage ) => {
			const sourceTitle = mw.config.get( 'wgTitle' );

			return siteMapper.getCXUrl(
				sourceTitle,
				'',
				sourceLanguage,
				targetLanguage || null,
				{ campaign: 'ulsmissinglanguages' }
			);
		};

		return {
			close,
			getDir: $.uls.data.getDir,
			getAutonym: $.uls.data.getAutonym,
			getCXUrlByTargetLanguage,
			showPanel,
			slicedLanguages,
			sourceLanguage
		};
	}
};
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.cx-uls-entrypoint {
	border: @border-base;
	color: @color-base;

	&--hidden {
		display: none;
	}

	.row {
		box-sizing: border-box;
		display: flex;
		flex: 0 1 auto;
		flex-wrap: wrap;
	}

	.col {
		flex-basis: 0;
		flex-grow: 1;
		max-width: 100%;
	}

	.shrink {
		flex-grow: 0 !important;
		flex-shrink: 1 !important;
	}

	button {
		cursor: pointer;
	}

	&__header {
		align-items: center;
		padding: 12px;
		border-bottom: @border-base;

		&-title {
			font-size: 16px;
			padding-block: 0;
			padding-inline: 8px;
			margin: 0;
		}
	}

	&__close-button {
		background: none;
		border: none;
		align-self: center;

		&__icon {
			.cdx-mixin-css-icon( @cdx-icon-arrow-previous );
		}
	}

	&__body {
		padding: 16px;

		&__message {
			margin: 0;
			padding-bottom: 8px;
			padding-inline: 8px;
			line-height: 1.4;
		}

		&__translation-links {
			align-items: baseline;
			padding-inline: 8px;
		}

		&__translation-link {
			padding: 4px;
			background: none;
			border: none;
			align-items: center;
			display: flex;
			// set color to "inherit", so that the CX links have the same color as the rest of the text body (@color-base)
			color: inherit;

			&-icon {
				// set display to "flex", so that the height of the outer span is equal to the icon height (20px)
				display: flex;
				padding-inline-end: 4px;

				&__ellipsis {
					.cdx-mixin-css-icon( @cdx-icon-ellipsis );
				}

				&__add {
					.cdx-mixin-css-icon( @cdx-icon-add );
				}
			}

			&-text {
				font-size: 16px;
				margin-inline-end: 4px;
			}
		}
	}
}
</style>
