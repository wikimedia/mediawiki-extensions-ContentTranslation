/*!
 * ContentTranslation Selection Utility
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	/**
	 * SelectionUtility
	 *
	 * @class
	 */
	function Selection() {
		this.ranges = {};
	}

	/**
	 * Captures the current selection and returns it.
	 * Cross-browser
	 *
	 * @return {Object|boolean}
	 */
	Selection.prototype.get = function () {
		// Standards
		if ( window.getSelection ) {
			return window.getSelection();
			// IE < 9
		} else if ( document.selection ) {
			return document.selection;
			// Return false if no selection
		} else {
			return false;
		}
	};

	/**
	 * Returns the range of a selection.
	 * Cross-browser
	 *
	 * @param {Object} selection a selection object
	 * @return {Object|boolean}
	 */
	function getRange( selection ) {
		// Standards
		if ( selection && selection.rangeCount &&
			selection.getRangeAt
		) {
			if ( selection.rangeCount > 0 ) {
				return selection.getRangeAt( 0 );
			}
			// IE < 9
		} else if ( selection && selection.createRange ) {
			return selection.createRange();
		} else {
			return false;
		}
	}

	/**
	 * Saves a selection range for later retrieval
	 *
	 * @param {string} key the key to use for storage
	 * @param {Object} selection the selection save the range from
	 */
	Selection.prototype.save = function ( key, selection ) {
		this.ranges[ key ] = getRange( selection );
	};

	/**
	 * Get parent of the given range.
	 *
	 * @param {Object} range The range to get parent from
	 * @return {Object}
	 */
	function getRangeParent( range ) {
		var parent;

		if ( range.commonAncestorContainer ) {
			parent = range.commonAncestorContainer;
			if ( parent.nodeType !== 1 ) {
				parent = parent.parentNode;
			}
		} else if ( range.parentElement ) {
			parent = range.parentElement();
		}
		return parent;
	}

	/**
	 * Sets focus on parent element of range
	 * Required for restoring selections on FireFox
	 *
	 * @param {Object} range The range to get parent from
	 */
	function setFocusOnParentBlock( range ) {
		var parent, cStyle;

		parent = getRangeParent( range );
		cStyle = parent.currentStyle ||
			window.getComputedStyle( parent, '' );
		while ( cStyle.display !== 'block' ) {
			parent = parent.parentNode;
			cStyle = parent.currentStyle || window.getComputedStyle( parent, '' );
		}

		if ( parent ) {
			parent.focus();
		}
	}

	/**
	 * Returns the parent node of the current selection
	 *
	 * @param {string} key
	 * @return {Object|null}
	 */
	Selection.prototype.getParent = function ( key ) {
		var range;

		range = this.ranges[ key ];
		if ( !range ) {
			return null;
		}
		return getRangeParent( range );
	};

	/**
	 * Restores a saved selection
	 * Cross-browser.
	 *
	 * @param {string} key the key for the saved selection range
	 */
	Selection.prototype.restore = function ( key ) {
		var currentSelection, range;

		currentSelection = this.get();
		range = this.ranges[ key ];

		if ( !range ) {
			return;
		}

		setFocusOnParentBlock( range ); // for FireFox

		// Standards
		if ( currentSelection &&
			currentSelection.removeAllRanges &&
			currentSelection.addRange
		) {
			currentSelection.removeAllRanges();
			currentSelection.addRange( range );
			// IE < 9
		} else if ( currentSelection && range.select ) {
			range.select();
		}
	};

	/**
	 * Pastes the specified html.
	 * If rangeToRestore is passed, retrieves
	 * and restores that range before pasting.
	 * If no selection is specified, the current selection is used.
	 *
	 * @param {string} html the html to paste
	 * @param {string} rangeToRestore key for the range to restore
	 */
	Selection.prototype.pasteHTML = function ( html, rangeToRestore ) {
		var selection, range, el, frag, node, lastNode;

		selection = this.get();

		if ( rangeToRestore ) {
			range = this.ranges[ rangeToRestore ];
		} else {
			range = getRange( selection );
		}

		if ( window.getSelection ) {
			range.deleteContents();
			el = document.createElement( 'div' );
			el.innerHTML = html;
			frag = document.createDocumentFragment();
			while ( ( node = el.firstChild ) ) {
				lastNode = frag.appendChild( node );
			}
			range.insertNode( frag );

			if ( lastNode ) {
				range = range.cloneRange();
				range.setStartAfter( lastNode );
				range.collapse( true );
				selection.removeAllRanges();
				selection.addRange( range );
				this.save( 'translation', selection );
			}

		} else if ( range.pasteHTML ) {
			// IE < 9
			range.pasteHTML( html );
		}
	};

	/**
	 * Place the cursor after the selection.
	 *
	 * @param {string} key key for the range to restore
	 */
	Selection.prototype.setCursorAfter = function ( key ) {
		var range, selection;

		this.restore( key );
		selection = this.get();
		if ( selection.rangeCount ) {
			range = selection.getRangeAt( 0 );
			range.collapse( false );
			selection.removeAllRanges();
			selection.addRange( range );
		}
	};

	/**
	 * Wrap the selection corresponding to the given key with the given element
	 *
	 * @param {string} key the key for the saved selection range
	 * @param {Element} element The element that wraps the selection
	 */
	Selection.prototype.wrap = function ( key, element ) {
		var range;

		range = this.ranges[ key ];
		if ( range ) {
			range.surroundContents( element );
		}
	};

	mw.cx.selection = new Selection();

}() );
