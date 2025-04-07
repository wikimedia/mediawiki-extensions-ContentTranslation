<?php

declare( strict_types=1 );

namespace ContentTranslation\Events;

use ContentTranslation\Entity\RecentSignificantEdit;
use ContentTranslation\Service\EditedSectionFinder;
use ContentTranslation\Service\WikidataIdFetcher;
use ContentTranslation\SiteMapper;
use ContentTranslation\Store\RecentSignificantEditStore;
use MediaWiki\DomainEvent\DomainEventIngress;
use MediaWiki\Page\Event\PageRevisionUpdatedEvent;
use MediaWiki\Revision\RevisionStore;

/**
 * Event subscriber for significant edits.
 *
 * Subscribes to PageRevisionUpdatedEventAfterCommit events and stores significant edits
 * in the cx_significant_edits table.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
class SignificantEditEventIngress extends DomainEventIngress {
	private RevisionStore $revisionStore;
	private RecentSignificantEditStore $significantEditStore;
	private EditedSectionFinder $editedSectionFinder;
	private WikidataIdFetcher $wikidataIdFetcher;
	private const MINIMUM_MODIFIED_BYTES = 500;

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
	 * Handler for "PageRevisionUpdatedEventAfterCommit" events.
	 * It adds a new row to the "cx_significant_edits" table, if the
	 * current revision fulfils some requirements.
	 *
	 * These requirements are:
	 * 1. The changes in the revision should modify at least MINIMUM_MODIFIED_BYTES bytes
	 * 2. This change should affect at least one non-lead section
	 *
	 * @noinspection PhpUnused
	 * @param PageRevisionUpdatedEvent $event
	 * @return void
	 */
	public function handlePageRevisionUpdatedEvent( PageRevisionUpdatedEvent $event ): void {
		$pageIdentity = $event->getPage();
		$rev = $event->getLatestRevisionAfter();
		$user = $event->getAuthor();

		$isSignificantEdit = $rev->getSize() > self::MINIMUM_MODIFIED_BYTES;
		wfDebugLog( 'cx-entrypoints-recent-edit', 'Edit size: ' . $rev->getSize() );
		// If edit is not of a significant size,
		// or if current wiki family is not supported for this entrypoint
		if ( !$isSignificantEdit || !$this->significantEditStore->isCurrentWikiFamilySupported() ) {
			return;
		}

		$currentLanguage = SiteMapper::getCurrentLanguageCode();
		$qid = $this->wikidataIdFetcher->getWikidataId( (string)$pageIdentity, $currentLanguage );
		if ( !$qid ) {
			wfDebugLog( 'cx-entrypoints-recent-edit', 'qid not found' );
			return;
		}

		// get integer from Q id ("Q123")
		$wikidataId = (int)filter_var( $qid, FILTER_SANITIZE_NUMBER_INT );

		$previousRev = $this->revisionStore->getPreviousRevision( $rev );
		// Find all titles of non-lead sections that were edited in this revision
		$editedSections = $this->editedSectionFinder->findEditedSectionsBetweenRevisions( $rev, $previousRev );
		wfDebugLog( 'cx-entrypoints-recent-edit', 'Edited sections: ' . implode( ", ", $editedSections ) );

		// If no non-lead section was edited, return
		if ( !$editedSections ) {
			return;
		}

		$language = SiteMapper::getCurrentLanguageCode();

		$userEdit = $this->significantEditStore->findExistingEdit(
			$user->getId(),
			$wikidataId,
			$language
		);

		if ( $userEdit instanceof RecentSignificantEdit ) {
			wfDebugLog( 'cx-entrypoints-recent-edit', 'Recent edit already exists' );
			$userEdit->mergeSectionTitles( $editedSections );
			$this->significantEditStore->update( $userEdit );

			return;
		}

		$edit = new RecentSignificantEdit(
			null,
			$user->getId(),
			$wikidataId,
			$language,
			(string)$pageIdentity,
			$editedSections,
			null
		);

		$this->significantEditStore->insert( $edit );
		wfDebugLog( 'cx-entrypoints-recent-edit', 'Recent edit created' );
	}
}
