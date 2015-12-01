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

	/**
	 * Handles show the publishing options dialog.
	 *
	 * @class
	 */
	function CXPublishingDialog( trigger ) {
		this.$trigger = $( trigger );
		this.$dialog = null;
		this.$close = null;
		this.$message = null;
		this.$publishButton = null;
		this.$keepButton = null;
		this.init();
	}

	/**
	 * Initializes the publishing dialog instance.
	 */
	CXPublishingDialog.prototype.init = function () {
		var title = $( '.cx-column--translation > h2' ).text();

		this.render( title );
		this.position();
		this.show();
	};

	/**
	 * Renders the publishing options dialog.
	 *
	 * @param {string} title The title of the existing article
	 */
	CXPublishingDialog.prototype.render = function ( title ) {
		var $buttons, username, namespace;

		username = mw.user.getName();
		namespace = mw.config.get( 'wgContentTranslationTargetNamespace' );

		this.$dialog = $( '<div>' )
			.addClass( 'cx-publishing-dialog' )
			.hide();

		this.$close = $( '<div>' )
			.addClass( 'cx-publishing-dialog__close' );

		this.$message = $( '<p>' )
			.addClass( 'cx-publishing-dialog__message' );

		this.$dialog.find( '.cx-publishing-dialog__message > a' ).prop( 'target', '_blank' );

		$buttons = $( '<div>' )
			.addClass( 'cx-publishing-dialog__buttons' );

		this.$keepButton = $( '<button>' )
			.addClass( 'cx-publishing-dialog__buttons-keep mw-ui-button mw-ui-quiet' );

		if ( namespace === 'User' ) {
			this.$keepButton.text( mw.msg( 'cx-publishing-dialog-keep-button' ) );
		} else {
			this.$keepButton.text( mw.msg( 'cx-publishing-dialog-publish-draft-button' ) );
		}

		this.$publishButton = $( '<button>' )
			.addClass( 'cx-publishing-dialog__buttons-publishanyway mw-ui-button mw-ui-progressive' )
			.text( mw.msg( 'cx-publishing-dialog-publish-anyway-button' ) );

		this.setMessage( title );
		$buttons.append( this.$publishButton, this.$keepButton );
		this.$dialog.append( this.$close, this.$message, $buttons );
		$( 'body' ).append( this.$dialog );
	};

	/**
	 * Sets the message for the publishing options dialog
	 *
	 * @param {string} title The title of the article to link in the message
	 */
	CXPublishingDialog.prototype.setMessage = function ( title ) {
		var publishedTitle, link;

		publishedTitle = mw.cx.SiteMapper.prototype.getTargetTitle( title );

		link = $( '<a>' ).attr( {
			href: mw.util.getUrl( publishedTitle ),
			target: '_blank'
		} ).text( publishedTitle )[ 0 ].outerHTML;

		this.$message.html( mw.msg( 'cx-publishing-dialog-message', link ) );

	};

	/**
	 * Positions the dialog relative to the publish button.
	 */
	CXPublishingDialog.prototype.position = function () {
		var buttonPosition, buttonCenter, dialogLeft, dialogTop;

		buttonPosition = this.$trigger.position();
		buttonCenter = buttonPosition.left + ( this.$trigger.outerWidth() / 2 );
		dialogLeft = buttonCenter - ( this.$dialog.outerWidth() / 2 );
		dialogTop = $( window ).scrollTop() + buttonPosition.top + this.$trigger.height() + 20;
		this.$dialog.css( {
			top: dialogTop,
			left: dialogLeft,
			'z-index': 100
		} );

	};

	/**
	 * Listen for events. This dialog is kind of model dialog.
	 * An action is expected from user while it is shown. The code
	 * that invoked this dialog will be waiting for this action.
	 * Hence the method returns a jQuery Promise
	 *
	 * @return {jQuery.Promise}
	 */
	CXPublishingDialog.prototype.listen = function () {
		var deferred = $.Deferred(),
			self = this;

		$( window ).on( 'scroll', $.proxy( this.position, this ) );
		this.$keepButton.on( 'click', function () {
			deferred.resolve( false );
			self.$dialog.remove();
		} );
		this.$publishButton.on( 'click', function () {
			deferred.resolve( true );
			self.$dialog.remove();
		} );
		this.$close.on( 'click', function () {
			deferred.reject();
			self.$dialog.remove();
		} );

		return deferred.promise();
	};

	/**
	 * Shows the dialog
	 */
	CXPublishingDialog.prototype.show = function () {
		this.$dialog.show();
	};

	/**
	 * CXPublishingDialog Plugin
	 */
	$.fn.cxPublishingDialog = function () {
		return this.each( function () {
			var $this = $( this );
			$this.data( 'cxPublishingDialog', new CXPublishingDialog( this ) );
		} );
	};
}( jQuery, mediaWiki ) );
