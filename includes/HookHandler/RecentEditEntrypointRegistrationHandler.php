<?php

declare( strict_types=1 );

namespace ContentTranslation\HookHandler;

use ContentTranslation\Service\WikidataIdFetcher;
use ContentTranslation\SiteMapper;
use ContentTranslation\Store\RecentSignificantEditStore;
use ExtensionRegistry;
use MediaWiki\MediaWikiServices;
use MediaWiki\Output\Hook\BeforePageDisplayHook;
use MediaWiki\Output\OutputPage;
use MobileContext;
use Skin;

class RecentEditEntrypointRegistrationHandler implements BeforePageDisplayHook {
	/** @var RecentSignificantEditStore */
	private $significantEditStore;

	/** @var WikidataIdFetcher */
	private $wikidataIdFetcher;

	public function __construct(
		RecentSignificantEditStore $significantEditStore,
		WikidataIdFetcher $wikidataIdFetcher
	) {
		$this->significantEditStore = $significantEditStore;
		$this->wikidataIdFetcher = $wikidataIdFetcher;
	}

	/**
	 * This hook adds "ext.cx.entrypoints.recentedit" module, to support
	 * entrypoint inside articles, that encourages users to translate
	 * a section, they recently edited for the same page in another language.
	 *
	 * To support this entrypoint, a table named "cx_significant_edits"
	 * has been created, that stores the 10 latest "significant" edits,
	 * that affect at least one non-lead section, for each user.
	 *
	 * If such edits exist for the current article, then the
	 * "ext.cx.entrypoints.recentedit" module is added and
	 * "wgSectionTranslationRecentlyEditedSections" JS variable
	 * is set, containing an array of objects containing the page title
	 * and the sections edited for each language:
	 * ([{ "language": "en", page: "Moon", "sections": ["Formation"] }]).
	 *
	 * @param OutputPage $out
	 * @param Skin $skin
	 */
	public function onBeforePageDisplay( $out, $skin ): void {
		$isMobileView = false;
		if ( ExtensionRegistry::getInstance()->isLoaded( 'MobileFrontend' ) ) {
			/** @var MobileContext $mobileContext */
			$mobileContext = MediaWikiServices::getInstance()->getService( 'MobileFrontend.Context' );
			$isMobileView = $mobileContext->shouldDisplayMobileView();
		}

		// This entrypoint should only be enabled for mobile web version
		if ( !$isMobileView ) {
			return;
		}

		// This entrypoint should only be enabled for logged-in users
		$user = $out->getUser();
		if ( !$user->isNamed() ) {
			return;
		}

		// This entrypoint should only be enabled for article pages
		$isContentPage = $out->getTitle()->isContentPage();
		if ( !$isContentPage ) {
			return;
		}

		$currentLanguageCode = SiteMapper::getCurrentLanguageCode();
		// This entrypoint should only be enabled for wikis that have SectionTranslation enabled
		$enabledLanguages = $out->getConfig()->get( 'SectionTranslationTargetLanguages' );
		$isSXEnabled = is_array( $enabledLanguages ) && in_array( $currentLanguageCode, $enabledLanguages );
		if ( !$isSXEnabled ) {
			return;
		}

		$recentUserEdits = [];

		// If current wiki family is not supported for this entrypoint, return
		if ( !$this->significantEditStore->isCurrentWikiFamilySupported() ) {
			return;
		}

		$title = $out->getTitle();
		$qid = $this->wikidataIdFetcher->getWikidataId( $title->getPrefixedDBkey(), $currentLanguageCode );

		if ( !$qid ) {
			wfDebugLog( 'cx-entrypoints-recent-edit', 'qid not found' );
			return;
		}
		// get integer from Q id ("Q123")
		$wikidataId = (int)filter_var( $qid, FILTER_SANITIZE_NUMBER_INT );

		/**
		 * Fetch at most 10 objects representing rows inside "cx_significant_edits" table,
		 * that satisfy the below conditions:
		 * 1. Were made by the current user
		 * 2. Were done to an article with the current wikidata page id
		 * 3. Were done in a language different from the current one
		 */
		$edits = $this->significantEditStore->findEditsForPotentialSuggestions(
			$user->getId(),
			$wikidataId,
			SiteMapper::getCurrentLanguageCode()
		);

		// We want to group the edited sections by language. For that reason, group the above
		// RecentSignificantEdit instances to an associative array, that follow the below form:
		// [
		//    "en" => [ "language" => "en", "page" => "Moon", "sections" => ["Formation"] ],
		//    "es" => [ "language" => "es", "page" => "Luna", "sections" => ["Formación"] ]
		// ]
		foreach ( $edits as $edit ) {
			$editLanguage = $edit->getLanguage();
			$recentUserEdits[$editLanguage]['language'] = $editLanguage;
			$recentUserEdits[$editLanguage]['page'] = $edit->getPageTitle();

			foreach ( $edit->getSectionTitles() as $sectionTitle ) {
				$recentUserEdits[$editLanguage]['sections'][] = $sectionTitle;
			}
		}

		// If all the above conditions are met, add 'ext.cx.entrypoints.recentedit' entrypoint
		$out->addModules( 'ext.cx.entrypoints.recentedit' );

		// Add Javascript variable that will contain an array of objects containing
		// the edited sections, the respective page title and the respective language.
		$out->addJsConfigVars( 'wgSectionTranslationRecentlyEditedSections',
			array_values( $recentUserEdits ) );
	}
}
