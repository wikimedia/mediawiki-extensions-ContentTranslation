'use strict';

const { WdioInterceptorService } = require( 'wdio-intercept-service' );

class BrowserHelper {
	/**
	 * @param {function(WdioInterceptorService.InterceptedRequest): boolean} findMethod
	 * @param {boolean} includePending
	 * @return {Promise<WdioInterceptorService.InterceptedRequest|null>}
	 */
	async findRequest( findMethod, includePending = true ) {
		/** @type {WdioInterceptorService.InterceptedRequest[]} */
		const requests = await browser.getRequests( { includePending } );
		return requests.find( findMethod );
	}

	/**
	 * @param {function(WdioInterceptorService.InterceptedRequest): boolean} findMethod
	 * @param {Object} requestInfo Information about the request
	 * @param {number} timeout Time to wait for the request to timeout
	 * @return {Promise<WdioInterceptorService.CompletedRequest>}
	 */
	async findAndWaitRequest( findMethod, requestInfo, timeout = 5000 ) {
		const request = await this.findRequest( findMethod );
		if ( !request ) {
			throw new Error( `Such request has not been sent. Details: ${JSON.stringify( requestInfo )}` );
		} else if ( !request.pending ) {
			return request;
		}

		const opts = {
			timeoutMsg: `Request timed out in ${timeout} ms. Details: ${JSON.stringify( requestInfo )}`,
			timeout
		};

		return browser.waitUntil( () => this.findRequest( findMethod, false ), opts );
	}

	/**
	 * @param {string} url
	 * @param {{ key: string, value: string }[]} urlParams
	 * @param {'POST'|'GET'} method
	 * @return {function(WdioInterceptorService.InterceptedRequest): boolean}
	 */
	getActionApiRequestFinder( url, urlParams, method ) {
		return ( request ) => {
			if ( request.method !== method ) {
				return false;
			}

			let requestUrl;
			let requestParamsString;
			if ( request.method === 'GET' ) {
				const urlParts = request.url.split( '?' );
				requestUrl = urlParts[ 0 ];
				requestParamsString = urlParts[ 1 ] || null;
			} else if ( request.method === 'POST' ) {
				requestUrl = request.url;
				requestParamsString = request.body;
			}

			if ( requestUrl !== url ) {
				return false;
			}

			if ( !requestParamsString ) {
				return true;
			}

			// eslint-disable-next-line node/no-unsupported-features/node-builtins
			const params = new URLSearchParams( requestParamsString );

			return urlParams.every( ( urlParam ) => {
				// If value is undefined, we just check that the key is present in the parameters
				if ( urlParam.value === undefined ) {
					return params.get( urlParam.key ) !== null;
				} else {
					return params.get( urlParam.key ) === `${urlParam.value}`;
				}
			} );
		};
	}

	/**
	 * @param {{ key: string, value: string }[]} urlParams
	 * @param {'POST'|'GET'} method
	 * @return {Promise<WdioInterceptorService.CompletedRequest>}
	 */
	findAndWaitForActionApiRequest( urlParams, method ) {
		const url = `${process.env.MW_SCRIPT_PATH}/api.php`;

		return this.findAndWaitRequest(
			this.getActionApiRequestFinder( url, urlParams, method ),
			{ url, urlParams, method }
		);
	}
}

module.exports = new BrowserHelper();
