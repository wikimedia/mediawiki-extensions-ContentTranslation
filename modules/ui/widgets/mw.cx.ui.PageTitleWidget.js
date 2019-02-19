'use strict';

/**
 * Page title widget. This is the header for source and translation columns.
 * It is editable (contenteditable) for translation and readonly for source page.
 *
 * @class
 * @extends OO.ui.MultilineTextInputWidget
 * @mixins ve.ce.CXLintableNode
 * @param {mw.cx.dm.PageTitleModel} model
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.PageTitleWidget = function ( model, config ) {
	// Configuration initialization
	config = $.extend( config, {
		classes: [ 'cx-pagetitle' ],
		type: 'text',
		autosize: true
	} );

	this.model = model;

	// Parent constructor
	mw.cx.ui.PageTitleWidget.super.call( this, config );

	// Mixin constructor
	ve.ce.CXLintableNode.call( this );

	this.validTitle = null;

	// Events
	$( this.getElementWindow() ).on(
		'resize',
		OO.ui.throttle( this.onWindowResize.bind( this ), 300 )
	);

	this.getFocusableElement().off( 'focus' ).on( 'focus', this.emit.bind( this, 'focus' ) );
	$( document )
		.off( 'blur', '.cx-pagetitle' )
		.on( 'blur', '.cx-pagetitle', this.emit.bind( this, 'blur' ) );
	this.connect( this, {
		change: OO.ui.debounce( this.validateTitle.bind( this ), 300 )
	} );
};

/* Setup */

OO.inheritClass( mw.cx.ui.PageTitleWidget, OO.ui.MultilineTextInputWidget );
OO.mixinClass( mw.cx.ui.PageTitleWidget, ve.ce.CXLintableNode );

/* Methods */

/**
 * @return {mw.cx.dm.PageTitleModel}
 */
mw.cx.ui.PageTitleWidget.prototype.getModel = function () {
	return this.model;
};

/**
 * @inheritdoc
 */
mw.cx.ui.PageTitleWidget.prototype.getFocusableElement = function () {
	return this.$tabIndexed;
};

/**
 * @inheritdoc
 */
mw.cx.ui.PageTitleWidget.prototype.blursEditingSurface = function () {
	return true;
};

mw.cx.ui.PageTitleWidget.prototype.validateTitle = function ( value ) {
	// Empty array in param resolves all issues with the title
	this.model.resolveTranslationIssues( [] );

	if ( !mw.Title.newFromText( value ) ) {
		this.model.addTranslationIssues( [ value === '' ? this.getEmptyTitleError() : this.getInvalidCharacterError() ] );
		return;
	}

	ve.init.platform.linkCache.get( this.getValue() ).then( function ( result ) {
		if ( result.missing ) {
			return;
		}

		this.model.addTranslationIssues( [ this.getExistingTitleWarning() ] );
	}.bind( this ) );
};

mw.cx.ui.PageTitleWidget.prototype.getExistingTitleWarning = function () {
	return {
		name: 'existing-title',
		message: mw.message(
			'cx-tools-linter-page-exists-message',
			$( '<a>' ).prop( 'href', mw.util.getUrl( this.getValue() ) ).text( this.getValue() )
		),
		messageInfo: {
			title: mw.msg( 'cx-tools-linter-page-exists' ),
			// FIXME: Point to the more informative page about overwriting content
			help: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Editing_pages',
			resolvable: true
		}
	};
};

mw.cx.ui.PageTitleWidget.prototype.getEmptyTitleError = function () {
	return {
		name: 'empty-title',
		message: mw.message( 'cx-tools-linter-empty-title-message' ),
		messageInfo: {
			title: mw.msg( 'cx-tools-linter-empty-title' ),
			// FIXME: Link to localized help page
			help: 'https://en.wikipedia.org/wiki/Wikipedia:Page_name',
			type: 'error'
		}
	};
};

mw.cx.ui.PageTitleWidget.prototype.getInvalidCharacterError = function () {
	var titleObj = mw.Title.newFromUserInput( this.getValue() ),
		messageData = {
			name: 'invalid-title',
			message: mw.message( 'cx-tools-linter-invalid-character-message' ),
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

mw.cx.ui.PageTitleWidget.prototype.fixTitle = function () {
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
mw.cx.ui.PageTitleWidget.prototype.onKeyPress = function ( e ) {
	if ( e.which === OO.ui.Keys.ENTER ) {
		this.emit( 'enter', e );
		return false;
	}
};

/**
 * Window resize handler
 */
mw.cx.ui.PageTitleWidget.prototype.onWindowResize = function () {
	// We need to trick the parent adjustSize() method not to exit early
	// because it checks if input string has changed by comparing with
	// cache value. If there was no limitation here, we would just
	// register adjustSize() method as window resize handler.
	this.valCache = null;
	this.adjustSize();
};
