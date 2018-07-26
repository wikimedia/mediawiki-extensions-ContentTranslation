'use strict';

/**
 * CX Section state data model
 *
 * @constructor
 * @param {Number} sectionNumber
 */
mw.cx.dm.SectionState = function MwCxSectionState( sectionNumber ) {
	// @var {Number}
	this.sectionNumber = sectionNumber;
	// @var {String}
	this.sourceContent = null;
	// @var {Object}
	this.unmodifiedMTContent = {};
	// @var {String}
	this.userTranslationContent = null;
	// @var {String}
	this.currentMTProvider = null;
	// @var {Number}
	this.unmodifiedPercentage = 0;
	// @var {Number}
	this.translationProgressPercentage = 0;
};

mw.cx.dm.SectionState.prototype.setSourceContent = function ( content ) {
	this.sourceContent = content;
};

mw.cx.dm.SectionState.prototype.getSourceContent = function () {
	return this.sourceContent;
};

mw.cx.dm.SectionState.prototype.setUserTranslationContent = function ( content ) {
	this.userTranslationContent = content;
};

mw.cx.dm.SectionState.prototype.getUserTranslationContent = function () {
	return this.userTranslationContent;
};

mw.cx.dm.SectionState.prototype.setUnmodifiedMTContent = function ( content ) {
	if ( !this.currentMTProvider ) {
		throw new Error( 'Attempting to set unmodified MT without an MT provider' );
	}
	this.unmodifiedMTContent[ this.currentMTProvider ] = content;
};

mw.cx.dm.SectionState.prototype.getUnmodifiedMTContent = function () {
	return this.unmodifiedMTContent[ this.currentMTProvider ];
};

mw.cx.dm.SectionState.prototype.setCurrentMTProvider = function ( provider ) {
	this.currentMTProvider = provider;
};

mw.cx.dm.SectionState.prototype.getCurrentMTProvider = function () {
	return this.currentMTProvider;
};

mw.cx.dm.SectionState.prototype.getUnmodifiedPercentage = function () {
	return this.unmodifiedPercentage;
};

mw.cx.dm.SectionState.prototype.setUnmodifiedPercentage = function ( percent ) {
	this.unmodifiedPercentage = percent;
};

mw.cx.dm.SectionState.prototype.getTranslationProgressPercentage = function () {
	return this.translationProgressPercentage;
};

mw.cx.dm.SectionState.prototype.setTranslationProgressPercentage = function ( percent ) {
	this.translationProgressPercentage = percent;
};
