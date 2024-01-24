/*!
 * Selection helper utility object for CX / SX browser test suite
 */

'use strict';
const { Element: WebdriverIOElementType } = require( 'webdriverio' );

class SelectionHelper {
	/**
	 * @param {string} selector
	 * @param {number} index
	 * @param {number} timeout
	 * @return {Promise<WebdriverIOElementType>}
	 */
	getElementByIndex( selector, index, timeout = 5000 ) {
		return browser.waitUntil( async () => {
			const suggestions = await $$( selector );
			if ( suggestions.length < ( index + 1 ) ) {
				return false;
			}

			return suggestions[ index ];
		}, {
			timeout: timeout,
			timeoutMsg: `Did not find ${ index + 1 } element(s) for selector: ${ selector }`
		} );
	}
}

module.exports = new SelectionHelper();
