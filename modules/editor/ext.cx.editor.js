/**
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
/* global MediumEditor: true */
( function ( $, mw ) {
	'use strict';

	var delay = ( function () {
		var timer = 0;

		return function ( callback, milliseconds ) {
			clearTimeout( timer );
			timer = setTimeout( callback, milliseconds );
		};
	}() );

	/**
	 * CXSectionEditor - Editor for each sections in the translation
	 *
	 * @class
	 */
	function CXSectionEditor( element ) {
		this.$element = $( element );
		this.$editableElement = this.$element;
		this.init();
		this.listen();
	}

	/**
	 * Initialize the editor
	 */
	CXSectionEditor.prototype.init = function () {
		if ( this.$element.get( 0 ).tagName === 'FIGURE' ) {
			// Inside figure allow editing of caption alone
			this.$editableElement = this.$element.find( 'figcaption' );
		}
		// Make the element editable
		this.$editableElement.attr( 'contenteditable', true );
		this.wysiwygEditor();
	};

	/**
	 * Listen for changes in the section
	 */
	CXSectionEditor.prototype.listen = function () {
		var cxEditor = this;

		this.$editableElement.on( 'input', function () {
			// Delay the emptiness check till user pause typing.
			// If this check was done every input, the responsiveness
			// will get affected.
			delay( function () {
				if ( cxEditor.$editableElement.text().trim() === '' ) {
					// Emit 'mw.cx.translation.clear' event
					mw.hook( 'mw.cx.translation.clear' ).fire(
						cxEditor.$element.data( 'source' )
					);
				}
			}, 300 );
		} );
	};

	/**
	 * Enhance the basic content editable with a WYSIWYG editor
	 * MediumEditor is used here. But any such simple editor
	 * can work here.
	 */
	CXSectionEditor.prototype.wysiwygEditor = function () {
		var editorOptions;

		if ( !window.MediumEditor ) {
			return;
		}
		editorOptions = {
			cleanPastedHTML: true,
			buttons: [ 'bold', 'italic', 'header1', 'header2',
				'unorderedlist', 'orderedlist', 'indent', 'outdent' ],
			firstHeader: 'h2',
			secondHeader: 'h3',
			disableDoubleReturn: true
		};
		// Avoid previews on mouse over of links
		MediumEditor.prototype.editorAnchorObserver = function () {};

		if ( this.$editableElement.get( 0 ).tagName === 'FIGURECAPTION' ) {
			// Prevent pressing return on caption to avoid
			// creation of <p> nodes
			editorOptions.disableReturn = true;
		}

		/*jshint -W031 */
		new MediumEditor( this.$editableElement, editorOptions );
	};

	$.fn.cxEditor = function () {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxSectionEditor' );
			if ( !data ) {
				$this.data( 'cxSectionEditor', ( data = new CXSectionEditor( this ) ) );
			}
		} );
	};

}( jQuery, mediaWiki ) );
