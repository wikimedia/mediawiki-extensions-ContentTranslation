<?php
/**
 * @author Niklas Laxström
 * @license GPL-2.0-or-later
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
use MediaWiki\MediaWikiServices;

class CXManageLists extends Maintenance {
	public function __construct() {
		parent::__construct();

		$this->requireExtension( 'ContentTranslation' );
		$this->addDescription( 'Script to import suggestion list' );

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
		$this->addOption(
			'type',
			'Type of the list. Allowed values: (a) featured (b) category',
			true,
			true
		);
		$this->addOption(
			'name',
			'Display name of the suggestion list (plain text)',
			false,
			true
		);
	}

	public function execute() {
		$dryrun = !$this->hasOption( 'really' );
		$sourceDomain = SiteMapper::getDomainCode( $this->getOption( 'source' ) );
		$targetDomain = SiteMapper::getDomainCode( $this->getOption( 'target' ) );
		$category = $this->getOption( 'category' );
		$type = $this->getOption( 'type' );

		if ( $dryrun ) {
			$this->output( "DRY-RUN mode: actions are NOT executed\n" );
		} else {
			$this->output( "EXECUTE mode: actions ARE executed\n" );
		}

		$apiUrl = "https://$sourceDomain.wikipedia.org/w/api.php?";
		$pages = $this->getUntranslatedPages( $apiUrl, $category, $targetDomain );

		$count = count( $pages );

		if ( !$dryrun ) {
			if ( $type === 'featured' ) {
				$this->createFeaturedSuggestions( $pages );
			} elseif ( $type === 'category' ) {
				$this->createCategoryList( $category, $pages );
			}
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

		$pages = [];

		$params = [
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
		];

		$httpRequestFactory = MediaWikiServices::getInstance()->getHttpRequestFactory();
		while ( true ) {
			$url = $apiUrl . http_build_query( $params );
			$json = $httpRequestFactory->get( $url, [], __METHOD__ );
			$data = FormatJson::decode( $json, true );

			if ( !isset( $data['query'] ) ) {
				$this->output( "\t[FAIL]\n" );
				return [];
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
				unset( $params['llcontinue'] );
				unset( $params['gcmcontinue'] );
				$params += $data['continue'];
			}
		}

		$this->output( "\t[OK]\n" );

		return $pages;
	}

	protected function createFeaturedSuggestions( $pages ) {
		$featureListName = 'cx-suggestionlist-featured';
		$type = SuggestionList::TYPE_FEATURED;
		$this->createPublicList( $featureListName, $type, $pages );
	}

	protected function createCategoryList( $category, $pages ) {
		$name = $category;
		$type = SuggestionList::TYPE_CATEGORY;
		$this->createPublicList( $name, $type, $pages );
	}

	protected function createPublicList( $name, $type, $pages ) {
		if ( !count( $pages ) ) {
			return;
		}

		$sourceLanguage = $this->getOption( 'source' );
		$targetLanguage = $this->getOption( 'target' );

		$manager = new SuggestionListManager();
		$list = $manager->getListByName( $name );
		$displayName = $name;
		if ( $this->hasOption( 'name' ) ) {
			$displayName = $this->getOption( 'name' );
		}
		if ( $list === null ) {
			$list = new SuggestionList( [
				'type' => $type,
				'name' => $displayName,
				'public' => true,
			] );
			$listId = $manager->insertList( $list );
		} else {
			$listId = $list->getId();
		}
		$suggestions = [];

		foreach ( $pages as $page ) {
			$suggestions[] = new Suggestion( [
				'listId' => $listId,
				'title' => $page,
				'sourceLanguage' => $sourceLanguage,
				'targetLanguage' => $targetLanguage,
			] );
		}

		$manager->addSuggestions( $suggestions );
	}
}

$maintClass = CXManageLists::class;
require_once RUN_MAINTENANCE_IF_MAIN;
