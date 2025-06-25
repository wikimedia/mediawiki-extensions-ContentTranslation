/**
 * A set of utility methods for Content Translation
 */

'use strict';

const nextSessionPosition = require( './mw.cx.eventlogging.translationSessionPosition.js' );

/**
 * Align two sections horizontally
 *
 * @param {jQuery} $sourceSection Source section
 * @param {jQuery} $targetSection Target section
 */
mw.cx.alignSections = function ( $sourceSection, $targetSection ) {
	let steps = 0;

	// Remove min-heights
	$sourceSection.css( 'min-height', '' );
	$targetSection.css( 'min-height', '' );

	let sourceHeight = +$sourceSection[ 0 ].scrollHeight;
	let targetHeight = +$targetSection[ 0 ].scrollHeight;

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
 *
 * @param {string} currentTitle Original title string
 * @param {number} newNamespaceId New namespace id
 * @return {string} New title with changed namespace
 */
mw.cx.getTitleForNamespace = function ( currentTitle, newNamespaceId ) {
	const currentTitleObj = new mw.Title( currentTitle );
	const currentNamespace = currentTitleObj.getNamespaceId();
	if ( newNamespaceId === currentNamespace ) {
		// No change.
		return currentTitle;
	}

	// Get the current title string
	currentTitle = currentTitleObj.getMainText();
	if ( currentNamespace === mw.config.get( 'wgNamespaceIds' ).user ) {
		// User namespace. Get the title part alone after removing User:username/ part
		currentTitle = currentTitle.slice( currentTitle.indexOf( '/' ) + 1 );
	}

	if ( newNamespaceId === mw.config.get( 'wgNamespaceIds' ).user ) {
		const username = mw.user.getName();
		currentTitle = mw.Title.newFromText( username + '/' + currentTitle, newNamespaceId ).toText();
	}
	return mw.Title.newFromText( currentTitle, newNamespaceId ).toText();
};

/**
 * Get the default publishing target namespace
 *
 * @return {number} Target namespace id
 */
mw.cx.getDefaultTargetNamespace = function () {
	const config = require( '../config.json' );
	let targetNamespace = config.TargetNamespace;

	// Validate the configuration.
	if ( !( targetNamespace in mw.config.get( 'wgFormattedNamespaces' ) ) ) {
		mw.log.error( '[CX] Invalid publishing namespace configuration. Namespace does not exist: ' + targetNamespace );
		targetNamespace = 0;
	}

	return targetNamespace;
};

/**
 * Given a section Id, get the section number for it.
 * Section id is like cxSourceSection15 or cxTargetSection15. 15 is the section number.
 *
 * @param {string} sectionId Section id
 * @return {number} section number
 */
mw.cx.getSectionNumberFromSectionId = function ( sectionId ) {
	return Number( sectionId.match( /^cx(Target|Source)Section([0-9]+)$/ )[ 2 ] );
};

mw.cx.getCXVersion = function () {
	const config = require( '../config.json' );
	return Number( config.Version );
};

/**
 * Get the parent section model for the given seletion in the surface.
 *
 * @param {ve.dm.Surface} surface
 * @param {ve.dm.LinearSelection} selection
 * @return {ve.dm.CXSectionNode}
 */
mw.cx.getParentSectionForSelection = function ( surface, selection ) {
	const documentModel = surface.getModel().getDocument();
	let parentBranchNode = documentModel.getBranchNodeFromOffset( selection.getRange().start );

	let section;
	while ( parentBranchNode ) {
		if ( parentBranchNode.type === 'cxSection' ) {
			section = parentBranchNode;
			break;
		}

		parentBranchNode = parentBranchNode.parent;
	}

	return section;
};

/**
 * @return {string} Login href.
 */
mw.cx.getLoginHref = function () {
	const currentUri = new URL( location.href );

	// Remove the title from return-to query parameters, so duplication is avoided
	currentUri.searchParams.delete( 'title' );
	return mw.util.getUrl( 'Special:UserLogin', {
		returnto: 'Special:ContentTranslation',
		returntoquery: currentUri.search.slice( 1 )
	} );
};

/**
 * Tokenize a given string. Here tokens is basically words for non CJK languages.
 * For CJK languages, we just split at each codepoint level.
 *
 * @param {string} string
 * @param {string} language
 * @return {string[]}
 */
mw.cx.tokenise = function ( string, language ) {
	if ( !string ) {
		return [];
	}
	if ( $.uls.data.scriptgroups.CJK.includes( $.uls.data.getScript( language ) ) ) {
		return string.split( '' );
	}

	// Match all non whitespace characters for tokens.
	return string.match( /\S+/g ) || [];
};

/**
 * Calculate the difference between two strings in the scale
 * of 0 to 1, based on the order changed in string2 from string1.
 *
 * @param {string} string1
 * @param {string} string2
 * @param {string} language
 * @return {number} A value between 0 and 1
 */
mw.cx.calculateUnmodifiedContent = ( function () {
	/**
	 * Finds the length of the longest common subsequence between two arrays of tokens.
	 * This preserves the order of tokens.
	 *
	 * @param {string[]} tokens1
	 * @param {string[]} tokens2
	 * @return {number} The length of the longest common subsequence
	 */
	const findLongestCommonSubsequenceLength = function ( tokens1, tokens2 ) {
		const m = tokens1.length;
		const n = tokens2.length;

		// Create a table to store the LCS lengths
		const dp = Array( m + 1 )
			.fill()
			.map( () => Array( n + 1 ).fill( 0 ) );

		// Fill the dp table
		for ( let i = 1; i <= m; i++ ) {
			for ( let j = 1; j <= n; j++ ) {
				if ( tokens1[ i - 1 ] === tokens2[ j - 1 ] ) {
					dp[ i ][ j ] = dp[ i - 1 ][ j - 1 ] + 1;
				} else {
					dp[ i ][ j ] = Math.max( dp[ i - 1 ][ j ], dp[ i ][ j - 1 ] );
				}
			}
		}

		// Return the length of the LCS
		return dp[ m ][ n ];
	};

	return function ( string1, string2, language ) {
		if ( !string1 || !string2 ) {
			return 0;
		}

		if ( string1 === string2 ) {
			// Both strings are equal. So string2 is 100% unmodified version of string1
			return 1;
		}

		const tokens1 = mw.cx.tokenise( string1, language );
		const tokens2 = mw.cx.tokenise( string2, language );

		// Find the longest common subsequence (tokens in the same order)
		const lcsLength = findLongestCommonSubsequenceLength( tokens1, tokens2 );

		// Calculate the unmodified content percentage based on the larger token set
		const largerLength = Math.max( tokens1.length, tokens2.length );

		return lcsLength / largerLength;
	};
}() );

mw.cx.nextTranslationSessionPosition = nextSessionPosition;
