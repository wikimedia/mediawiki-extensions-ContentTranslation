/**
 * ContentTranslation extension - Translation listing in dashboard.
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * CXTranslationList
	 *
	 * @class
	 */
	function CXTranslationList( element, siteMapper ) {
		this.$container = $( element );
		this.siteMapper = siteMapper;
		this.translations = [];
		this.init();
	}

	CXTranslationList.prototype.init = function () {
		var translationList = this;

		this.getTranslations( mw.user.getName() )
			.done( function ( response ) {
				translationList.translations = response.query.contenttranslation.translations;
				translationList.render();
			} );
	};

	/**
	 * Get the thumbnail image of the given link
	 * @param {string} id translation id
	 * @param {string} language
	 * @param {string} title Title
	 * @return {jQuery.Promise}
	 */
	CXTranslationList.prototype.getLinkImage = function ( id, language, title ) {
		return this.siteMapper.getApi( language ).get( {
			action: 'query',
			titles: title,
			prop: 'pageimages',
			piprop: 'thumbnail',
			pithumbsize: 150,
			redirects: true,
			format: 'json'
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} );
	};

	/**
	 * Get all the translations of given user
	 * @param {string} username User name
	 * @return {jQuery.Promise}
	 */
	CXTranslationList.prototype.getTranslations = function ( username ) {
		var api = new mw.Api();

		return api.get( {
			action: 'query',
			list: 'contenttranslation',
			user: username,
			format: 'json'
		} );
	};

	/**
	 * Show a title image of the translation based on source title.
	 * @param {Object} translation
	 */
	CXTranslationList.prototype.showTitleImage = function ( translation ) {
		this.getLinkImage( translation.id, translation.sourceLanguage, translation.sourceTitle )
			.done( function ( response ) {
				var pageId, page, imgSrc;

				pageId = Object.keys( response.query.pages )[ 0 ];
				page = response.query.pages[ pageId ];
				if ( page.thumbnail ) {
					imgSrc = page.thumbnail.source;
					$( '#' + translation.id ).find( '.image' ).attr( 'src', imgSrc );
				}
			} );

	};

	/**
	 * List all translations.
	 * @param {Object[]} translations
	 */
	CXTranslationList.prototype.listTranslations = function ( translations ) {
		var i, translation, $translation, $titleLanguageBlock, $translationLink, $sourceLanguage,
			$targetLanguage, $imageBlock, $lastUpdated, $image, $status, $progressbar;

		for ( i = 0; i < translations.length; i++ ) {

			translation = translations[ i ].translation;
			$translation = $( '<div>' )
				.addClass( 'translation' )
				.attr( 'id', translation.id );
			$lastUpdated = $( '<div>' )
				.addClass( 'last-updated' )
				.text( moment( translation.lastUpdateTimeStamp, 'YYYYMMDDHHmmss Z' ).fromNow() );
			$imageBlock = $( '<div>' )
				.addClass( 'image-block' );
			$image = $( '<img>' )
				.addClass( 'image' );
			$progressbar = $( '<div>' )
				.addClass( 'progressbar' )
				.cxProgressBar( {
					weights: JSON.parse( translation.progress )
				} );
			$imageBlock.append( $image, $progressbar );
			this.showTitleImage( translation );

			$translationLink = $( '<a>' )
				.addClass( 'source-title' )
				.attr( {
					href: new mw.Uri().extend( {
						from: translation.sourceLanguage,
						to: translation.targetLanguage,
						page: translation.sourceTitle,
						targettitle: translation.targetTitle,
						draft: translation.status === 'draft' ? translation.id : undefined
					} ).toString(),
				} ).text( translation.sourceTitle );
			$sourceLanguage = $( '<div>' )
				.addClass( 'source-language' )
				.text( $.uls.data.getAutonym( translation.sourceLanguage ) );
			$targetLanguage = $( '<div>' )
				.addClass( 'target-language' )
				.text( $.uls.data.getAutonym( translation.targetLanguage ) );
			$status = $( '<div>' )
				.addClass( 'status status-' + translation.status )
				.text( translation.status );
			$titleLanguageBlock = $( '<div>' )
				.addClass( 'title-language-block' )
				.append( $translationLink, $sourceLanguage, $targetLanguage, $status );
			$translation.append(
				$lastUpdated,
				$imageBlock,
				$titleLanguageBlock
			);
			this.$container.append( $translation );
		}
	};

	CXTranslationList.prototype.render = function () {
		var $translationFilterContainer, $translationStatusFilter,
			$sourceLanguageFilter, $targetLanguageFilter;

		$translationFilterContainer = $( '<div>' )
			.addClass( 'translation-filter' );
		$translationStatusFilter = $( '<select>' ).addClass( 'translation-status-filter' );
		$translationStatusFilter.append(
			$( '<option>' ).text( mw.msg( 'cx-translation-filter-all-translations' ) ),
			$( '<option>' ).text( mw.msg( 'cx-translation-filter-published-translations' ) ),
			$( '<option>' ).text( mw.msg( 'cx-translation-filter-draft-translations' ) )
		);
		$sourceLanguageFilter = $( '<select>' ).addClass( 'translation-source-language-filter' );
		$sourceLanguageFilter.append(
			$( '<option>' ).text( mw.msg( 'cx-translation-filter-from-any-language' ) )
		);
		$targetLanguageFilter = $( '<select>' ).addClass( 'translation-target-language-filter' );
		$targetLanguageFilter.append(
			$( '<option>' ).text( mw.msg( 'cx-translation-filter-to-any-language' ) )
		);
		$translationFilterContainer.append(
			$translationStatusFilter, $sourceLanguageFilter, $targetLanguageFilter
		);
		this.$container.append( $translationFilterContainer );
		this.listTranslations( this.translations );
	};

	$.fn.cxTranslationList = function ( siteMapper ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxtranslationlist' );

			if ( !data ) {
				$this.data( 'cx', ( data = new CXTranslationList( this, siteMapper ) ) );
			}
		} );
	};

}( jQuery, mediaWiki ) );
