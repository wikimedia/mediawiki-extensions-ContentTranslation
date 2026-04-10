( function () {
	'use strict';

	function addCxSubclass( parentContextItem ) {
		const contextItem = function CXGeneratedMWCitationContextItem() {
			// Parent constructor
			parentContextItem.apply( this, arguments );
		};

		OO.inheritClass( contextItem, parentContextItem );

		contextItem.prototype.getRendering = function () {
			const cxData = this.model.getAttribute( 'cx' ) || {};

			if ( cxData.adapted === false ) {
				// Reference is not adapted. Use an empty div as content with the same
				// CSS class that parent class uses for such empty content.
				return $( '<div>' )
					.addClass( 've-ui-mwReferenceContextItem-muted' );
			}
			return contextItem.super.prototype.getRendering.apply( this, arguments );
		};

		ve.ui.contextItemFactory.register( contextItem );
	}

	// FIXME: This should use some kind of require() and not rely on a globally exposed variable
	ve.ui.mwCitationTools.forEach( ( tool ) => {
		const contextName = 'cite-' + tool.name;
		const parentContextItem = ve.ui.contextItemFactory.lookup( contextName );
		addCxSubclass( parentContextItem );
	} );

}() );
