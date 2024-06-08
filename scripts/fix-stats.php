<?php
/**
 * @author Niklas Laxström
 * @license GPL-2.0-or-later
 */

use ContentTranslation\LoadBalancer;
use MediaWiki\MediaWikiServices;
use MediaWiki\Storage\NameTableAccessException;
use MediaWiki\Title\Title;
use MediaWiki\User\ActorMigration;
use MediaWiki\User\CentralId\CentralIdLookup;
use MediaWiki\User\User;

// Standard boilerplate to define $IP
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

	/** @var LoadBalancer */
	private $lb;

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
		$this->lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
	}

	public function execute() {
		$dryrun = !$this->hasOption( 'really' );

		if ( $dryrun ) {
			$this->output( "DRY-RUN mode: actions are NOT executed\n" );
		} else {
			$this->output( "EXECUTE mode: actions ARE executed\n" );
		}

		$dbr = $this->lb->getConnection( DB_REPLICA );
		$translations = $this->getRelevantTranslations( $dbr );

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

		$dbw = $this->lb->getConnection( DB_PRIMARY );
		$dbw->newUpdateQueryBuilder()
			->update( 'cx_translations' )
			->set( [ 'translation_target_url' => null ] )
			->where( [ 'translation_id' => $resets ] )
			->caller( __METHOD__ )
			->execute();
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
			[ $row, $revId ] = $item;
			ChangeTags::addTags( 'contenttranslation', null, $revId, null );
		}
	}

	protected function getRelevantTranslations( $db ) {
		$conds = [];

		if ( $GLOBALS['wgContentTranslationTranslateInTarget'] ) {
			$conds['translation_target_language'] = $GLOBALS['wgLanguageCode'];
		}

		return $db->newSelectQueryBuilder()
			->select( '*' )
			->from( 'cx_translations' )
			->where( $conds )
			->caller( __METHOD__ )
			->fetchResultSet();
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

		$mainLb = MediaWikiServices::getInstance()->getDBLoadBalancer();
		$dbr = $mainLb->getConnection( DB_REPLICA );
		$conds = [];
		# Assuming timestamps are in the correct format already
		$conds[] = $dbr->expr( 'log_timestamp', '>', $row->translation_start_timestamp );
		$conds['log_namespace'] = $title->getNamespace();
		$conds['log_title'] = $title->getDBkey();

		$field = $dbr->newSelectQueryBuilder()
			->select( 'log_type' )
			->from( 'logging' )
			->where( $conds )
			->caller( __METHOD__ )
			->fetchField();
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
		$mainLb = MediaWikiServices::getInstance()->getDBLoadBalancer();
		$dbr = $mainLb->getConnection( DB_REPLICA );
		$conds = [];
		# Apparently translation_start_timestamp has been incorrecly updated on changes in the past
		# $conds[] = $dbr->expr( 'rev_timestamp', '>', $row->translation_start_timestamp );
		$conds['rev_page'] = $title->getArticleID();
		$changeTagDefStore = MediaWikiServices::getInstance()->getChangeTagDefStore();
		try {
			$conds['ct_tag_id'] = $changeTagDefStore->getId( 'contenttranslation' );
		} catch ( NameTableAccessException $exception ) {
			// It can't find any translation, the result should be null
			$conds[] = '1=0';
		}

		return (bool)$dbr->newSelectQueryBuilder()
			->select( 'ct_tag_id' )
			->from( 'revision' )
			->join( 'change_tag', null, 'rev_id = ct_rev_id' )
			->where( $conds )
			->caller( __METHOD__ )
			->fetchField();
	}

	protected function findRevisionToTag( Title $title, $name, $timestamp ) {
		$mainLb = MediaWikiServices::getInstance()->getDBLoadBalancer();
		$dbr = $mainLb->getConnection( DB_REPLICA );
		// Allow one minute slack
		$ts = (int)wfTimestamp( TS_UNIX, $timestamp ) + 60;

		$actorWhere = ActorMigration::newMigration()
			->getWhere( $dbr, 'rev_user', User::newFromName( $name, false ) );

		$conds = [];
		$conds[] = $dbr->expr( 'rev_timestamp', '<', $dbr->timestamp( $ts ) );
		$conds['rev_page'] = $title->getArticleID();
		$conds[] = $actorWhere['conds'];

		return $dbr->newSelectQueryBuilder()
			->select( 'rev_id' )
			->from( 'revision' )
			->tables( $actorWhere['tables'] )
			->where( $conds )
			// Take the oldest timestamp by the author
			->orderBy( 'rev_timestamp' )
			->joinConds( $actorWhere['joins'] )
			->caller( __METHOD__ )
			->fetchField();
	}
}

$maintClass = CxFixStats::class;
require_once RUN_MAINTENANCE_IF_MAIN;
