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
	 * Fetch the page with given title and language.
	 * Response contains
	 * @param {string} title Title of the page to be fetched
	 * @param {string} language Language of the page requested. This will be used to
	 *     identify the host wiki.
	 */
	mw.cx.fetchPage = function ( title, language ) {
		$.get( mw.config.get( 'wgContentTranslationServerURL' ) + '/page/' + language + '/' + title )
			.done( function ( response ) {
				mw.cx.data = response;
				mw.hook( 'mw.cx.source.loaded' ).fire();
			} ).fail( function () {
				$( '.cx-header__infobar' )
					.text( mw.msg( 'cx-error-server-connection' ) )
					.show();
			} );
	};

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
		mw.cx.targetLanguage = new mw.Uri().query.to || mw.config.get( 'wgUserLanguage' );
		mw.cx.sourceLanguage = new mw.Uri().query.from || mw.config.get( 'wgContentLanguage' );
		this.render();
		mw.cx.fetchPage( mw.cx.sourceTitle, mw.cx.sourceLanguage );
		this.listen();
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
	 * Render the source content column
	 */
	ContentTranslationSource.prototype.render = function () {
		var $heading, $languageLabel, $articleLink, $subHeading, $loader, title;

		this.$container.prop( {
			lang: mw.cx.sourceLanguage,
			dir: $.uls.data.getDir( mw.cx.sourceLanguage )
		} );

		title = mw.Title.newFromText( mw.cx.sourceTitle );

		if ( title ) {
			mw.cx.sourceTitle = title.getPrefixedText();
		}

		$heading = $( '<h2>' )
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

		$loader = $( '<div>' )
			.addClass( 'cx-column__content' )
			.text( mw.msg( 'cx-source-loading', mw.cx.sourceTitle ) );

		this.$container.append( $heading, $subHeading, $loader );

		this.$title = this.$container.find( '.cx-column__title' );
		this.$content = this.$container.find( '.cx-column__content' );
	};

	ContentTranslationSource.prototype.load = function () {
		this.$content.html( mw.cx.data.segmentedContent ).cxFilterSource();

		// @todo figure out what should be done here
		this.$content.find( 'base' ).detach();

		mw.hook( 'mw.cx.source.ready' ).fire();
	};

	/**
	 * Disable all links in the content area.
	 */
	ContentTranslationSource.prototype.disableLinks = function () {
		this.$content.find( 'a' ).bind( 'click', function () {
			var $link = $( this );
			// avoid all reference links
			if ( $link.parent().attr( 'typeof' ) === 'mw:Extension/ref' ) {
				mw.hook( 'mw.cx.select.reference' ).fire( $link.text(), $link.parent().data( 'mw' ) );
			} else {
				mw.hook( 'mw.cx.select.link' ).fire( $link.text(), mw.cx.sourceLanguage );
			}
			// Disable link click
			return false;
		} );
	};

	ContentTranslationSource.prototype.listen = function () {
		mw.hook( 'mw.cx.source.loaded' ).add( $.proxy( this.load, this ) );

		this.$content.on( 'click', function () {
			var selection = window.getSelection().toString();
			if ( selection ) {
				mw.hook( 'mw.cx.select.word' ).fire( selection.toLowerCase() );
			}
		} );

		this.$content.on( 'click', 'a', function ( e ) {
			var $link = $( this ),
				url;
			// Allow link exploration
			if ( e.shiftKey || e.ctrlKey ) {
				url = '//' + mw.cx.sourceLanguage + '.wikipedia.org/wiki/' + $link.attr( 'href' );
				window.open( url, '_blank' );
				return false;
			}
			// avoid all reference links
			if ( $link.parent().attr( 'typeof' ) !== 'mw:Extension/ref' ) {
				mw.hook( 'mw.cx.select.link' ).fire( $link, mw.cx.sourceLanguage );
			}
			// Disable link click
			return false;
		} );
		this.$content.on( 'mouseenter', 'a', function ( e ) {
			var $link = $( this ),
				linkid = $( this ).data( 'linkid' );
			$( '[data-linkid="' + linkid + '"]' ).addClass( 'highlight' );
			if ( e.shiftKey || e.ctrlKey ) {
				$link
					.addClass( 'highlight--blue' )
					.attr( 'title', mw.msg( 'cx-tools-link-hover-tooltip' ) );
			}
		} );
		this.$content.on( 'mouseleave', 'a', function () {
			var $link = $( this ),
				linkid = $link.data( 'linkid' );
			$( '[data-linkid="' + linkid + '"]' ).removeClass( 'highlight' );
			$link.removeClass( 'highlight--blue' );
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
