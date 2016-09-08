( function ( $, mw ) {
	'use strict';

	function ContentTranslationValidator( siteMapper ) {
		this.siteMapper = siteMapper;
	}

	/**
	 * Checks to see if a title exists in the specified language wiki. Returns
	 * the normalised title and resolves redirects.
	 *
	 * @param {string} language The language of the wiki to check
	 * @param {string} title The title to look for
	 * @return {jQuery.promise}
	 * @return {Function} return.done If title exists
	 * @return {string|false} return.done.title
	 */
	ContentTranslationValidator.prototype.isTitleExistInLanguage = function ( language, title ) {
		var api = this.siteMapper.getApi( language );

		// Short circuit empty titles
		if ( title === '' ) {
			return $.Deferred().resolve( false ).promise();
		}

		// Reject titles with pipe in the name, as it has special meaning in the api
		if ( /\|/.test( title ) ) {
			return $.Deferred().resolve( false ).promise();
		}

		return api.get( {
			action: 'query',
			titles: title,
			redirects: 1,
			indexpageids: 1
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} ).then( function ( response ) {
			var pageid = response.query.pageids[ 0 ];

			if ( response.query.pages[ pageid ].missing !== undefined ) {
				return false;
			}

			if ( response.query.pages[ pageid ].invalid !== undefined ) {
				return false;
			}

			return response.query.pages[ pageid ].title;
		} );
	};

	/**
	 * Checks for an equivalent page in the target wiki based on source title.
	 *
	 * @param {string} sourceLanguage the source language
	 * @param {string} targetLanguage the target language
	 * @param {string} sourceTitle the title to check
	 * @return {jQuery.promise}
	 */
	ContentTranslationValidator.prototype.isTitleConnectedInLanguages = function (
		sourceLanguage,
		targetLanguage,
		sourceTitle
	) {
		var api = this.siteMapper.getApi( sourceLanguage );

		return api.get( {
			action: 'query',
			prop: 'langlinks',
			titles: sourceTitle,
			lllang: mw.cx.siteMapper.getWikiDomainCode( targetLanguage ),
			lllimit: 1,
			redirects: true
		}, {
			dataType: 'jsonp',
			cache: true
		} ).then( function ( response ) {
			var equivalentTargetPage = false;

			if ( response.query && response.query.pages ) {
				$.each( response.query.pages, function ( pageId, page ) {
					if ( page.langlinks ) {
						equivalentTargetPage = page.langlinks[ 0 ][ '*' ];
					}
				} );
			}

			return equivalentTargetPage;
		} );
	};

	/**
	 * Check whether a page with the same title already exists
	 * and show a warning if needed.
	 */
	ContentTranslationValidator.prototype.validateTargetTitle = function () {
		var viewTargetUrl = this.siteMapper.getPageUrl( mw.cx.targetLanguage, mw.cx.targetTitle );

		this.isTitleExistInLanguage( mw.cx.targetLanguage, mw.cx.targetTitle )
			.then( function ( pageExist ) {
				// If page doesn't exist, it's OK
				if ( !pageExist ) {
					return;
				}

				mw.hook( 'mw.cx.warning' ).fire( mw.message(
					'cx-translation-target-page-exists',
					viewTargetUrl,
					mw.cx.targetTitle
				) );
			} );
	};

	mw.cx.ContentTranslationValidator = ContentTranslationValidator;

}( jQuery, mediaWiki ) );
