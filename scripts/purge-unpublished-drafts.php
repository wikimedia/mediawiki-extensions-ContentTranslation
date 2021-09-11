<?php
/**
 * @author Niklas Laxström
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\Scripts;

use ContentTranslation\Database;
use ContentTranslation\Notification;
use ContentTranslation\SiteMapper;
use ContentTranslation\Translation;
use ContentTranslation\TranslationStorageManager;
use ContentTranslation\Translator;
use DateTime;
use InvalidArgumentException;
use Maintenance;
use MediaWiki\MediaWikiServices;
use RawMessage;
use stdClass;
use WikiMap;
use Wikimedia\Rdbms\IDatabase;
use Wikimedia\Rdbms\IResultWrapper;
use Wikimedia\Timestamp\ConvertibleTimestamp;

// Standard boilerplate to define $IP
if ( getenv( 'MW_INSTALL_PATH' ) !== false ) {
	$IP = getenv( 'MW_INSTALL_PATH' );
} else {
	$dir = __DIR__;
	$IP = "$dir/../../..";
}
require_once "$IP/maintenance/Maintenance.php";

class PurgeUnpublishedDrafts extends Maintenance {
	private $dryRun = true;

	public function __construct() {
		parent::__construct();

		$this->setBatchSize( 100 );
		$this->requireExtension( 'ContentTranslation' );
		$this->addDescription(
			'Notify users to continue old translations and purge some unpublished drafts.'
		);

		// Default to safe option which doesn't actually change data.
		$this->addOption(
			'really',
			'(optional) Really purge instead of a dry-run'
		);

		$this->addOption(
			'age-in-days',
			'Purge unpublished drafts older than this',
			/* required */ false,
			/* hasArg */ true
		);

		$this->addOption(
			'notify-age-in-days',
			'Notify users about unpublished drafts older than this',
			/* required */ false,
			/* hasArg */ true
		);
	}

	public function execute() {
		global $wgDraftMaxAge, $wgContentTranslationTranslateInTarget;

		$this->dryRun = !$this->hasOption( 'really' );
		$language = null;

		$ageInDays = $this->getOption( 'age-in-days', (string)$wgDraftMaxAge );
		if ( !ctype_digit( $ageInDays ) ) {
			throw new InvalidArgumentException( 'Purge days must be an integer' );
		}

		$dbr = Database::getConnection( DB_REPLICA );
		$notifyAgeInDays = $this->getOption( 'notify-age-in-days' );

		// Notifications can only be send if the user account exists on the wiki where this
		// maintenance script is run. We used to run this on enwiki, but found out that not
		// all accounts exist there. Here we assume that the domain<->target language code
		// mapping is a bijection. If it isn't... we have bigger problems than this.
		if ( $wgContentTranslationTranslateInTarget ) {
			$this->output( '$wgContentTranslationTranslateInTarget is enabled. ', 'note' );
			$this->output( 'This script must be run separately for each target language.', 'note' );

			$language = SiteMapper::getCurrentLanguageCode();

			$this->output( "Running for language $language\n" );
		}

		if ( $this->dryRun ) {
			$this->output(
				"DRY-RUN mode: no actions are taken on drafts unless you use --really\n\n"
			);
		}

		if ( $notifyAgeInDays ) {
			$remindersBefore = $this->getCutoffTime( $notifyAgeInDays );

			$after = $dbr->selectField(
				'cx_notification_log',
				'MAX(cxn_newest)',
				[ 'cxn_wiki_id' => WikiMap::getCurrentWikiId() ],
				__METHOD__
			);

			if ( $after ) {
				$remindersAfter = new DateTime( $after );
			} else {
				$this->output( "No previous notification timestamp (using 15 days)\n" );
				// $after is null if there are no entries in cx_notification_log table.
				// Indicative of first run after implementing notifications for old drafts. See T89707
				$remindersAfter = $this->getCutoffTime( $notifyAgeInDays + 15 );
			}

			$beforeTs = $remindersBefore->format( 'Y-m-d' );
			$afterTs = $remindersAfter->format( 'Y-m-d' );

			$this->output(
				"== Notifying users to continue their old translations ==\n" .
				"Selecting drafts with last modified timestamp between $afterTs and $beforeTs\n"
			);
			$draftsIterator = $this->getOldDrafts( $dbr, $remindersBefore, $remindersAfter, $language );
			$lastDraft = $this->processDrafts(
				$draftsIterator, [ $this, 'notifyUsersAboutDrafts', 'cx-continue-translation' ]
			);

			if ( $lastDraft ) {
				$this->logLastNotifiedDraft( $lastDraft );
			}

			$this->output( "\n\n" );
		}

		$purgeCutoff = $this->getCutoffTime( $ageInDays );
		$purgeTs = $purgeCutoff->format( 'Y-m-d' );
		$this->output(
			"== Purging old drafts ==\n" .
			"Selecting drafts with last modified timestamp before $purgeTs\n"
		);
		$draftsIterator = $this->getOldDrafts( $dbr, $purgeCutoff, null, $language );
		$this->processDrafts(
			$draftsIterator,
			[ $this, 'notifyUsersAboutDrafts', 'cx-deleted-draft' ],
			[ $this, 'purgeDraft' ]
		);

		$this->output( "Done!\n" );
	}

	/**
	 * @param IResultWrapper $drafts Drafts to be processed
	 * @param array $notifierCallback Callback for notifying users
	 * @param callable|null $actionCallback Callback for performing operations on drafts
	 * @return stdClass|null
	 */
	public function processDrafts( $drafts, $notifierCallback, $actionCallback = null ) {
		// The database result iterator does not implement countable, so converting to an array.
		$count = count( iterator_to_array( $drafts ) );
		$countMessage = new RawMessage( "Found $count old {{PLURAL:$count|draft|drafts}}\n" );
		$this->output( $countMessage->text() );

		$draftsPerUser = [];
		$draft = null;
		foreach ( $drafts as $draft ) {
			$unix = ConvertibleTimestamp::convert(
				TS_UNIX, $draft->translation_last_updated_timestamp
			);
			// UTC timezone is forced for unix timestamps
			$dt = new \DateTime( "@$unix" );

			$name = sprintf(
				"%8d %s %-13s %s",
				$draft->translation_id,
				$dt->format( DateTime::W3C ),
				"{$draft->translation_source_language}→{$draft->translation_target_language}",
				$draft->translation_source_title
			);

			$this->output( "$name", $draft->translation_id );

			if ( !$this->dryRun ) {
				if ( $actionCallback ) {
					call_user_func( $actionCallback, $draft->translation_id );
				}

				$draftsPerUser[ $draft->translation_last_update_by ][] = $draft;
			}
		}

		if ( !$this->dryRun ) {
			call_user_func(
				array_slice( $notifierCallback, 0, 2 ),
				$draftsPerUser,
				$notifierCallback[ 2 ]
			);
			return $draft;
		}
	}

	public function getCutoffTime( $days ) {
		$dt = new DateTime();
		$dt->setTimezone( new \DateTimeZone( 'UTC' ) );
		$dt->setTime( 0, 0, 0 );
		$dt->modify( "-{$days} days" );

		return $dt;
	}

	public function purgeDraft( $draftId ) {
		Translator::removeTranslation( $draftId );
		Translation::delete( $draftId );
		TranslationStorageManager::deleteTranslationDataGently( $draftId, $this->mBatchSize );
		$this->output( " — PURGED", $draftId );
		MediaWikiServices::getInstance()->getDBLoadBalancerFactory()->waitForReplication();
	}

	/**
	 * @param IDatabase $db
	 * @param DateTime $before Before timestamp
	 * @param DateTime|null $after After timestamp
	 * @param string|string[]|null $language Language code, list of them or null for all languages
	 * @return IResultWrapper
	 */
	private function getOldDrafts( IDatabase $db, $before, $after = null, $language = null ) {
		$table = 'cx_translations';
		$fields = '*';
		$conds = [
			'translation_last_updated_timestamp < ' . $db->addQuotes( $before->format( 'YmdHis' ) ),
			'translation_status' => 'draft',
			'translation_target_url is NULL',
		];

		if ( $after ) {
			$conds[] = 'translation_last_updated_timestamp > ' .
				$db->addQuotes( $after->format( 'YmdHis' ) );
		}

		// Unfortunately this query cannot use index with nor without this condition. If we
		// filtered by the source language instead, it could use `cx_translation_languages`,
		// but there is no guarantee that the user has an account in the source language wiki.
		// TODO: consider adding an index for target_language and last_updated_timestamp if
		// these queries need to be sped up.
		if ( $language ) {
			$conds[ 'translation_target_language' ] = $language;
		}

		$options = [
			'ORDER BY' => 'translation_last_updated_timestamp ASC'
		];

		return $db->select( $table, $fields, $conds, __METHOD__, $options );
	}

	public function notifyUsersAboutDrafts( $draftsPerUser, $notificationType ) {
		$services = MediaWikiServices::getInstance();
		$centralIdLookup = $services->getCentralIdLookup();

		foreach ( $draftsPerUser as $globalUserId => $drafts ) {
			$user = $centralIdLookup->localUserFromCentralId( $globalUserId );

			if ( !$user ) {
				$titles = array_map( static function ( $d ) {
					return $d->translation_source_title;
				}, $drafts );

				$this->output(
					"ERROR: Trying to notify unknown user with ID " . $globalUserId .
					" about the deletion of the following page(s): \n * " .
					implode( "\n * ", $titles ) . "\n"
				);

				continue;
			}

			try {
				foreach ( $drafts as $draft ) {
					Notification::draftNotification(
						$notificationType,
						$user->getId(),
						$draft->translation_source_title,
						$draft->translation_source_language,
						$draft->translation_target_language
					);
				}
			} catch ( \MWException $e ) {
				$this->output(
					$e->getMessage() .
					". Failed notifying user with ID: " . $user->getId() . "\n"
				);
			}
		}
	}

	private function logLastNotifiedDraft( $lastDraft ) {
		$dbw = Database::getConnection( DB_PRIMARY );
		$dt = new DateTime();

		$values = [
			'cxn_date' => $dt->format( 'Y-m-d' ),
			'cxn_newest' => $lastDraft->translation_last_updated_timestamp,
			'cxn_wiki_id' => WikiMap::getCurrentWikiId(),
		];

		$dbw->insert( 'cx_notification_log', $values, __METHOD__ );
	}
}

$maintClass = PurgeUnpublishedDrafts::class;
require_once RUN_MAINTENANCE_IF_MAIN;
