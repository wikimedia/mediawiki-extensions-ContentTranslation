( function () {
	'use strict';

	function addCxSubclass( parentContextItem ) {
		var contextItem = function CXGeneratedMWCitationContextItem() {
			// Parent constructor
			parentContextItem.apply( this, arguments );
		};

		OO.inheritClass( contextItem, parentContextItem );

		contextItem.prototype.getRendering = function () {
			var cxData = this.model.getAttribute( 'cx' ) || {};

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

	// Note: Don't iterate directly with `for ( name in ve.ui.contextItemFactory.registry )`,
	// because we're modifying that object in the loop body
	var names = Object.keys( ve.ui.contextItemFactory.registry );
	for ( var i = 0; i < names.length; i++ ) {
		var name = names[ i ];
		if ( name.slice( 0, 5 ) === 'cite-' ) {
			var parentContextItem = ve.ui.contextItemFactory.lookup( name );
			addCxSubclass( parentContextItem );
		}
	}

}() );
