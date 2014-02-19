/**
 * ContentTranslation Server

* @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

'use strict';

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
	var dataModelManager = this;

	this.dataModel = {
		version: 0,
		sourceLang: this.context.sourceLanguage,
		targetLang: this.context.targetLanguage,
		sourceLocation: this.context.sourceTitle,
		segments: [],
		segmentedContent: [],
		segmentCount: 0,
		dictionary: null,
		glossary: null,
		links: null
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
