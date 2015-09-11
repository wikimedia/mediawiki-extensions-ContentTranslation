<?php
/**
 * ContentTranslation Translation
 */
namespace ContentTranslation;

class Translation {
	function __construct( $translation ) {
		$this->translation = $translation;
	}

	public function create() {
		$dbw = Database::getConnection( DB_MASTER );

		$values = array(
			'translation_source_title' => $this->translation['sourceTitle'],
			'translation_target_title' => $this->translation['targetTitle'],
			'translation_source_language' => $this->translation['sourceLanguage'],
			'translation_target_language' => $this->translation['targetLanguage'],
			'translation_source_url' => $this->translation['sourceURL'],
			'translation_status' => $this->translation['status'],
			'translation_last_updated_timestamp' => $dbw->timestamp(),
			'translation_progress' => $this->translation['progress'],
			'translation_last_update_by' => $this->translation['lastUpdatedTranslator'],
		);

		$values['translation_start_timestamp'] = $dbw->timestamp();
		$values['translation_started_by'] = $this->translation['startedTranslator'];

		if ( $this->translation['status'] === 'published' ) {
			$values['translation_target_url'] = $this->translation['targetURL'];
		}

		$dbw->insert(
			'cx_translations',
			$values,
			__METHOD__
		);

		$this->translation['id'] = $dbw->insertId();
	}

	public function update() {
		$dbw = Database::getConnection( DB_MASTER );

		$values = array(
			'translation_source_title' => $this->translation['sourceTitle'],
			'translation_target_title' => $this->translation['targetTitle'],
			'translation_source_language' => $this->translation['sourceLanguage'],
			'translation_target_language' => $this->translation['targetLanguage'],
			'translation_source_url' => $this->translation['sourceURL'],
			'translation_status' => $this->translation['status'],
			'translation_last_updated_timestamp' => $dbw->timestamp(),
			'translation_progress' => $this->translation['progress'],
			'translation_last_update_by' => $this->translation['lastUpdatedTranslator'],
		);

		if ( $this->translation['status'] === 'published' ) {
			$values['translation_target_url'] = $this->translation['targetURL'];
		}

		$dbw->update(
			'cx_translations',
			$values,
			array( 'translation_id' => $this->translation['id'] ),
			__METHOD__
		);
	}

	public function save() {
		$existingTranslation = Translation::find(
			$this->translation['sourceLanguage'],
			$this->translation['targetLanguage'],
			$this->translation['sourceTitle']
		);

		if ( $existingTranslation === null ) {
			$this->create();
		} else {
			$this->translation['id'] = $existingTranslation->getTranslationId();
			$this->update();
		}
	}

	/*
	 * @param string $sourceLanguage
	 * @param string $targetLanguage
	 * @param string|string[] $titles
	 * @return Translation|Translation[]|null Translation
	 */
	public static function find( $sourceLanguage, $targetLanguage, $titles ) {
		$dbr = Database::getConnection( DB_SLAVE );

		$values = array(
			'translation_source_language' => $sourceLanguage,
			'translation_target_language' => $targetLanguage,
			'translation_source_title' => $titles
		);

		$rows = $dbr->select(
			'cx_translations',
			'*',
			$values,
			__METHOD__
		);

		$result = array();

		foreach ( $rows as $row ) {
			$result[] = Translation::newFromRow( $row );
		}

		if ( !is_array( $titles ) ) {
			return isset( $result[0] ) ? $result[0]: null;
		}

		return $result;
	}

	public static function delete( $translationId ) {
		$dbw = Database::getConnection( DB_MASTER );

		$dbw->update(
			'cx_translations',
			array( 'translation_status' => 'deleted' ),
			array( 'translation_id' => $translationId ),
			__METHOD__
		);
	}

	/**
	 * Get the stats for all translations in draft or published status.
	 */
	public static function getStats() {
		return array_merge( Translation::getDraftStats(), Translation::getPublishedStats() );
	}

