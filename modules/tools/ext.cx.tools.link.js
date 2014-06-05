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

	function LinkCard() {
		this.$card = null;
		this.$removeLink = null;
		this.$link = null;
	}

	LinkCard.prototype.getCard = function () {
		var $imageContainer, $linkInfo;

		$imageContainer = $( '<div>' )
			.addClass( 'card__link-image-container' );
		this.$card = $( '<div>' )
			.addClass( 'card link' );
		this.$removeLink = $( '<div>' )
			.addClass( 'card__remove-link' )
			.text( mw.msg( 'cx-tools-link-remove' ) );
		$linkInfo = $( '<div>' )
			.addClass( 'card__link-info' );
		$linkInfo.append( $( '<div>' )
			.addClass( 'card__title' )
			.text( mw.msg( 'cx-tools-link-title' ) ) );
		$linkInfo.append( $( '<div>' )
			.addClass( 'card__link-text' ) );
		this.$card.append( $imageContainer, $linkInfo, this.$removeLink );
		this.listen();
		return this.$card;
	};

	LinkCard.prototype.removeLink = function () {
		if ( this.$link ) {
			this.$link.after( this.$link.text() ).remove();
			this.stop();
		}
	};

	function getLink( word ) {
		var api = new mw.Api();

		return api.get( {
			action: 'query',
			titles: word,
			prop: 'pageimages',
			piprop: 'thumbnail',
			pithumbsize: 100,
			redirects: true,
			format: 'json'
		}, {
			url: '//' + mw.cx.targetLanguage + '.wikipedia.org/w/api.php',
			dataType: 'jsonp'
		} );
	}

	LinkCard.prototype.listen = function () {
		this.$removeLink.on( 'click', $.proxy( this.removeLink, this ) );
	};

	/**
	 * Save the selection while other screen elements are clicked.
	 * See http://stackoverflow.com/a/3316483/337907
	 */
	function saveSelection() {
		var sel;
		if ( window.getSelection ) {
			sel = window.getSelection();
			if ( sel.getRangeAt && sel.rangeCount ) {
				return sel.getRangeAt( 0 );
			}
		} else if ( document.selection && document.selection.createRange ) {
			return document.selection.createRange();
		}
		return null;
	}

	/**
	 * Restore a saved selection
	 * See http://stackoverflow.com/a/3316483/337907
	 */
	function restoreSelection( range ) {
		var sel;
		if ( range ) {
			if ( window.getSelection ) {
				sel = window.getSelection();
				sel.removeAllRanges();
				sel.addRange( range );
			} else if ( document.selection && range.select ) {
				range.select();
			}
		}
	}

	LinkCard.prototype.start = function ( link ) {
		var word, linkCard = this;

		if ( typeof link === 'string' ) {
			word = link;
		} else {
			this.$link = link;
		}
		if ( word === '' ) {
			this.stop();
			return;
		}
		word = word || this.$link.text();
		if ( !this.$link ) {
			this.$removeLink.empty();
		}
		getLink( word ).done( function ( response ) {
			var imgSrc, pageId, range, page;

			pageId = Object.keys( response.query.pages )[ 0 ];
			if ( pageId === '-1' ) {
				if ( !linkCard.$link ) {
					linkCard.stop();
				}
				return;
			}
			page = response.query.pages[ pageId ];
			range = saveSelection();
			linkCard.$card.find( '.card__link-text' )
				.text( page.title )
				.click( function () {
					restoreSelection( range );
					document.execCommand( 'CreateLink', false, page.title );
				} );
			if ( page.thumbnail ) {
				imgSrc = page.thumbnail.source;
				linkCard.$card.find( '.card__link-image-container' )
					.append( $( '<img>' ).attr( 'src', imgSrc ) );
			}
		} );
	};

	LinkCard.prototype.stop = function () {
		this.$card.remove();
	};

	LinkCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.select.link',
			'mw.cx.search.link',
			'mw.cx.select.word',
			'mw.cx.search.word'
		];
	};

	mw.cx.tools.link = LinkCard;
}( jQuery, mediaWiki ) );
