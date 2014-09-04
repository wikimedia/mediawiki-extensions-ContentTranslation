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
	 * @return {jQuery}
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
		var $linkInstructionSection, $linkInstructionShortcut;

		this.$sourceLinkCard = this.getLinkCard();
		this.$sourceLinkCard.find( '.card__title--language' )
			.text( $.uls.data.getAutonym( mw.cx.sourceLanguage ) );
		$linkInstructionSection = $( '<div>' )
			.addClass( 'card__link-instruction' );
		$linkInstructionShortcut = $( '<div>' )
			.addClass( 'shortcut-info' )
			.text( mw.msg( 'cx-tools-link-instruction-shortcut' ) );
		$linkInstructionSection.append( $linkInstructionShortcut );
		this.$sourceLinkCard.find( '.card__link-info' ).append( $linkInstructionSection );
		return this.$sourceLinkCard.hide();
	};

	/**
	 * Get a target link card
	 * @return {jQuery}
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

	/**
	 * Removes a link if the link is an editable target link
	 * @return {boolean}
	 */
	LinkCard.prototype.removeLink = function () {
		var $parentSection = null;

		if ( this.isEditableTargetLink() ) {
			$parentSection = this.$link.parents( '[contenteditable]' );
			$parentSection.trigger( 'input' );
			this.$link.before( this.$link.text() ).remove();
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
			var redirects,
				linkPairs = {};

			if ( response.query ) {
				redirects = jQuery.extend( {}, response.query.redirects );

				$.each( response.query.pages, function ( pageId, page ) {
					var i, key, title;

					for ( i in redirects ) {
						if ( redirects[ i ].to === page.title ) {
							key = redirects[ i ].from;

							break;
						}
					}

					if ( !key ) {
						key = page.title;
					}

					title = mw.Title.newFromText( key );

					if ( title ) {
						linkPairs[ title.getPrefixedDb() ] = page.langlinks &&
							page.langlinks[ 0 ][ '*' ];
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
		return href.replace( /^\.*\//, '' );
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
	 * Returns the parent node of the current selection as jQuery object
	 * @return {jQuery}
	 */
	function getSelectionParent() {
		var parent, selection;

		if ( window.getSelection ) {
			selection = window.getSelection();
			if ( selection.rangeCount ) {
				parent = selection.getRangeAt( 0 ).commonAncestorContainer;
				if ( parent.nodeType !== 1 ) {
					parent = parent.parentNode;
				}
			}
		} else if ( document.selection ) {
			selection = document.selection;
			if ( selection.type !== 'Control' ) {
				parent = selection.createRange().parentElement();
			}
		}
		return $( parent );
	}

	/**
	 * Tests whether the current selection is in a target segment
	 * @param {range} selection Selection range to test
	 * @return {boolean}
	 */
	function isValidSelection( selection ) {
		var $parent, $parentSection;

		restoreSelection( selection );
		$parent = getSelectionParent();

		if ( $parent.is( '[contenteditable="false"]' ) ) {
			return false;
		}
		// Get parent section
		$parentSection = $parent.parents( '[contenteditable]' );
		// Check if that section is editable
		return $parentSection.prop( 'contenteditable' );
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
	 * @param {string} [id] Link id
	 * @return {jQuery}
	 */
	LinkCard.prototype.createInternalLink = function ( linkText, title, id ) {
		var $link;

		$link = $( '<a>' )
			.addClass( 'cx-target-link' )
			.text( linkText )
			.attr( {
				href: title,
				rel: 'mw:WikiLink'
			} );

		if ( id ) {
			$link.attr( 'data-linkid', id );
		}

		pasteHtmlAtSelection( $link[ 0 ].outerHTML );

		return $link;
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
			if ( page.thumbnail ) {
				imgSrc = page.thumbnail.source;
				linkCard.$sourceLinkCard.find( '.card__link-image-container' )
					.append( $( '<img>' ).attr( 'src', imgSrc ) );
			}
			linkCard.$sourceLinkCard.show();
			linkCard.$card.show();
			linkCard.onShow();
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
			linkCard.$removeLink.click( function () {
				restoreSelection( range );
				linkCard.removeLink();
			} );
			if ( page.thumbnail ) {
				imgSrc = page.thumbnail.source;
				linkCard.$targetLinkCard.find( '.card__link-image-container' )
					.append( $( '<img>' ).attr( 'src', imgSrc ) );
			}
			linkCard.$targetLinkCard.show();
			linkCard.$card.show();
			linkCard.onShow();
		} );
	};

	LinkCard.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	/**
	 * For the link, get the corresponding link in source section.
	 * @return {jQuery}
	 */
	LinkCard.prototype.getSourceLink = function () {
		if ( !this.$link ) {
			return null;
		}

		return $( '.cx-link[data-linkid="' + this.$link.data( 'linkid' ) + '"]' );
	};

	/**
	 * For the link, get the corresponding link in target section.
	 * @return {jQuery}
	 */
	LinkCard.prototype.getTargetLink = function () {
		if ( !this.$link ) {
			return null;
		}

		return $( '.cx-target-link[data-linkid="' + this.$link.data( 'linkid' ) + '"]' );
	};

	/**
	 * Check if the link is an editable link in target section
	 * @return {boolean}
	 */
	LinkCard.prototype.isEditableTargetLink = function () {

		// Check to make sure we have a link
		if ( !this.$link ) {
			return false;
		}

		// Check if the link is a target link
		if ( !this.$link.is( '.cx-target-link' ) ) {
			return false;
		}

		// Check to make sure none of the link's parents are not contenteditable
		if ( this.$link.parents( '[contenteditable="false"]' ).length > 0 ) {
			return false;
		}

		return true;
	};

	/**
	 * Check if the link, the click of which caused the current link card
	 * is a link in source section.
	 * @return {boolean}
	 */
	LinkCard.prototype.isSourceLink = function () {
		if ( !this.$link ) {
			return false;
		}

		return this.$link.is( '.cx-link' );
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
		var title, sourceTitle, $sourceLink, selection, linkCard = this;

		// If language is not given, use target language
		language = language || mw.cx.targetLanguage;

		// Capture the selection
		selection = saveSelection();

		// link can be link text or jQuery link object
		if ( typeof link === 'string' ) {
			title = link;
		} else {
			title = cleanupLinkHref( link.attr( 'href' ) );
			this.$link = link;
			this.$link.addClass( 'cx-highlight--blue' );
		}
		// Do we have a valid title now?
		if ( !title || !title.trim() ) {
			this.stop();
			return;
		}

		this.highlightLink();
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
			if ( this.isEditableTargetLink() === false ) {
				this.$removeLink.hide();
			}
		} else {
			this.$removeLink.hide();
		}

		if ( language === mw.cx.targetLanguage ) {
			linkCard.prepareTargetLinkCard( title, language );
			$sourceLink = this.getSourceLink();
			sourceTitle = $sourceLink && $sourceLink.data( 'parsoid' ) &&
				$sourceLink.data( 'parsoid' ).a.href;
			if ( sourceTitle ) {
				sourceTitle = cleanupLinkHref( sourceTitle );
				linkCard.prepareSourceLinkCard( sourceTitle, mw.cx.sourceLanguage );
			}
		} else {
			// Adapt the title to the target language from source language
			linkCard.adapt( title, mw.cx.targetLanguage ).done( function ( adaptations ) {
				var $newLink, adaptedTitle = adaptations[ title ];
				if ( !adaptedTitle ) {
					return;
				}
				linkCard.prepareTargetLinkCard( adaptedTitle, mw.cx.targetLanguage );
				// If text is selected, create a new internal link
				if ( isValidSelection( selection ) && selection.toString().length > 0 ) {
					$newLink = linkCard.createInternalLink( selection.toString(), adaptedTitle, linkCard.$link.data( 'linkid' ) );
					mw.hook( 'mw.cx.select.link' ).fire( $newLink );
				}
			} );
			linkCard.prepareSourceLinkCard( title, mw.cx.sourceLanguage );

		}

		restoreSelection( selection );
	};

	/**
	 * Remove the card
	 */
	LinkCard.prototype.removeCard = function () {
		this.removeLinkHighlight();
		this.$card.remove();
	};

	LinkCard.prototype.stop = function () {
		this.removeCard();
		mw.hook( 'mw.cx.tools.shown' ).fire( false );
	};

	/**
	 * Highlight the current link pairs.
	 */
	LinkCard.prototype.highlightLink = function () {
		if ( this.$link ) {
			$( '[data-linkid="' + this.$link.data( 'linkid' ) + '"]' )
				.addClass( 'cx-highlight--blue' );
		}
	};

	/**
	 * Remove highlight from the current link pairs.
	 */
	LinkCard.prototype.removeLinkHighlight = function () {
		if ( this.$link ) {
			$( '[data-linkid="' + this.$link.data( 'linkid' ) + '"]' )
				.removeClass( 'cx-highlight--blue' );

			// If the link exists only in translation, in the case of an added link,
			// there will not be data-linkid. So remove it explicitly.
			this.$link.removeClass( 'cx-highlight--blue' );
		}
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
	 * Click handler for the links in translation column.
	 */
	function linkClickHandler() {
		/*jshint validthis:true */
		var $link = $( this ),
			linkType = $link.parent().attr( 'typeof' );

		// Avoid reference links and images
		if ( linkType !== 'mw:Extension/ref' &&
			linkType !== 'mw:Image/Thumb'
		) {
			mw.hook( 'mw.cx.select.link' ).fire( $link );
		}

		return false;
	}

	function adaptLinks( $section ) {
		var linkAdaptor = new LinkCard(),
			$links,
			sourceTitles;

		// Handle clicks on the section, including future links
		$section.on( 'click', 'a', linkClickHandler );
		$links = $section.find( 'a[rel="mw:WikiLink"]' );
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
				var $link = $( this ),
					href = $link.attr( 'href' );

				// add a class to the link at this section - to identify
				// them as links in translation.
				$link.removeClass( 'cx-link' ).addClass( 'cx-target-link' );

				href = cleanupLinkHref( href );
				if ( adaptations[ href ] ) {
					$link.prop( 'href', adaptations[ href ] );
				} else {
					// Remove the link
					$link.after( $( this ).text() ).remove();
				}
			} );
		}
		linkAdaptor.adapt( sourceTitles, mw.cx.targetLanguage ).done( apply );
	}

	mw.cx.tools.link = LinkCard;

	$( function () {
		mw.hook( 'mw.cx.translation.postMT' ).add( adaptLinks );
	} );
}( jQuery, mediaWiki ) );
