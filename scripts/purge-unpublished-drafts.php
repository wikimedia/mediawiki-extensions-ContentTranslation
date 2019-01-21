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
			$required = false,
			$hasArg = true
		);
	}

	public function execute() {
		global $wgConf, $wgDraftMaxAge, $wgContentTranslationTranslateInTarget, $wgDBname;

		$dryRun = !$this->hasOption( 'really' );
		$ageInDays = $this->getOption( 'age-in-days', (string)$wgDraftMaxAge );
		$language = null;

		// Notifications can only be send if the user account exists on the wiki where this
		// maintenance script is run. We used to run this on enwiki, but found out that not
		// all accounts exist there. Here we assume that the domain<->target language code
		// mapping is a bijection. If it isn't... we have bigger problems than this.
		if ( $wgContentTranslationTranslateInTarget ) {
			$this->output( '$wgContentTranslationTranslateInTarget is enabled. ', 'note' );
			$this->output( 'This script must be run separately for each target language.', 'note' );

			// This is required because simplewiki sets content language to 'en' and we cannot
			// differentiate from enwiki otherwise.
			list( , $domainCode ) = $wgConf->siteFromDB( $wgDBname );
			$language = SiteMapper::getLanguageCode( $domainCode );

			// Fallback for non-wmf-style farms
			if ( $language === '' ) {
				$language = MediaWikiServices::getInstance()->getContentLanguage()->getCode();
			}

			$this->output( "Running for language $language\n" );
		}

		$cutoffTime = $this->getCutoffTime( $ageInDays );
		$ts = $cutoffTime->format( DateTime::W3C );
		$this->output( "Selecting drafts with last modified timestamp older than $ts\n" );

		$dbr = Database::getConnection( DB_REPLICA );
		$cutoffTimestamp = $cutoffTime->format( 'U' );
		$draftsIterator = $this->getPurgeableDrafts( $dbr, $cutoffTimestamp, $language );

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
				MediaWikiServices::getInstance()->getDBLoadBalancerFactory()->waitForReplication();
			}
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

	/**
	 * @param IDatabase $db
	 * @param string $cutoff Timestamp in any format recognized by MediaWiki
	 * @param string|string[]|null $language Language code, list of them or null for all languages
	 * @return IResultWrapper
	 */
	private function getPurgeableDrafts( IDatabase $db, $cutoff, $language = null ) {
		$table = 'cx_translations';
		$fields = '*';
		$conds = [
			'translation_last_updated_timestamp < ' . $db->addQuotes( $db->timestamp( $cutoff ) ),
			'translation_status' => 'draft',
			'translation_target_url is NULL',
		];

		// Unfortunately this query cannot use index with nor without this condition. If we
		// filtered by the source language instead, it could use `cx_translation_languages`,
		// but there is no guarantee that the user has an account in the source language wiki.
		// TODO: consider adding an index for target_language and last_updated_timestamp if
		// these queries need to be sped up.
		if ( $language ) {
			$conds[ 'translation_target_language ' ] = $language;
		}

		$options = [
			'ORDER BY' => 'translation_last_updated_timestamp ASC'
		];

		return $db->select( $table, $fields, $conds, __METHOD__, $options );
	}

	public function notifyUsers( $draftsPerUser ) {
		$centralIdLookup = \CentralIdLookup::factory();

		foreach ( $draftsPerUser as $globalUserId => $drafts ) {
			$user = $centralIdLookup->localUserFromCentralId( $globalUserId );

			if ( !$user ) {
				$titles = array_map( function ( $d ) {
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
					Notification::draftDeleted(
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
}

$maintClass = PurgeUnpublishedDrafts::class;
require_once RUN_MAINTENANCE_IF_MAIN;
