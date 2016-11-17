/*!
  * ContentTranslation Widgets - TemplateParamOptionWidget class.
  * Used in template editor.
  *
  * @ingroup Extensions
  * @copyright See AUTHORS.txt
  * @license GPL-2.0+
  */
( function ( $, mw ) {
	'use strict';
	/**
	 * Creates a  mw.cx.widgets.TemplateParamOptionWidget object.
	 *
	 * @class
	 * @extends OO.ui.MenuOptionWidget
	 *
	 * @constructor
	 * @param {Object} config Configuration options
	 * @cfg {string} data Label to display
	 * @cfg {string} [description] Template parameter description
	 * @cfg {string} [query] Matching query string
	 */
	mw.cx.widgets.TemplateParamOptionWidget = function MwWidgetsTitleOptionWidget( config ) {
		// Parent constructor
		mw.cx.widgets.TemplateParamOptionWidget.parent.call( this, config );

		// Initialization
		this.$element.addClass( 'cx-widget-templateparam' );

		if ( config.description ) {
			this.$element.append(
				$( '<div>' )
					.addClass( 'cx-widget-templateparam-description' )
					.text( config.description )
					.attr( 'title', config.description )
			);
		}
	};

	/* Setup */

	OO.inheritClass( mw.cx.widgets.TemplateParamOptionWidget, OO.ui.MenuOptionWidget );

}( jQuery, mediaWiki ) );
