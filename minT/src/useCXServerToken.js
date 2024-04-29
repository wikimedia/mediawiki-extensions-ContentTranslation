'use strict';

const { ref } = require( 'vue' );

const cxServerToken = ref( null );

const fetchCXServerToken = () => new mw.Api().postWithToken( 'csrf', {
	action: 'cxtoken',
	assert: 'user'
} );

/**
 * Copy from app/src/store/modules/application/actions.js
 *
 * This composable exposes the "fetchCXServerToken" which returns the current cxserver jwt token
 * as string. If no such token or current token is expired an api request to fetch new token
 * is being sent. If the api request fails, then an empty string is returned.
 *
 * A ref variable holding the value of the fetched JWT token is also exposed.
 */
const useCXServerToken = () => {
	const fetchToken = async () => {
		let now;
		if ( !cxServerToken.value ) {
			await fetchCXServerToken().then(
				( token ) => {
					// Make sure token.age is configured to a valid value.
					if ( token.age <= 30 ) {
						// Set the default token age
						token.age = 3600;
					}
					now = Math.floor( Date.now() / 1000 );
					// We use `age` instead of `exp` because it is more reliable, as user's
					// clocks might be set to wrong time.
					token.refreshAt = now + token.age - 30;
					cxServerToken.value = token;
				},
				( errorCode ) => {
					if ( errorCode === 'token-impossible' ) {
						// Likely CX extension has not been configured properly.
						// To make development and testing easier, assume that
						// no token is needed.
						now = Math.floor( Date.now() / 1000 );
						// Set a dummy token with higher `refreshAt` time
						cxServerToken.value = { jwt: '', refreshAt: now + 3600 * 10 };
					}
				}
			);
		}
		now = Math.floor( Date.now() / 1000 );

		if ( cxServerToken.value && cxServerToken.value.refreshAt <= now ) {
			cxServerToken.value = null;

			return fetchToken();
		}

		return cxServerToken.value && cxServerToken.value.jwt;
	};

	return { fetchToken, cxServerToken };
};

module.exports = useCXServerToken;
