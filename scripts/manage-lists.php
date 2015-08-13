<?php
/**
 *
 * @file
 * @author Niklas Laxström
 * @license GPL-2.0+
 */

// Standard boilerplate to define $IP
if ( getenv( 'MW_INSTALL_PATH' ) !== false ) {
	$IP = getenv( 'MW_INSTALL_PATH' );
} else {
	$dir = __DIR__;
	$IP = "$dir/../../..";
}
require_once "$IP/maintenance/Maintenance.php";

use ContentTranslation\SiteMapper;
use ContentTranslation\Suggestion;
use ContentTranslation\SuggestionList;
use ContentTranslation\SuggestionListManager;

class CXManageLists extends Maintenance {
	public function __construct() {
		parent::__construct();
		$this->mDescription = 'Script to import suggestion list';

		// Default to safe option which doesn't actually change data.
		$this->addOption(
			'really',
			'(optional) Also execute actions'
		);
		$this->addOption(
			'source',
			'Source language (real language, not the domain)',
			true,
			true
		);
		$this->addOption(
			'target',
			'Target language (real language, not the domain)',
			true,
			true
		);

		$this->addOption(
			'category',
			'Use the pages from this category, but not in present in target language corresponding'
				. ' to that category. Example: Featured_articles',
			true,
			true
		);
	}

	public function execute() {
		$this->dryrun = !$this->hasOption( 'really' );
		$sourceDomain = SiteMapper::getDomainCode( $this->getOption( 'source' ) );
		$targetDomain = SiteMapper::getDomainCode( $this->getOption( 'target' ) );
		$category = $this->getOption( 'category' );

		if ( $this->dryrun ) {
			$this->output( "DRY-RUN mode: actions are NOT executed\n" );
		} else {
			$this->output( "EXECUTE mode: actions ARE executed\n" );
		}

		$apiUrl = "https://$sourceDomain.wikipedia.org/w/api.php?";
		$pages = $this->getUntranslatedPages( $apiUrl, $category, $targetDomain );

		$count = count( $pages );

		if ( !$this->dryrun ) {
			$this->createFeaturedSuggestions( $pages );
			$this->output( "$count pages added to the list successfully.\n" );
		} else {
			$this->output( "Found $count pages:\n" );

			foreach ( $pages as $page ) {
				$this->output( "$page\n" );
			}

			$this->output( "Use --really to insert these pages.\n" );
		}
	}

	protected function getUntranslatedPages( $apiUrl, $category, $targetDomain ) {
		$this->output( "Fetching pages from $category not present in $targetDomain ..." );

		$pages = array();

		$params = array(
			'action' => 'query',
			'format' => 'json',
			'generator' => 'categorymembers',
			'gcmtitle' => "Category:$category",
			'gcmnamespace' => 0,
			'gcmlimit' => 500,
			'gcmsort' => 'timestamp',
			'prop' => 'langlinks',
			'lllang' => $targetDomain,
			'lllimit' => 500,
			'continue' => '',
		);

		while ( true ) {
			$url = $apiUrl . http_build_query( $params );
			$json = Http::get( $url );
			$data = FormatJson::decode( $json, true );

			if ( !isset( $data['query'] ) ) {
				$this->output( "\t[FAIL]\n" );
				return array();
			}

			$pagesInCategory = $data['query']['pages'];

			foreach ( $pagesInCategory as $pageId => $page ) {
				if ( !isset( $page['langlinks'] ) ) {
					$pages[] = $page['title'];
				}
			}

			if ( !isset( $data['continue'] ) || count( $pages ) > 5000 ) {
				break;
			} else {
				unset( $param['llcontinue'] );
				unset( $param['gcmcontinue'] );
				$params += $data['continue'];
			}
		}

		$this->output( "\t[OK]\n" );

		return $pages;
	}

	protected function createFeaturedSuggestions( $pages ) {
		$sourceLanguage = $this->getOption( 'source' );
		$targetLanguage = $this->getOption( 'target' );

		$manager = new SuggestionListManager();
		$list = new SuggestionList( array(
			'type' => SuggestionList::TYPE_FEATURED,
			'name' => 'featured',
			'public' => true,
		) );

		$listId = $manager->insertList( $list );
		$suggestion = array();

		foreach ( $pages as $page ) {
			$suggestions[] = new Suggestion( array(
				'listId' => $listId,
				'title' => $page,
				'sourceLanguage' => $sourceLanguage,
				'targetLanguage' => $targetLanguage,
			) );
		}

		$manager->addSuggestions( $suggestions );
	}
}

$maintClass = 'CXManageLists';
require_once RUN_MAINTENANCE_IF_MAIN;
