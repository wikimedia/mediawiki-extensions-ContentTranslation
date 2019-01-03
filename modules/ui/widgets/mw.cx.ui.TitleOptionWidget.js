/*!
 * Content Translation UserInterface adaptation of MediaWiki Widget TitleOptionWidget.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

'use strict';

( function () {

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
		// TODO: Consider upstreaming this
		this.imageUrl = config.imageUrl;

		// This is sometimes wrong, but at least consistently wrong with other places.
		// For example: A title of a Song in English in Arabic Wikipedia.
		this.$label.prop( {
			lang: config.sourceLanguage,
			dir: $.uls.data.getDir( config.sourceLanguage )
		} );

		// The descriptions are always in the source language...
		// ...except for redirect pages it is in the ui language
		if ( !config.redirect ) {
			this.$element.find( '.mw-widget-titleOptionWidget-description' )
				.prop( {
					lang: config.sourceLanguage,
					dir: $.uls.data.getDir( config.sourceLanguage )
				} );
		}

		if ( config.numOfLanguages ) {
			this.numOfLanguages = config.numOfLanguages;

			languageIcon = new OO.ui.IconWidget( {
				icon: 'language',
				title: mw.msg( 'cx-page-number-of-languages' )
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
					.text( mw.msg( 'cx-page-missing-in-target-language',
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

}() );
