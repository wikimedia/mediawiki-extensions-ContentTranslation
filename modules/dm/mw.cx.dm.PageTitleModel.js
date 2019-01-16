'use strict';

/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @constructor
 * @mixins OO.EventEmitter
 * @mixins ve.dm.CXLintableNode
 */
mw.cx.dm.PageTitleModel = function MwCxDmPageTitleModel() {
	// Mixin constructors
	OO.EventEmitter.call( this );
	ve.dm.CXLintableNode.call( this );
};

/* Inheritance */

// ve.dm.CXLintableNode expects to be mixed into a node, where OO.EventEmitter is available.
OO.mixinClass( mw.cx.dm.PageTitleModel, OO.EventEmitter );
OO.mixinClass( mw.cx.dm.PageTitleModel, ve.dm.CXLintableNode );

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.dm.PageTitleModel.prototype.getId = function () {
	return 'title';
};
