<?php
/**
 * @author Niklas Laxström
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\Scripts;

use ContentTranslation\Database;
use ContentTranslation\Notification;
use ContentTranslation\Translation;
use ContentTranslation\TranslationStorageManager;
use ContentTranslation\Translator;
use DateTime;
use IDatabase;
use InvalidArgumentException;
use Maintenance;
use MediaWiki\MediaWikiServices;
use RawMessage;
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
	public function __construct() {
		parent::__construct();

		$this->setBatchSize( 100 );
		$this->requireExtension( 'ContentTranslation' );
		$this->mDescription = 'Purge unpublished drafts.';

		// Default to safe option which doesn't actually change data.
		$this->addOption(
			'really',
			'(optional) Really purge instead of a dry-run'
		);

		$this->addOption(
			'age-in-days',
			'Purge unpublished drafts older than this',
			$required = true,
			$hasArg = true
		);
	}

	public function execute() {
		$dryRun = !$this->hasOption( 'really' );

		$cutoffTime = $this->getCutoffTime( $this->getOption( 'age-in-days' ) );
		$ts = $cutoffTime->format( DateTime::W3C );
		$this->output( "Selecting drafts with last modified timestamp older than $ts\n" );

		$dbr = Database::getConnection( DB_REPLICA );
		$cutoffTimestamp = $cutoffTime->format( 'U' );
		$draftsIterator = $this->getPurgeableDrafts( $dbr, $cutoffTimestamp );

		// The database result iterator does not implement countable, so converting to an array.
		$count = count( iterator_to_array( $draftsIterator ) );
		$countMessage = new RawMessage( "Found $count purgeable {{PLURAL:$count|draft|drafts}}\n" );
		$this->output( $countMessage->text() );
		if ( $dryRun ) {
			$this->output( "DRY-RUN mode: drafts are not purged unless you add --really\n" );
		}

		$draftsPerUser = [];
		foreach ( $draftsIterator as $draft ) {
			$unix = ConvertibleTimestamp::convert( TS_UNIX, $draft->translation_last_updated_timestamp );
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

			if ( !$dryRun ) {
				$this->purgeDraft( $draft->translation_id );
				$this->output( " — PURGED", $draft->translation_id );
				$draftsPerUser[ $draft->translation_last_update_by ][] = $draft;
			}

			MediaWikiServices::getInstance()->getDBLoadBalancerFactory()->waitForReplication();
		}

		if ( !$dryRun ) {
			$this->notifyUsers( $draftsPerUser );
		}
		$this->output( "Done!\n" );
	}

	public function getCutoffTime( $days ) {
		if ( !ctype_digit( $days ) ) {
			throw new InvalidArgumentException( 'Days must be an integer' );
		}

		// Uses current timezone of PHP/MediaWiki
		$dt = new DateTime();
		$dt->setTime( 0, 0, 0 );
		$dt->modify( "-{$days} days" );

		return $dt;
	}

	public function purgeDraft( $draftId ) {
		Translator::removeTranslation( $draftId );
		Translation::delete( $draftId );
		TranslationStorageManager::deleteTranslationDataGently( $draftId, $this->mBatchSize );
	}

	public function getPurgeableDrafts( IDatabase $db, $cutoff ) {
		$table = 'cx_translations';
		$fields = '*';
		$conds = [
			'translation_last_updated_timestamp < ' . $db->addQuotes( $db->timestamp( $cutoff ) ),
			'translation_status' => 'draft',
			'translation_target_url is NULL'
		];
		$options = [
			'ORDER BY' => 'translation_last_updated_timestamp ASC'
		];

		return $db->select( $table, $fields, $conds, __METHOD__, $options );
	}

	public function notifyUsers( $draftsPerUser ) {
		foreach ( $draftsPerUser as $userId => $drafts ) {
			foreach ( $drafts as $draft ) {
				Notification::draftDeleted(
					$userId,
					$draft->translation_source_title,
					$draft->translation_source_language,
					$draft->translation_target_language
				);
			}
		}
	}
}

$maintClass = PurgeUnpublishedDrafts::class;
require_once RUN_MAINTENANCE_IF_MAIN;
