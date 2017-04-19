/**
 * External link tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */
mw.cx.tools.ExternalLinkTool = function CXExternalLinkTool( model, config ) {
	config.order = 50;
	config.title = 'External link';
	mw.cx.tools.ExternalLinkTool.super.call( this, model, config );
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.ExternalLinkTool, mw.cx.tools.TranslationTool );

mw.cx.tools.ExternalLinkTool.static.name = 'extlink';

/**
 * @inheritDoc
 */
mw.cx.tools.ExternalLinkTool.prototype.getActions = function () {
	return [];
};

mw.cx.tools.ExternalLinkTool.prototype.getContent = function () {
	var $linkTitle, url;

	url = this.model.getTargetURL();
	$linkTitle = $( '<a>' )
		.text( url )
		.addClass( 'cx-tools-extlink' )
		.prop( {
			target: '_blank',
			rel: 'mw:ExtLink',
			title: mw.msg( 'cx-tools-link-hover-tooltip' ),
			href: url
		} );
	return $linkTitle;
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.ExternalLinkTool );