	/**
	 * Get the stats for all translations in draft status and not having
	 * any published URL.
	 * If the translation is with draft status and has a target_url it
	 * was published atleast once.
	 */
	public static function getDraftStats() {
		$dbr = Database::getConnection( DB_SLAVE );

		$rows = $dbr->select(
			'cx_translations',
			array(
				'translation_source_language as sourceLanguage',
				'translation_target_language as targetLanguage',
				'translation_status as status',
				'COUNT(*) AS count',
				'COUNT(DISTINCT translation_started_by) AS translators',
			),
			array(
				'translation_status' => 'draft',
				'translation_target_url IS NULL'
			),
			__METHOD__,
			array(
				'GROUP BY' => array(
					'translation_source_language',
					'translation_target_language',
				),
			)
		);

		$result = array();

		foreach ( $rows as $row ) {
			$result[] = (array) $row;
		}

		return $result;
	}

	/**
	 * Get the stats for all translations in published status or having
	 * a published URL.
	 * If the translation has a target_url it was published atleast once.
	 */
	public static function getPublishedStats() {
		$dbr = Database::getConnection( DB_SLAVE );

		$rows = $dbr->select(
			'cx_translations',
			array(
				'translation_source_language as sourceLanguage',
				'translation_target_language as targetLanguage',
				"'published' as status",
				'COUNT(*) AS count',
				'COUNT(DISTINCT translation_started_by) AS translators',
			),
			$dbr->makeList(
				array(
					'translation_status' => 'published',
					'translation_target_url IS NOT NULL',
				),
				LIST_OR
			),
			__METHOD__,
			array(
				'GROUP BY' => array(
					'translation_source_language',
					'translation_target_language',
				),
			)
		);

		$result = array();
		foreach ( $rows as $row ) {
			$result[] = (array) $row;
		}

		return $result;
	}

	/**
	 * Get time-wise cumulative number of deletions for given
	 * language pairs, with given interval.
	 */
	public static function getDeletionTrend( $interval ) {
		$dbr = wfGetDB( DB_SLAVE );

		$conditions = array(
			'ct_tag' => 'contenttranslation',
			'ar_rev_id = ct_rev_id'
		);

		$options = null;
		if ( $interval === 'week' ) {
			$options = array(
				'GROUP BY' => array(
					'YEARWEEK(ar_timestamp)',
				),
			);
		} elseif ( $interval === 'month' ) {
			$options = array(
				'GROUP BY' => array(
					'YEAR(ar_timestamp), MONTH(ar_timestamp)',
				),
			);
		}

		$rows = $dbr->select(
			array( 'change_tag', 'archive' ),
			array( 'ar_timestamp', 'count(ar_page_id) as count' ),
			$conditions,
			__METHOD__,
			$options
		);

		$count = 0;
		$result = array();
		foreach ( $rows as $row ) {
			$count += (int)$row->count;
			$time = self::getResultTime( $row->ar_timestamp, $interval );
			$result[$time] = array(
				'count' => $count,
				'delta' => (int)$row->count,
			);
		}

		return $result;
	}

	protected static function getResultTime( $timestamp, $interval ) {
		$unix = wfTimestamp( TS_UNIX, $timestamp );
		if ( $interval === 'week' ) {
			$n = 7 - date( 'w', $unix );
			$unix = strtotime( "+$n days", $unix );
			return date( 'Y-m-d', $unix );
		} else {
			return date( 'Y-m', $unix );
		}
	}

