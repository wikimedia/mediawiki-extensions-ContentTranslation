( function ( $ ) {
	'use strict';

	var cxdata;
	$( '.article' ).on( 'click', '.cx-segment', function () {
		var segment = cxdata.segments[$( this ).data( 'segment' )];
		console.log( segment );
	} );

	$( '.article' ).on( 'click', '.cx-link', function () {
		var linkid = cxdata.links[$( this ).data( 'linkid' )];
		console.log( linkid );
	} );

	/* global io */
	$( document ).ready( function () {
		var socket = io.connect( '/' );
		$( 'progress' ).hide();
		socket.on( 'cx.data.update', function ( data ) {
			cxdata = data;
			$( 'progress' ).hide();
			$( '.status' ).text( 'Recieved version '+ cxdata.version + '. Click on the content segments to inspect.');
			$( '.article' ).html( cxdata.segmentedContent );
			console.log( cxdata );
		} );
		$( 'button' ).click( function () {
			$( 'progress' ).show();
			$( '.status' ).text( 'Connecting to server...' );
			socket.emit( 'cx.init', {
				sourcePage: $( 'input[name=sourcePage]' ).val(),
				sourceLanguage: $( 'input[name=sourceLanguage]' ).val(),
				targetLanguage: $( 'input[name=targetLanguage]' ).val()
			} );
		} );
	} );
}( jQuery ) );
