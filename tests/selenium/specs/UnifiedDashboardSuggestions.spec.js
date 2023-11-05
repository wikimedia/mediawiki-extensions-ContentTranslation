/*
 * CX / SX browser test suite for the suggestion features of the unified dashboard
 *
 * Test go through the following steps
 * [1] See suggestions
 * [a] Open the unified dashboard
 * [b] See suggestions to translate pages
 * [c] See suggestions to translate sections
 *
 * [2] Save for later
 * [a] Open the unified dashboard
 * [b] Save a suggestion for later
 * [c] Ensure that "For Later" section appears and contains the suggestion
 *
 * [3] Remove a suggestion
 * [a] Open the unified dashboard
 * [b] Remove a suggestion
 * [c] Ensure that the suggestion does not appear
 *
 * [4] Refresh suggestions
 * [a] Open the unified dashboard
 * [b] Click on refresh suggestions
 * [c] Ensure the previous and new suggestions aren't exactly the same
 */
'use strict';

const LoginPage = require( 'wdio-mediawiki/LoginPage' );
const UnifiedDashboardPage = require( '../pageobjects/UnifiedDashboard.page' );
describe( 'Unified Dashboard - Suggestions', function () {
	it( 'should show suggestions tab', async function () {
		await LoginPage.loginAdmin();
		await UnifiedDashboardPage.open();

		const defaultOption = { wait: 6000 };
		await expect( await UnifiedDashboardPage.suggestionButton ).toBeDisplayed( defaultOption );
		await expect( await UnifiedDashboardPage.articleSuggestions ).toBeDisplayed( defaultOption );
		await expect( await UnifiedDashboardPage.sectionSuggestions ).toBeDisplayed( defaultOption );
	} );

	it( 'should allow user to save/unsave a suggestion for later', async function () {
		await LoginPage.loginAdmin();
		await UnifiedDashboardPage.open();

		// Save the article for later
		const favoriteArticleHeading = await UnifiedDashboardPage.favoriteArticle( 0 );
		let favoriteArticle = await UnifiedDashboardPage.getFavoriteSuggestionByTitle( favoriteArticleHeading );
		await expect( favoriteArticle ).toBeDefined();

		// TODO: Add a refresh here. Currently the favorite articles don't persist over a refresh.

		// Un-save article
		await UnifiedDashboardPage.unFavoriteArticle( favoriteArticle );
		favoriteArticle = await UnifiedDashboardPage.getFavoriteSuggestionByTitle( favoriteArticleHeading );
		await expect( favoriteArticle ).toBeUndefined();
	} );
} );
