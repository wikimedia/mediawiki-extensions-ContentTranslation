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

app = express();
server = require( 'http' ).createServer( app );
io = require( 'socket.io' ).listen( server );

// socket.io connection establishment
io.sockets.on( 'connection', function ( socket ) {
	var datamodelManager,
		CXDataModelManager;
	console.log( '[CX] Client connected to worker(' + process.pid + '). Socket: ' + socket.id );
	socket.on( 'cx.init', function ( data ) {
		CXDataModelManager = require(  __dirname + '/models/dataModelManager.js').CXDataModelManager;
		context = {
			sourceLanguage: data.sourceLanguage,
			targetLanguage: data.targetLanguage,
			sourceText: data.sourceText,
			socket: socket
		};
		// Inject the session context to dataModelManager
		// It should take care of managing the data model and pushing
		// it to the client through socket.
		datamodelManager = new CXDataModelManager( context );
	} );
} );

// Everything else goes through this.
app.use( express.static( __dirname + '/public') );
console.log( '[CX] ' + instanceName + ' ready. Listening on port: ' + port );
server.listen( port );

module.exports = app;
