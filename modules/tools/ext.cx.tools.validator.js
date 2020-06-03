( function () {
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
	 * @return {string|boolean} return.done.title
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
			formatversion: 2,
			action: 'query',
			titles: title,
			redirects: true
		} ).then( function ( response ) {
			var page = response.query.pages[ 0 ];

			if ( page.missing || page.invalid ) {
				return false;
			}

			return page.title;
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
		} ).then( function ( response ) {
			var equivalentTargetPage = false;

			if ( response.query && response.query.pages ) {
				Object.keys( response.query.pages ).forEach( function ( pageId ) {
					var page = response.query.pages[ pageId ];
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

}() );
