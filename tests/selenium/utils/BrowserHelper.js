'use strict';

const { WdioInterceptorService } = require( 'wdio-intercept-service' );

class BrowserHelper {
	/**
	 * @param {string} url The base URL of the request
	 * @param {{ key: string, value: string }[]} urlParams
	 * @param {'POST'|'GET'} method The HTTP method of the request
	 * @param {boolean} includePending
	 * @return {Promise<WdioInterceptorService.InterceptedRequest|null>}
	 */
	async findRequest( url, urlParams, method, includePending = true ) {
		/** @type {WdioInterceptorService.InterceptedRequest[]} */
		const requests = await browser.getRequests( { includePending } );

		return requests.find( ( request ) => {
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
		} );
	}

	/**
	 * @param {string} url The base URL of the request
	 * @param {{ key: string, value: string }[]} urlParams
	 * @param {'POST'|'GET'} method The HTTP method of the request
	 * @param {number} timeout Time to wait for the request to timeout
	 * @return {Promise<WdioInterceptorService.CompletedRequest>}
	 */
	async findAndWaitRequest( url, urlParams, method, timeout = 5000 ) {
		const request = await this.findRequest( url, urlParams, method );
		if ( !request ) {
			throw new Error(
				'Such request has not been sent. Details: ' + JSON.stringify( { url, urlParams, method } )
			);
		} else if ( !request.pending ) {
			return request;
		}

		const opts = {
			timeoutMsg: `Request timed out in ${timeout} ms. ` +
				`Details: ${JSON.stringify( { url, urlParams, method } )}`,
			timeout
		};

		return browser.waitUntil( () => this.findRequest( url, urlParams, method, false ), opts );
	}

	/**
	 * @param {{ key: string, value: string }[]} urlParams
	 * @param {'POST'|'GET'} method
	 * @return {Promise<WdioInterceptorService.CompletedRequest>}
	 */
	findAndWaitForActionApiRequest( urlParams, method ) {
		const url = `${process.env.MW_SCRIPT_PATH}/api.php`;
		return this.findAndWaitRequest( url, urlParams, method );
	}
}

module.exports = new BrowserHelper();
