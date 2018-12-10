'use strict';

/**
 * CX Section state data model
 *
 * @constructor
 * @param {number} sectionNumber
 */
mw.cx.dm.SectionState = function MwCxSectionState( sectionNumber ) {
	// @var {number}
	this.sectionNumber = sectionNumber;
	// @var {Object}
	this.source = {
		html: null,
		text: null,
		saved: false
	};
	// @var {Object}
	this.unmodifiedMT = {};
	// @var {Object}
	this.userTranslation = {
		html: null,
		text: null,
		saved: false
	};
	// @var {string}
	this.currentMTProvider = null;
	// @var {number}
	this.unmodifiedPercentage = 0;
	// @var {number}
	this.translationProgressPercentage = 0;
	// @var {boolean} Whether the section has any errors while saving
	this.hasSaveError = false;
	// @var {number}
	this.saveCount = 0;
};

mw.cx.dm.SectionState.prototype.setSource = function ( html ) {
	this.source = {
		html: html,
		text: $( html ).text(),
		saved: false
	};
};

mw.cx.dm.SectionState.prototype.getSource = function () {
	return this.source;
};

mw.cx.dm.SectionState.prototype.setUserTranslation = function ( html ) {
	this.userTranslation = {
		html: html,
		text: $( html ).text(),
		saved: false
	};
};

mw.cx.dm.SectionState.prototype.getUserTranslation = function () {
	return this.userTranslation;
};

mw.cx.dm.SectionState.prototype.setUnmodifiedMT = function ( html ) {
	if ( !this.currentMTProvider ) {
		throw new Error( 'Attempting to set unmodified MT without an MT provider' );
	}
	this.unmodifiedMT[ this.currentMTProvider ] = {
		html: html,
		text: $( html ).text(),
		saved: false
	};
};

mw.cx.dm.SectionState.prototype.getUnmodifiedMT = function () {
	return this.unmodifiedMT[ this.currentMTProvider ] || {};
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

/**
 * Whether the section has modifications by user on top of the initial machine translation.
 *
 * @return {boolean}
 */
mw.cx.dm.SectionState.prototype.isModified = function () {
	if ( this.getUserTranslation().text === null ) {
		return false;
	}
	return this.getUnmodifiedMT().html !== this.getUserTranslation().html;
};

mw.cx.dm.SectionState.prototype.markSourceSaved = function () {
	this.source.saved = true;
};

mw.cx.dm.SectionState.prototype.isSourceSaved = function () {
	return this.source.saved;
};

mw.cx.dm.SectionState.prototype.markUserTranslationSaved = function () {
	if ( !this.userTranslation ) {
		throw new Error( 'Attempting to set user translation when it is not present.' );
	}
	this.userTranslation.saved = true;
};

mw.cx.dm.SectionState.prototype.markUnmodifiedMTSaved = function () {
	if ( !this.currentMTProvider ) {
		throw new Error( 'Attempting to set unmodified MT saved without an MT provider' );
	}
	this.unmodifiedMT[ this.currentMTProvider ].saved = true;
};
