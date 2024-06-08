<?php

declare( strict_types=1 );

namespace ContentTranslation\HookHandler;

use ContentTranslation\Entity\RecentSignificantEdit;
use ContentTranslation\Service\EditedSectionFinder;
use ContentTranslation\Service\WikidataIdFetcher;
use ContentTranslation\SiteMapper;
use ContentTranslation\Store\RecentSignificantEditStore;
use MediaWiki\Deferred\DeferredUpdates;
use MediaWiki\Page\Hook\RevisionFromEditCompleteHook;
use MediaWiki\Revision\RevisionRecord;
use MediaWiki\Revision\RevisionStore;
use MediaWiki\User\UserIdentity;
use WikiPage;

class SignificantEditCreationHandler implements RevisionFromEditCompleteHook {

	/** @var RevisionStore */
	private $revisionStore;

	/** @var RecentSignificantEditStore */
	private $significantEditStore;

	/** @var EditedSectionFinder */
	private $editedSectionFinder;

	/** @var WikidataIdFetcher */
	private $wikidataIdFetcher;

	public function __construct(
		RevisionStore $revisionStore,
		RecentSignificantEditStore $significantEditStore,
		EditedSectionFinder $editedSectionFinder,
		WikidataIdFetcher $wikidataIdFetcher
	) {
		$this->revisionStore = $revisionStore;
		$this->significantEditStore = $significantEditStore;
		$this->editedSectionFinder = $editedSectionFinder;
		$this->wikidataIdFetcher = $wikidataIdFetcher;
	}

	/**
	 * This hook is registered for the "RevisionFromEditComplete" event.
	 * It adds a new row to the "cx_significant_edits" table, if the
	 * current revision fulfils some requirements.
	 *
	 * These requirements are:
	 * 1. This revision should be a significant contribution (size > 500 bytes)
	 * 2. This revision should affect at least one non-lead section
	 *
	 * @param WikiPage $wikiPage WikiPage edited
	 * @param RevisionRecord $rev New revision
	 * @param int|bool $originalRevId
	 * @param UserIdentity $user
	 * @param string[] &$tags
	 */
	public function onRevisionFromEditComplete( $wikiPage, $rev, $originalRevId, $user, &$tags ) {
		$isSignificantEdit = $rev->getSize() > 500;
		$significantEditStore = $this->significantEditStore;
		// If edit is not of a significant size,
		// or if current wiki family is not supported for this entrypoint
		if ( !$isSignificantEdit || !$significantEditStore->isCurrentWikiFamilySupported() ) {
			return;
		}

		$currentLanguage = SiteMapper::getCurrentLanguageCode();
		$qid = $this->wikidataIdFetcher->getWikidataId( (string)$wikiPage->getTitle(), $currentLanguage );
		if ( !$qid ) {
			wfDebugLog( 'cx-entrypoints-recent-edit', 'qid not found' );
			return;
		}

		// get integer from Q id ("Q123")
		$wikidataId = (int)filter_var( $qid, FILTER_SANITIZE_NUMBER_INT );
		$revisionStore = $this->revisionStore;
		$editedSectionFinder = $this->editedSectionFinder;

		DeferredUpdates::addCallableUpdate(
			static function () use (
				$rev,
				$user,
				$wikiPage,
				$revisionStore,
				$editedSectionFinder,
				$significantEditStore,
				$wikidataId
			) {
				$previousRev = $revisionStore->getPreviousRevision( $rev );
				// Find all titles of non-lead sections that were edited in this revision
				$editedSections = $editedSectionFinder->findEditedSectionsBetweenRevisions( $rev, $previousRev );
				wfDebugLog( 'cx-entrypoints-recent-edit', 'Edited sections: ' . implode( ", ", $editedSections ) );

				// If no non-lead section was edited, return
				if ( !$editedSections ) {
					return;
				}

				$language = SiteMapper::getCurrentLanguageCode();

				$userEdit = $significantEditStore->findExistingEdit(
					$user->getId(),
					$wikidataId,
					$language
				);

				if ( $userEdit instanceof RecentSignificantEdit ) {
					wfDebugLog( 'cx-entrypoints-recent-edit', 'Recent edit already exists' );
					$userEdit->mergeSectionTitles( $editedSections );
					$significantEditStore->update( $userEdit );

					return;
				}

				$edit = new RecentSignificantEdit(
					null,
					$user->getId(),
					$wikidataId,
					$language,
					(string)$wikiPage->getTitle(),
					$editedSections,
					null
				);

				$significantEditStore->insert( $edit );
				wfDebugLog( 'cx-entrypoints-recent-edit', 'Recent edit created' );
			}
		);
	}
}
