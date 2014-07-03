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
	 * Link Card
	 * @class
	 */
	function LinkCard() {
		this.$card = null;
		this.$removeLink = null;
		this.$addLink = null;
		this.$link = null;
		this.$sourceLinkCard = null;
		this.$targetLinkCard = null;
	}

	/**
	 * Get a link card
	 * @rertun {jQuery}
	 */
	LinkCard.prototype.getLinkCard = function () {
		var $card, $imageContainer,
			$cardHeader, $linkInfo;

		$card = $( '<div>' )
			.addClass( 'card' );
		$imageContainer = $( '<div>' )
			.addClass( 'card__link-image-container' );
		$linkInfo = $( '<div>' )
			.addClass( 'card__link-info' );
		$cardHeader = $( '<div>' )
			.addClass( 'card__link-header' );
		$cardHeader.append( $( '<div>' )
			.addClass( 'card__title' )
			.text( mw.msg( 'cx-tools-link-title' ) ) );
		$cardHeader.append( $( '<div>' )
			.addClass( 'card__title--language' ) );
		$linkInfo.append( $cardHeader );
		$linkInfo.append( $( '<a>' )
			.addClass( 'card__link-text' ) );
		$card.append( $imageContainer, $linkInfo );
		return $card;
	};

	/**
	 * Get a source link card
	 * @return {jQuery}
	 */
	LinkCard.prototype.getSourceLinkCard = function () {
		var $linkInstructionSection, $linkInstruction,
			$linkInstructionShortcut;

		this.$sourceLinkCard = this.getLinkCard();
		this.$sourceLinkCard.find( '.card__title--language' )
			.text( $.uls.data.getAutonym( mw.cx.sourceLanguage ) );
		$linkInstructionSection = $( '<div>' )
			.addClass( 'card__link-instruction' );
		$linkInstruction = $( '<div>' )
			.text( mw.msg( 'cx-tools-link-instruction-header' ) );
		$linkInstructionShortcut = $( '<div>' )
			.addClass( 'shortcut-info' )
			.text( mw.msg( 'cx-tools-link-instruction-shortcut' ) );
		$linkInstructionSection.append( $linkInstruction, $linkInstructionShortcut );
		this.$sourceLinkCard.find( '.card__link-info' )
			.append( $linkInstructionSection );
		return this.$sourceLinkCard.hide();
	};

	/**
	 * Get a target link card
	 * @rertun {jQuery}
	 */
	LinkCard.prototype.getTargetLinkCard = function () {
		this.$targetLinkCard = this.getLinkCard();
		this.$targetLinkCard.find( '.card__title--language' )
			.text( $.uls.data.getAutonym( mw.cx.targetLanguage ) );
		this.$removeLink = $( '<div>' )
			.addClass( 'card__remove-link' )
			.text( mw.msg( 'cx-tools-link-remove' ) );
		this.$addLink = $( '<div>' )
			.addClass( 'card__add-link' )
			.text( mw.msg( 'cx-tools-link-add' ) );
		this.$targetLinkCard.find( '.card__link-info' )
			.append( this.$addLink, this.$removeLink );
		return this.$targetLinkCard.hide();
	};

	/**
	 * Get all applicable cards.
	 * @return {jQuery}
	 */
	LinkCard.prototype.getCard = function () {
		this.$card = $( '<div>' )
			.addClass( 'cards link' );
		this.$card.append( this.getSourceLinkCard() );
		this.$card.append( this.getTargetLinkCard() );
		this.listen();
		return this.$card.hide();
	};

	LinkCard.prototype.removeLink = function () {
		if ( this.$link ) {
			this.$link.after( this.$link.text() ).remove();
			this.stop();
		}
	};

	/**
	 * Get the link for a given title and language
	 * @param {string} title
	 * @param {string} language
	 * @return {jQuery.Promise}
	 */
	function getLink( title, language ) {
		var api = new mw.Api();

		return api.get( {
			action: 'query',
			titles: title,
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

	/**
	 * Event listeners
	 */
	LinkCard.prototype.listen = function () {
		var linkCard = this;

		this.$removeLink.on( 'click', $.proxy( this.removeLink, this ) );
		// Bring the card to front when clicked
		this.$card.on( 'click', '.card:first', function () {
			$( this ).insertAfter( linkCard.$card.find( '.card:last' ) );
		} );
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
			redirects: true,
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
					var title = mw.Title.newFromText( page.title );

					if ( title ) {
						linkPairs[ title.getPrefixedDb() ] = page.langlinks && page.langlinks[ 0 ][ '*' ];
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
	 * Remove the leading ./ added by parsoid.
	 * @param {string} href Link target
	 * @return {string} Cleaned up href
	 */
	function cleanupLinkHref( href ) {
		return href.replace( /^\.\//, '' );
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

	/**
	 * Paste a given html string at the selection.
	 * It replaces the selected text if any. Otherwise it insert
	 * at caret position.
	 * Tries to do it in a cross browser compatible way.
	 * See http://stackoverflow.com/a/6691294/337907, Credits: Tim Down
	 * @param {string} html The html string
	 */
	function pasteHtmlAtSelection( html ) {
		var sel, el, range, frag, node, lastNode;

		if ( window.getSelection ) {
			// IE9 and non-IE
			sel = window.getSelection();
			if ( sel.getRangeAt && sel.rangeCount ) {
				range = sel.getRangeAt( 0 );
				range.deleteContents();

				// Range.createContextualFragment() would be useful here but is
				// only relatively recently standardized and is not supported in
				// some browsers (IE9, for one)
				el = document.createElement( 'div' );
				el.innerHTML = html;
				frag = document.createDocumentFragment();
				while ( ( node = el.firstChild ) ) {
					lastNode = frag.appendChild( node );
				}
				range.insertNode( frag );

				// Preserve the selection
				if ( lastNode ) {
					range = range.cloneRange();
					range.setStartAfter( lastNode );
					range.collapse( true );
					sel.removeAllRanges();
					sel.addRange( range );
				}
			}
		} else if ( document.selection && document.selection.type !== 'Control' ) {
			// IE < 9
			document.selection.createRange().pasteHTML( html );
		}
	}

	/**
	 * Create a wiki internal link with given link text and target and paste it into
	 * current selection in translation column.
	 *
	 * @param {string} linkText Link display text
	 * @param {string} title Link target
	 */
	LinkCard.prototype.createInternalLink = function ( linkText, title ) {
		var $link;

		$link = $( '<a>' )
			.addClass( 'cx-link' )
			.text( linkText )
			.attr( {
				href: title,
				rel: 'mw:WikiLink'
			} );
		pasteHtmlAtSelection( $link[ 0 ].outerHTML );
	};

	/**
	 * Make the given element to be an external link to a page in given language.
	 * @param {jQuery} $a Link element
	 * @param {string} target The page title in the target wikis
	 * @param {string} language Language code of target wikis
	 */
	LinkCard.prototype.createExternalLink = function ( $a, target, language ) {
		// Normalize the text for display and href
		var title = mw.Title.newFromText( target );
		title = title ? title.getPrefixedText() : target;

		$a.text( title );
		$a.attr( {
			target: '_blank',
			href: '//' + language + '.wikipedia.org/wiki/' + title
		} );
	};

	/**
	 * Prepare the link card for the source language
	 * @param {string} title The title
	 * @param {string} language Source language code
	 */
	LinkCard.prototype.prepareSourceLinkCard = function ( title, language ) {
		var linkCard = this;

		getLink( title, language ).done( function ( response ) {
			var imgSrc, pageId, range, page;

			pageId = Object.keys( response.query.pages )[ 0 ];
			if ( pageId === '-1' ) {
				if ( !linkCard.$link ) {
					linkCard.$sourceLinkCard.hide();
				}
				return;
			}
			page = response.query.pages[ pageId ];
			range = saveSelection();
			linkCard.createExternalLink(
				linkCard.$sourceLinkCard.find( '.card__link-text' ),
				page.title,
				language
			);
			linkCard.$addLink.click( function () {
				restoreSelection( range );
				document.execCommand( 'CreateLink', false, page.title );
			} );
			if ( page.thumbnail ) {
				imgSrc = page.thumbnail.source;
				linkCard.$sourceLinkCard.find( '.card__link-image-container' )
					.append( $( '<img>' ).attr( 'src', imgSrc ) );
			}
			linkCard.$sourceLinkCard.show();
			linkCard.$card.show();
		} );
	};

	/**
	 * Prepare the link card for the target language
	 * @param {string} title The title
	 * @param {string} language Target language code
	 */
	LinkCard.prototype.prepareTargetLinkCard = function ( title, language ) {
		var linkCard = this;

		getLink( title, language ).done( function ( response ) {
			var imgSrc, pageId, range, page;

			pageId = Object.keys( response.query.pages )[ 0 ];
			if ( pageId === '-1' ) {
				linkCard.$targetLinkCard.hide();
				return;
			}
			page = response.query.pages[ pageId ];
			range = saveSelection();

			linkCard.createExternalLink(
				linkCard.$targetLinkCard.find( '.card__link-text' ),
				page.title,
				language
			);
			linkCard.$addLink.click( function () {
				restoreSelection( range );
				linkCard.createInternalLink( title, page.title );
			} );
			if ( page.thumbnail ) {
				imgSrc = page.thumbnail.source;
				linkCard.$targetLinkCard.find( '.card__link-image-container' )
					.append( $( '<img>' ).attr( 'src', imgSrc ) );
			}
			linkCard.$targetLinkCard.show();
			linkCard.$card.show();
		} );
	};

	/**
	 * Executed when link cards are shown, for example when a link is clicked on
	 * the source or translation column (jQuery type for link) or when a word is
	 * searched or selected in the source or translation column (string).
	 *
	 * @param {string|jQuery} link The link element or target title.
	 * @param {string} [language] The language where the link points to.
	 */
	LinkCard.prototype.start = function ( link, language ) {
		var title, linkCard = this;

		// If language is not given, use target language
		language = language || mw.cx.targetLanguage;

		// link can be link text or jQuery link object
		if ( typeof link === 'string' ) {
			title = link;
		} else {
			title = cleanupLinkHref( link.attr( 'href' ) );
			this.$link = link;
		}
		// Do we have a valid title now?
		if ( !title || !title.trim() ) {
			this.stop();
			return;
		}

		if ( this.$link && language === mw.cx.targetLanguage ) {
			this.$card.show();
			// Since this is an existing link, we can show the link title early.
			this.$card.find( '.card__link-text' )
				.text( title )
				.attr( {
					target: '_blank',
					href: '//' + language + '.wikipedia.org/wiki/' + title
				} );
			this.$addLink.hide();
		} else {
			this.$removeLink.hide();
		}

		if ( language === mw.cx.targetLanguage ) {
			linkCard.prepareTargetLinkCard( title, language );
		} else {
			// Adapt the title to the target language from source language
			linkCard.adapt( title, mw.cx.targetLanguage ).done( function ( adaptations ) {
				var adaptedTitle = adaptations[ title ];
				if ( !adaptedTitle ) {
					return;
				}
				linkCard.prepareTargetLinkCard( adaptedTitle, mw.cx.targetLanguage );
			} );
			linkCard.prepareSourceLinkCard( title, mw.cx.sourceLanguage );
		}
	};

	LinkCard.prototype.stop = function () {
		this.$card.remove();
	};

	LinkCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.select.link', // Select a link by clicking - in translation or source
			'mw.cx.search.link', // Search a link title using search box
			'mw.cx.select.word', // Select a word using mouse or keyboard - in translation or source
			'mw.cx.search.word' // Search a word title using search box
		];
	};

	/**
	 * Click handler for the links in translation column
	 */
	function linkClickHandler() {
		/*jshint validthis:true */
		var $link = $( this );

		// avoid all reference links
		if ( $link.parent().attr( 'typeof' ) !== 'mw:Extension/ref' ) {
			mw.hook( 'mw.cx.select.link' ).fire( $link );
		}
	}
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

			// Handle clicks on the section, including future links
			$this.on( 'click', 'a', linkClickHandler );
			$links = $this.find( 'a[rel="mw:WikiLink"]' );
			// Collect all sourceTitles;
			sourceTitles = $links.map( function () {
				var href = $( this ).attr( 'href' );
				// some cleanup
				return cleanupLinkHref( href );
			} ).get();

			// This callback is called after we have fetched the interwiki links. It
			// updates the href appropriate for target language or removes the link.
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
