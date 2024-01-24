/*!
 * DesktopEditor Component Object for CX browser test suite
 *
 * Contains Desktop editor related locators and actions.
 */

'use strict';
const ElementAction = require( '../utils/ElementAction' );
const { faker } = require( '@faker-js/faker' );

const MT_LIST = [ 'Google', 'Elia', 'MinT', 'Yandex', 'source', 'scratch' ];
class DesktopEditor {
	getTranslationArticle() {
		return $( '.cx-column--translation article' );
	}

	getIssuesCard() {
		return $( '.cx-card-issues' );
	}

	getPublishButton() {
		return $( 'span.oo-ui-tool-name-publish a.oo-ui-tool-link' );
	}

	getPublishWithIssuesActions() {
		return $( '.oo-ui-messageDialog-actions' );
	}

	getPublishSuccessMessage() {
		return $( '.oo-ui-flaggedElement-success' );
	}

	getPublishedArticleLink() {
		return $( '.oo-ui-flaggedElement-success .cx-message-widget-message a' );
	}

	waitForArticleToLoad() {
		// Wait for the publish button to appear
		return $( 'span.oo-ui-tool-name-publish a.oo-ui-tool-link' )
			.waitForDisplayed( { timeout: 15000 } );
	}

	/**
	 * Make all the placeholder nodes opaque. Elements that have 0 opacity
	 * are considered un-clickable.
	 */
	makePlaceholderSectionsVisible() {
		return browser.executeAsync( function ( done ) {
			const placeholderNodes = document
				.querySelectorAll( '.cx-column--translation section.ve-ce-cxPlaceholderNode' );

			placeholderNodes.forEach( function ( node ) {
				node.style.opacity = 1;
			} );

			done();
		} );
	}

	/**
	 * Fill random translation data for the article
	 *
	 * @param {number} maxSections
	 */
	async fillRandomTranslationData( maxSections ) {
		await this.makePlaceholderSectionsVisible();
		// Select all sections
		const $$targetSections = await this.getTranslationArticle().$$( 'section' );

		let sectionCount = 0;
		for ( const $section of $$targetSections ) {
			const sectionClasses = await $section.getAttribute( 'class' );
			if ( sectionClasses.includes( 've-ce-cxPlaceholderNode' ) ) {
				const isClickable = await $section.isClickable();
				if ( !isClickable ) {
					continue;
				}
				// Trigger automatic translation
				await $section.click();
				// Wait for things to become stable!
				await $section.waitUntil( async function () {
					const classes = await this.getAttribute( 'class' );
					return !classes.includes( 've-ce-cxPlaceholderNode' );
				}, {
					timeout: 10000,
					timeoutMsg: 'CX placeholder node did not become section node'
				} );
			}
			// Add some lorem ipsum text
			await ElementAction.setInput( $section, faker.lorem.sentences( 5 ) );

			if ( sectionCount === maxSections ) {
				break;
			}

			++sectionCount;
		}
	}

	async setMT( mtEngine ) {
		if ( !MT_LIST.includes( mtEngine ) ) {
			throw new Error( `Invalid MT engine: ${ mtEngine }; Valid values: ${ MT_LIST.join( ', ' ) }` );
		}
		const $mtToolbar = await $( '.ve-ui-toolbar-group-cx-mt' );
		await ( $mtToolbar ).waitForDisplayed( { timeout: 3000 } );
		await ElementAction.doClick( $mtToolbar );

		const $mtOption = await $( `.oo-ui-tool-name-${ mtEngine } .oo-ui-tool-link` );
		await ElementAction.doClick( $mtOption );
	}

	async publishTranslation() {
		const hasIssues = await this.getIssuesCard().isDisplayed();

		await ElementAction.doClick( this.getPublishButton() );
		if ( hasIssues ) {
			// Wait for the publish with issues dialog to appear
			const $messageActions = await this.getPublishWithIssuesActions();
			await $messageActions.waitForDisplayed( { timeout: 10000 } );

			// Get the second button
			// TODO: Improve this selector
			const $buttons = await $messageActions.$$( '.oo-ui-buttonElement-button' );
			await ElementAction.doClick( $buttons[ 1 ] );
		}

		const $publishedArticleLink = await this.getPublishedArticleLink();
		return await $publishedArticleLink.getAttribute( 'href' );
	}
}

module.exports = new DesktopEditor();
