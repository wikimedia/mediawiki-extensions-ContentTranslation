'use strict';

/**
 * CX Target page
 *
 * @abstract
 * @mixins OO.EventEmitter
 *
 * @constructor
 * @param {Object} config
 */
mw.cx.dm.TargetPage = function TargetPage( config ) {
	// Mixin constructor
	OO.EventEmitter.call( this );
	this.config = config;
	this.language = config.sourceLanguage;
	this.direction = null;
	this.title = config.sourceTitle;
	this.revisionId = config.revision;
	this.section = [];
	this.categories = [];
};

/* Inheritance */

OO.mixinClass( mw.cx.dm.TargetPage, OO.EventEmitter );

/**
 * Build the target document for publishing
 */
mw.cx.dm.TargetPage.prototype.build = function () {
};

mw.cx.dm.TargetPage.prototype.publish = function () {};