	/**
	 * Get time-wise cumulative number of translations for given
	 * language pairs, with given interval.
	 * @param string $source Source language code
	 * @param string $target Target language code
	 * @param string $status Status of translation. Either 'published' or 'draft'
	 * @param string $interval 'weekly' or 'monthly' trend
	 * @return array
	 */
	public static function getTrendByStatus( $source, $target, $status, $interval ) {
		$dbr = Database::getConnection( DB_SLAVE );

		$conditions = array();
		if ( $status === 'published' ) {
			$conditions[] = $dbr->makeList(
				array(
					'translation_status' => 'published',
					'translation_target_url IS NOT NULL',
				),
				LIST_OR
			);
		} else {
			$conditions[] = $dbr->makeList(
				array(
					'translation_status' => 'draft',
					'translation_target_url IS NULL'
				),
				LIST_AND
			);
		}

		if ( $source !== null ) {
			$conditions['translation_source_language'] = $source;
		}
		if ( $target !== null ) {
			$conditions['translation_target_language'] = $target;
		}
		$options = null;
		if ( $interval === 'week' ) {
			$options = array(
				'GROUP BY' => array(
					'YEARWEEK(translation_last_updated_timestamp)',
				),
			);
		} elseif ( $interval === 'month' ) {
			$options = array(
				'GROUP BY' => array(
					'YEAR(translation_last_updated_timestamp), MONTH(translation_last_updated_timestamp)',
				),
			);
		}

		$rows = $dbr->select(
			array( 'cx_translations' ),
			array( 'translation_last_updated_timestamp as date', 'count(translation_id) as count' ),
			$dbr->makeList( $conditions, LIST_AND ),
			__METHOD__,
			$options
		);

		$count = 0;
		$result = array();
		foreach ( $rows as $row ) {
			$count += (int)$row->count;
			$time = self::getResultTime( $row->date, $interval );
			$result[$time] = array(
				'count' => $count,
				'delta' => (int)$row->count,
			);
		}

		return $result;
	}

	public function getTranslationId() {
		return $this->translation['id'];
	}

	public static function newFromId( $translationId ) {
		$dbr = Database::getConnection( DB_SLAVE );

		$rows = $dbr->select(
			array( 'cx_translations', 'cx_drafts' ),
			'*',
			array(
				'translation_id' => $translationId,
				'draft_id' => $translationId,
			),
			__METHOD__
		);

		$result = array();

		foreach ( $rows as $row ) {
			$result[] = Translation::newFromRow( $row );
		}

		return $result;
	}

	/**
	 * Get all published translation records.
	 *
	 * @param string $from Source language code
	 * @param string $to Target language code
	 * @param int $limit Number of records to fetch atmost
	 * @param in $offset Offset from which at most $limit records to fetch
	 * @return array
	 */
	public static function getAllPublishedTranslations( $from, $to, $limit, $offset ) {
		$dbr = Database::getConnection( DB_SLAVE );
		$conditions = array( $dbr->makeList(
			array(
				'translation_status' => 'published',
				'translation_target_url IS NOT NULL',
			),
			LIST_OR
		) );

		if ( $from ) {
			$conditions['translation_source_language'] = $from;
		}

		if ( $to ) {
			$conditions['translation_target_language'] = $to;
		}

		$options = array( 'LIMIT' => $limit );

		if ( $offset ) {
			$options['OFFSET'] = $offset;
		}

		$rows = $dbr->select(
			'cx_translations',
			array(
				'translation_source_title AS sourceTitle',
				'translation_target_title AS targetTitle',
				'translation_source_language AS sourceLanguage',
				'translation_target_language AS targetLanguage',
				'translation_source_url AS sourceURL',
				'translation_target_url AS targetURL',
				'translation_progress AS stats',
			),
			$conditions,
			__METHOD__,
			$options
		);

		$result = array();

		foreach ( $rows as $row ) {
			$translation = (array) $row;
			$translation['stats'] = json_decode( $translation['stats'] );
			$result[] = $translation;
		}

		return $result;
	}

	/**
	 * @return Translation
	 */
	public static function newFromRow( $row ) {
		$translation = new Translation( array(
			'id' => $row->translation_id,
			'sourceTitle' => $row->translation_source_title,
			'targetTitle' => $row->translation_target_title,
			'sourceLanguage' => $row->translation_source_language,
			'targetLanguage' => $row->translation_target_language,
			'sourceURL' => $row->translation_source_url,
			'targetURL' => $row->translation_target_url,
			'status' => $row->translation_status,
			'startTimeStamp' => $row->translation_start_timestamp,
			'lastUpdateTimeStamp' => $row->translation_last_updated_timestamp,
			'progress' => $row->translation_progress,
			'startedTranslator' => $row->translation_started_by,
			'lastUpdatedTranslator' => $row->translation_last_update_by,
			'draftContent' => isset( $row->draft_content ) ? $row->draft_content: null,
			'draftTimestamp' => isset( $row->draft_timestamp ) ? $row->draft_timestamp: null,
		) );

		return $translation;
	}
}
