/**
 * Dialog for displaying CAPTCHA for Content Translation.
 * Note that methods are not safe to call before the dialog has initialized.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @extends OO.ui.ProcessDialog
 *
 * @constructor
 * @param {Object} [config] Configuration options
 */
mw.cx.ui.CaptchaDialog = function ( config ) {
	// Parent constructor
	mw.cx.ui.CaptchaDialog.super.call( this, config );

	// Initialization
	this.$element.addClass( 'mw-cx-ui-captcha-dialog' );
	this.$intro = $( '<p>' ).addClass( 'mw-cx-ui-captcha-dialog-intro' );
	this.$captchaContent = $( '<div>' ).addClass( 'mw-cx-ui-captcha-dialog-content' );
	this.input = new OO.ui.TextInputWidget( {
		classes: [ 'mw-cx-ui-captcha-dialog-input' ]
	} );

	// Publish on "Enter" key in captcha input field, as it is single line.
	this.input.connect( this, { enter: function () {
		this.executeAction( 'publish' );
	}.bind( this ) } );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.CaptchaDialog, OO.ui.ProcessDialog );

/* Static Properties */

mw.cx.ui.CaptchaDialog.static.name = 'cxCaptcha';

mw.cx.ui.CaptchaDialog.static.title = mw.msg( 'cx-publish-captcha-title' );

mw.cx.ui.CaptchaDialog.static.actions = [
	{ action: 'publish', label: mw.msg( 'cx-publish-button' ), flags: [ 'primary', 'progressive' ] },
	{ action: 'cancel', label: mw.msg( 'cx-captcha-dialog-cancel' ), flags: 'safe' }
];

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.ui.CaptchaDialog.prototype.initialize = function () {
	// Parent method
	mw.cx.ui.CaptchaDialog.super.prototype.initialize.call( this );

	this.$body.append( this.$errors.empty(), this.$intro, this.$captchaContent, this.input.$element );
};

/**
 * @inheritdoc
 */
mw.cx.ui.CaptchaDialog.prototype.getReadyProcess = function () {
	this.input.setValue( '' ).focus();

	// Parent method
	return mw.cx.ui.CaptchaDialog.super.prototype.getReadyProcess.call( this, arguments );
};

/**
 * @inheritdoc
 */
mw.cx.ui.CaptchaDialog.prototype.getActionProcess = function ( action ) {
	return new OO.ui.Process( function () {
		this.clearContent();
		this.close();
		this.emit( action );
	}, this );
};

/**
 * @inheritdoc
 */
mw.cx.ui.CaptchaDialog.prototype.onDialogKeyDown = function ( e ) {
	if ( e.which === OO.ui.Keys.ESCAPE && this.constructor.static.escapable ) {
		this.executeAction( 'cancel' );
		e.preventDefault();
		e.stopPropagation();
		return;
	}

	return mw.cx.ui.CaptchaDialog.super.prototype.onDialogKeyDown.call( this, e );
};

/**
 * Override parent showErrors() method to display errors inline and not inside overlay.
 *
 * @param {string} error
 */
mw.cx.ui.CaptchaDialog.prototype.showErrors = function ( error ) {
	this.$errorItems = $( '<div>' )
		.addClass( 'oo-ui-processDialog-error' )
		.text( error );

	this.$errors
		.removeClass( 'oo-ui-element-hidden' )
		.append( this.$errorItems );
};

mw.cx.ui.CaptchaDialog.prototype.clearContent = function () {
	this.$intro.empty();
	this.$captchaContent.empty();
};

mw.cx.ui.CaptchaDialog.prototype.initIntro = function () {
	this.$intro.append(
		$( '<strong>' ).text( mw.msg( 'captcha-label' ) ),
		document.createTextNode( mw.msg( 'colon-separator' ) )
	);
};

/**
 * @param {string} message Message key for intro sentence.
 * @param {string} question Plain string of HTML string of captcha question.
 * @param {string} mimeType Mime type of question (plain text or HTML).
 */
mw.cx.ui.CaptchaDialog.prototype.setCaptcha = function ( message, question, mimeType ) {
	this.initIntro();

	if ( mimeType === 'text/html' ) {
		question = $.parseHTML( question );
	} else if ( mimeType === 'text/plain' ) {
		question = document.createTextNode( question );
	} else {
		mw.log.error( '[CX] Unexpected mime type for captcha: ' + mimeType );
		return;
	}

	// eslint-disable-next-line mediawiki/msg-doc
	this.$intro.append( mw.message( message ).parseDom(), '<br>', question );
};

/**
 * Display the FancyCaptcha.
 *
 * @param {string} url URL to the image captcha.
 */
mw.cx.ui.CaptchaDialog.prototype.setFancyCaptcha = function ( url ) {
	var $captchaImg,
		reloadButton = new OO.ui.ButtonWidget( {
			framed: false,
			classes: [ 'fancycaptcha-reload' ],
			label: mw.msg( 'fancycaptcha-reload-text' ),
			icon: 'reload',
			flags: 'progressive'
		} );

	this.initIntro();

	this.$intro.append(
		$( mw.message( 'fancycaptcha-create' ).parseDom() )
			.filter( 'a' ).prop( 'target', '_blank' ).end()
	);

	$captchaImg = $( '<img>' )
		.prop( 'src', url )
		.addClass( 'fancycaptcha-image' )
		.on( 'load', this.updateSize.bind( this ) );
	this.$captchaContent.addClass( 'fancycaptcha-captcha-container' ).append(
		$captchaImg,
		' ',
		reloadButton.$element
	);
};
