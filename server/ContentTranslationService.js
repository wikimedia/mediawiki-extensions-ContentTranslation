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

// global includes
var config,
	express = require( 'express' ),
	cluster = require( 'cluster' ),
	CXMTInterface = require( __dirname+ '/mt/CXMTInterface.js' ).CXMTInterface;
try {
	var config;
	config = require( __dirname + '/config.js' );
} catch ( e ) {
	config = { port: 8000 };
}

/**
 * The name of this instance.
 * @property {string}
 */
var instanceName = cluster.isWorker ? 'worker(' + process.pid + ')' : 'master';

console.log( ' - ' + instanceName + ' loading...' );

/* -------------------- web app access points below --------------------- */

var app = express();

app.translator = new CXMTInterface( config );

app.use( express.urlencoded() );

// robots.txt: no indexing.
app.get( /^\/robots.txt$/, function ( req, res ) {
	res.end( 'User-agent: *\nDisallow: /\n' );
} );

app.post( /^\/$/, function ( req, res ) {
	var sourceLang = req.body.sourcelang,
		targetLang = req.body.targetlang,
		sourceText = req.body.sourcetext;

	res.setHeader( 'Content-Type', 'text/plain; charset=UTF-8' );
	// TODO: create configurable access control list for production
	res.setHeader( 'Access-Control-Allow-Origin', '*' );
	res.end( app.translator.translate(
		sourceLang,
		targetLang,
		sourceText
	) );
} );

// Everything else goes through this.
app.use(express.static(__dirname + '/public'));

console.log( ' - ' + instanceName + ' ready' );

app.listen( config.port );

module.exports = app;
