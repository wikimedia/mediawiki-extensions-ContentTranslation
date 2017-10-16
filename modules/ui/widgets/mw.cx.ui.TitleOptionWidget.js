/*!
* Content Translation UserInterface adaptation of MediaWiki Widget TitleOptionWidget.
*
* @ingroup Extensions
* @copyright See AUTHORS.txt
* @license GPL-2.0+
*/

'use strict';

( function ( $, mw ) {

	/**
	 * Creates an mw.cx.ui.TitleOptionWidget object.
	 *
	 * @class
	 * @extends mw.widgets.TitleOptionWidget
	 *
	 * @constructor
	 * @param {Object} [config] Configuration options
	 * @cfg {number} [numOfLanguages] Number of languages matched article exists in.
	 * @cfg {boolean} [missingInTargetLanguage] Article is missing in target language
	 */
	mw.cx.ui.TitleOptionWidget = function MwCxTitleOptionWidget( config ) {
		var languageIcon, languageLabel;

		// Parent constructor
		mw.cx.ui.TitleOptionWidget.parent.call( this, config );

		this.$element.addClass( 'mw-cx-widget-titleOptionWidget' );

		if ( config.numOfLanguages ) {
			this.numOfLanguages = config.numOfLanguages;

			languageIcon = new OO.ui.IconWidget( {
				icon: 'language',
				iconTitle: 'Number of languages'
			} );
			languageLabel = new OO.ui.LabelWidget( {
				label: mw.language.convertNumber( config.numOfLanguages )
			} );
			this.$element.append(
				$( '<span>' )
					.addClass( 'mw-cx-widget-titleOptionWidget-numOfLanguages' )
					.append(
						languageIcon.$element,
						languageLabel.$element
					)
			);
		}

		if ( config.missingInTargetLanguage ) {
			this.$element.append(
				$( '<span>' )
					.addClass( 'mw-cx-widget-titleOptionWidget-missing' )
					.text( mw.msg( 'cx-sourceselector-missing-in-target-language',
						$.uls.data.getAutonym( config.targetLanguage ) )
					)
			);
		}
	};

	/* Setup */

	OO.inheritClass( mw.cx.ui.TitleOptionWidget, mw.widgets.TitleOptionWidget );

	mw.cx.ui.TitleOptionWidget.prototype.getNumberOfLanguages = function () {
		return this.numOfLanguages;
	};

}( jQuery, mediaWiki ) );
