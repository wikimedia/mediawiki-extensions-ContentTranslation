/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
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
		this.init();
	}

	/**
	 * Initializes the publishing dialog instance.
	 * @param {string} title The title of the existing article
	 */
	CXPublishingDialog.prototype.init = function () {
		var title = $( '.cx-column--translation > h2' ).text();

		if ( this.$dialog ) {
			this.setMessage( title );
		} else {
			this.render( title );
		}
		this.listen();
		this.position();
		this.show();
	};

	/**
	 * Increase the version number of a title starting with 1.
	 * @param {string} title The title to increase the version on.
	 */
	function increaseVersion( title ) {
		var match, version;

		match = title.match( /^.*\((\d)\)$/ );
		if ( match ) {
			version = parseInt( match[ 1 ], 10 ) + 1;

			return title.replace( /\(\d+\)$/, '(' + version + ')' );
		}

		return title + ' (1)';
	}

	/**
	 * Renders the publishing options dialog.
	 * @param {string} title The title of the existing article
	 */
	CXPublishingDialog.prototype.render = function ( title ) {
		var $buttons, $keepButton, $publishAnywayButton, username, namespace,
			cxPublishingDialog = this;

		username = mw.user.getName();
		namespace = mw.config.get( 'wgContentTranslationTargetNamespace' );

		this.$dialog = $( '<div>' )
			.addClass( 'cx-publishing-dialog' )
			.hide();

		this.$close = $( '<div>' )
			.addClass( 'cx-publishing-dialog__close' )
			.on( 'click', function () {
				cxPublishingDialog.$dialog.hide();
			} );

		this.$message = $( '<p>' )
			.addClass( 'cx-publishing-dialog__message' );

		$( '.cx-publishing-dialog__message > a' ).prop( 'target', '_blank' );

		$buttons = $( '<div>' )
			.addClass( 'cx-publishing-dialog__buttons' );

		$keepButton = $( '<button>' )
			.addClass( 'cx-publishing-dialog__buttons-keep mw-ui-button mw-ui-quiet' );

		if ( namespace === 'User' ) {
			$keepButton.text( mw.msg( 'cx-publishing-dialog-keep-button' ) );
		} else {
			$keepButton.text( mw.msg( 'cx-publishing-dialog-publish-draft-button' ) );
		}

		$keepButton.on( 'click', function () {
				var text = $( '.cx-column--translation > h2' ).text();
				if ( /^User:/.test( text ) ||
					namespace === 'User'
				) {
					text = increaseVersion( text );
				} else {
					text = 'User:' + username + '/' + text;
				}
				$( '.cx-column--translation > h2' ).text( text );
				cxPublishingDialog.$dialog.hide();
				mw.hook( 'mw.cx.publish' ).fire();
			} );

		$publishAnywayButton = $( '<button>' )
			.addClass( 'cx-publishing-dialog__buttons-publishanyway mw-ui-button mw-ui-progressive' )
			.text( mw.msg( 'cx-publishing-dialog-publish-anyway-button' ) )
			.on( 'click', function () {
				cxPublishingDialog.$dialog.hide();
				mw.hook( 'mw.cx.publish' ).fire( true );
			} );

		this.setMessage( title );

		$buttons.append( $publishAnywayButton, $keepButton );

		this.$dialog.append( this.$close, this.$message, $buttons );

		$( 'body' ).append( this.$dialog );

	};

	/**
	 * Sets the message for the publishing options dialog
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
		dialogTop = $( window ).scrollTop() +
			buttonPosition.top +
			this.$trigger.height() + 20;

		this.$dialog.css( {
			'top': dialogTop,
			'left': dialogLeft,
			'z-index': 100
		} );

	};

	/**
	 * A listener that adjust the positioning when the page is scrolled
	 * Necessary because the publishing button moves to the left on window scroll
	 */
	CXPublishingDialog.prototype.listen = function () {
		$( window ).on( 'scroll', $.proxy( this.position, this ) );
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
			/*jshint validthis:true */
			var $this = $( this ),
				data = $this.data( 'cxPublishingDialog' );

			if ( !data ) {
				$this.data( 'cxPublishingDialog', ( data = new CXPublishingDialog( this ) ) );
			}

			data.init();

		} );
	};
} )( jQuery, mediaWiki );
