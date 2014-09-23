/**
 * ContentTranslation Selection Utility
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( mw ) {
	'use strict';

	/**
	 * SelectionUtility
	 *
	 * @class
	 */
	function Selection() {
		this.selections = {};
	}

	/**
	 * Captures the current selection and returns it.
	 * Cross-browser
	 *
	 * @return {object|false}
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
	 * Saves a selection for later retrieval
	 *
	 * @param {string} key, the key to use for storage
	 * @param {object} selection, the selection to save
	 */
	Selection.prototype.save = function ( key, selection ) {
		this.selections[ key ] = selection;
	};

	/**
	 * Returns the range of a selection.
	 * Cross-browser
	 *
	 * @param {object} selection, a selection object
	 * @return {object|false}
	 */
	function getRange( selection ) {
		// Standards
		if ( selection && selection.rangeCount && selection.getRangeAt ) {
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
	 * Sets focus on parent element of range
	 * Required for restoring selections on FireFox
	 *
	 * @param {object} range, the range to get parent from
	 */
	function setFocusOnParentBlock( range ) {
		var parent, cStyle;

		if ( range.commonAncestorContainer ) {
			parent = range.commonAncestorContainer;
			if ( parent.nodeType !== 1 ) {
				parent = parent.parentNode;
			}
		} else if ( range.parentElement ) {
			parent = range.parentElement();
		}

		cStyle = parent.currentStyle || window.getComputedStyle( parent, '' );
		while ( cStyle.display !== 'block' ) {
			parent = parent.parentNode;
			cStyle = parent.currentStyle || window.getComputedStyle( parent, '' );
		}

		if ( parent ) {
			parent.focus();
		}
	}

	/**
	 * Restores a saved selection
	 * Cross-browser.
	 *
	 * @param {string} key, the key for the saved selection
	 */
	Selection.prototype.restore = function ( key ) {
		var currentSelection, savedSelection, range;

		currentSelection = this.get();
		savedSelection = this.selections[ key ];
		if ( !savedSelection ) {
			return;
		}

		range = getRange( savedSelection );
		if ( !range ) {
			return;
		}

		setFocusOnParentBlock( range ); // for FireFox

		// Standards
		if ( currentSelection
			&& currentSelection.removeAllRanges
			&& currentSelection.addRange ) {
			currentSelection.removeAllRanges();
			currentSelection.addRange( range );
		// IE < 9
		} else if ( currentSelection && range.select ) {
			range.select();
		}
	};

	/**
	 * Pastes the specified html.
	 * If selectionToRestore is passed, retrieves
	 * and restores that selection before pasting.
	 * If no selection is specified, the current selection is used.
	 *
	 * @param {string} html, the html to paste
	 * @param {string} selectionToRestore, name of selection to restore
	 */
	Selection.prototype.pasteHTML = function ( html, selectionToRestore ) {
		var selection, el, frag, node, lastNode;

		if ( selectionToRestore ) {
			this.restore( selectionToRestore );
		}

		selection = this.get();

		if ( selection && window.getSelection ) {
			selection.deleteContents();
			el = document.createElement( 'div' );
			el.innerHTML = html;
			frag = document.createDocumentFragment();
			while ( ( node = el.firstChild ) ) {
				lastNode = frag.appendChild( node );
			}
			selection.insertNode( frag );

			if ( lastNode ) {
				selection.setStartAfter( lastNode );
				selection.collapse( true );
			}

		} else if ( selection && selection.type !== 'Control' ) {
			// IE < 9
			selection.createRange().pasteHTML( html );
		}
	};

	mw.cx.selection = new Selection();

}( mediaWiki ) );
