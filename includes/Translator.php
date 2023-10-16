<?php

namespace ContentTranslation;

use ContentTranslation\Service\UserService;
use MediaWiki\MediaWikiServices;
use User;

class Translator {

	private User $user;

	public function __construct( User $user ) {
		$this->user = $user;
	}

	private function getGlobalUserId() {
		/** @var UserService $userService */
		$userService = MediaWikiServices::getInstance()->getService( 'ContentTranslation.UserService' );

		return $userService->getGlobalUserId( $this->user );
	}

	public function getUser(): User {
		return $this->user;
	}

	public function addTranslation( $translationId ) {
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbw = $lb->getConnection( DB_PRIMARY );
		$dbw->replace(
			'cx_translators',
			[ [ 'translator_user_id', 'translator_translation_id' ] ],
			[
				'translator_user_id' => $this->getGlobalUserId(),
				'translator_translation_id' => $translationId,
			],
			__METHOD__
		);
	}

	public function getLanguages( $type ) {
		// Note: there is no index on translation_last_updated_timestamp
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );

		$baseQuery = $dbr->newSelectQueryBuilder()
			// ->select() below
			->from( 'cx_translations' )
			->join( 'cx_translators', null, 'translator_translation_id = translation_id' )
			->where( [ 'translator_user_id' => $this->getGlobalUserId() ] );
		if ( $type !== null ) {
			$baseQuery->andWhere( [ 'translation_status' => $type ] );
		}
		$unionQueryBuilder = $dbr->newUnionQueryBuilder();

		$sourceQuery = clone $baseQuery;
		$sourceQuery->select( [ 'code' => 'translation_source_language' ] );
		$unionQueryBuilder->add( $sourceQuery );
		$targetQuery = clone $baseQuery;
		$targetQuery->select( [ 'code' => 'translation_target_language' ] );
		$unionQueryBuilder->add( $targetQuery );

		$res = $unionQueryBuilder->caller( __METHOD__ )->fetchResultSet();

		$result = [];
		foreach ( $res as $row ) {
			$result[] = $row->code;
		}

		return $result;
	}

	/**
	 * Get the number of published translation by current translator.
	 * @return int
	 */
	public function getTranslationsCount() {
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );

		$count = $dbr->selectField(
			[ 'cx_translators', 'cx_translations' ],
			'count(*)',
			[
				'translator_user_id' => $this->getGlobalUserId(),
				'translator_translation_id = translation_id',
				// And it is published
				Translation::getPublishedCondition( $dbr )
			],
			__METHOD__
		);

		return intval( $count );
	}

	/**
	 * Get the stats for all translator counts.
	 * @return array
	 */
	public static function getStats() {
		return [
			'from' => self::getTranslatorsCount( 'source' ),
			'to' => self::getTranslatorsCount( 'target' ),
			'total' => self::getTotalTranslatorsCount(),
		];
	}

	/**
	 * Get the stats for translator count to or from a language.
	 * @param string $direction source or target
	 * @return int[] Number of translators indexed by language code
	 */
	public static function getTranslatorsCount( $direction ) {
		$directionField = [
			'source' => 'translation_source_language',
			'target' => 'translation_target_language',
		];

		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );

		$table = 'cx_translations';
		$fields = [
			'language' => $directionField[$direction],
			'translators' => 'COUNT(DISTINCT translation_started_by)',
		];
		$conds = Translation::getPublishedCondition( $dbr );
		$options = [
			'GROUP BY' => $directionField[$direction],
		];

		$rows = $dbr->select( $table, $fields, $conds, __METHOD__, $options );

		$result = [];

		foreach ( $rows as $row ) {
			$result[$row->language] = (int)$row->translators;
		}

		return $result;
	}

	/**
	 * Get the total count of users who published a translation.
	 * @return int Number of translators
	 */
	public static function getTotalTranslatorsCount() {
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );

		$table = 'cx_translations';
		$field = 'COUNT(DISTINCT translation_started_by)';
		$conds = Translation::getPublishedCondition( $dbr );

		return $dbr->selectField( $table, $field, $conds, __METHOD__ );
	}
}
