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

	var cache = {};
	/**
	 * Link Card
	 * @class
	 * @param {mw.cx.SiteMapper} siteMapper
	 */
	function LinkCard( siteMapper ) {
		this.$card = null;
		this.$removeLink = null;
		this.$addLink = null;
		this.$link = null;
		this.$sourceLinkCard = null;
		this.$targetLinkCard = null;

		this.siteMapper = siteMapper;
	}

	/**
	 * Get a link card
	 * @return {jQuery}
	 */
	LinkCard.prototype.getLinkCard = function () {
		var $card,
			$imageContainer, $linkContainer,
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

		$linkContainer = $( '<div>' )
			.addClass( 'card__link-container' );

		$linkContainer.append( $( '<a>' )
			.addClass( 'card__link-text' ) );

		$linkInfo.append( $linkContainer );

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
	 * Get the link data for a given title and language.
	 * @param {mediawiki.Api} api
	 * @param {string} title
	 * @param {string} language
	 * @return {jQuery.Promise}
	 */
	function getLink( api, title, language ) {
		var request;

		// Normalize
		title = mw.Title.newFromText( title ).toString();
		if ( cache[ title ] && cache[ title ][ language ] ) {
			return cache[ title ][ language ].promise();
		}

		request = api.get( {
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

		cache[ title ] = cache[ title ] || {};
		cache[ title ][ language ] = request;

		return request.promise();
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
	 * @param {string} language Language to which the links are to be adapted
	 * @return {jQuery.Promise}
	 */
	LinkCard.prototype.adapt = function ( titles, language ) {
		var deferred = $.Deferred();

		if ( !$.isArray( titles ) ) {
			titles = new Array( titles );
		}

		this.siteMapper.getApi( mw.cx.sourceLanguage ).get( {
			action: 'query',
			titles: titles.join( '|' ),
			prop: 'langlinks',
			lllang: language,
			redirects: true,
			format: 'json'
		}, {
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
	 * Remove the leading ./ added by parsoid.
	 * @param {string} href Link target
	 * @return {string} Cleaned up href
	 */
	function cleanupLinkHref( href ) {
		return href && href.replace( /^\.*\//, '' );
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
	 * @param {object} selection, the selection to test
	 * @return {boolean}
	 */
	function isValidSelection( selection ) {
		var $parent, $parentSection;

		if ( !selection || !selection.toString().length ) {
			return false;
		}
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
	 * Create a wiki internal link with given link text and target and paste it into
	 * current selection in translation column.
	 *
	 * @param {string} linkText Link display text
	 * @param {string} title Link target
	 * @param {string} [id] Link id
	 * @return {jQuery}
	 */
	LinkCard.prototype.createInternalLink = function ( linkText, title, id ) {
		var $link, $parentSection;

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

		mw.cx.selection.pasteHTML( $link[ 0 ].outerHTML );

		$parentSection = $( '.cx-target-link[data-linkid="' + id + '"]' )
			.parents( '[contenteditable]' );
		$parentSection.trigger( 'input' );

		return $link;
	};

	/**
	 * Make the given element to be an external link to a page in given language.
	 * @param {jQuery} $link Link element
	 * @param {string} target The page title in the target wikis
	 * @param {string} language Language code of target wikis
	 */
	LinkCard.prototype.createExternalLink = function ( $link, target, language ) {
		// Normalize the text for display and href
		var title = mw.Title.newFromText( target );

		title = title ? title.getPrefixedText() : target;

		this.setLinkAttributes( $link, title, language );
	};

	/**
	 * Prepare the link card for the source language
	 * @param {string} title The title
	 * @param {string} language Source language code
	 */
	LinkCard.prototype.prepareSourceLinkCard = function ( title, language ) {
		var api,
			linkCard = this;

		if ( !title ) {
			return;
		}

		api = this.siteMapper.getApi( language );
		getLink( api, title, language ).done( function ( response ) {
			var imgSrc, pageId, page;

			pageId = Object.keys( response.query.pages )[ 0 ];
			if ( pageId === '-1' ) {
				if ( linkCard.$link ) {
					linkCard.$link.addClass( 'new' );
				}

				return;
			}

			page = response.query.pages[ pageId ];
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
		var api,
			linkCard = this;

		if ( !title ) {
			return;
		}

		api = this.siteMapper.getApi( language );
		getLink( api, title, language ).done( function ( response ) {
			var pageId, page, selection, imgSrc;

			pageId = Object.keys( response.query.pages )[ 0 ];
			if ( pageId === '-1' ) {
				linkCard.$targetLinkCard.hide();
				return;
			}
			page = response.query.pages[ pageId ];
			selection = mw.cx.selection.get();

			linkCard.createExternalLink(
				linkCard.$targetLinkCard.find( '.card__link-text' ),
				page.title,
				language
			);

			if ( isValidSelection( selection ) ) {
				// Some text selected in translation column and it has a link.
				// Set up the add link button.
				linkCard.$addLink.click( function () {
					mw.cx.selection.restore( 'translation' );
					linkCard.createInternalLink( selection.toString(), page.title );
				} );

				// Show the add link button
				linkCard.$addLink.show();

				// Hide the remove link button
				linkCard.$removeLink.hide();
			} else {
				// Make sure this target link is not deleted.
				// The valid page id above might be from cache.
				if ( linkCard.getTargetLink().length === 0 ) {
					linkCard.$targetLinkCard.hide();
					return;
				}
				// Nothing selected. Hide the add link button.
				linkCard.$addLink.hide();
				linkCard.$removeLink.click( function () {
					mw.cx.selection.restore( 'translation' );
					linkCard.removeLink();
				} );
			}

			if ( !linkCard.$link ) {
				// There is no link to remove. Card came from search.
				// Prepare add link
				linkCard.$addLink.click( function () {
					mw.cx.selection.restore( 'translation' );
					linkCard.createInternalLink( selection.toString(), page.title );
				} );

				// Show the add link button
				linkCard.$addLink.show();
				// Hide the remove link button
				linkCard.$removeLink.hide();
			}

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

		// Check if the link itself is non editable. Happens in the case of
		// non-editable inline templates
		if ( this.$link.is( '[contenteditable="false"]' ) ) {
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
	 * Get a valid normalized title from the given text
	 * If the text is not suitable for the title, return null;
	 * Validation is done by mw.Title
	 * @param {string} text Text for the title.
	 * @return {string|null}
	 */
	function getValidTitle( text ) {
		var title = text.trim();
		title = mw.Title.newFromText( title );
		title = title && title.toString();
		return title;
	}

	/**
	 * Executed when link cards are shown, for example when a link is clicked on
	 * the source or translation column (jQuery type for link) or when a word is
	 * searched or selected in the source or translation column (string).
	 *
	 * @param {string|jQuery} link The link element or target title.
	 * @param {string} [language] The language where the link points to.
	 */
	LinkCard.prototype.start = function ( link, language ) {
		var selection, title, targetTitle, sourceTitle, $targetLink, $sourceLink;

		// If language is not given, use target language
		language = language || mw.cx.targetLanguage;

		// Capture the current selection
		selection = mw.cx.selection.get();

		// If the link is a source link, restore the selection
		// in the translation column
		if ( language === mw.cx.sourceLanguage ) {
			mw.cx.selection.restore( 'translation' );
		}

		// link can be link text or jQuery link object
		if ( typeof link === 'string' ) {
			title = getValidTitle( link );
		} else {
			title = cleanupLinkHref( link.attr( 'href' ) );
			this.$link = link;
		}

		// Do we have a valid title now?
		if ( !title ) {
			this.stop();
			return;
		}

		this.highlightLink();
		if ( this.$link && language === mw.cx.targetLanguage ) {
			targetTitle = title;
		} else {
			sourceTitle = title;
		}

		if ( !targetTitle ) {
			$targetLink = this.getTargetLink();
			targetTitle = $targetLink && $targetLink.attr( 'href' ) || title;
		}

		if ( !sourceTitle ) {
			$sourceLink = this.getSourceLink();
			sourceTitle = $sourceLink.attr( 'href' );
			sourceTitle = cleanupLinkHref( sourceTitle );
		}

		this.prepareSourceLinkCard( sourceTitle, mw.cx.sourceLanguage );
		this.prepareTargetLinkCard( targetTitle, mw.cx.targetLanguage );

		// If text is selected, create a new internal link
		if ( isValidSelection( selection ) && this.$link ) {
			$targetLink = this.createInternalLink( selection.toString(), targetTitle, this.$link.data( 'linkid' ) );
		}
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
		var $connectedLink;

		if ( this.$link ) {
			this.$link.addClass( 'cx-highlight--blue' );

			if ( this.isSourceLink() ) {
				$connectedLink = this.getTargetLink();
			} else {
				$connectedLink = this.getSourceLink();
			}

			// Both methods above can return null, so we need to check if we have a link
			if ( $connectedLink ) {
				$connectedLink.addClass( 'cx-highlight--lightblue' );
			}
		}
	};

	/**
	 * Remove highlight from the current link pairs.
	 */
	LinkCard.prototype.removeLinkHighlight = function () {
		if ( this.$link ) {
			$( '[data-linkid="' + this.$link.data( 'linkid' ) + '"]' )
				.removeClass( 'cx-highlight--blue cx-highlight--lightblue' );
		}
	};

	/**
	 * Modify the link with appropriate attributes.
	 * @param {jQuery} $link The anchor object.
	 * @param {string} title Article title.
	 * @param {string} language The wiki language.
	 */
	LinkCard.prototype.setLinkAttributes = function ( $link, title, language ) {
		$link
			.text( title )
			.prop( {
				title: title,
				lang: language,
				dir: $.uls.data.getDir( language ),
				target: '_blank',
				href: this.siteMapper.getPageUrl( language, title )
			} );
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
		// WHYYYYYYY?
		// @todo refactor to avoid global reference
		var linkAdaptor = new LinkCard( mw.cx.siteMapper ),
			$links,
			sourceTitles;

		// Handle clicks on the section, including future links
		$section.on( 'click', 'a', linkClickHandler );

		if ( $section.data( 'cx-draft' ) === true ) {
			// This section is restored from draft. No need of link adaptation.
			return;
		}

		$links = $section.find( 'a[rel="mw:WikiLink"]' );

		// Collect all sourceTitles;
		sourceTitles = $links.map( function () {
			var href = $( this ).attr( 'href' );
			return cleanupLinkHref( href );
		} ).get();

		// This callback is called after we have fetched the interwiki links. It
		// updates the href appropriate for target language or removes the link.
		function apply( adaptations ) {
			$links.map( function () {
				var $link = $( this ),
					href = $link.attr( 'href' );

				// Identify this link as an adapted link in translation
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
