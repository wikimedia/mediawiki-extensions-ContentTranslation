<template>
	<div class="ax-article-footer-container">
		<h2>
			{{ $i18n( 'ax-article-footer-entrypoint-card-heading' ).text() }}
		</h2>
		<cdx-card
			target="_blank"
			:url="targetUrl"
			force-thumbnail
			:thumbnail="thumbnail"
			:custom-placeholder-icon="cdxIconArticle"
		>
			<template #title>
				{{ pageTitle }}
			</template>
			<template #description>
				{{ $i18n( 'ax-article-footer-entrypoint-card-description' ).text() }}
			</template>
			<template #supporting-text>
				<cdx-icon :icon="cdxIconRobot" size="small"></cdx-icon>
				<span>
					{{ $i18n( 'ax-article-footer-entrypoint-card-supporting-text' ).text() }}
				</span>
			</template>
		</cdx-card>
	</div>
</template>

<script>
const { defineComponent } = require( 'vue' );
const { CdxCard, CdxIcon } = require( './codex.js' );
const { cdxIconArticle, cdxIconRobot } = require( './icons.json' );

// @vue/component
module.exports = defineComponent( {
	name: 'ArticleFooterEntrypointCard',
	components: { CdxCard, CdxIcon },
	props: {
		sourceTitle: {
			type: String,
			required: true
		},
		sourceLanguage: {
			type: String,
			required: true
		},
		thumbnail: {
			type: Object,
			required: true
		}
	},
	setup( props ) {
		const pageTitle = ( new mw.Title( mw.config.get( 'wgPageName' ) ) ).getMainText();

		const siteMapper = new mw.cx.SiteMapper();

		const targetUrl = siteMapper.getMintUrl(
			props.sourceTitle,
			props.sourceLanguage,
			mw.config.get( 'wgContentLanguage' ),
			'confirm',
			{ source: 'articlefooter' }
		);

		return {
			cdxIconArticle,
			cdxIconRobot,
			pageTitle,
			targetUrl
		};
	}
} );
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.ax-article-footer-container {
	margin-bottom: @spacing-150;

	/* Styling directly copied from Related Articles component */
	h2 {
		color: @color-subtle;
		border-bottom: 0;
		padding-bottom: 0.5em;
		font-size: 0.8em;
		font-weight: normal;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
}
</style>
