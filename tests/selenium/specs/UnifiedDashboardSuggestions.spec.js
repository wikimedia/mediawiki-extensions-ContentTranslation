/*
 * CX / SX browser test suite for the suggestion features of the unified dashboard
 *
 * Test go through the following steps
 * [1] See suggestions
 * [a] Open the unified dashboard
 * [b] See suggestions to translate pages
 * [c] See suggestions to translate sections
 *
 * [2] Save for later and unsave
 * [a] Open the unified dashboard
 * [b] Save a suggestion for later
 * [c] Un-save the suggestion
 * [d] Ensure that it is now longer in the "For later" section
 *
 * [3] Should allow dismissing a suggestion
 * [a] Open the unified dashboard
 * [b] Dismiss a suggestion
 * [c] Ensure that it no longer appears
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
		await expect( await UnifiedDashboardPage.articleSuggestions )
			.toBeDisplayed( defaultOption );
		await expect( await UnifiedDashboardPage.sectionSuggestions )
			.toBeDisplayed( defaultOption );
	} );

	it( 'should allow user to save/unsave a suggestion for later', async function () {
		await LoginPage.loginAdmin();
		await UnifiedDashboardPage.open();

		// Save the article for later
		const favoriteArticleHeading = await UnifiedDashboardPage.favoriteArticle( 0 );
		let favoriteArticle = await UnifiedDashboardPage
			.getFavoriteSuggestionByTitle( favoriteArticleHeading );
		await expect( favoriteArticle ).toBeDefined();

		// Un-save article
		await UnifiedDashboardPage.unFavoriteArticle( favoriteArticle );
		favoriteArticle = await UnifiedDashboardPage
			.getFavoriteSuggestionByTitle( favoriteArticleHeading );
		await expect( favoriteArticle ).toBeUndefined();
	} );

	it( 'should allow dismissing a suggestion', async function () {
		await UnifiedDashboardPage.open();

		const dismissedArticleHeading = await UnifiedDashboardPage.dismissArticle( 0 );
		const dismissedArticle = await UnifiedDashboardPage
			.getArticleSuggestionByTitle( dismissedArticleHeading );
		await expect( dismissedArticle ).toBeUndefined();
	} );

	it( 'should allow refreshing suggestions', async function () {
		await UnifiedDashboardPage.open();

		const existingArticle1Title = await UnifiedDashboardPage.getSuggestionSourceTitle(
			await UnifiedDashboardPage.getArticleSuggestionByIndex( 0 )
		);
		const existingArticle2Title = await UnifiedDashboardPage.getSuggestionSourceTitle(
			await UnifiedDashboardPage.getArticleSuggestionByIndex( 1 )
		);

		await UnifiedDashboardPage.refreshSuggestions();

		const oldArticle1 = await UnifiedDashboardPage
			.getArticleSuggestionByTitle( existingArticle1Title );
		const oldArticle2 = await UnifiedDashboardPage
			.getArticleSuggestionByTitle( existingArticle2Title );

		await expect( oldArticle1 ).toBeUndefined();
		await expect( oldArticle2 ).toBeUndefined();
	} );
} );
