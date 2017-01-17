/*!
 * ContentTranslation DataModel Model class.
 *
 * Based on VisualEditor's data model class.
 */

/**
 * Base class for DM models.
 *
 * @class
 * @abstract
 *
 * @constructor
 * @param {Object} element Reference to plain object in linear model
 */
mw.cx.dm.Model = function CXDmModel( element ) {
	// Properties
	this.element = element || { type: this.constructor.static.name };
	this.store = null;
};

/* Inheritance */

OO.initClass( mw.cx.dm.Model );

/* Static Properties */

/**
 * Symbolic name for this model class. Must be set to a unique string by every subclass.
 * @static
 * @property {string}
 * @inheritable
 */
mw.cx.dm.Model.static.name = null;

/**
 * Array of HTML tag names that this model should be a match candidate for.
 * Empty array means none, null means any.
 * For more information about element matching, see mw.cx.dm.ModelRegistry.
 * @static
 * @property {string[]}
 * @inheritable
 */
mw.cx.dm.Model.static.matchTagNames = null;

/**
 * Array of RDFa types that this model should be a match candidate for.
 * Any other types the element might have must be specified in allowedRdfaTypes.
 * Empty array means none, null means any.
 * For more information about element matching, see mw.cx.dm.ModelRegistry.
 * @static
 * @property {Array}
 * @inheritable
 */
mw.cx.dm.Model.static.matchRdfaTypes = null;

/**
 * Extra RDFa types that the element is allowed to have (but don't by
 * themselves trigger a match).
 * Empty array means none, null means any.
 * For more information about element matching, see mw.cx.dm.ModelRegistry.
 * @static
 * @property {Array}
 * @inheritable
 */
mw.cx.dm.Model.static.allowedRdfaTypes = [];

/**
 * Optional function to determine whether this model should match a given element.
 * Takes a Node and returns true or false.
 * This function is only called if this model has a chance of "winning"; see
 * mw.cx.dm.ModelRegistry for more information about element matching.
 * If set to null, this property is ignored. Setting this to null is not the same as unconditionally
 * returning true, because the presence or absence of a matchFunction affects the model's
 * specificity.
 *
 * NOTE: This function is NOT a method, within this function "this" will not refer to an instance
 * of this class (or to anything reasonable, for that matter).
 * @static
 * @property {Function}
 * @inheritable
 */
mw.cx.dm.Model.static.matchFunction = null;

/**
 * Get the symbolic name of this model's type.
 *
 * @method
 * @return {string} Type name
 */
mw.cx.dm.Model.prototype.getType = function () {
	return this.constructor.static.name;
};

/**
 * Array of RDFa types that this model should be a match candidate for.
 *
 * @static
 * @return {Array} Array of strings or regular expressions
 */
mw.cx.dm.Model.static.getMatchRdfaTypes = function () {
	return this.matchRdfaTypes;
};

/**
 * Extra RDFa types that the element is allowed to have.
 *
 * @static
 * @return {Array} Array of strings or regular expressions
 */
mw.cx.dm.Model.static.getAllowedRdfaTypes = function () {
	return this.allowedRdfaTypes;
};
