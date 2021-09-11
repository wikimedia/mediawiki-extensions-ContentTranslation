<?php
/**
 * @author Niklas Laxström
 * @license GPL-2.0-or-later
 */

// Standard boilerplate to define $IP
use MediaWiki\MediaWikiServices;
use MediaWiki\Storage\NameTableAccessException;

if ( getenv( 'MW_INSTALL_PATH' ) !== false ) {
	$IP = getenv( 'MW_INSTALL_PATH' );
} else {
	$dir = __DIR__;
	$IP = "$dir/../../..";
}
require_once "$IP/maintenance/Maintenance.php";

class CxFixStats extends Maintenance {

	/** @var array */
	private $resets;

	/** @var array[] */
	private $tags;

	public function __construct() {
		parent::__construct();

		$this->requireExtension( 'ContentTranslation' );
		$this->addDescription( 'Script to fix some cx stats numbers.' );

		// Default to safe option which doesn't actually change data.
		$this->addOption(
			'really',
			'(optional) Also execute actions'
		);

		$this->resets = [];
		$this->tags = [];
	}

	public function execute() {
		$dryrun = !$this->hasOption( 'really' );

		if ( $dryrun ) {
			$this->output( "DRY-RUN mode: actions are NOT executed\n" );
		} else {
			$this->output( "EXECUTE mode: actions ARE executed\n" );
		}

		$db = ContentTranslation\Database::getConnection( DB_PRIMARY );
		$translations = $this->getRelevantTranslations( $db );

		foreach ( $translations as $row ) {
			$name = sprintf(
				"%-35s\t[%s]\t->\t%-35s\t[%s]\t",
				$row->translation_source_title,
				$row->translation_source_language,
				$row->translation_target_title,
				$row->translation_target_language
			);

			$this->output( "$name ({$row->translation_status})\n" );
			$this->checkTargetUrl( $row );
		}

		$this->changeStatus( $this->resets, $dryrun );
		$this->addTags( $this->tags, $dryrun );
	}

	protected function changeStatus( $resets, $dry ) {
		$count = count( $resets );
		if ( !$count ) {
			$this->output( "No changes to do to the central database\n" );

			return;
		}

		if ( $dry ) {
			$this->output( "$count rows would be updated to set target_url to null\n" );

			return;
		}

		$this->output( "$count rows ARE updated to set target_url to null\n" );
		$db = ContentTranslation\Database::getConnection( DB_PRIMARY );
		$db->update(
			'cx_translations',
			[ 'translation_target_url' => null ],
			[ 'translation_id' => $resets ],
			__METHOD__
		);
	}

	protected function addTags( $items, $dry ) {
		$count = count( $items );
		if ( !$count ) {
			$this->output( "No revisions to tag\n" );

			return;
		}

		if ( $dry ) {
			$this->output( "$count revisions would be tagged\n" );

			return;
		}

		$this->output( "$count rows are tagged\n" );

		foreach ( $items as $item ) {
			list( $row, $revId ) = $item;
			ChangeTags::addTags( 'contenttranslation', null, $revId, null );
		}
	}

	protected function getRelevantTranslations( $db ) {
		$fields = '*';
		$conds = [];

		if ( $GLOBALS['wgContentTranslationTranslateInTarget'] ) {
			$conds['translation_target_language'] = $GLOBALS['wgLanguageCode'];
		}

		$res = $db->select( 'cx_translations', $fields, $conds, __METHOD__ );

		return $res;
	}

