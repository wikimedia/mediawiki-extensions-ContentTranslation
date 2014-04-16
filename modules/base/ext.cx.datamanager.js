/**
 * ContentTranslation extension
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

	var socket;

	/* global io */
	function initConnection() {
		if ( !window.io ) {
			return false;
		}
		socket = io.connect( mw.config.get( 'wgContentTranslationServerURL' ) );
		mw.log( '[CX] Connected to server' );
		return true;
	}

	function updateModel( data ) {
		mw.log( '[CX] Received data from server' );
		mw.cx.data = data;
		mw.hook( 'mw.cx.source.ready' ).fire();
	}

	mw.cx.connect = function () {
		if ( !socket ) {
			if ( !initConnection() ) {
				// io not defined. Server is unreachable.
				$( '.cx-header__infobar' )
					.text( mw.msg( 'cx-error-server-connection' ) )
					.show();
				return;
			}
		}
		socket.emit( 'cx.init', {
			// FIXME
			sourcePage: 'http://en.wikipedia.org/wiki/' + mw.cx.sourceTitle,
			sourceLanguage: mw.cx.sourceLanguage,
			targetLanguage: mw.cx.targetLanguage,
			channel: 'cx'
		} );
		mw.log( '[CX] Sending context information to server' );
		socket.on( 'cx.data.update', updateModel );
	};

}( jQuery, mediaWiki ) );
