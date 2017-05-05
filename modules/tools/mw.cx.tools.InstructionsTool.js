'use strict';

/**
 * Instructions Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */
mw.cx.tools.InstructionsTool = function CXInstructionsTool( model, config ) {
	config.order = 30;
	mw.cx.tools.InstructionsTool.super.call( this, model, config );
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.InstructionsTool, mw.cx.tools.TranslationTool );

mw.cx.tools.InstructionsTool.static.name = 'instructions';

mw.cx.tools.InstructionsTool.static.template =
	'<div>' +
		'<div class="card-instructions-section">' +
			'<div class="card-instructions-serial-number">' +
				'<div class="card-instructions-count-one"></div>' +
			'</div>' +
			'<div class="card-instructions-text">' +
				'<div class="card-instructions-heading-one"></div>' +
				'<div class="card-instructions-description-one"></div>' +
			'</div>' +
		'</div>' +
		'<div class="card-instructions-section">' +
			'<div class="card-instructions-serial-number">' +
				'<div class="card-instructions-count-two"></div>' +
			'</div>' +
			'<div class="card-instructions-text">' +
				'<div class="card-instructions-heading-two"></div>' +
				'<div class="card-instructions-description-two"></div>' +
			'</div>' +
		'</div>' +
		'<div class="card-instructions-section">' +
			'<div class="card-instructions-serial-number">' +
				'<div class="card-instructions-count-three"></div>' +
			'</div>' +
			'<div class="card-instructions-text">' +
				'<div class="card-instructions-heading-three"></div>' +
				'<div class="card-instructions-description-three"></div>' +
			'</div>' +
		'</div>' +
		'<div class="card-instructions-guidelines"></div>' +
	'</div>';

/**
 * @inheritDoc
 */
mw.cx.tools.InstructionsTool.prototype.getActions = function () {
	return [];
};

/**
 * @inheritDoc
 */
mw.cx.tools.InstructionsTool.prototype.getContent = function () {
	var $content = $( this.constructor.static.template );
	$content.find( '.card-instructions-count-one' )
		.text( mw.language.convertNumber( 1 ) );
	$content.find( '.card-instructions-heading-one' )
		.text( mw.msg( 'cx-tools-instructions-text1' ) );
	$content.find( '.card-instructions-description-one' )
		.text( mw.msg( 'cx-tools-instructions-text2' ) );
	$content.find( '.card-instructions-count-two' )
		.text( mw.language.convertNumber( 2 ) );
	$content.find( '.card-instructions-heading-two' )
		.text( mw.msg( 'cx-tools-instructions-text3' ) );
	$content.find( '.card-instructions-description-two' )
		.text( mw.msg( 'cx-tools-instructions-text4' ) );
	$content.find( '.card-instructions-count-three' )
		.text( mw.language.convertNumber( 3 ) );
	$content.find( '.card-instructions-heading-three' )
		.text( mw.msg( 'cx-tools-instructions-text5' ) );
	$content.find( '.card-instructions-description-three' )
		.text( mw.msg( 'cx-tools-instructions-text6' ) );
	$content.find( '.card-instructions-guidelines' )
		.append( $( '<a>' )
			.prop( {
				href: mw.msg( 'cx-tools-view-guidelines-link' ),
				target: '_blank'
			} )
		.text( mw.msg( 'cx-tools-view-guidelines' ) ) );
	return $content;
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.InstructionsTool );
