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
	function ContentTranslationSource( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxSource.defaults, options );
		this.$title = null;
		this.$content = null;
		this.init();
	}

	ContentTranslationSource.prototype.init = function () {
		mw.cx.sourceTitle = new mw.Uri().query.page;
		if ( mw.user.isAnon() ) {
			mw.hook( 'mw.cx.error.anonuser' ).fire();
			return;
		}
		if ( !mw.cx.sourceTitle ) {
			this.showSourceSelector();
			return;
		}
		mw.cx.targetLanguage = new mw.Uri().query.to || mw.config.get( 'wgUserLanguage' );
		mw.cx.sourceLanguage = new mw.Uri().query.from || mw.config.get( 'wgContentLanguage' );
		this.render();
		this.fetchPage( mw.cx.sourceTitle, mw.cx.sourceLanguage );
		this.listen();
	};

	/**
	 * Fetch the page with given title and language.
	 * Response contains
	 * @param {string} title Title of the page to be fetched
	 * @param {string} language Language of the page requested. This will be used to
	 *     identify the host wiki.
	 */
	ContentTranslationSource.prototype.fetchPage = function ( title, language ) {
		var fetchPageUrl, cxSource = this;

		fetchPageUrl = mw.config.get( 'wgContentTranslationServerURL' ) +
			'/page/' + encodeURIComponent( language ) + '/' + encodeURIComponent( title );

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

	ContentTranslationSource.prototype.showSourceSelector = function () {
		mw.loader.using( 'ext.cx.source.selector' ).then( function () {
			mw.hook( 'mw.cx.source.select' ).fire();
		} );
	};

	function getSourceArticleUrl() {
		var uri = new mw.Uri(),
			domainTemplate = mw.config.get( 'wgContentTranslationDomainTemplate' );

		uri.host = domainTemplate.replace( '$1', mw.cx.sourceLanguage );
		uri.path = mw.config.get( 'wgScript' );
		uri.query = {
			title: mw.cx.sourceTitle
		};

		return uri.toString();
	}

	/**
	 * Render the source content column.
	 */
	ContentTranslationSource.prototype.render = function () {
		var $languageLabel, $articleLink, $subHeading, title;

		this.$container.prop( {
			lang: mw.cx.sourceLanguage,
			dir: $.uls.data.getDir( mw.cx.sourceLanguage )
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
			.addClass( 'cx-column__language-label' )
			.text( $.uls.data.getAutonym( mw.cx.sourceLanguage ) );

		$articleLink = $( '<span>' )
			.addClass( 'cx-column__sub-heading__view-page' )
			.append( $( '<a>' )
				.prop( {
					href: getSourceArticleUrl(),
					target: '_blank'
				} )
				.text( mw.msg( 'cx-source-view-page' ) )
		);

		$subHeading = $( '<div>' )
			.addClass( 'cx-column__sub-heading' )
			.append( $languageLabel, $articleLink );

		this.$content = $( '<div>' )
			.addClass( 'cx-column__content' );

		this.$container.append( this.$title, $subHeading, this.$content );
		this.showLoadingIndicator();
	};

	ContentTranslationSource.prototype.load = function ( content ) {
		this.$content.html( content.segmentedContent ).cxFilterSource();

		// @todo figure out what should be done here
		this.$content.find( 'base' ).detach();

		mw.hook( 'mw.cx.source.ready' ).fire();
	};

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
		mw.hook( 'mw.cx.source.loaded' ).add( $.proxy( this.load, this ) );
		this.$content.on( 'click', function () {
			var selection = window.getSelection().toString();
			if ( selection.trim() ) {
				mw.hook( 'mw.cx.select.word' ).fire( selection );
			}
		} );

		this.$content.on( 'click', 'a', function ( e ) {
			var url,
				$link = $( this );

			// Allow link exploration
			if ( e.shiftKey || e.ctrlKey ) {
				url = '//' + mw.cx.sourceLanguage + '.wikipedia.org/wiki/' + $link.attr( 'href' );
				window.open( url, '_blank' );

				return false;
			}

			// Avoid all reference links
			if ( $link.parent().attr( 'typeof' ) !== 'mw:Extension/ref' ) {
				mw.hook( 'mw.cx.select.link' ).fire( $link, mw.cx.sourceLanguage );
			} else {
				mw.hook( 'mw.cx.select.reference' ).fire( $link.parent().prop( 'id' ), mw.cx.sourceLanguage );
			}

			// Disable link click
			return false;
		} );

		this.$content.on( 'mouseenter', 'a', function ( e ) {
			var $link = $( this ),
				linkid = $( this ).data( 'linkid' );

			$( '[data-linkid="' + linkid + '"]' ).addClass( 'cx-highlight' );

			if ( e.shiftKey || e.ctrlKey ) {
				$link.attr( 'title', mw.msg( 'cx-tools-link-hover-tooltip' ) );
			}
		} );

		this.$content.on( 'mouseleave', 'a', function () {
			var $link = $( this ),
				linkid = $link.data( 'linkid' );

			$( '[data-linkid="' + linkid + '"]' ).removeClass( 'cx-highlight' );
		} );

		// Highlight segment pairs
		this.$content.on( 'mouseenter mouseleave', '.cx-segment', function () {
			var $segment = $( this ),
				segmentId = $segment.data( 'segmentid' );
			$( '[data-segmentid="' + segmentId + '"]' ).toggleClass( 'cx-highlight' );
		} );
	};

	$.fn.cxSource = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxSource' );

			if ( !data ) {
				$this.data(
					'cxSource', ( data = new ContentTranslationSource( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	$.fn.cxSource.defaults = {};
}( jQuery, mediaWiki ) );
