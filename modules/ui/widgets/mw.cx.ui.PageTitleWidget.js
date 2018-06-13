'use strict';

/**
 * Page title widget. This is the header for source and translation columns.
 * It is editable (contenteditable) for translation and readonly for source page.
 * Supports validation of values.
 * @class
 * @extends OO.ui.MultilineTextInputWidget
 * @mixins ve.dm.CXLintableNode
 * @param {Object} [config] Configuration object
 */
mw.cx.widgets.PageTitleWidget = function ( config ) {
	// Configuration initialization
	config = $.extend( config, {
		classes: [ 'cx-pagetitle' ],
		type: 'text',
		autosize: true
	} );

	// Parent constructor
	mw.cx.widgets.PageTitleWidget.super.call( this, config );

	// Mixin constructors
	ve.dm.CXLintableNode.call( this );

	// Events
	$( this.getElementWindow() ).on(
		'resize',
		OO.ui.throttle( this.onWindowResize.bind( this ), 300 )
	);

	this.focused = false;
	this.validTitle = null;

	// Events
	this.$input.off( 'focus blur' );
	this.connect( this, {
		change: OO.ui.debounce( this.validateTitle.bind( this ), 300 ),
		lintIssues: 'onLintIssue',
		lintIssuesResolved: 'onLintIssueResolved'
	} );
};

/* Setup */

OO.inheritClass( mw.cx.widgets.PageTitleWidget, OO.ui.MultilineTextInputWidget );
OO.mixinClass( mw.cx.widgets.PageTitleWidget, ve.dm.CXLintableNode );

mw.cx.widgets.PageTitleWidget.prototype.onMouseDown = function ( e ) {
	var input = e.target === this.$input[ 0 ],
		cardElement = $( '.cx-card-titlevalidation' )[ 0 ],
		card = cardElement && OO.ui.contains( cardElement, e.target, true );

	if ( ( !this.focused && input ) || card ) {
		// Debouncing trick is used to ensure that focus on this element
		// gets handled after blur is triggered on surface elements
		OO.ui.debounce( function () {
			this.emit( 'focus' );
			this.focused = true;
		}, 50 ).call( this );
	} else if ( this.focused && !input && !card ) {
		this.emit( 'blur' );
		this.focused = false;
	}
};

mw.cx.widgets.PageTitleWidget.prototype.registerMouseDownEvent = function () {
	$( this.getElementDocument() ).on( 'mousedown', this.onMouseDown.bind( this ) );

	return this;
};

mw.cx.widgets.PageTitleWidget.prototype.validateTitle = function ( value ) {
	if ( !mw.Title.newFromText( value ) ) {
		this.setLintResults( [ value === '' ? this.getEmptyTitleError() : this.getInvalidCharacterError() ] );
		return;
	}

	ve.init.platform.linkCache.get( this.getValue() ).then( function ( result ) {
		if ( result.missing ) {
			this.setLintResults( null );
			return;
		}

		this.setLintResults( [ this.getExistingTitleWarning() ] );
	}.bind( this ), function () {
		this.setLintResults( null );
	}.bind( this ) );
};

mw.cx.widgets.PageTitleWidget.prototype.getExistingTitleWarning = function () {
	return {
		message: mw.msg( 'cx-tools-linter-page-exists-message',
			$( '<a>' ).attr( {
				href: mw.util.getUrl( this.getValue() ),
				target: '_blank'
			} ).text( this.getValue() )[ 0 ].outerHTML
		),
		messageInfo: {
			title: mw.msg( 'cx-tools-linter-page-exists' ),
			// FIXME: Point to the more informative page about overwriting content
			help: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Editing_pages'
		}
	};
};

mw.cx.widgets.PageTitleWidget.prototype.getEmptyTitleError = function () {
	return {
		message: mw.msg( 'cx-tools-linter-empty-title-message' ),
		messageInfo: {
			title: mw.msg( 'cx-tools-linter-empty-title' ),
			// FIXME: Link to localized help page
			help: 'https://en.wikipedia.org/wiki/Wikipedia:Page_name',
			type: 'error'
		}
	};
};

mw.cx.widgets.PageTitleWidget.prototype.getInvalidCharacterError = function () {
	var titleObj = mw.Title.newFromUserInput( this.getValue() ),
		messageData = {
			message: mw.msg( 'cx-tools-linter-invalid-character-message' ),
			messageInfo: {
				title: mw.msg( 'cx-tools-linter-invalid-character' ),
				// FIXME: Link to localized help page
				help: 'https://en.wikipedia.org/wiki/Wikipedia:Page_name',
				type: 'error'
			}
		};

	if ( titleObj ) {
		this.validTitle = titleObj.title.replace( /_/g, ' ' );

		messageData.messageInfo = $.extend( messageData.messageInfo, {
			resolvable: true,
			actionIcon: 'trash',
			actionLabel: mw.msg( 'cx-tools-linter-invalid-character-action' ),
			action: this.fixTitle.bind( this )
		} );
	}

	return messageData;
};

mw.cx.widgets.PageTitleWidget.prototype.fixTitle = function () {
	this.setValue( this.validTitle );
};

mw.cx.widgets.PageTitleWidget.prototype.onLintIssue = function ( hasErrors ) {
	this.onLintIssueResolved();
	this.$element.addClass( hasErrors ? 'cx-pagetitle-error' : 'cx-pagetitle-warning' );
};

mw.cx.widgets.PageTitleWidget.prototype.onLintIssueResolved = function () {
	this.$element.removeClass( 'cx-pagetitle-error cx-pagetitle-warning' );
};

/**
 * Handle key press events. Disable enter key presses.
 *
 * @private
 * @param {jQuery.Event} e Key press event
 * @fires enter If enter key is pressed and input is not multiline
 * @return {boolean}
 */
mw.cx.widgets.PageTitleWidget.prototype.onKeyPress = function ( e ) {
	if ( e.which === OO.ui.Keys.ENTER ) {
		this.emit( 'enter', e );
		return false;
	}
};

/**
 * Window resize handler
 */
mw.cx.widgets.PageTitleWidget.prototype.onWindowResize = function () {
	// We need to trick the parent adjustSize() method not to exit early
	// because it checks if input string has changed by comparing with
	// cache value. If there was no limitation here, we would just
	// register adjustSize() method as window resize handler.
	this.valCache = null;
	this.adjustSize();
};
