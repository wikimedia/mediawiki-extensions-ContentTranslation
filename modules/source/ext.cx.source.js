/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * ContentTranslationSource
	 *
	 * @class
	 */
	function ContentTranslationSource( element, siteMapper, options ) {
		this.$container = $( element );
		this.siteMapper = siteMapper;
		this.options = $.extend( true, {}, $.fn.cxSource.defaults, options );

		this.$title = null;
		this.$content = null;

		this.init();
	}

	ContentTranslationSource.prototype.init = function () {
		var query = new mw.Uri().query;
		mw.cx.sourceTitle = query.page;
		mw.cx.targetLanguage = query.to;
		mw.cx.sourceLanguage = query.from;

		if ( mw.user.isAnon() ) {
			mw.hook( 'mw.cx.error.anonuser' ).fire();
			return;
		}
		if ( !mw.cx.sourceTitle || !mw.cx.sourceLanguage || !mw.cx.targetLanguage ) {
			this.showDashboard();
			return;
		}

		this.render();
		this.fetchPage( mw.cx.sourceTitle, mw.cx.sourceLanguage );
		this.listen();

		if ( query.campaign ) {
			mw.hook( 'mw.cx.cta.accept' ).fire( query.campaign, query.from, query.to );
		}
	};

	/**
	 * Fetch the page with given title and language.
	 * Response contains
	 * @param {string} title Title of the page to be fetched
	 * @param {string} language Language of the page requested. This will be used to
	 *     identify the host wiki.
	 */
	ContentTranslationSource.prototype.fetchPage = function ( title, language ) {
		var fetchPageUrl,
			cxSource = this;

		fetchPageUrl = this.siteMapper.getCXServerUrl( '/page/$language/$title', {
			$language: language,
			$title: title
		} );

		$.get( fetchPageUrl )
			.done( function ( response ) {
				mw.cx.sourceRevision = response.revision;
				mw.hook( 'mw.cx.source.loaded' ).fire( response );
			} ).fail( function ( xhr ) {
				if ( xhr.status === 404 ) {
					mw.hook( 'mw.cx.error' ).fire(
						mw.msg( 'cx-error-page-not-found', title, $.uls.data.getAutonym( language ) )
					);
					cxSource.showSourceSelector();
				} else {
					mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-error-server-connection' ) );
				}
			} );
	};

	ContentTranslationSource.prototype.showDashboard = function () {
		location.href = mw.util.getUrl( 'Special:ContentTranslation' );
	};

	/**
	 * Render the source content column.
	 */
	ContentTranslationSource.prototype.render = function () {
		var sourceLanguageDir, $languageLabel, $articleLink, userLanguage, $subHeading, title;

		sourceLanguageDir = $.uls.data.getDir( mw.cx.sourceLanguage );
		this.$container.prop( {
			lang: mw.cx.sourceLanguage,
			dir: sourceLanguageDir
		} );

		title = mw.Title.newFromText( mw.cx.sourceTitle );

		if ( title ) {
			mw.cx.sourceTitle = title.getPrefixedText();
		}

		this.$title = $( '<h2>' )
			.attr( {
				id: 'cx-source-title'
			} )
			.addClass( 'cx-column__title' )
			.text( mw.cx.sourceTitle );

		$languageLabel = $( '<span>' )
			.prop( {
				lang: mw.cx.sourceLanguage,
				dir: sourceLanguageDir
			} )
			.addClass( 'cx-column__language-label' )
			.text( $.uls.data.getAutonym( mw.cx.sourceLanguage ) );

		$articleLink = $( '<span>' )
			.addClass( 'cx-column__sub-heading__view-page' )
			.append( $( '<a>' )
				.prop( {
					href: this.siteMapper.getPageUrl( mw.cx.sourceLanguage, mw.cx.sourceTitle ),
					target: '_blank'
				} )
				.text( mw.msg( 'cx-source-view-page' ) )
			);

		userLanguage = mw.config.get( 'wgUserLanguage' );
		$subHeading = $( '<div>' )
			.prop( {
				lang: userLanguage,
				dir: $.uls.data.getDir( userLanguage )
			} )
			.addClass( 'cx-column__sub-heading' )
			.append( $languageLabel, $articleLink );

		this.$content = $( '<div>' )
			.addClass( 'cx-column__content' );

		this.$container.append( this.$title, $subHeading, this.$content );
		this.showLoadingIndicator();
	};

	ContentTranslationSource.prototype.load = function ( content ) {
		this.$content.html( content.segmentedContent );

		// @todo figure out what should be done here
		this.$content.find( 'base' ).detach();

		mw.hook( 'mw.cx.source.ready' ).fire();
	};

	/**
	 * Remove the leading ./ added by parsoid.
	 * @param {string} href Link target
	 * @return {string} Cleaned up href
	 */
	function cleanupLinkHref( href ) {
		return href && href.replace( /^\.*\//, '' );
	}

	ContentTranslationSource.prototype.showLoadingIndicator = function () {
		var $loadingIndicator, $loadingIndicatorText, $loadingIndicatorSpinner;

		$loadingIndicator = $( '<div>' )
			.addClass( 'cx-column__loading-indicator' );
		$loadingIndicatorText = $( '<div>' )
			.addClass( 'cx-column__loading-indicator--text' )
			.text( mw.msg( 'cx-source-loading', mw.cx.sourceTitle ) );
		$loadingIndicatorSpinner = $( '<div>' )
			.addClass( 'cx-spinner' )
			.append(
				$( '<div>' ).addClass( 'bounce1' ),
				$( '<div>' ).addClass( 'bounce2' ),
				$( '<div>' ).addClass( 'bounce3' )
			);

		$loadingIndicator.append( $loadingIndicatorSpinner, $loadingIndicatorText );
		this.$content.append( $loadingIndicator );
	};

	ContentTranslationSource.prototype.listen = function () {
		var self = this;

		mw.hook( 'mw.cx.source.loaded' ).add( $.proxy( this.load, this ) );
		// Apply source filter plugin to the content
		this.$content.cxFilterSource();
		this.$content.on( 'click', function () {
			var selection = window.getSelection().toString();
			if ( selection.trim() ) {
				mw.hook( 'mw.cx.select.word' ).fire( selection, mw.cx.sourceLanguage );
			}
		} );

		this.$content.on( 'click', 'a', function ( e ) {
			var url,
				$link = $( this );

			// Allow link exploration
			if ( e.shiftKey || e.ctrlKey ) {
				url = self.siteMapper.getPageUrl(
					mw.cx.sourceLanguage, cleanupLinkHref( $link.attr( 'href' ) )
				);
				window.open( url, '_blank' );

				return false;
			}

			// Avoid all reference links
			if ( $link.parent().attr( 'typeof' ) === 'mw:Extension/ref' ) {
				mw.hook( 'mw.cx.select.reference' ).fire( $link.parent().prop( 'id' ), mw.cx.sourceLanguage );
			}

			// Disable link click
			return false;
		} );

		// Highlight segment pairs
		this.$content.on( 'mouseenter mouseleave', '.cx-segment', function () {
			var $segment = $( this ),
				segmentId = $segment.data( 'segmentid' );
			$( '[data-segmentid="' + segmentId + '"]' ).toggleClass( 'cx-highlight' );
		} );
	};

	$.fn.cxSource = function ( siteMapper, options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxSource' );

			if ( !data ) {
				$this.data(
					'cxSource', ( data = new ContentTranslationSource( this, siteMapper, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	$.fn.cxSource.defaults = {};
}( jQuery, mediaWiki ) );