	protected function checkTargetUrl( $row ) {
		if ( $row->translation_status === 'deleted' ) {
			return;
		}

		$url = $row->translation_target_url;
		if ( trim( $url ) === '' ) {
			return;
		}

		// ALERT: assumes certain URL pattern
		$cutoff = strpos( $url, '/wiki/' ) + 6;
		$name = rawurldecode( substr( $url, $cutoff ) );

		$title = Title::newFromText( $name );
		if ( !$title ) {
			if ( $row->translation_status === 'published' ) {
				$this->output( "\\- E10 Translation published, but target is not valid title :(\n" );
			} else {
				$this->output( "\\- E11 Invalid title, page cannot exist\n" );
				$this->resets[] = $row->translation_id;
			}

			return;
		}

		if ( $title->exists() ) {
			if ( $this->hasCxTag( $title, $row ) ) {
				if ( $row->translation_status === 'draft' ) {
					$this->output( "\\- E20 Page exists but status is draft\n" );
				} else {
					// status=published and page created with CX, the ideal case
				}
			} elseif ( $title->isRedirect() ) {
				$this->output( "\\- E22 Page is a redirect\n" );
			} else {
				$centralIdLookup = MediaWikiServices::getInstance()
					->getCentralIdLookupFactory()
					->getLookup();
				$userName = $centralIdLookup->nameFromCentralId(
					$row->translation_started_by,
					CentralIdLookup::AUDIENCE_RAW
				);
				if ( $userName === null ) {
					$userId = $row->translation_started_by;
					$this->output( "\\- E26 No central id found for #$userId.\n" );
					return;
				}
				$revId = $this->findRevisionToTag(
					$title,
					$userName,
					$row->translation_last_updated_timestamp
				);

				if ( $revId !== false ) {
					$this->output( "\\- E25 Page exists but no tag. Can tag rev $revId by $userName.\n" );
					$this->tags[] = [ $row, $revId ];
				} else {
					$this->output( "\\- E24 Page exists but no tag.\n" );
				}
			}

			return;
		}

		$dbr = wfGetDB( DB_REPLICA );
		$conds = [];
		# Assuming timestamps are in the correct format already
		$conds[] = 'log_timestamp > ' . $dbr->addQuotes( $row->translation_start_timestamp );
		$conds['log_namespace'] = $title->getNamespace();
		$conds['log_title'] = $title->getDBkey();

		$field = $dbr->selectField( 'logging', 'log_type', $conds, __METHOD__ );
		if ( $field ) {
			$this->output( "\\- E30 Page doesn't exist but has log entry: $field\n" );
			return;
		}

		if ( $row->translation_status === 'published' ) {
			$this->output( "\\- E40 Translation published, but no sign of target page :(\n" );
		} else {
			$this->output( "\\- E41 Page doesn't exist and never had log entry\n" );
			$this->resets[] = $row->translation_id;
		}
	}

	protected function hasCxTag( Title $title, $row ) {
		$dbr = wfGetDB( DB_REPLICA );
		$conds = [];
		# Apparently translation_start_timestamp has been incorrecly updated on changes in the past
		# $conds[] = 'rev_timestamp > ' . $dbr->addQuotes( $row->translation_start_timestamp );
		$conds['rev_page'] = $title->getArticleID();
		$conds[] = 'rev_id = ct_rev_id';
		$changeTagDefStore = MediaWikiServices::getInstance()->getChangeTagDefStore();
		try {
			$conds['ct_tag_id'] = $changeTagDefStore->getId( 'contenttranslation' );
		} catch ( NameTableAccessException $exception ) {
			// It can't find any translation, the result should be null
			$conds[] = false;
		}
		$var = 'ct_tag_id';

		$field = $dbr->selectField( [ 'revision', 'change_tag' ], $var, $conds, __METHOD__ );
		return !empty( $field );
	}

	protected function findRevisionToTag( Title $title, $name, $timestamp ) {
		$dbr = wfGetDB( DB_REPLICA );

		// Allow one minute slack
		$ts = wfTimestamp( TS_UNIX, $timestamp ) + 60;

		$actorWhere = ActorMigration::newMigration()
			->getWhere( $dbr, 'rev_user', User::newFromName( $name, false ) );

		$tables = [ 'revision' ] + $actorWhere['tables'];

		$conds = [];
		$conds[] = 'rev_timestamp < ' . $dbr->addQuotes( $dbr->timestamp( $ts ) );
		$conds['rev_page'] = $title->getArticleID();
		$conds[] = $actorWhere['conds'];

		$joins = $actorWhere['joins'];

		// Take the oldest timestamp by the author
		$options = [
			'ORDER BY' => 'rev_timestamp ASC'
		];

		$revId = $dbr->selectField( $tables, 'rev_id', $conds, __METHOD__, $options, $joins );
		return $revId;
	}
}

$maintClass = CxFixStats::class;
require_once RUN_MAINTENANCE_IF_MAIN;
