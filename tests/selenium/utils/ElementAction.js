/*!
 * ElementActions utility object for CX / SX browser test suite
 * Copied from WikiLambda test suite.
 *
 * Contains general actions that are performed on the browser elements
 *
 * General Actions includes
 * [1] Click on the element
 * [2] Set the input
 * [3] Get the text from the selector
 * [4] Clear the input
 * [5] Get the value from the input selector
 * [6] Scroll the element into the viewport
 *
 * @copyright 2020– Abstract Wikipedia team; see AUTHORS.txt
 * @license MIT
 */

'use strict';
const { Element: WebdriverIOElementType } = require( 'webdriverio' );

class ElementAction {
	/**
	 * Wait for the element to be displayed, then click on the element
	 *
	 * @async
	 * @param {Promise<WebdriverIOElementType>} selector - selector of the element to be clicked
	 * @return {void}
	 */
	async doClick( selector ) {
		await selector.waitForDisplayed( { timeout: 15000 } );
		await selector.click();
	}

	/**
	 * Wait for the element to be displayed and enabled, then click on the element
	 *
	 * @async
	 * @param {Promise<WebdriverIOElementType>} selector - selector of the element to be clicked
	 * @return {void}
	 */
	async doEnabledClick( selector ) {
		await selector.waitForDisplayed();
		await selector.waitForEnabled();
		await selector.click();
	}

	/**
	 * Wait for the element to be displayed, then set the text into the input
	 *
	 * @async
	 * @param {Promise<WebdriverIOElementType>} selector - selector of the input field
	 * @param {string} inputText - Text to enter into the input field
	 * @return {void}
	 */
	async setInput( selector, inputText ) {
		await selector.waitForDisplayed();
		await selector.click();
		await selector.setValue( inputText );
	}

	/**
	 * Get the value from the input selector
	 *
	 * @async
	 * @param {Promise<WebdriverIOElementType>} inputSelector
	 * @return {Promise<string>}
	 */
	async getValue( inputSelector ) {
		await inputSelector.waitForDisplayed();
		return await inputSelector.getValue();
	}

	/**
	 * Get the text from the selector
	 *
	 * @async
	 * @param {Promise<WebdriverIOElementType>} selector
	 * @return {Promise<string>}
	 */
	async getText( selector ) {
		await selector.waitForDisplayed();
		return await selector.getText();
	}

	/**
	 * Get the text from the selector
	 *
	 * @async
	 * @param {string} attribute
	 * @param {Promise<WebdriverIOElementType>} selector
	 * @return {Promise<string>}
	 */
	async getAttribute( selector, attribute ) {
		await selector.waitForDisplayed();
		return await selector.getAttribute( attribute );
	}

	/**
	 * WebdriverIO docs mentions that setValue should first clear the input and then
	 * set the input. However this does not happen.
	 * The following is a temporarily solution to clear the input.
	 *
	 * @async
	 * @param {Promise<WebdriverIOElementType>} inputSelector - selector of the input field
	 */
	async clearInput( inputSelector ) {
		await inputSelector.waitForDisplayed();
		await inputSelector.click();
		await inputSelector.setValue( '' );
	}

	/**
	 * Scroll element into viewport
	 *
	 * @async
	 * @param {Promise<WebdriverIOElementType>} selector - Selector of the element
	 * @return {void}
	 */
	async scrollIntoView( selector ) {
		await selector.waitForExist();
		await selector.scrollIntoView( { block: 'center', inline: 'center' } );
	}
}

module.exports = new ElementAction();
