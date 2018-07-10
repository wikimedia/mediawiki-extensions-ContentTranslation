'use strict';

/**
 * Page title widget. This is the header for source and translation columns.
 * It is editable (contenteditable) for translation and readonly for source page.
 * Supports validation of values.
 * @class
 * @extends OO.ui.MultilineTextInputWidget
 * @mixins ve.ce.CXLintableNode
 * @param {mw.cx.dm.PageTitleModel} model
 * @param {Object} [config] Configuration object
 */
mw.cx.widgets.PageTitleWidget = function ( model, config ) {
	// Configuration initialization
	config = $.extend( config, {
		classes: [ 'cx-pagetitle' ],
		type: 'text',
		autosize: true
	} );

	this.model = model;

	// Parent constructor
	mw.cx.widgets.PageTitleWidget.super.call( this, config );

	// Mixin constructors
	ve.ce.CXLintableNode.call( this );

	this.validTitle = null;

	// Events
	$( this.getElementWindow() ).on(
		'resize',
		OO.ui.throttle( this.onWindowResize.bind( this ), 300 )
	);
	this.$input.off( 'focus blur' ).on( {
		focus: OO.ui.debounce( this.onFocus.bind( this ), 50 ),
		blur: this.onBlur.bind( this )
	} );
	this.connect( this, {
		change: OO.ui.debounce( this.validateTitle.bind( this ), 300 )
	} );
};

/* Setup */

OO.inheritClass( mw.cx.widgets.PageTitleWidget, OO.ui.MultilineTextInputWidget );
OO.mixinClass( mw.cx.widgets.PageTitleWidget, ve.ce.CXLintableNode );

/* Methods */

mw.cx.widgets.PageTitleWidget.prototype.onFocus = function () {
	this.emit( 'focus' );
};

mw.cx.widgets.PageTitleWidget.prototype.onBlur = function () {
	this.emit( 'blur' );
};

/**
 * @return {mw.cx.dm.PageTitleModel}
 */
mw.cx.widgets.PageTitleWidget.prototype.getModel = function () {
	return this.model;
};

/**
 * @inheritdoc
 */
mw.cx.widgets.PageTitleWidget.prototype.getFocusableElement = function () {
	return this.$tabIndexed;
};

/**
 * @inheritdoc
 */
mw.cx.widgets.PageTitleWidget.prototype.blursEditingSurface = function () {
	return true;
};

mw.cx.widgets.PageTitleWidget.prototype.validateTitle = function ( value ) {
	if ( !mw.Title.newFromText( value ) ) {
		this.model.setTranslationIssues( [ value === '' ? this.getEmptyTitleError() : this.getInvalidCharacterError() ] );
		return;
	}

	ve.init.platform.linkCache.get( this.getValue() ).then( function ( result ) {
		if ( result.missing ) {
			this.model.setTranslationIssues( null );
			return;
		}

		this.model.setTranslationIssues( [ this.getExistingTitleWarning() ] );
	}.bind( this ), function () {
		this.model.setTranslationIssues( null );
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
