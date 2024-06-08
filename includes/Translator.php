<?php

namespace ContentTranslation;

use ContentTranslation\Service\UserService;
use MediaWiki\MediaWikiServices;
use MediaWiki\User\User;

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
		/** @var LoadBalancer $lb */
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbw = $lb->getConnection( DB_PRIMARY );
		$dbw->newReplaceQueryBuilder()
			->replaceInto( 'cx_translators' )
			->uniqueIndexFields( [ 'translator_user_id', 'translator_translation_id' ] )
			->row( [
				'translator_user_id' => $this->getGlobalUserId(),
				'translator_translation_id' => $translationId,
			] )
			->caller( __METHOD__ )
			->execute();
	}

	public function getLanguages( $type ) {
		// Note: there is no index on translation_last_updated_timestamp
		/** @var LoadBalancer $lb */
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
		/** @var LoadBalancer $lb */
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );

		$count = $dbr->newSelectQueryBuilder()
			->select( 'COUNT(*)' )
			->from( 'cx_translators' )
			->join( 'cx_translations', null, 'translator_translation_id = translation_id' )
			->where( [
				'translator_user_id' => $this->getGlobalUserId(),
				// And it is published
				Translation::getPublishedCondition( $dbr )
			] )
			->caller( __METHOD__ )
			->fetchField();

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

		/** @var LoadBalancer $lb */
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );

		$rows = $dbr->newSelectQueryBuilder()
			->select( [
				'language' => $directionField[$direction],
				'translators' => 'COUNT(DISTINCT translation_started_by)',
			] )
			->from( 'cx_translations' )
			->where( Translation::getPublishedCondition( $dbr ) )
			->groupBy( $directionField[$direction] )
			->caller( __METHOD__ )
			->fetchResultSet();

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
		/** @var LoadBalancer $lb */
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );

		return $dbr->newSelectQueryBuilder()
			->select( 'COUNT(DISTINCT translation_started_by)' )
			->from( 'cx_translations' )
			->where( Translation::getPublishedCondition( $dbr ) )
			->caller( __METHOD__ )
			->fetchField();
	}
}
