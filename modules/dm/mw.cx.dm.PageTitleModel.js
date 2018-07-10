'use strict';

/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @constructor
 * @mixin ve.dm.CXLintableNode
 */
mw.cx.dm.PageTitleModel = function VeDmCXSectionNode() {
	// Mixin constructors
	ve.dm.CXLintableNode.call( this );
};

/* Inheritance */

OO.mixinClass( mw.cx.dm.PageTitleModel, ve.dm.CXLintableNode );

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.dm.PageTitleModel.prototype.getId = function () {
	return 'title';
};
