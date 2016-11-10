/*!
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw, OO ) {
	'use strict';
	/**
	 * TranslationView
	 *
	 * @class
	 * @param {Object} [config] Configuration object
	 */
	mw.cx.ui.TranslationView = function ( config ) {
		this.header = new mw.cx.ui.Header( config );
		this.columns = new mw.cx.ui.Columns( config );
		// Configuration initialization
		this.config = $.extend( {}, config, {
			continuous: true,
			expanded: false,
			items: [ this.header, this.columns ],
			classes: [ 'cx-widget' ]
		} );
		// Parent constructor
		mw.cx.ui.TranslationView.parent.call( this, this.config );
		this.publishButton = null;
		this.preparePublishButton();
	};

	/* Setup */

	OO.inheritClass( mw.cx.ui.TranslationView, OO.ui.StackLayout );

	mw.cx.ui.TranslationView.prototype.preparePublishButton = function () {
		this.setupPublishButton();
		this.attachPublishButton();
	};

	mw.cx.ui.TranslationView.prototype.setupPublishButton = function () {
		var self = this;

		this.publishButton = new OO.ui.ButtonWidget( {
			disabled: true,
			flags: [ 'progressive', 'primary' ],
			classes: [ 'cx-header__publish-button' ],
			label: mw.msg( 'cx-publish-button' )
		} );
		this.publishButton.connect( this, {
			click: 'onPublishButtonClick'
		} );
		mw.hook( 'mw.cx.progress' ).add( function ( weights ) {
			self.publishButton.setDisabled( weights.any === 0 );
		} );
	};

	/**
	 * Add the publish button to the user interface.
	 */
	mw.cx.ui.TranslationView.prototype.attachPublishButton = function () {
		this.header.$headerBar.append( new OO.ui.Element( {
			classes: [ 'cx-header__publish' ],
			$content: this.publishButton.$element
		} ).$element );
	};

	mw.cx.ui.TranslationView.prototype.onPublishButtonClick = function () {
		this.publish();
	};

	mw.cx.ui.TranslationView.prototype.publish = function () {
		var publisher, self = this;

		// Disable the trigger button
		this.publishButton.setDisabled( true ).setLabel( mw.msg( 'cx-publish-button-publishing' ) );
		publisher = new mw.cx.Publish( this.publishButton, this.config.siteMapper );
		publisher.publish().always( function () {
			self.publishButton.setDisabled( true ).setLabel( mw.msg( 'cx-publish-button' ) );
		} );
	};

	$( function () {
		var cxview, query, config;
		// Set the global siteMapper for code which we cannot inject it
		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );
		query = new mw.Uri().query;
		mw.cx.sourceTitle = query.page;
		mw.cx.targetLanguage = query.to;
		mw.cx.sourceLanguage = query.from;
		mw.cx.sourceRevision = query.revision;

		// Make them available in config.
		config = {
			siteMapper: mw.cx.siteMapper,
			sourceTitle: mw.cx.sourceTitle,
			targetLanguage: mw.cx.targetLanguage,
			sourceLanguage: mw.cx.sourceLanguage,
			sourceRevision: mw.cx.sourceRevision
		};
		cxview = new mw.cx.ui.TranslationView( config );
		$( 'body' ).append( cxview.$element );
	} );
}( jQuery, mediaWiki, OO ) );
