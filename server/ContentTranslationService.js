/**
 * ContentTranslation server
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

var instanceName, context,
	express = require( 'express' ),
	args = require( 'minimist' )( process.argv.slice( 2 ) );

var port = args.port || 8000;

var app = express();
var server = require( 'http' ).createServer( app );
var io = require( 'socket.io' ).listen( server );
var redis = require( 'redis' );

// Use Redis as the store for socket.io
var RedisStore = require( 'socket.io/lib/stores/redis' );
io.set( 'store',
	new RedisStore( {
		redisPub: redis.createClient(),
		redisSub: redis.createClient(),
		redisClient: redis.createClient()
	} )
);

instanceName = 'worker(' + process.pid + ')';
// socket.io connection establishment
io.sockets.on( 'connection', function ( socket ) {
	var dataModelManager,
		CXDataModelManager,
		redisSub = redis.createClient();

	console.log( '[CX] Client connected to ' + instanceName + '). Socket: ' + socket.id );
	redisSub.subscribe( 'cx' );
	redisSub.on( 'message', function ( channel, message ) {
		socket.emit( 'cx.data.update', JSON.parse( message ) );
		console.log( '[CX] Received from channel #' + channel + ':' + message );
	} );

	socket.on( 'cx.init', function ( data ) {
		CXDataModelManager = require( __dirname + '/models/DataModelManager.js' ).CXDataModelManager;
		context = {
			sourceLanguage: data.sourceLanguage,
			targetLanguage: data.targetLanguage,
			sourcePage: data.sourcePage,
			pub: redis.createClient(),
			store: redis.createClient()
		};
		// Inject the session context to dataModelManager
		// It should take care of managing the data model and pushing
		// it to the client through socket.
		dataModelManager = new CXDataModelManager( context );
	} );

	socket.on( 'disconnect', function () {
		console.warn( '[CX] Dsconnecting from redis' );
		redisSub.quit();
	} );

} );

// Everything else goes through this.
app.use( express.static( __dirname + '/public' ) );
console.log( '[CX] ' + instanceName + ' ready. Listening on port: ' + port );
server.listen( port );

module.exports = app;
