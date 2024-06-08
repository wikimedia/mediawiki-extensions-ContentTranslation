<?php

declare( strict_types=1 );

namespace ContentTranslation\HookHandler;

use ContentTranslation\SiteMapper;
use ContentTranslation\Store\TranslationStore;
use ExtensionRegistry;
use MediaWiki\MediaWikiServices;
use MediaWiki\Output\Hook\BeforePageDisplayHook;
use MediaWiki\Output\OutputPage;
use MediaWiki\Revision\RevisionStore;
use MobileContext;
use Skin;
use Wikimedia\Rdbms\ILoadBalancer;

class RecentTranslationEntrypointRegistrationHandler implements BeforePageDisplayHook {
	/** @var ILoadBalancer */
	private $loadBalancer;

	/** @var RevisionStore */
	private $revisionStore;

	/** @var TranslationStore */
	private $translationStore;

	public function __construct(
		ILoadBalancer $loadBalancer,
		RevisionStore $revisionStore,
		TranslationStore $translationStore
	) {
		$this->loadBalancer = $loadBalancer;
		$this->revisionStore = $revisionStore;
		$this->translationStore = $translationStore;
	}

	/**
	 * This hook adds "ext.cx.entrypoints.recenttranslation" module, to support
	 * entrypoint inside articles, that encourages users to review recently
	 * translated articles, if the appropriate conditions are met.
	 * These conditions are:
	 * 1. SectionTranslation is enabled for current wiki
	 * 2. User is accessing the mobile web version of the article
	 * 3. User is logged-in
	 * 4. The article was published as a new page by Content or Section Translation
	 * 5. The article was published in the last 10 days
	 * 6. The article has less than 5 edits since it was published
	 *
	 * @param OutputPage $out
	 * @param Skin $skin
	 * @throws \Exception
	 */
	public function onBeforePageDisplay( $out, $skin ): void {
		// This entrypoint should only be enabled for mobile web version
		$isMobileView = false;

		if ( ExtensionRegistry::getInstance()->isLoaded( 'MobileFrontend' ) ) {
			/** @var MobileContext $mobileContext */
			$mobileContext = MediaWikiServices::getInstance()->getService( 'MobileFrontend.Context' );
			$isMobileView = $mobileContext->shouldDisplayMobileView();
		}

		if ( !$isMobileView ) {
			return;
		}

		// This entrypoint should only be enabled for logged-in users
		$user = $out->getUser();
		if ( !$user->isNamed() ) {
			return;
		}

		$title = $out->getTitle();
		// This entrypoint should only be enabled for article pages
		$isContentPage = $title->isContentPage();
		if ( !$isContentPage ) {
			return;
		}

		$currentLanguageCode = SiteMapper::getCurrentLanguageCode();
		$enabledLanguages = $out->getConfig()->get( 'SectionTranslationTargetLanguages' );
		$isSXEnabled = is_array( $enabledLanguages ) && in_array( $currentLanguageCode, $enabledLanguages );

		if ( !$isSXEnabled ) {
			return;
		}

		// This entrypoint should only be enabled:
		// a. for pages that are created using Content or Section Translation
		// b. for pages that were published in the last 10 days
		// "cx_translations" table is expected to be smaller than "revision"
		// table, so we query this table first.
		$translation = $this->translationStore->findByPublishedTitle( $title->getPrefixedText(), $currentLanguageCode );

		// If translation not found inside the table, meaning this article has
		// not been created using Content or Section Translation, return
		if ( $translation === null ) {
			return;
		}
		$translationData = $translation->getData();
		$creationDate = new \DateTime( $translationData['lastUpdateTimestamp'] );
		// Check if translation was published within the last 10 days
		$createdWithin10Days = (bool)$creationDate->diff( new \DateTime( '-10 days' ) )->invert;
		if ( !$createdWithin10Days ) {
			return;
		}

		// This entrypoint should only be enabled for pages that have less than 5 edits.
		$pageId = $out->getWikiPage()->getId();
		// Find all revisions for this page
		$dbr = $this->loadBalancer->getConnection( DB_REPLICA );
		$revisionsCount = $this->revisionStore->countRevisionsByPageId( $dbr, $pageId );

		// If article has at least 5 edits, return
		if ( $revisionsCount >= 5 ) {
			return;
		}

		// If all the above conditions are met, add 'ext.cx.entrypoints.recenttranslation' entrypoint
		$out->addModules( 'ext.cx.entrypoints.recenttranslation' );
		// Add Javascript variables for translation source title and source language,
		// so that they can be used inside UI
		$out->addJsConfigVars( 'wgSectionTranslationSourceTitle',
			$translationData['sourceTitle'] );
		$out->addJsConfigVars( 'wgSectionTranslationSourceLanguage',
			$translationData['sourceLanguage'] );
	}
}
