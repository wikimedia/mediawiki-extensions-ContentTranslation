( function ( $ ) {
	'use strict';
	/* global io */
	$( document ).ready( function () {
		var socket = io.connect( '/', { port: 8000 } );

		$( 'button' ).click( function() {
			$( 'progress' ).show();
			socket.emit( 'cx.init', {
				sourceText: $('.sourceText').html(),
				sourceLanguage: $('input[name=sourceLanguage').val(),
				targetLanguage: $('input[name=targetLanguage').val()
			} );
			socket.on( 'cx.initialized', function ( data ) {
				$( '.status' ).text( 'Connected to server' );
				console.log( data );
			} );
		} );
	} );
}( jQuery ) );