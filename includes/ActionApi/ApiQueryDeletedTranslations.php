<?php
/**
 * A query module to get total number of deleted translations
 * published by the user, during some period.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiQuery;
use ApiQueryBase;
use MediaWiki\MediaWikiServices;
use MediaWiki\Storage\NameTableAccessException;
use Wikimedia\ParamValidator\ParamValidator;

class ApiQueryDeletedTranslations extends ApiQueryBase {
	public function __construct( ApiQuery $query, $moduleName ) {
		parent::__construct( $query, $moduleName, 'dt' );
	}

	public function execute() {
		$user = $this->getUser();
		if ( !$user->isRegistered() ) {
			$this->dieWithError( 'apierror-mustbeloggedin-generic', 'mustbeloggedin' );
		}

		$params = $this->extractRequestParams();
		$after = $params[ 'after' ];

		$this->addTables( [ 'change_tag', 'archive' ] );
		$this->addFields( [ 'deleted_count' => 'COUNT(*)' ] );
		$this->addJoinConds( [ 'change_tag' => [ 'LEFT JOIN', 'ar_rev_id = ct_rev_id' ] ] );

		$changeTagDefStore = MediaWikiServices::getInstance()->getChangeTagDefStore();
		try {
			$this->addWhereFld( 'ct_tag_id', $changeTagDefStore->getId( 'contenttranslation' ) );
		} catch ( NameTableAccessException $exception ) {
			// Return zero deleted articles if we cannot find contenttranslation tag definition ID
			$this->getResult()->addValue( [ 'query', $this->getModuleName() ], 'deleted', 0 );
			return;
		}

		$this->addWhereFld(
			'ar_actor',
			$this->getDB()->newSelectQueryBuilder()
				->select( 'actor_id' )
				->from( 'actor' )
				->where( [ 'actor_user' => $user->getId() ] )
				->caller( __METHOD__ )
				->fetchField()
		);
		$this->addWhereFld( 'ar_namespace', $params[ 'namespace' ] ?? NS_MAIN );
		if ( $after !== null ) {
			$this->addTimestampWhereRange( 'ar_timestamp', 'newer', $after, null, false );
		}

		/*
		 * Generated SQL query example
		 *
		 * SELECT COUNT(*) AS deleted_count FROM `archive`
		 * LEFT JOIN `change_tag` ON ((ar_rev_id = ct_rev_id))
		 * WHERE ct_tag_id = '2' AND ar_actor = '217' AND
		 * ar_namespace = '0' AND (ar_timestamp>='20190407162444')
		 */
		$row = $this->select( __METHOD__ )->current();

		$this->getResult()->addValue(
			[ 'query', $this->getModuleName() ],
			'deleted',
			(int)$row->deleted_count
		);
	}

	public function getAllowedParams() {
		return [
			'after' => [
				ParamValidator::PARAM_TYPE => 'timestamp',
			],
			'namespace' => [
				ParamValidator::PARAM_TYPE => 'namespace',
			],
		];
	}

	protected function getExamplesMessages() {
		$url = 'action=query&meta=cxdeletedtranslations' .
			'&dtafter=2019-04-07T16%3A24%3A44.000Z&dtnamespace=0';

		return [
			$url => 'apihelp-query+cxdeletedtranslations-example-1',
		];
	}

	public function isInternal() {
		return true;
	}
}
