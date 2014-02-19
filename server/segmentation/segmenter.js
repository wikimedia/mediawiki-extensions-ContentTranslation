/*
 * Content Translation
 *
 */

'use strict';

/**
 * Segmenter
 * @class
 */
function Segmenter( content ) {
	this.content = content;
	this.segmentCount = 0;
	this.segmentIndex = 0;
	this.segments = {};
	this.segmentedContent = null;
}

Segmenter.prototype.getSegmentCount = function () {
	return this.segmentCount;
};

Segmenter.prototype.getSegments = function () {
	return this.segments;
};

Segmenter.prototype.getSegmentedContent = function () {
	return this.segmentedContent;
};

module.exports.Segmenter = Segmenter;
