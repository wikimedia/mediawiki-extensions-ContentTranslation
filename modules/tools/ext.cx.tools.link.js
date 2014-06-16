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
		this.$addLink = null;
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
		this.$addLink = $( '<div>' )
			.addClass( 'card__add-link' )
			.text( mw.msg( 'cx-tools-link-add' ) );
		$linkInfo = $( '<div>' )
			.addClass( 'card__link-info' );
		$linkInfo.append( $( '<div>' )
			.addClass( 'card__title' )
			.text( mw.msg( 'cx-tools-link-title' ) ) );
		$linkInfo.append( $( '<a>' )
			.addClass( 'card__link-text' ) );
		$linkInfo.append( this.$removeLink, this.$addLink );
		this.$card.append( $imageContainer, $linkInfo );
		this.listen();
		return this.$card;
	};

	LinkCard.prototype.removeLink = function () {
		if ( this.$link ) {
			this.$link.after( this.$link.text() ).remove();
			this.stop();
		}
	};

	function getLink( word, language ) {
		var api = new mw.Api();

		return api.get( {
			action: 'query',
			titles: word,
			prop: 'pageimages',
			piprop: 'thumbnail',
			pithumbsize: 150,
			redirects: true,
			format: 'json'
		}, {
			url: '//' + language + '.wikipedia.org/w/api.php',
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} );
	}

	LinkCard.prototype.listen = function () {
		this.$removeLink.on( 'click', $.proxy( this.removeLink, this ) );
	};

	/**
	 * Adapt the given title to a target language
	 * @param {string|string[]} titles A title as string or array of titles
	 * @param {string} targetLanguage Language to which the links are to be adapted
	 * @return {jQuery.Promise}
	 */
	LinkCard.prototype.adapt = function ( titles, targetLanguage ) {
		var api, deferred;

		api = new mw.Api();
		deferred = $.Deferred();
		if ( !$.isArray( titles ) ) {
			titles = new Array( titles );
		}
		api.get( {
			action: 'query',
			titles: titles.join( '|' ),
			prop: 'langlinks',
			lllang: targetLanguage,
			format: 'json'
		}, {
			url: '//' + mw.cx.sourceLanguage + '.wikipedia.org/w/api.php',
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} ).done( function ( response ) {
			var linkPairs = {};
			if ( response.query ) {
				$.each( response.query.pages, function ( pageId, page ) {
					if ( page.title ) {
						linkPairs[ page.title ] = page.langlinks && page.langlinks[ 0 ][ '*' ] ||
							page.title; // Redirects will not have langlinks property
					}
				} );
			}
			deferred.resolve( linkPairs );
		} ).fail( function ( error ) {
			mw.log( 'Error while adapting links:' + error );
			// No need to make this error visible beyond logging
			deferred.resolve( {} );
		} );
		return deferred.promise();
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
	 * Remove the leading slashes or dots if any.
	 */
	function cleanupLinkHref( href ) {
		return href.replace( /^.\//, '' );
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

	LinkCard.prototype.start = function ( link, language ) {
		var word, linkCard = this;

		language = language || mw.cx.targetLanguage;
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
		this.$card.hide();
		if ( this.$link ) {
			this.$card.show();
			// Since this is an existing link, we can show the link title early.
			this.$card.find( '.card__link-text' )
				.text( word )
				.attr( {
					target: '_blank',
					href: '//' + language + '.wikipedia.org/wiki/' + word
				} );
			this.$addLink.hide();
		} else {
			this.$removeLink.hide();
		}
		getLink( word, language ).done( function ( response ) {
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
				.attr( {
					target: '_blank',
					href: '//' + language + '.wikipedia.org/wiki/' + page.title
				} );
			linkCard.$addLink.click( function () {
				restoreSelection( range );
				document.execCommand( 'CreateLink', false, page.title );
			} );
			if ( page.thumbnail ) {
				imgSrc = page.thumbnail.source;
				linkCard.$card.find( '.card__link-image-container' )
					.append( $( '<img>' ).attr( 'src', imgSrc ) );
			}
			linkCard.$card.show();
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

	/**
	 * jQuery plugin to adapt all the links with rel="mw:WikiLink"
	 * @param {string} targetLanguage
	 */
	$.fn.adaptLinks = function ( targetLanguage ) {
		var linkAdaptor = new LinkCard();
		return this.each( function () {
			var $this = $( this ),
				$links,
				sourceTitles;

			$links = $this.find( 'a[rel="mw:WikiLink"]' );
			// Collect all sourceTitles;
			sourceTitles = $links.map( function () {
				var href = $( this ).attr( 'href' );
				// some cleanup
				return cleanupLinkHref( href );
			} ).get();

			function apply( adaptations ) {
				$links.map( function () {
					var $this = $( this ),
						href = $this.attr( 'href' );

					href = cleanupLinkHref( href );
					if ( adaptations[ href ] ) {
						$( this ).prop( 'href', adaptations[ href ] );
					} else {
						// Remove the link
						$( this ).after( $( this ).text() ).remove();
					}
				} );
			}
			linkAdaptor.adapt( sourceTitles, targetLanguage ).done( apply );
		} );
	};
	mw.cx.tools.link = LinkCard;
}( jQuery, mediaWiki ) );
