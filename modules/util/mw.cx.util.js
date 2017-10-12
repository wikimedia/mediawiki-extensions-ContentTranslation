/**
 * A set of utilit methods for Content Translation
 */

'use strict';

/**
 * Align two sections horizontally
 * @param {jQuery} $sourceSection Source section
 * @param {jQuery} $targetSection Target section
 */
mw.cx.alignSections = function ( $sourceSection, $targetSection ) {
	var sourceHeight, targetHeight,
		steps = 0;

	// Remove min-heights
	$sourceSection.css( 'min-height', '' );
	$targetSection.css( 'min-height', '' );

	sourceHeight = +$sourceSection[ 0 ].scrollHeight;
	targetHeight = +$targetSection[ 0 ].scrollHeight;

	while ( sourceHeight !== targetHeight ) {
		if ( targetHeight > sourceHeight ) {
			$sourceSection.css( 'min-height', targetHeight );
		} else {
			$targetSection.css( 'min-height', sourceHeight );
		}
		sourceHeight = +$sourceSection[ 0 ].scrollHeight;
		targetHeight = +$targetSection[ 0 ].scrollHeight;
		if ( steps++ === 5 ) {
			mw.track( 'Alignment attempt is not succeeding. Aborting.' );
			break;
		}
	}
};

/**
 * Get the title after changing its namespace to new one.
 * Expects valid title, if not, will throw exception.
 * @param {string} currentTitle Original title string
 * @param {number} newNamespaceId New namespace id
 * @return {string} New title with changed namespace
 */
mw.cx.getTitleForNamespace = function ( currentTitle, newNamespaceId ) {
	var currentTitleObj, currentNamespace, username;

	currentTitleObj = new mw.Title( currentTitle );
	currentNamespace = currentTitleObj.getNamespaceId();
	if ( newNamespaceId === currentNamespace ) {
		// No change.
		return currentTitle;
	}

	// Get the current title string
	currentTitle = currentTitleObj.getMainText();
	if ( currentNamespace === mw.config.get( 'wgNamespaceIds' ).user ) {
		// User namespace. Get the title part alone after removing User:username/ part
		currentTitle = currentTitle.substr( currentTitle.indexOf( '/' ) + 1 );
	}

	if ( newNamespaceId === mw.config.get( 'wgNamespaceIds' ).user ) {
		username = mw.user.getName();
		currentTitle = mw.Title.newFromText( username + '/' + currentTitle, newNamespaceId ).toText();
	}
	return mw.Title.newFromText( currentTitle, newNamespaceId ).toText();
};

/**
 * Get the default publishing target namespace
 * @return {number} Target namespace id
 */
mw.cx.getDefaultTargetNamespace = function () {
	var userGroups, group, groupTargetNamespaceConfig, validNamespaceIds, targetNamespace;

	groupTargetNamespaceConfig = mw.config.get( 'wgContentTranslationUserGroupTargetNamespace', {} );
	userGroups = mw.config.get( 'wgUserGroups', [] );

	for ( group in groupTargetNamespaceConfig ) {
		if ( userGroups.indexOf( group ) >= 0 ) {
			targetNamespace = groupTargetNamespaceConfig[ group ];
			break;
		}
	}

	if ( !targetNamespace ) {
		// No match found in ContentTranslationUserGroupTargetNamespace.
		// Use wiki level namespace defined in ContentTranslationTargetNamespace
		targetNamespace = mw.config.get( 'wgContentTranslationTargetNamespace' );
	}

	// Validate the configuration.
	validNamespaceIds = Object.values( mw.config.get( 'wgNamespaceIds', {} ) );
	if ( validNamespaceIds.indexOf( targetNamespace ) < 0 ) {
		mw.log.error( '[CX] Invalid publishing namespace configuration. Namespace does not exist: ' + targetNamespace );
		targetNamespace = 0;
	}

	return targetNamespace;
};

/**
 * Given a section Id, get the section number for it.
 * Section id is like cxSourceSection15 or cxTargetSection15. 15 is the section number.
 * @param {string} sectionId Section id
 * @return {number} section number
 */
mw.cx.getSectionNumberFromSectionId = function ( sectionId ) {
	return Number( sectionId.match( /^cx(Target|Source)Section([0-9]+)$/ )[ 2 ] );
};

mw.cx.getCXVersion = function () {
	var query = new mw.Uri().query;
	return Number( query.version || mw.config.get( 'wgContentTranslationVersion' ) );
};
