/*!
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	/**
	 * CXSectionEditor - Editor for each sections in the translation
	 *
	 * @param {Element} element
	 * @class
	 */
	function CXSectionEditor( element ) {
		this.$section = $( element );
		this.$editableElement = this.$section;
		this.init();
		this.listen();
	}

	/**
	 * Initialize the editor.
	 */
	CXSectionEditor.prototype.init = function () {
		if ( this.$section.get( 0 ).tagName === 'FIGURE' ) {
			// Inside figure allow editing of caption alone
			this.$editableElement = this.$section.find( 'figcaption' );
		}

		// Make the element editable
		this.$editableElement.attr( 'contenteditable', true );
	};

	/**
	 * Section change handler.
	 */
	CXSectionEditor.prototype.onChange = function () {
		// Remove the MT/source/empty label from the section.
		// Some manual change happened.
		// Need to do both to actually null the data - so that it reflects in
		// jquery cache and DOM https://api.jquery.com/removedata/
		this.$section.removeData( 'cx-state' );
		this.$section.removeAttr( 'data-cx-state' );
		mw.hook( 'mw.cx.translation.change' ).fire( this.$section );
	};

	/**
	 * Paste handler. Adapts pasted text.
	 * @param {jQuery.Event} e
	 * @return {boolean}
	 */
	CXSectionEditor.prototype.pasteHandler = function ( e ) {
		// Enforce plain text pasting
		var text = e.originalEvent.clipboardData.getData( 'text/plain' );

		document.execCommand( 'insertHTML', false, text );

		return false;
	};

	/**
	 * Drop handler. Adapts pasted text.
	 * @param {jQuery.Event} e
	 * @return {boolean}
	 */
	CXSectionEditor.prototype.dropHandler = function ( e ) {
		var text = e.originalEvent.dataTransfer.getData( 'text' ) ||
			e.originalEvent.dataTransfer.getData( 'text/plain' );
		// Focus at editable area to have a valid selection range for
		// document.execCommand
		mw.cx.selection.restore( 'translation' );
		document.execCommand( 'insertHTML', false, text );
		return false;
	};

	/**
	 * Bind event handlers.
	 */
	CXSectionEditor.prototype.listen = function () {
		var self = this;

		this.$editableElement.on( 'input', OO.ui.debounce( function () {
			// Delay the input handler check till user pauses typing.
			// If this check is done every input,
			// the responsiveness will get affected.
			self.onChange();
		}, 200 ) );

		this.$editableElement.on( 'keypress', function ( e ) {
			if ( e.which !== 13 ) {
				return true;
			}
			// Disable pressing return key in headers and figure caption
			if ( self.$editableElement.is( 'h1, h2, h3, h4, h5, h6, figcaption' ) ) {
				return false;
			}
			if ( self.$editableElement.is( 'p, div' ) ) {
				// insert 2 br tags (if only one br tag is inserted the cursor won't go to the second line)
				mw.cx.selection.pasteHTML( '<br><br>' );
				self.onChange();
				// prevent the default behaviour of return key pressed
				return false;
			}
		} );

		this.$editableElement
			.on( 'paste', this.pasteHandler.bind( this ) )
			.on( 'drop', this.dropHandler.bind( this ) );
	};

	/**
	 * The CXSectionEditor plugin.
	 * Sets common properties on all editable elements
	 * in the translation column.
	 * @return {jQuery}
	 */
	$.fn.cxEditor = function () {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxSectionEditor' );

			if ( !data ) {
				$this.data( 'cxSectionEditor', ( data = new CXSectionEditor( this ) ) );
			}
		} );
	};
}() );
