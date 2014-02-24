/**
 *  ContentTranslation server
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/**
 * @class ContentTranslationService
 * @singleton
 * @private
 */

'use strict';

var app, instanceName, server, io, port, context,
	express = require( 'express' );

port = process.argv[2] || 8000;

/**
 * The name of this instance.
 * @property {string}
 */
instanceName = 'worker(' + process.pid + ')';
app = express();
server = require( 'http' ).createServer( app );
io = require( 'socket.io' ).listen( server );

// socket.io connection establishment
io.sockets.on( 'connection', function ( socket ) {
	console.log( '[CX] Client connected to ' + instanceName + '. Socket: ' + socket.id );
	socket.on( 'cx.init', function ( data ) {
		context = {
			sourceLanguage: data.sourceLanguage,
			targetLanguage: data.targetLanguage,
			sourceText: data.sourceText,
			socket: socket
		};
		socket.emit( 'cx.initialized', true );
	} );
} );

// Everything else goes through this.
app.use( express.static( __dirname + '/public') );
console.log( '[CX] ' + instanceName + ' ready. Listening on port: ' + port );
server.listen( port );

module.exports = app;

