'use strict';

const ArticleFooterEntrypointCard = require( './ArticleFooterEntrypointCard.vue' );
const qid = mw.config.get( 'wgWikibaseItemId' );

if ( qid ) {
	const listName = 'automatictranslationdenselanguages';
	const params = {
		action: 'query',
		list: listName,
		format: 'json',
		qid
	};

	let api = new mw.Api();

	api.get( params ).then( ( response ) => {
		const sizeInfoArray = response.query[ listName ].sizeInfo;
		const sourceArticleInfo = sizeInfoArray[ 0 ];
		if ( sourceArticleInfo.language === mw.config.get( 'wgContentLanguage' ) ) {
			return;
		}

		const siteMapper = new mw.cx.SiteMapper();
		const thumbnailSize = 160;

		api = siteMapper.getApi( sourceArticleInfo.language );
		const infoParams = {
			action: 'query',
			format: 'json',
			formatversion: 2,
			prop: 'pageimages',
			piprop: 'thumbnail',
			pithumbsize: thumbnailSize,
			titles: sourceArticleInfo.title,
			origin: '*'
		};

		api.get( infoParams ).then( ( thumbnailResponse ) => {
			const thumbnailObject = thumbnailResponse.query.pages[ 0 ].thumbnail;
			const thumbnail = {
				height: thumbnailSize,
				width: thumbnailSize,
				url: thumbnailObject.source
			};

			const { createMwApp } = require( 'vue' );

			const props = {
				sourceTitle: sourceArticleInfo.title,
				sourceLanguage: sourceArticleInfo.language,
				thumbnail
			};
			createMwApp( ArticleFooterEntrypointCard, props ).mount( '.automatic-translation-entrypoint-container' );
		} );
	} );
}
