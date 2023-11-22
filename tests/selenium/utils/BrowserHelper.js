'use strict';

class BrowserHelper {
	/**
	 * @param {{ key: string, value: string }[]} urlParams
	 * @param {boolean} includePending
	 * @return {Promise<WdioInterceptorService.InterceptedRequest|null>}
	 */
	async findActionApiRequest( urlParams, includePending = true ) {
		/** @type {WdioInterceptorService.InterceptedRequest[]} */
		const requests = await browser.getRequests( { includePending } );

		return requests.find( ( request ) => {
			const validUrl = request.url === `${process.env.MW_SCRIPT_PATH}/api.php`;
			const validMethod = request.method === 'POST';
			// eslint-disable-next-line node/no-unsupported-features/node-builtins
			const bodyParams = new URLSearchParams( request.body );
			const validBody = urlParams.every(
				( urlParam ) => bodyParams.get( urlParam.key ) === urlParam.value
			);

			return validUrl && validMethod && validBody;
		} );
	}

	/**
	 * @param {{ key: string, value: string }[]} urlParams
	 */
	async findAndWaitForActionApiRequest( urlParams ) {
		const request = await this.findActionApiRequest( urlParams );
		if ( !request ) {
			throw new Error( 'Such request has not been sent' );
		} else if ( !request.pending ) {
			return request;
		}

		const opts = {
			timeoutMsg: 'Request found but was not completed within the specified waiting interval',
			timeout: 5000
		};

		return await browser.waitUntil( () => this.findActionApiRequest( urlParams, false ), opts );
	}
}

module.exports = new BrowserHelper();
