/*
 * CX / SX browser test suite for the new translation features of the unified dashboard
 *
 * Test go through the following steps
 * [1] Start a new translation by searching for an article from a suggestion
 * [2] Search for an article and wait for it to appear
 * [3] Click on the article
 * [4] Click on "Start translation"
 * [5] Make modifications
 * [6] Save the translation
 */
'use strict';

const LoginPage = require( 'wdio-mediawiki/LoginPage' );
const UnifiedDashboardPage = require( '../pageobjects/UnifiedDashboard.page' );
const DesktopEditor = require( '../componentobjects/DesktopEditor' );

describe( 'Unified Dashboard - Desktop - New translation', function () {
	it( 'should allow publishing a new translation started through search', async function () {
		await LoginPage.loginAdmin();
		await UnifiedDashboardPage.open();

		const articleHeading = await UnifiedDashboardPage.getArticleSuggestionTitle( 0 );
		const publishedURL = await UnifiedDashboardPage.publishNewArticleBySearch( articleHeading );

		const $publishedSuccessMessage = await DesktopEditor.getPublishSuccessMessage();

		await expect( $publishedSuccessMessage ).toBeDefined();
		await expect( publishedURL ).toBeTruthy();
	} );

} );
