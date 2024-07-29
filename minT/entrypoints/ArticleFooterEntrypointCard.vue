<template>
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
</template>

<script>
const { defineComponent } = require( 'vue' );
const { CdxCard, CdxIcon } = require( '../codex.js' );
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
		const pageTitle = mw.config.get( 'wgPageName' );

		const siteMapper = new mw.cx.SiteMapper();

		const targetUrl = siteMapper.getMintUrl(
			props.sourceTitle,
			props.sourceLanguage,
			mw.config.get( 'wgContentLanguage' ),
			'confirm'
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
