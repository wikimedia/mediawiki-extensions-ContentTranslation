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
	var sections, sourceHeight, targetHeight,
		$sourceSection, $translationSection,
		steps = 0;

	sections = this.getAlignableSections();
	$sourceSection = sections.source;
	$translationSection = sections.target;
	// Remove min-heights
	$sourceSection.css( 'min-height', '' );
	$translationSection.css( 'min-height', '' );

	sourceHeight = $sourceSection[ 0 ].scrollHeight;
	targetHeight = $translationSection[ 0 ].scrollHeight;

	sourceHeight = parseInt( sourceHeight, 10 );
	targetHeight = parseInt( targetHeight, 10 );

	while ( sourceHeight !== targetHeight ) {
		if ( targetHeight > sourceHeight ) {
			$sourceSection.css( 'min-height', targetHeight );
		} else {
			$translationSection.css( 'min-height', sourceHeight );
		}
		sourceHeight = parseInt( $sourceSection[ 0 ].scrollHeight, 10 );
		targetHeight = parseInt( $translationSection[ 0 ].scrollHeight, 10 );
		if ( steps++ === 5 ) {
			mw.track( 'Alignment attempt is not succeeding. Aborting.' );
			break;
		}
	}
};
