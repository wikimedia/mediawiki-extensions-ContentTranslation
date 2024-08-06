// Below methods were copied from /app/src/plugins/logEvent.js file
( function () {

	let cachedEditCount = null;

	/**
	 * Get global edit count for the user
	 *
	 * @param {string} userName User name
	 * @return {Promise<number>}
	 */
	function getGlobalEditCount( userName ) {
		if ( cachedEditCount ) {
			return Promise.resolve( cachedEditCount );
		}
		// Any Wikipedia domain will do.
		const apiURL = 'https://en.wikipedia.org/w/api.php';
		const queryParams = new URLSearchParams( {
			action: 'query',
			meta: 'globaluserinfo',
			guiuser: userName,
			guiprop: 'editcount',
			formatversion: 2,
			origin: '*',
			format: 'json'
		} );

		const url = apiURL + '?' + queryParams;
		return fetch( url )
			.then( ( response ) => response.json() )
			.then( ( response ) => response.query.globaluserinfo.editcount )
			.catch( ( error ) => {
			// Eventlogging errors are not critical error to handle and interrupt users.
				mw.log.error( 'Error while fetching global edit count for user. ', error );
			} );
	}

	/**
	 * Provide the user's edit count as a low-granularity bucket name
	 *
	 * @param {number|null} editCount User edit count, or null for anonymous performers.
	 * @return {string|null} `null` for anonymous performers.
	 *
	 * Do not use this value in conjunction with other edit count
	 * bucketing, or you will deanonymize users to some degree.
	 */
	function getUserEditCountBucket( editCount ) {
		if ( editCount === null ) {
			return null;
		}

		if ( editCount === 0 ) {
			return '0 edits';
		}

		if ( editCount < 5 ) {
			return '1-4 edits';
		}

		if ( editCount < 100 ) {
			return '5-99 edits';
		}

		if ( editCount < 1000 ) {
			return '100-999 edits';
		}

		return '1000+ edits';
	}

	/**
	 * Log an event to eventlogging system
	 *
	 * @param {Object} event
	 * @return {Promise}
	 */
	function logEvent( event ) {
		if ( !mw.eventLog ) {
		// Eventlogging extension not installed or enabled.
		// We don't want it as a hard dependency. Skip.
			mw.log( { event: event } );

			return Promise.resolve();
		}

		// ΝΟΤΕ: we cannot use mw.config.get("skin") for detecting mobile and desktop versions,
		// as the skin is always set to "contenttranslation" for both desktop and mobile applications
		// since this code is only used in the mobile version, we can hardcode the access method to "mobile web"
		const accessMethod = event.access_method || 'mobile web';
		const wikiDB = mw.config.get( 'wgDBname' );
		const sessionId = [ 'cx_sx', mw.user.sessionId(), accessMethod, wikiDB ].join( '_' );
		const streamName = 'mediawiki.content_translation_event';
		const isAnonUser = mw.user.isAnon();
		const userName = mw.user.getName();

		const eventDefaults = {
			$schema: '/analytics/mediawiki/content_translation_event/1.4.0',
			// eslint-disable-next-line camelcase
			translation_type: 'section',
			// eslint-disable-next-line camelcase
			wiki_db: wikiDB,
			// eslint-disable-next-line camelcase
			access_method: accessMethod,
			// eslint-disable-next-line camelcase
			user_name: userName,
			// eslint-disable-next-line camelcase
			web_session_id: mw.user.sessionId(),
			// eslint-disable-next-line camelcase
			web_pageview_id: mw.user.getPageviewToken(),
			// eslint-disable-next-line camelcase
			user_is_anonymous: isAnonUser,
			// eslint-disable-next-line camelcase
			content_translation_session_id: sessionId
		};

		if ( isAnonUser ) {
			return Promise.resolve(
				mw.eventLog.submit( streamName, Object.assign( {}, eventDefaults, event ) )
			);
		} else {
			return getGlobalEditCount( userName ).then( function ( editCount ) {
				cachedEditCount = editCount;
				// eslint-disable-next-line camelcase
				event.user_global_edit_count = editCount;
				// eslint-disable-next-line camelcase
				event.user_global_edit_count_bucket = getUserEditCountBucket( editCount );

				mw.eventLog.submit( streamName, Object.assign( {}, eventDefaults, event ) );
			} );
		}
	}

	mw.cx.logEvent = logEvent;
}() );
