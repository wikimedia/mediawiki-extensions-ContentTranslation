/*!
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var cache = {
		linkPairs: {}
	};

	/**
	 * Get the link details for a given title and language such as page thumbnail image.
	 *
	 * @param {mediawiki.Api} api
	 * @param {string} title
	 * @param {string} language
	 * @return {jQuery.Promise}
	 */
	function getLinkDetails( api, title, language ) {
		var request;

		// Normalize the title
		title = mw.Title.newFromText( title ).toText();
		if ( cache[ title ] && cache[ title ][ language ] ) {
			return cache[ title ][ language ].promise();
		}

		request = api.get( {
			action: 'query',
			titles: title,
			prop: 'pageimages',
			piprop: 'thumbnail',
			pithumbsize: 150,
			redirects: true
		} );

		// Keep the request in cache
		cache[ title ] = cache[ title ] || {};
		cache[ title ][ language ] = request;

		return request.promise();
	}

	/**
	 * Fetch the link pairs
	 *
	 * @param {string|string[]} titles A title as string or array of titles
	 * @param {string} language Language to which the links are to be adapted
	 * @return {jQuery.Promise}
	 */
	function fetchLinkPairs( titles, language ) {
		var apiLanguage,
			deferred = $.Deferred();

		if ( !titles || !titles.length ) {
			return deferred.resolve( {} ).promise();
		}

		if ( !$.isArray( titles ) ) {
			titles = new Array( titles );
		}

		if ( language === mw.cx.sourceLanguage ) {
			apiLanguage = mw.cx.targetLanguage;
		} else {
			apiLanguage = mw.cx.sourceLanguage;
		}

		mw.cx.siteMapper.getApi( apiLanguage ).get( {
			action: 'query',
			titles: titles.join( '|' ),
			prop: 'langlinks',
			lllimit: titles.length, // TODO: Default is 10 and max is 500. Do we need more than 500?
			lllang: mw.cx.siteMapper.getWikiDomainCode( language ),
			redirects: true
		} ).done( function ( response ) {
			var redirects,
				linkPairs = {};

			if ( !response.query ) {
				deferred.resolve( {} );
				return;
			}
			redirects = jQuery.extend( {}, response.query.redirects );

			$.each( response.query.pages, function ( pageId, page ) {
				var i, redirectedSourceTitle, title;

				if ( !page.langlinks ) {
					return;
				}

				for ( i in redirects ) {
					// Locate the title in redirects, if any.
					if ( redirects[ i ].to === page.title ) {
						redirectedSourceTitle = redirects[ i ].from;
						break;
					}
				}

				// Add the redirected source title in link pair mapping.
				if ( redirectedSourceTitle ) {
					title = mw.Title.newFromText( redirectedSourceTitle );
				}
				if ( title ) {
					linkPairs[ title.toText() ] = page.langlinks[ 0 ][ '*' ];
				}
				// Irrespective of redirect or not, add the original source title in link pair mapping.
				// So if a paragraph has link to LuaJIT and Lua (programming language),
				// both get resolved to Lua (programming language) mapped to hewiki:"לואה (שפת תכנות)"
				// linkPairs will have keys for LuaJIT and Lua (programming language).
				title = mw.Title.newFromText( page.title );
				if ( title ) {
					linkPairs[ title.toText() ] = page.langlinks[ 0 ][ '*' ];
				}
			} );

			// Add it to the cache
			cache.linkPairs = $.extend( cache.linkPairs, linkPairs );
			deferred.resolve( linkPairs );
		} ).fail( function ( error ) {
			mw.log( 'Error while adapting links:' + error );
			// No need to make this error visible beyond logging
			deferred.resolve( {} );
		} );

		return deferred.promise();
	}

	/**
	 * Returns the parent node of the current selection as jQuery object
	 *
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
			// IE < 9. Unlikely since we do not support old IE browsers as of now.
			selection = document.selection;

			if ( selection.type !== 'Control' ) {
				parent = selection.createRange().parentElement();
			}
		}

		return $( parent );
	}

	/**
	 * Tests whether the current selection is in a target segment
	 *
	 * @param {Object} selection the selection to test
	 * @return {boolean}
	 */
	function isValidSelection( selection ) {
		var $parent, $parentSection;

		if ( !selection || !selection.toString().length ) {
			return false;
		}

		$parent = getSelectionParent();

		// Check if parent is editable
		if ( $parent.is( '[contenteditable="false"]' ) ) {
			return false;
		}

		// Check if the text selected is text of a link. If so, that substring
		// of link text is not a valid text of any link card related actions.
		if ( $parent.is( '.cx-target-link' ) || $parent.parents( '.cx-target-link' ).length ) {
			return false;
		}

		// Check if parent is already a section. Happens when translator clear the section
		// and start from empty paragraph. No segments there, just a section parent.
		if ( $parent.is( mw.cx.getSectionSelector() ) ) {
			return true;
		}

		// Get parent section
		$parentSection = $parent.parents( '[contenteditable]' );
		// Check if that section is editable
		return $parentSection.prop( 'contenteditable' );
	}

	function removeAllHighlights() {
		// Remove existing highlights from source and translation columns. From
		// all sections.
		$( '.cx-link' ).removeClass( 'cx-highlight--blue cx-highlight--lightblue' );
		$( '.cx-target-link' ).removeClass( 'cx-highlight--blue cx-highlight--lightblue' );
	}

	/**
	 * CXLink class. Represents a generic link in CX. It can be a source or target link.
	 * It may not correspond to a link that exist in document.
	 *
	 * @param {Element} [link] An <a> element
	 * @param {Object} [options] Optional options object
	 */
	function CXLink( link, options ) {
		options = $.extend( true, {}, CXLink.defaults, options );

		this.$link = $( link );
		this.siteMapper = options.siteMapper;
		// The link text and title attribute (they are the same)
		this.title = null;
		// Details about the actual target page.
		// page.title is title of the actual page.
		this.page = null;
		// Unique id which connects source and target titles together.
		// There might be multiple target links corresponding to the same source link.
		this.id = null;
	}

	CXLink.prototype.getId = function () {
		return this.id || this.$link.data( 'linkid' );
	};

	CXLink.prototype.getLink = function () {
		return this.$link;
	};

	CXLink.prototype.setId = function ( id ) {
		this.id = id;
	};

	CXLink.prototype.makeRedLink = function () {
		var selection;

		if ( !this.$link || !this.$link.length ) {
			// See if there is a selection
			mw.cx.selection.restore( 'translation' );
			selection = mw.cx.selection.get();
			// Is this selection valid and editable?
			if ( isValidSelection( selection ) ) {
				this.$link = this.createLinkFromLink();
			} else {
				return;
			}
		}
		this.$link
			.prop( 'rel', 'mw:WikiLink' )
			.removeClass( 'cx-target-link-unadapted' )
			.addClass( 'new' );

		this.$link.parents( '[contenteditable]' ).trigger( 'input' );
	};

	CXLink.prototype.isRedLink = function () {
		return this.$link.is( '.new' );
	};

	CXLink.prototype.setTitle = function ( title ) {
		this.title = title;
	};

	CXLink.prototype.getLanguage = function () {
		return this.language;
	};

	CXLink.prototype.getTitle = function () {
		if ( this.title ) {
			return this.title;
		}

		// It is a bit odd to use title property as mediawiki Title,
		// but it is a valid case for mediawiki links.
		this.title = this.$link ? this.$link.prop( 'title' ) : null;

		return this.title;
	};

	CXLink.prototype.getTargetTitle = function () {
		var targetTitle = cache.linkPairs[ this.getTitle() ] || this.getTitle();
		return mw.Title.newFromText( targetTitle ).toText();
	};

	/**
	 * Convert a current selection if present, if editable to a link
	 */
	CXLink.prototype.createLinkFromLink = function () {
		var $link, selection;

		// Restore the selection
		mw.cx.selection.restore( 'translation' );
		selection = mw.cx.selection.get();

		$link = $( '<a>' )
			.addClass( 'cx-target-link' )
			.text( selection.toString() || this.getTargetTitle() )
			.attr( {
				title: this.getTargetTitle(),
				href: this.getTargetTitle(),
				rel: 'mw:WikiLink'
			} );

		$link.attr( 'data-linkid', this.getId() );
		mw.cx.selection.pasteHTML( $link[ 0 ].outerHTML );
		// Where did it go?
		$link = $( '.cx-column--translation a[data-linkid="' + this.getId() + '"]' );
		$link.cxTargetLink();
		this.$link.parents( '[contenteditable]' ).trigger( 'input' );

		return $link;
	};

	/**
	 * Fetch the details about a page.
	 *
	 * @return {jQuery.Promise}
	 */
	CXLink.prototype.fetchLinkData = function () {
		var api, title, self = this,
			language = this.getLanguage();

		title = this.getTitle();
		if ( !title ) {
			return $.Deferred().reject().promise();
		}

		api = this.siteMapper.getApi( language );
		return getLinkDetails( api, title, language ).then( function ( response ) {
			var pageId;

			pageId = Object.keys( response.query.pages )[ 0 ];
			if ( pageId === '-1' ) {
				// Page does not exist.
				return false;
			}
			self.page = response.query.pages[ pageId ];
			self.page.language = language;
			return self.page;
		} );
	};

	/**
	 * Get a link card
	 *
	 * @return {jQuery}
	 */
	CXLink.prototype.getLinkCard = function () {
		var $card, $link, $markMissingLink, self,
			$imageContainer, $linkContainer,
			$cardHeader, linkLanguage, linkLanguageProps, userLanguage, $linkInfo;

		self = this;
		$card = $( '<div>' )
			.addClass( 'card' );

		$imageContainer = $( '<div>' )
			.addClass( 'card__link-image-container' );
		if ( this.page ) {
			if ( this.page.thumbnail ) {
				$imageContainer.append( $( '<img>' ).attr( 'src', this.page.thumbnail.source ) );
			}
		} else {
			if ( this.isRedLink() ) {
				$card.addClass( 'redlink' );
			} else {
				$card.addClass( 'missinglink' );
			}
		}

		$linkInfo = $( '<div>' )
			.addClass( 'card__link-info' );

		$cardHeader = $( '<div>' )
			.addClass( 'card__link-header' );
		$cardHeader.append( $( '<div>' )
			.addClass( 'card__title' )
			.text(
				this.page ?
				mw.msg( 'cx-tools-link-title' ) :
				mw.msg( 'cx-tools-missing-link-title' )
			)
		);

		linkLanguage = this.getLanguage();
		linkLanguageProps = {
			lang: linkLanguage,
			dir: $.uls.data.getDir( linkLanguage )
		};

		$cardHeader.append( $( '<div>' )
			.prop( linkLanguageProps )
			.addClass( 'card__title--language' ) );

		$linkInfo.append( $cardHeader );

		$linkContainer = $( '<div>' ).addClass( 'card__link-container' );

		if ( this.page ) {
			$link = $( '<a>' )
				.addClass( 'card__link-text' )
				.text( this.page.title )
				.prop( {
					target: '_blank',
					title: this.page.title,
					href: this.siteMapper.getPageUrl( this.page.language, this.page.title )
				} );

			$linkContainer
				.prop( linkLanguageProps )
				.append( $link );

			$linkInfo.append( $linkContainer );
		} else {
			if ( this.isRedLink() ) {
				// This link opens Special:CX with this missing page to help translate it
				$link = $( '<a>' )
					.addClass( 'card__link-text new' )
					.text( mw.Title.newFromText( this.getTitle() ).toText() )
					.prop( {
						target: '_blank',
						title: mw.msg( 'cx-tools-missing-link-tooltip' ),
						href: new mw.Uri().extend( {
							targettitle: this.getTitle()
						} ).toString()
					} );

				$linkContainer
					.prop( linkLanguageProps )
					.append( $link );
			} else {
				userLanguage = mw.config.get( 'wgUserLanguage' );

				// This is not really a link,
				// but a message that suggests to add a red link,
				// so it must be in the UI language
				$linkContainer
					.prop( {
						lang: userLanguage,
						dir: $.uls.data.getDir( userLanguage )
					} )
					.text( mw.msg( 'cx-tools-missing-link-text' ) );

				$markMissingLink = $( '<div>' )
					.addClass( 'card__mark-missing-link' )
					.text( mw.msg( 'cx-tools-missing-link-mark-link' ) )
					.on( 'click', function () {
						self.makeRedLink();
						// Avoid bubbling
						return false;
					} );
			}
			$linkInfo.append( $linkContainer, $markMissingLink );
		}

		$card.append( $imageContainer, $linkInfo );

		return $card;
	};

	function CXSourceLink( link, options ) {
		CXLink.call( this, link, options );
		this.language = mw.cx.sourceLanguage;
		this.init();
	}

	// CXSourceLink inherits CXLink
	CXSourceLink.prototype = new CXLink();

	CXSourceLink.prototype.init = function () {
		var self = this;
		this.$link.addClass( 'cx-source-link' );
		this.listen();

		if ( this.$link.length ) {
			this.fetchLinkData().then( function ( page ) {
				if ( !page ) {
					// Mark the link in source content as missing link.
					self.makeRedLink();
				}
			} );
		}
	};

	/**
	 * Get the target link instance for the link
	 *
	 * @return {CXTargetLink}
	 */
	CXSourceLink.prototype.getTargetLink = function () {
		var $targetLink, targetLink;

		if ( this.targetLink ) {
			return this.targetLink;
		}

		$targetLink = $( '.cx-target-link[data-linkid="' + this.getId() + '"]' );

		// It is not necessary that the link exists in the document.
		// We create CXSourceLink instances out of titles(Either searched or selected)
		if ( !$targetLink.length ) {
			targetLink = new CXTargetLink();
			targetLink.setTitle( cache.linkPairs[ this.getTitle() ] || this.getTitle() );
			targetLink.setId( this.getId() );
			return targetLink;
		}

		return $targetLink.cxTargetLink().data( 'cxTargetLink' );
	};

	CXSourceLink.prototype.getCard = function () {
		var $linkInstructionSection, $linkInstructionShortcut;

		this.$card = this.getLinkCard();

		this.$card.find( '.card__title--language' )
			.text( $.uls.data.getAutonym( mw.cx.sourceLanguage ) );

		$linkInstructionSection = $( '<div>' )
			.addClass( 'card__link-instruction' );
		$linkInstructionShortcut = $( '<div>' )
			.addClass( 'shortcut-info' )
			.text( mw.msg( 'cx-tools-link-instruction-shortcut' ) );
		$linkInstructionSection.append( $linkInstructionShortcut );

		this.$card.find( '.card__link-info' ).append( $linkInstructionSection );

		return this.$card;
	};

	CXSourceLink.prototype.highlight = function () {
		// Remove existing highlights from source and translation columns. From
		// all sections.
		removeAllHighlights();
		this.$link.addClass( 'cx-highlight--blue' );
		this.getTargetLink().getLink().addClass( 'cx-highlight--lightblue' );
	};

	/**
	 * Event handler for the links in source column.
	 */
	CXSourceLink.prototype.listen = function () {
		var self = this;

		// Middle click handler for links
		this.$link.on( 'mousedown', function ( button ) {
			var url,
				$link = $( this );

			if ( button.which === 2 ) {
				url = self.siteMapper.getPageUrl(
					mw.cx.sourceLanguage, $link.prop( 'title' )
				);
				open( url, '_blank' );

				return false;
			}
		} );

		this.$link.on( 'click', function ( e ) {
			var selection, url;

			// Allow link exploration
			if ( e.shiftKey || e.ctrlKey ) {
				url = self.siteMapper.getPageUrl(
					mw.cx.sourceLanguage, self.$link.prop( 'title' )
				);
				window.open( url, '_blank' );
				return false;
			}

			mw.hook( 'mw.cx.select.link' ).fire( self.$link, mw.cx.sourceLanguage );
			self.highlight();

			// User clicked red link in source text. We do not have enough info to
			// create any link in the target language.
			if ( self.isRedLink() ) {
				return false;
			}

			// User click a blue link in source, which has no equivalent in target
			// language. Prevent creation of a such link.
			if ( !self.getTargetLink().page ) {
				mw.log( '[CX] link does not exist in target' );
				return false;
			}

			selection = mw.cx.selection.get();
			// Is this selection valid and editable?
			if ( isValidSelection( selection ) ) {
				self.createLinkFromLink();
			}

			// Avoid bubbling. This can bubble to a translation section focus and
			// cause link card going away.
			return false;
		} );
	};

	/**
	 * Target link class - A link in translation section
	 *
	 * @param {Element} [link]
	 * @param {Object} [options]
	 */
	function CXTargetLink( link, options ) {
		CXLink.call( this, link, options );
		this.language = mw.cx.targetLanguage;
		this.init();
	}

	// CXTargetLink inherits CXLink
	CXTargetLink.prototype = new CXLink();

	CXTargetLink.prototype.init = function () {
		this.adapt();
		this.listen();
		this.sourceLink = this.getSourceLink();
	};

	CXTargetLink.prototype.removeLink = function () {
		// Remove the link
		this.$link.after( this.$link.text() ).remove();
		// There is no link now. Stop showing the card.
		this.$card.hide();
		// restore the selection
		mw.cx.selection.restore( 'translation' );
	};

	/**
	 * Get the source link instance for the link
	 *
	 * @return {CXSourceLink}
	 */
	CXTargetLink.prototype.getSourceLink = function () {
		var $sourceLink, sourceLink;

		$sourceLink = $( '.cx-column--source .cx-link[data-linkid="' + this.getId() + '"]' );

		// It is not necessary that the link exists in the document.
		// We create CXSourceLink instances out of titles(Either searched or selected)
		if ( !$sourceLink.length ) {
			sourceLink = new CXSourceLink();
			sourceLink.setTitle( this.getTitle() );
			sourceLink.setId( this.getId() );
			return sourceLink;
		}

		return $sourceLink.cxSourceLink().data( 'cxSourceLink' );
	};

	CXTargetLink.prototype.getCard = function () {
		var self = this;

		this.$card = this.getLinkCard();
		this.$addLink = this.$removeLink = $( [] );

		this.$card.find( '.card__title--language' )
			.text( $.uls.data.getAutonym( mw.cx.targetLanguage ) );

		if ( !this.$link.length ) {
			this.$addLink = $( '<div>' )
				.addClass( 'card__add-link' )
				.text( mw.msg( 'cx-tools-link-add' ) )
				.on( 'click', function () {
					self.createLinkFromLink();
					// Avoid bubbling
					return false;
				} );
		} else {
			this.$removeLink = $( '<div>' )
				.addClass( 'card__remove-link' )
				.text( mw.msg( 'cx-tools-link-remove' ) )
				.on( 'click', $.proxy( this.removeLink, this ) );
		}

		this.$card.find( '.card__link-info' )
			.append( this.$addLink, this.$removeLink );

		return this.$card;
	};

	/**
	 * Adapt the link to the target language.
	 * Assmes cache.linkPairs are already populated.
	 */
	CXTargetLink.prototype.adapt = function () {
		var targetHref,
			title = this.getTitle();

		// The href value of the links should be relative URLs.
		// We had made the URLs absolute in source link to support opening in new tabs.
		// If the href URL is absolute, magic links like ISBN won't work.
		if ( this.$link && this.$link.attr( 'href' ) ) {
			targetHref = this.$link.attr( 'href' )
				.replace( this.siteMapper.getPageUrl( mw.cx.sourceLanguage, '' ), '' );
		}
		// This is a minimal support for Magic links
		// https://www.mediawiki.org/wiki/Specs/HTML/1.2.1#Magic_links
		// XXX: Add an ISBN tool card
		// XXX: Adapt the Special:BookSource prefix of href with target language
		// namespace and alias.
		this.$link.prop( 'href', targetHref );

		if ( !title ) {
			// Links like ISBN(Magic links) usually does not have title attribute
			// and there is nothing left to adapt.
			return;
		}

		if ( this.$link.hasClass( 'cx-target-link' ) ) {
			// Already adapted. Can be restrored from a saved translation(draft)
			this.adapted = true;
			this.fetchLinkData();
			return;
		}

		title = mw.Title.newFromText( title ).toText();

		if ( cache.linkPairs[ title ] ) {
			this.title = cache.linkPairs[ title ];
			this.$link.prop( {
				href: this.title,
				title: this.title
			} );
			this.adapted = true;
			this.fetchLinkData();
		} else {
			this.adapted = false;
			this.markUnAdapted();
		}

		this.$link.addClass( 'cx-target-link' );
	};

	CXTargetLink.prototype.markUnAdapted = function () {
		// All these unadapted links will be converted to plain text while publishing
		this.$link.addClass( 'cx-target-link-unadapted' );
	};

	CXTargetLink.prototype.highlight = function () {
		removeAllHighlights();
		this.$link.addClass( 'cx-highlight--blue' );
		this.getSourceLink().getLink().addClass( 'cx-highlight--lightblue' );
	};

	/**
	 * Event handler for the links in translation column.
	 */
	CXTargetLink.prototype.listen = function () {
		var self = this;

		// Middle click handler for links
		this.$link.on( 'mousedown', function ( button ) {
			var url,
				$link = $( this );

			if ( button.which === 2 ) {
				url = self.siteMapper.getPageUrl(
					mw.cx.targetLanguage, $link.prop( 'title' )
				);
				open( url, '_blank' );

				return false;
			}
		} );

		this.$link.on( 'click', function () {
			mw.hook( 'mw.cx.select.link' ).fire( self.$link, mw.cx.targetLanguage );
			self.highlight();
			// Avoid bubbling. This can bubble to a translation section focus and
			// cause link card going away.
			return false;
		} );
	};

	$.fn.cxTargetLink = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxTargetLink' );

			if ( !data ) {
				$this.data( 'cxTargetLink', ( data = new CXTargetLink( this, options ) ) );
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	$.fn.cxSourceLink = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxSourceLink' );

			if ( !data ) {
				$this.data( 'cxSourceLink', ( data = new CXSourceLink( this, options ) ) );
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	// Default options for CXLink
	CXLink.defaults = {
		siteMapper: mw.cx.siteMapper
	};

	/**
	 * Link Card
	 *
	 * @class
	 */
	function LinkCard() {
		this.$card = null;
		this.sourceLink = null;
		this.targetLink = null;
	}

	/**
	 * Get all applicable cards.
	 *
	 * @return {jQuery}
	 */
	LinkCard.prototype.getCard = function () {
		this.$card = $( '<div>' )
			.addClass( 'cards link' );

		this.listen();

		return this.$card;
	};

	LinkCard.prototype.listen = function () {
		var self = this;

		// Bring the card to front when clicked
		this.$card.on( 'click', '.card:first', function ( e ) {
			if ( !$( e.target ).is( 'a' ) ) {
				// We should not swap the cards when click was on the link in the card.
				$( this ).insertAfter( self.$card.find( '.card:last' ) );
			}
		} );
	};

	LinkCard.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	/**
	 * Get a valid normalized title from the given text
	 * If the text is not suitable for the title, return null;
	 * Validation is done by mw.Title
	 *
	 * @param {string} text Text for the title.
	 * @return {string|null}
	 */
	function getValidTitle( text ) {
		var title = text.trim();

		title = mw.Title.newFromText( title );
		title = title && title.toText();

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
		var self = this,
			$link, title;

		// link can be link text or jQuery link object
		if ( typeof link === 'string' ) {
			title = getValidTitle( link );
		} else {
			$link = link;
		}
		// If the link is a source link, restore the selection
		// in the translation column
		if ( language === mw.cx.sourceLanguage ) {
			if ( $link ) {
				this.sourceLink = $link.cxSourceLink().data( 'cxSourceLink' );
			} else {
				// Text selection in source content. Nothing to do.
				this.stop();
				return;
			}

			if ( this.sourceLink.isRedLink() ) {
				// Red link in source. Nothing to do.
				this.stop();
				return;
			}

			this.targetLink = this.sourceLink.getTargetLink();
		} else {
			if ( $link ) {
				this.targetLink = $link.cxTargetLink().data( 'cxTargetLink' );
			} else {
				// Text selection
				this.targetLink = new CXTargetLink();
				this.targetLink.setTitle( title );
				// A sufficiently good random id
				this.targetLink.setId( new Date().valueOf() );
			}
			this.sourceLink = this.targetLink.getSourceLink();
		}

		this.sourceLink.fetchLinkData().done( function ( page ) {
			if ( page ) {
				self.$card.prepend( self.sourceLink.getCard() );
			}
		} ).fail( function () {
			self.stop();
		} );

		this.targetLink.fetchLinkData().done( function () {
			self.$card.append( self.targetLink.getCard() );
			self.$card.show();
			self.onShow();
		} ).fail( function () {
			self.stop();
		} );
	};

	/**
	 * Remove the card
	 */
	LinkCard.prototype.removeCard = function () {
		removeAllHighlights();
		this.$card.remove();
	};

	LinkCard.prototype.stop = function () {
		this.removeCard();
		mw.hook( 'mw.cx.tools.shown' ).fire( false );
	};

	LinkCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.select.link', // Select a link by clicking - in translation or source
			'mw.cx.select.word', // Select a word using mouse or keyboard - in translation or source
			'mw.cx.search.word' // Search a word title using search box
		];
	};

	/**
	 * Tool to add internal or external link to the selection
	 * or at cursor position
	 */
	function LinkerTool() {
		this.$card = null;
		this.selection = null;
	}

	/**
	 * Prepare the tool card
	 *
	 * @return {jQuery}
	 */
	LinkerTool.prototype.getCard = function () {
		var self = this;
		this.$pageSelectorButton = $( '<button>' )
			.prop( 'disabled', true )
			.addClass( 'mw-ui-button mw-ui-progressive' )
			.text( mw.msg( 'cx-tools-link-apply' ) );
		this.$internalLink = $( '<span>' )
			.addClass( 'linker-internal' )
			.text( mw.msg( 'cx-tools-link-internal-link' ) );
		this.$externalLink = $( '<span>' )
			.addClass( 'linker-external linker-inactive' )
			.text( mw.msg( 'cx-tools-link-external-link' ) );
		this.$compactTrigger = $( '<div>' )
			.addClass( 'linker-trigger' )
			.text( mw.msg( 'cx-tools-link-to-another-page' ) );
		this.$header = $( '<div>' )
			.addClass( 'linker-header' )
			.append( this.$internalLink, this.$externalLink, this.$pageSelectorButton );
		this.$searchInput = $( '<input>' )
			.attr( {
				type: 'search',
				placeholder: mw.msg( 'cx-tools-link-internal-link-placeholder' )
			} )
			.addClass( 'linker-search' );
		this.$externalLinkInput = $( '<input>' )
			.addClass( 'linker-external-link' )
			.prop( {
				type: 'url',
				placeholder: mw.msg( 'cx-tools-link-external-link-placeholder' )
			} )
			.hide();
		this.$card = $( '<div>' )
			.addClass( 'card linker' )
			.append( this.$compactTrigger, this.$header, this.$searchInput, this.$externalLinkInput )
			.hide();

		this.$targetPageSelector = new mw.PageSelector( this.$searchInput, {
			api: mw.cx.siteMapper.getApi( mw.cx.targetLanguage ),
			showMissingPage: true,
			missingPageMessage: 'cx-tools-link-add-as-missing',
			onSelect: function ( selectedPage ) {
				self.createLinkWithTool( selectedPage, 'internal' );
			}
		} );

		return this.$card;
	};

	/**
	 * Create a link. It can be external link or internal link
	 *
	 * @param  {string} target Target title
	 * @param  {type} type  Link type: 'external' or 'internal'
	 */
	LinkerTool.prototype.createLinkWithTool = function ( target, type ) {
		var $link;

		if ( type === 'internal' ) {
			if ( this.$link ) {
				$link = this.$link;
				// Change the link target
				$link.prop( {
						href: target.title,
						title: target.title
					} )
					// Remove the classes that represent a different state for link.
					.removeClass( 'cx-selection cx-highlight--blue new cx-target-link-unadapted' )
					.removeData( 'cxTargetLink' ) // Unbind
					.cxTargetLink();
			} else {
				$link = $( '.cx-selection' );
				// Convert the selection to a mw link.
				$link.prop( {
						rel: 'mw:WikiLink',
						href: target.title,
						title: target.title
					} )
					.text( this.selection || target.title )
					.addClass( 'cx-link cx-target-link' )
					.removeClass( 'cx-selection cx-highlight--blue' )
					.cxTargetLink();
			}

			if ( target.missing ) {
				// Make it red.
				$link.data( 'cxTargetLink' ).makeRedLink();
			}
		} else {
			$link = $( '.cx-selection' );
			$link.text( this.selection || target )
				.addClass( 'external' )
				.removeClass( 'cx-selection cx-highlight--blue' )
				.prop( {
					href: target,
					title: target
				} );
		}

		// Something changed. Notify.
		$link.parents( '[contenteditable]' ).trigger( 'input' );
		// Set the cursor at the end of inserted link.
		mw.cx.selection.setCursorAfter( 'translation' );
	};

	/**
	 * Expand the linker tool card
	 */
	LinkerTool.prototype.expand = function () {
		var self = this;

		this.$card.addClass( 'linker-expanded' );
		if ( this.selection ) {
			this.$searchInput.val( this.selection ).select();
		}
		mw.cx.selection.wrap(
			'translation',
			$( '<a>' ).addClass( 'cx-selection cx-highlight--blue' )[ 0 ]
		);
		this.$searchInput.focus();
		$.when.apply( $, this.getTargetPagesForSource() ).done( function () {
			var pages = arguments;
			self.$targetPageSelector.buildMenu( pages );
			self.$targetPageSelector.show();
		} );
		// Without this the page selector will consume click and close
		return false;
	};

	LinkerTool.prototype.listen = function () {
		var self = this,
			linkType = 'internal';

		$( '.cx-selection' ).replaceWith( function () {
			return $( this ).html();
		} );

		this.$compactTrigger.on( 'click', $.proxy( this.expand, this ) );
		this.$searchInput.on( 'focus', function () {
			self.$pageSelectorButton.prop( 'disabled', false );
		} );

		this.$externalLinkInput.on( 'focus', function () {
			self.$pageSelectorButton.prop( 'disabled', false );
		} ).on( 'keypress', function ( e ) {
			if ( e.which === 13 ) {
				if ( linkType === 'external' ) {
					self.createLinkWithTool( self.$externalLinkInput.val(), linkType );
				}
				// TODO: Add internal link also on enter keypress.
			}
		} );
		this.$internalLink.on( 'click', function () {
			self.$externalLink.addClass( 'linker-inactive' );
			self.$internalLink.removeClass( 'linker-inactive' );
			self.$searchInput.show().focus();
			self.$externalLinkInput.hide();
			linkType = 'internal';
		} );

		this.$externalLink.on( 'click', function () {
			self.$internalLink.addClass( 'linker-inactive' );
			self.$externalLink.removeClass( 'linker-inactive' );
			self.$searchInput.hide();
			self.$externalLinkInput.show().focus();
			linkType = 'external';
		} );

		this.$pageSelectorButton.on( 'click', function () {
			if ( linkType === 'internal' ) {
				self.createLinkWithTool( self.$targetPageSelector.getSelectedPage(), linkType );
			} else {
				self.createLinkWithTool( self.$externalLinkInput.val(), linkType );
			}
		} );

		//  Expand the linker tool when CTRL+K is pressed.
		$( document ).on( 'keydown', function ( e ) {
			if ( ( e.metaKey || e.ctrlKey && !e.altKey ) && e.which === 75 ) {
				self.expand();
				return false;
			}
		} );
	};

	/**
	 * Get the parent of the selection
	 *
	 * @return {jQuery}
	 */
	LinkerTool.prototype.getParentSection = function () {
		var $selectionParent = $( mw.cx.selection.getParent( 'translation' ) );
		return $selectionParent.closest( mw.cx.getSectionSelector() );
	};

	/**
	 * Get the source section corresponding to parent of the selection
	 *
	 * @return {jQuery}
	 */
	LinkerTool.prototype.getParentSourceSection = function () {
		return mw.cx.getSourceSection( this.getParentSection().data( 'source' ) );
	};

	/**
	 * Get all the target pages for the titles in source section
	 *
	 * @return {jQuery.Promise}
	 */
	LinkerTool.prototype.getTargetPagesForSource = function () {
		var $sourceSection, $sourceLinks, pagePromises = [];

		$sourceSection = this.getParentSourceSection();
		$sourceLinks = $sourceSection.find( '.cx-source-link' );
		pagePromises.push( $.Deferred().resolve( {
			title: this.$searchInput.val(),
			missing: !!this.$searchInput.val()
		} ).promise() );
		$sourceLinks.each( function () {
			var pagePromise, sourceLink;
			sourceLink = $( this ).data( 'cxSourceLink' );
			if ( sourceLink ) {
				pagePromise = sourceLink.getTargetLink().fetchLinkData();
				// TODO: Remove duplicates?
				if ( pagePromise ) {
					pagePromises.push( pagePromise );
				}
			}
		} );
		return pagePromises;
	};

	/**
	 * Show the link tool card
	 */
	LinkerTool.prototype.show = function () {
		this.$card.show();
		this.onShow();
	};

	LinkerTool.prototype.start = function ( selection ) {
		if ( typeof selection === 'string' ) {
			// Capture the selection
			this.selection = selection;
		} else if ( selection.jquery && selection.is( 'a' ) ) {
			this.$link = selection;
		} else {
			this.stop();
			return;
		}

		// Do not show the tool for headings.
		if ( this.getParentSection().is( 'h1, h2, h3, h4, h5, h6' ) ) {
			this.stop();
			return;
		}

		this.show();
		this.listen();
	};

	LinkerTool.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	LinkerTool.prototype.stop = function () {
		this.removeCard();
		mw.hook( 'mw.cx.tools.shown' ).fire( false );
	};

	/**
	 * Remove the card
	 */
	LinkerTool.prototype.removeCard = function () {
		this.$card.remove();
	};

	LinkerTool.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.translation.focus',
			'mw.cx.translation.change',
			'mw.cx.select.link', // Select a link by clicking - in translation or source
			'mw.cx.select.word', // Select a word using mouse or keyboard - in translation or source
			'mw.cx.search.word' // Search a word title using search box
		];
	};

	/**
	 * Adapt links in a section
	 *
	 * @param {jQuery} $section The section.
	 */
	function adaptLinks( $section ) {
		var $sourceSection, $sourceLinks, $targetLinks,
			sourceLinkTargets = [];

		$sourceSection = mw.cx.getSourceSection( $section.data( 'source' ) );
		$sourceLinks = $sourceSection.find( 'a[rel="mw:WikiLink"]' );

		// Collect all source links' titles
		sourceLinkTargets = $sourceLinks.map( function () {
			return $( this ).prop( 'title' );
		} ).get();

		$targetLinks = $section.find( 'a[rel="mw:WikiLink"]' );

		// Adapt the links to target language
		fetchLinkPairs( sourceLinkTargets, mw.cx.targetLanguage )
			.done( function () {
				$sourceLinks.cxSourceLink();
				$targetLinks.cxTargetLink();
			} );
	}

	mw.cx.tools.linkcard = LinkCard;
	mw.cx.tools.linkercard = LinkerTool;

	$( function () {
		mw.hook( 'mw.cx.translation.postMT' ).add( adaptLinks );
	} );
}( jQuery, mediaWiki ) );
