<?php

namespace ContentTranslation\Store;

use ContentTranslation\LoadBalancer;
use ContentTranslation\Translation;
use Wikimedia\Rdbms\Platform\ISQLPlatform;
use Wikimedia\Rdbms\SelectQueryBuilder;

class TranslationStore {

	public const TRANSLATION_TABLE_NAME = 'cx_translations';
	public const TRANSLATOR_TABLE_NAME = 'cx_translators';

	/** @var LoadBalancer */
	private $lb;

	public function __construct( LoadBalancer $lb ) {
		$this->lb = $lb;
	}

	public function unlinkTranslationFromTranslator( int $translationId ) {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$dbw->delete(
			self::TRANSLATOR_TABLE_NAME,
			[ 'translator_translation_id' => $translationId ],
			__METHOD__
		);
	}

	public function deleteTranslation( int $translationId ) {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$dbw->update(
			self::TRANSLATION_TABLE_NAME,
			[ 'translation_status' => 'deleted' ],
			[ 'translation_id' => $translationId ],
			__METHOD__
		);
	}

	/**
	 * Find a published translation for a given target title and language
	 *
	 * @param string $publishedTitle
	 * @param string $targetLanguage
	 * @return Translation|null
	 */
	public function findByPublishedTitle( string $publishedTitle, string $targetLanguage ): ?Translation {
		$dbr = $this->lb->getConnection( DB_REPLICA );

		$isPublishedCondition = $dbr->makeList(
			[
				'translation_status' => 'published',
				'translation_target_url IS NOT NULL',
			],
			LIST_OR
		);

		// TODO: Add index to improve performance for this read query
		$row = $dbr->newSelectQueryBuilder()
			->select( ISQLPlatform::ALL_ROWS )
			->from( self::TRANSLATION_TABLE_NAME )
			->where( [
				'translation_target_language' => $targetLanguage,
				'translation_target_title' => $publishedTitle,
				$isPublishedCondition
			] )
			->caller( __METHOD__ )
			->fetchRow();

		return $row ? Translation::newFromRow( $row ) : null;
	}

	/**
	 * @param int $userId
	 * @param int $limit How many results to return
	 * @param string|null $offset Offset condition (timestamp)
	 * @param string|null $type
	 * @param string|null $from
	 * @param string|null $to
	 * @return Translation[]
	 */
	public function getAllTranslationsByUserId(
		int $userId,
		int $limit,
		?string $offset = null,
		?string $type = null,
		?string $from = null,
		?string $to = null
	): array {
		// Note: there is no index on translation_last_updated_timestamp
		$dbr = $this->lb->getConnection( DB_REPLICA );

		$onClauseConditions = [
			'translator_translation_id = translation_id',
			'translator_user_id' => $userId
		];

		$whereConditions = [];
		if ( $type !== null ) {
			$whereConditions['translation_status'] = $type;
		}
		if ( $from !== null ) {
			$whereConditions['translation_source_language'] = $from;
		}
		if ( $to !== null ) {
			$whereConditions['translation_target_language'] = $to;
		}
		if ( $offset !== null ) {
			$ts = $dbr->addQuotes( $dbr->timestamp( $offset ) );
			$whereConditions[] = "translation_last_updated_timestamp < $ts";
		}

		$resultSet = $dbr->newSelectQueryBuilder()
			->select( ISQLPlatform::ALL_ROWS )
			->from( self::TRANSLATION_TABLE_NAME )
			->join( self::TRANSLATOR_TABLE_NAME, null, $onClauseConditions )
			->where( $whereConditions )
			->orderBy( 'translation_last_updated_timestamp', SelectQueryBuilder::SORT_DESC )
			->limit( $limit )
			->caller( __METHOD__ )
			->fetchResultSet();

		$result = [];
		foreach ( $resultSet as $row ) {
			$result[] = Translation::newFromRow( $row );
		}

		return $result;
	}

}
