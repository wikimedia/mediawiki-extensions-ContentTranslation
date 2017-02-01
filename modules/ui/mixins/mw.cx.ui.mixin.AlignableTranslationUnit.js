'use strict';

/**
 *
 * @abstract
 * @class
 *
 * @constructor
 */
mw.cx.ui.mixin.AlignableTranslationUnit = function AlignableTranslationUnit() {
	this.connect( this, {
		change: 'align',
		resize: 'align'
	} );
};

mw.cx.ui.mixin.AlignableTranslationUnit.prototype.getAlignableSections = function() {
	return {
		source: this.$sourceSection,
		target: this.$translationSection
	};
};

mw.cx.ui.mixin.AlignableTranslationUnit.prototype.align = function() {
	var sections;

	sections = this.getAlignableSections();
	mw.cx.alignSections( sections.source, sections.target );
};
