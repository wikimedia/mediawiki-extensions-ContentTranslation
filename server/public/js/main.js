( function ( $ ) {
	'use strict';
	var cxdata;
	$( '.sourceText' ).on( 'click', '.cx-segment', function () {
		var segment = cxdata.segments[$( this ).data( 'segment' )];
		console.log( segment );
	} );

	$( '.sourceText' ).on( 'click', '.cx-link', function () {
		var linkid = cxdata.links[$( this ).data( 'linkid' )];
		console.log( linkid );
	} );

	/* global io */
	$( document ).ready( function () {
		var socket = io.connect( '/', { port: 8000 } );

		$( 'button' ).click( function () {
			$( 'progress' ).show();
			socket.emit( 'cx.init', {
				sourceText: $('.sourceText').html(),
				sourceLanguage: $('input[name=sourceLanguage').val(),
				targetLanguage: $('input[name=targetLanguage').val()
			} );
			socket.on( 'cx.data.update', function ( data ) {
				cxdata = data;
				$( '.status' ).text( 'Recieved version ' + cxdata.version );
				$( '.sourceText' ).html( cxdata.segmentedContent );
				console.log( cxdata );
			} );
		} );
	} );
}( jQuery ) );
