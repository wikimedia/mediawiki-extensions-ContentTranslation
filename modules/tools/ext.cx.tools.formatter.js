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

	var template = '<div class="card card__format">' +
		'<button class="card__format--bold"></button>' +
		'<button class="card__format--italic"></button>' +
		'<button class="card__format--orderedlist"></button>' +
		'<button class="card__format--unorderedlist"></button>' +
		'</div>';

	/**
	 * FormatTool Class
	 */
	function FormatTool() {
		this.$card = $( template );
		this.$section = null;
		this.buttons = {};
		this.selection = null;
		this.render();
	}

	/**
	 * Render the format tool card. Does not show.
	 */
	FormatTool.prototype.render = function () {
		this.$buttons = {
			bold: this.$card.find( '.card__format--bold' ),
			italic: this.$card.find( '.card__format--italic' ),
			orderedlist: this.$card.find( '.card__format--orderedlist' ),
			unorderedlist: this.$card.find( '.card__format--unorderedlist' )
		};

		if ( !window.chrome ) {
			// Following controls work only in Chrome.
			this.$buttons.orderedlist.hide();
			this.$buttons.unorderedlist.hide();
		}

		this.$card.hide();
	};

	/**
	 * Get command state for the given command
	 *
	 * @param {string} command Example: bold, italic.
	 * @return {boolean} whether the selection has the command applied or not.
	 */
	function getCommandState( command ) {
		// queryCommandEnabled returns a Boolean value that indicates whether a specified
		// command can be successfully executed using execCommand, or queried
		// given the current state of the document.
		// https://docs.webplatform.org/wiki/dom/TextRange/queryCommandEnabled
		// Also see list of contenteditable browser inconsistencies
		// https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md
		return document.queryCommandEnabled( command ) && document.queryCommandState( command );
	}

	/**
	 * Show the card.
	 */
	FormatTool.prototype.show = function () {
		// Highlight the buttons based on the current state of the selection
		this.$buttons.bold.toggleClass( 'highlight', getCommandState( 'bold' ) );
		this.$buttons.italic.toggleClass( 'highlight', getCommandState( 'italic' ) );
		this.$buttons.orderedlist.toggleClass( 'highlight', getCommandState( 'insertOrderedList' ) );
		this.$buttons.unorderedlist.toggleClass( 'highlight', getCommandState( 'insertUnorderedList' ) );
		this.$card.show();
		this.onShow();
	};

	FormatTool.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	FormatTool.prototype.getCard = function () {
		return this.$card;
	};

	/**
	 * Make the selection bold
	 */
	FormatTool.prototype.bold = function () {
		mw.cx.selection.restore( 'format' );
		document.execCommand( 'bold' );
	};

	/**
	 * Make the selection ttalic
	 */
	FormatTool.prototype.italic = function () {
		mw.cx.selection.restore( 'format' );
		document.execCommand( 'italic' );
	};

	/**
	 * Make the selection orderedList
	 */
	FormatTool.prototype.orderedList = function () {
		var $prev, attributes, formatter = this;
		try {
			mw.cx.selection.restore( 'format' );
			document.execCommand( 'insertOrderedList' );
		} catch ( e ) {
			mw.log( 'Native insertOrderedList command failed.' + e );
			// Workaround to handle insertion of OL tag. Incomplete.
			$prev = this.$section.prev();
			attributes = this.$section.prop( 'attributes' );

			this.$section.parent().prop( 'contenteditable', true );
			this.$section.focus();
			document.execCommand( 'insertOrderedList' );
			$prev.parent().prop( 'contenteditable', false );
			this.$section = $prev.next();
			this.$section.prop( 'contenteditable', true );
			$.each( attributes, function () {
				formatter.$section.attr( this.name, this.value );
			} );
		}
	};

	/**
	 * Make the selection unOrderedList
	 */
	FormatTool.prototype.unOrderedList = function () {
		var $prev, attributes, formatter = this;
		try {
			mw.cx.selection.restore( 'format' );
			document.execCommand( 'insertUnorderedList' );
		} catch ( e ) {
			mw.log( 'Native insertUnorderedList command failed.' + e );
			// Attempt a workaround to handle insertion of UL tag.
			$prev = this.$section.prev();
			attributes = this.$section.prop( 'attributes' );

			this.$section.parent().prop( 'contenteditable', true );
			this.$section.focus();
			document.execCommand( 'insertUnorderedList' );
			$prev.parent().prop( 'contenteditable', false );
			this.$section = $prev.next();
			this.$section.prop( 'contenteditable', true );
			$.each( attributes, function () {
				formatter.$section.attr( this.name, this.value );
			} );
		}
	};

	/**
	 * Shortcut key press handler
	 */
	FormatTool.prototype.shortCutHandler = function ( e ) {
		if ( e.ctrlKey && e.which === 66 ) {
			e.preventDefault();
			this.bold();
			return false;
		}
		if ( e.ctrlKey && e.which === 73 ) {
			e.preventDefault();
			this.italic();
			return false;
		}

		return true;
	};

	/**
	 * Bind formatting events
	 */
	FormatTool.prototype.listen = function () {
		this.$buttons.bold.on( 'click', $.proxy( this.bold, this ) );
		this.$buttons.italic.on( 'click', $.proxy( this.italic, this ) );
		this.$buttons.orderedlist.on( 'click', $.proxy( this.orderedList, this ) );
		this.$buttons.unorderedlist.on( 'click', $.proxy( this.unOrderedList, this ) );
		this.$section.on( 'keydown', $.proxy( this.shortCutHandler, this ) );
	};

	function getParentSection() {
		var $selectionParent = $( mw.cx.selection.getParent( 'format' ) );
		if ( $selectionParent.is( '[contenteditable="true"]' ) ) {
			return $selectionParent;
		}
		return $selectionParent.parents( '[contenteditable="true"]' );
	}

	FormatTool.prototype.start = function ( section ) {
		this.$section = section.jquery ? section : getParentSection();

		if ( this.$section.is( 'h1, h2, h3, h4, h5, h6, figure, table' ) ) {
			// Do not show formatting tool for headers, figures and tables.
			this.stop();
			return;
		}

		// Capture the selection
		mw.cx.selection.save( 'format', mw.cx.selection.get() );
		this.listen();
		this.show();
	};

	FormatTool.prototype.stop = function () {
		this.$card.remove();
		mw.hook( 'mw.cx.tools.shown' ).fire( false );
	};

	FormatTool.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.translation.focus',
			'mw.cx.select.word',
			'mw.cx.progress'
		];
	};

	mw.cx.tools.formatter = FormatTool;
}( jQuery, mediaWiki ) );
