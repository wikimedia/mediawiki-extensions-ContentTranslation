/**
 * ContentTranslation Server
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

'use strict';

var CXSegmenter = require( __dirname + '/../segmentation/CXSegmenter.js' ).CXSegmenter;

/**
 * CXDataModelManager
 * @class
 */
function CXDataModelManager( context ) {
	this.context = context;
	this.dataModel = null;
	this.init();
}

/**
 * Initialize
 */
CXDataModelManager.prototype.init = function () {
	var dataModelManager = this, segmenter;

	segmenter = new CXSegmenter( this.context.sourceText );
	segmenter.segment();
	this.dataModel = {
		version: 0,
		sourceLanguage: this.context.sourceLanguage,
		targetLanguage: this.context.targetLanguage,
		sourceLocation: this.context.sourceTitle,
		segments: segmenter.getSegments(),
		segmentedContent: segmenter.getSegmentedContent(),
		links: segmenter.getLinks()
	};
	dataModelManager.refresh();
};

/**
 * Refresh the data model. Syncs the data with the socket, updates version
 */
CXDataModelManager.prototype.refresh = function () {
	this.context.socket.emit( 'cx.data.update', this.getDataModel() );
	console.log( '[CX] Sending data. Version: ' + this.dataModel.version );
	this.updateVersion();
};

/**
 * Update the version
 */
CXDataModelManager.prototype.updateVersion = function () {
	this.dataModel.version += 1;
};

/**
 *  Get the data model
 */
CXDataModelManager.prototype.getDataModel = function () {
	return this.dataModel;
};

module.exports.CXDataModelManager = CXDataModelManager;
