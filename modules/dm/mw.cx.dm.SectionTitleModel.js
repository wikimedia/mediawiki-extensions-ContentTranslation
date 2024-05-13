'use strict';

/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @constructor
 * @mixes OO.EventEmitter
 * @mixes ve.dm.CXLintableNode
 */
mw.cx.dm.SectionTitleModel = function MwCxDmSectionTitleModel() {
	// Mixin constructors
	OO.EventEmitter.call( this );
	ve.dm.CXLintableNode.call( this );
};

/* Inheritance */

// ve.dm.CXLintableNode expects to be mixed into a node, where OO.EventEmitter is available.
OO.mixinClass( mw.cx.dm.SectionTitleModel, OO.EventEmitter );
OO.mixinClass( mw.cx.dm.SectionTitleModel, ve.dm.CXLintableNode );

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.dm.SectionTitleModel.prototype.getId = function () {
	return 'section-title';
};
