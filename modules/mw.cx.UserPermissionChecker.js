'use strict';

/**
 * @param {ve.init.mw.CXTarget} veTarget
 * @param {mw.cx.ui.TranslationView} translationView
 * @param {mw.cx.dm.Translation} translationModel
 * @constructor
 */
mw.cx.UserPermissionChecker = function MwCXTranslationTracker( veTarget, translationView, translationModel ) {
	this.veTarget = veTarget;
	this.translationView = translationView;
	this.translationModel = translationModel;
	this.mainNamespaceId = mw.config.get( 'wgNamespaceIds' )[ '' ];
	this.userNamespaceId = mw.config.get( 'wgNamespaceIds' ).user;
};

OO.initClass( mw.cx.UserPermissionChecker );

mw.cx.UserPermissionChecker.prototype.isUserAllowedToPublishToMainNamespace = function () {
	let publishConfig = ( mw.config.get( 'wgContentTranslationPublishRequirements' ) || [] ).userGroups;

	if ( typeof publishConfig === 'string' ) {
		publishConfig = [ publishConfig ];
	}

	if ( !Array.isArray( publishConfig ) ) {
		mw.log.error( 'Publish requirement config should be of type array or string' );
		return true;
	}

	const userGroups = mw.config.get( 'wgUserGroups' ) || [];
	return publishConfig.some( ( userGroup ) => userGroups.indexOf( userGroup ) > -1 );
};

/**
 * @return {boolean}
 */
mw.cx.UserPermissionChecker.prototype.checkIfUserCanPublish = function () {
	if ( this.veTarget.getPublishNamespace() === this.mainNamespaceId && !this.isUserAllowedToPublishToMainNamespace() ) {
		this.displayCannotPublishError();

		return false;
	}

	return true;
};

/**
 * Display the error when user cannot publish into main namespace.
 */
mw.cx.UserPermissionChecker.prototype.displayCannotPublishError = function () {
	this.translationView.showViewIssuesMessage(
		mw.msg( 'cx-infobar-cannot-publish' ), 'cannot-publish', 'error'
	);

	// User isn't allowed to publish, display the information in the issue card.
	this.translationModel.resolveIssueByName( 'cannot-publish' );
	this.translationModel.addUnattachedIssues( [
		new mw.cx.dm.TranslationIssue(
			'cannot-publish', // Issue name
			mw.message( 'cx-tools-linter-cannot-publish-message' ), // message body
			{
				title: mw.msg( 'cx-tools-linter-cannot-publish-title' ),
				type: 'error',
				help: 'https://en.wikipedia.org/wiki/Wikipedia:Content_translation_tool',
				resolvable: true,
				actionIcon: 'article',
				actionLabel: mw.msg( 'cx-tools-linter-cannot-publish-action-label' ),
				action: this.switchToUserNamespace.bind( this )
			}
		)
	] );
};

mw.cx.UserPermissionChecker.prototype.switchToUserNamespace = function () {
	const popup = new OO.ui.PopupWidget( {
		$content: $( '<p>' ).text( mw.msg( 'cx-publish-destination-namespace-changed' ) ),
		padded: true,
		autoClose: true
	} );

	this.veTarget.publishToolbar
		.getToolGroupByName( 'publish' )
		.findItemFromData( 'publishSettings' )
		.$element.append( popup.$element );
	popup.toggle( true );

	this.translationModel.resolveIssueByName( 'cannot-publish' );
	this.translationView.clearMessages();
	this.veTarget.onPublishNamespaceChange( this.userNamespaceId );
};
