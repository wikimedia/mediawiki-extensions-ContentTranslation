'use strict';

const POSITION_LOCAL_STORAGE_PREFIX = 'cx-translation-session-position-';

const getLocalStorageKey = () => POSITION_LOCAL_STORAGE_PREFIX + mw.user.sessionId();

/**
 * @return {number}
 */
const getTranslationSessionPosition = () => {
	const translationSessionPosition = parseInt(
		mw.storage.get( getLocalStorageKey() )
	);

	return isNaN( translationSessionPosition ) ? 0 : translationSessionPosition;
};

const setTranslationSessionPosition = function ( translationSessionPosition ) {
	const storageKey = getLocalStorageKey();
	mw.storage.set( storageKey, translationSessionPosition );
};

const cleanupTranslationSessionPosition = () => {
	// clear pre-existing session position counters from local storage
	Object.keys( mw.storage.store )
		.filter( ( x ) => x.startsWith( POSITION_LOCAL_STORAGE_PREFIX ) )
		.forEach( ( x ) => mw.storage.remove( x ) );
};

const nextSessionPosition = () => {
	const translationSessionPosition = getTranslationSessionPosition();

	if ( translationSessionPosition % 10 === 0 ) {
		// Cleanup local storage every 10 times to avoid excessive storage usage
		cleanupTranslationSessionPosition();
	}

	setTranslationSessionPosition( translationSessionPosition + 1 );

	return translationSessionPosition;
};

module.exports = nextSessionPosition;
