/**
 * TranslationUnit factory.
 *
 * @class
 * @abstract
 * @extends OO.Factory
 * @constructor
 */
mw.cx.dm.TranslationUnitFactory = function CXTranslationUnitFactory() {
	// Parent constructor
	mw.cx.dm.TranslationUnitFactory.super.call( this );
};

/* Inheritance */

OO.inheritClass( mw.cx.dm.TranslationUnitFactory, OO.Factory );

/* Methods */

/**
 * Find the translation unit type matching the source model object, if any
 *
 * @param {ve.dm.Model} sourceModel source model
 * @return {string|null} type name
 */
mw.cx.dm.TranslationUnitFactory.prototype.match = function ( sourceModel ) {
	var name, translationUnitClass, matchClasses, i, len;
	for ( name in this.registry ) {
		translationUnitClass = this.registry[ name ];
		matchClasses = translationUnitClass.static.matchClasses;
		for ( i = 0, len = matchClasses.length; i < len; i++ ) {
			if ( sourceModel instanceof matchClasses[ i ] ) {
				return name;
			}
		}
	}
	return null;
};

/* Initialization */

mw.cx.dm.translationUnitFactory = new mw.cx.dm.TranslationUnitFactory();
