<?php

namespace ContentTranslation;

use MediaWiki\MediaWikiServices;
use Wikimedia\Rdbms\IConnectionProvider;
use Wikimedia\Rdbms\IExpression;
use Wikimedia\Rdbms\IReadableDatabase;

class Translation {
	private bool $isNew = false;

	/** @var array */
	public $translation;

	/**
	 * @param array $translation
	 */
	public function __construct( $translation ) {
		$this->translation = $translation;
	}

	/**
	 * @return bool Whether the last CRUD operation on this translation was "create"
	 */
	public function isNew(): bool {
		return $this->isNew;
	}

	public function setIsNew( bool $isNew ): void {
		$this->isNew = $isNew;
	}

	/**
	 * Get time-wise cumulative number of translations for given
	 * language pairs, with given interval.
	 *
	 * @param string|null $source Source language code
	 * @param string|null $target Target language code
	 * @param string $status Status of translation. Either 'published' or 'draft'
	 * @param string $interval 'weekly' or 'monthly' trend
	 * @param int|null $translatorId
	 * @return array
	 */
	public static function getTrendByStatus(
		$source, $target, $status, $interval, $translatorId
	) {
		/** @var IConnectionProvider $connectionProvider */
		$connectionProvider = MediaWikiServices::getInstance()->getService( 'ContentTranslation.ConnectionProvider' );
		$dbr = $connectionProvider->getReplicaDatabase();

		$conditions = [];
		if ( $status === 'published' ) {
			$conditions[] = self::getPublishedCondition( $dbr );
		} else {
			$conditions[] = $dbr->andExpr( [
				'translation_status' => 'draft',
				'translation_target_url' => null,
			] );
		}

		if ( $source !== null ) {
			$conditions['translation_source_language'] = $source;
		}
		if ( $target !== null ) {
			$conditions['translation_target_language'] = $target;
		}
		if ( $translatorId !== null ) {
			$conditions['translation_last_update_by'] = $translatorId;
		}
		$groupBy = [];
		if ( $interval === 'week' ) {
			$groupBy = [
				'YEARWEEK(translation_last_updated_timestamp, 3)',
			];
		} elseif ( $interval === 'month' ) {
			$groupBy = [
				'YEAR(translation_last_updated_timestamp)',
				'MONTH(translation_last_updated_timestamp)',
			];
		}

		$rows = $dbr->newSelectQueryBuilder()
			->select( [
				'date' => 'MAX(translation_last_updated_timestamp)',
				'count' => 'COUNT(translation_id)'
			] )
			->from( 'cx_translations' )
			->where( $conditions )
			->groupBy( $groupBy )
			->caller( __METHOD__ )
			->fetchResultSet();

		$count = 0;
		$result = [];
		$dm = new DateManipulator( $interval );
		foreach ( $rows as $row ) {
			$count += (int)$row->count;
			$time = $dm->getIntervalIdentifier( $row->date )->format( 'U' );
			$result[$time] = [
				'count' => $count,
				'delta' => (int)$row->count,
			];
		}

		return $result;
	}

	/**
	 * @return int
	 */
	public function getTranslationId() {
		return $this->translation['id'];
	}

	public function getSourceTitle(): string {
		return $this->translation['sourceTitle'];
	}

	public function getSourceLanguage(): string {
		return $this->translation['sourceLanguage'];
	}

	public function getTargetLanguage(): string {
		return $this->translation['targetLanguage'];
	}

	public function getStatus(): string {
		return $this->translation['translation_status'];
	}

	/**
	 * Return the underlying data fields.
	 *
	 * @return array
	 */
	public function getData() {
		return $this->translation;
	}

	/**
	 * @return IExpression
	 */
	public static function getPublishedCondition( IReadableDatabase $db ) {
		return $db->expr( 'translation_status', '=', 'published' )
			->or( 'translation_target_url', '!=', null );
	}

	/**
	 * Get all published translation records.
	 *
	 * @param string $from Source language code
	 * @param string $to Target language code
	 * @param int $limit Number of records to fetch atmost
	 * @param int $offset Offset from which at most $limit records to fetch
	 * @return array
	 */
	public static function getAllPublishedTranslations( $from, $to, $limit, $offset ) {
		/** @var IConnectionProvider $connectionProvider */
		$connectionProvider = MediaWikiServices::getInstance()->getService( 'ContentTranslation.ConnectionProvider' );
		$dbr = $connectionProvider->getReplicaDatabase();
		$conditions = [];
		$conditions[] = self::getPublishedCondition( $dbr );

		if ( $from ) {
			$conditions['translation_source_language'] = $from;
		}

		if ( $to ) {
			$conditions['translation_target_language'] = $to;
		}

		$queryBuilder = $dbr->newSelectQueryBuilder()
			->select( [
				'translationId' => 'translation_id',
				'sourceTitle' => 'translation_source_title',
				'targetTitle' => 'translation_target_title',
				'sourceLanguage' => 'translation_source_language',
				'sourceRevisionId' => 'translation_source_revision_id',
				'targetRevisionId' => 'translation_target_revision_id',
				'targetLanguage' => 'translation_target_language',
				'sourceURL' => 'translation_source_url',
				'targetURL' => 'translation_target_url',
				'publishedDate' => 'translation_last_updated_timestamp',
				'stats' => 'translation_progress',
			] )
			->from( 'cx_translations' )
			->where( $conditions )
			->limit( $limit )
			->caller( __METHOD__ );

		if ( $offset ) {
			$queryBuilder->offset( $offset );
		}

		$rows = $queryBuilder->fetchResultSet();

		$result = [];

		foreach ( $rows as $row ) {
			$translation = (array)$row;
			$translation['stats'] = json_decode( $translation['stats'] );
			$result[] = $translation;
		}

		return $result;
	}

	/**
	 * @param \stdClass $row
	 * @return Translation
	 */
	public static function newFromRow( $row ) {
		$fields = [
			'id' => (int)$row->translation_id,
			'sourceTitle' => $row->translation_source_title,
			'targetTitle' => $row->translation_target_title,
			'sourceLanguage' => $row->translation_source_language,
			'targetLanguage' => $row->translation_target_language,
			'sourceRevisionId' => $row->translation_source_revision_id,
			'targetRevisionId' => $row->translation_target_revision_id,
			'sourceURL' => $row->translation_source_url,
			'targetURL' => $row->translation_target_url,
			'status' => $row->translation_status,
			'startTimestamp' => $row->translation_start_timestamp,
			'lastUpdateTimestamp' => $row->translation_last_updated_timestamp,
			'progress' => $row->translation_progress,
			'startedTranslator' => $row->translation_started_by,
			'lastUpdatedTranslator' => $row->translation_last_update_by,
			'cxVersion' => 1,
		];

		// BC code to gracefully handle lack of schema change
		if ( isset( $row->translation_cx_version ) ) {
			$fields['cxVersion'] = (int)$row->translation_cx_version;
		}

		return new Translation( $fields );
	}
}
