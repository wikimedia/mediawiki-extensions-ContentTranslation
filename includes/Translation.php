<?php

namespace ContentTranslation;

use MediaWiki\MediaWikiServices;
use MediaWiki\Storage\NameTableAccessException;
use Wikimedia\Rdbms\IDatabase;

class Translation {
	/** @var bool */
	private $lastSaveWasCreate = false;

	/** @var array */
	public $translation;

	public function __construct( $translation ) {
		$this->translation = $translation;
	}

	public function create( Translator $translator ) {
		$dbw = Database::getConnection( DB_PRIMARY );

		$table = 'cx_translations';

		$values = [
			'translation_source_title' => $this->translation['sourceTitle'],
			'translation_target_title' => $this->translation['targetTitle'],
			'translation_source_language' => $this->translation['sourceLanguage'],
			'translation_target_language' => $this->translation['targetLanguage'],
			'translation_source_revision_id' => $this->translation['sourceRevisionId'],
			'translation_source_url' => $this->translation['sourceURL'],
			'translation_status' => $this->translation['status'],
			'translation_progress' => $this->translation['progress'],
			'translation_last_updated_timestamp' => $dbw->timestamp(),
			'translation_last_update_by' => $translator->getGlobalUserId(),
			'translation_start_timestamp' => $dbw->timestamp(),
			'translation_started_by' => $translator->getGlobalUserId(),
			'translation_cx_version' => $this->translation['cxVersion'],
		];

		if ( $this->translation['status'] === 'published' ) {
			$values['translation_target_url'] = $this->translation['targetURL'];
			$values['translation_target_revision_id'] = $this->translation['targetRevisionId'];
		}

		// BC for a missing schema change
		if ( !$dbw->fieldExists( $table, 'translation_cx_version', __METHOD__ ) ) {
			unset( $values['translation_cx_version'] );
		}

		$dbw->insert(
			$table,
			$values,
			__METHOD__
		);

		$this->translation['id'] = (int)$dbw->insertId();
	}

	/**
	 * @param array|null $options
	 * @param Translator $translator
	 */
	public function update( ?array $options, Translator $translator ) {
		$dbw = Database::getConnection( DB_PRIMARY );

		$table = 'cx_translations';

		$values = [
			'translation_target_title' => $this->translation['targetTitle'],
			'translation_source_revision_id' => $this->translation['sourceRevisionId'],
			'translation_source_url' => $this->translation['sourceURL'],
			'translation_status' => $this->translation['status'],
			'translation_last_updated_timestamp' => $dbw->timestamp(),
			'translation_progress' => $this->translation['progress'],
			'translation_last_update_by' => $this->translation['lastUpdatedTranslator'],
			'translation_cx_version' => $this->translation['cxVersion'],
		];

		if ( $this->translation['status'] === 'published' ) {
			$values['translation_target_url'] = $this->translation['targetURL'];
			$values['translation_target_revision_id'] = $this->translation['targetRevisionId'];
		}

		if ( isset( $options['freshTranslation'] ) && $options['freshTranslation'] === true ) {
			$values['translation_start_timestamp'] = $dbw->timestamp();
			// TODO: remove this code
			$values['translation_started_by'] = $translator->getGlobalUserId();
		}

		// BC for a missing schema change
		if ( !$dbw->fieldExists( $table, 'translation_cx_version', __METHOD__ ) ) {
			unset( $values['translation_cx_version'] );
		}

		$dbw->update(
			$table,
			$values,
			[ 'translation_id' => $this->translation['id'] ],
			__METHOD__
		);
	}

	/**
	 * A convenient abstraction of create and update methods. Checks if
	 * translation exists and chooses either of create or update actions.
	 * @param Translator $translator
	 */
	public function save( Translator $translator ) {
		$work = TranslationWork::newFromTranslation( $this );
		$existingTranslation = self::findForTranslator( $work, $translator );

		if ( $existingTranslation === null ) {
			$this->create( $translator );
			$this->lastSaveWasCreate = true;
		} else {
			$options = [];
			if ( $existingTranslation->translation['status'] === 'deleted' ) {
				// Existing translation is deleted, so this is a fresh start of same
				// language pair and source title.
				$options['freshTranslation'] = true;
			}
			$this->translation['id'] = $existingTranslation->getTranslationId();
			$this->update( $options, $translator );
			$this->lastSaveWasCreate = false;
		}
	}

	/**
	 * @return bool Whether the last save() call on this object instance made a new row
	 */
	public function lastSaveWasCreate() {
		return $this->lastSaveWasCreate;
	}

	/**
	 * Find a saved translation work.
	 *
	 * This can return multiple items if $titles is an array (even for the same work).
	 *
	 * @param string $sourceLanguage
	 * @param string $targetLanguage
	 * @param string|string[] $titles
	 * @return Translation|Translation[]|null Translation
	 */
	public static function find( $sourceLanguage, $targetLanguage, $titles ) {
		if ( $titles === null || empty( $titles ) ) {
			return null;
		}

		$dbr = Database::getConnection( DB_REPLICA );
		$values = [
			'translation_source_language' => $sourceLanguage,
			'translation_target_language' => $targetLanguage,
			'translation_source_title' => $titles
		];

		$options = [
			'ORDER BY' => 'translation_last_updated_timestamp ASC',
		];

		$rows = $dbr->select(
			'cx_translations',
			'*',
			$values,
			__METHOD__,
			$options
		);

		$result = [];

		foreach ( $rows as $row ) {
			$result[] = self::newFromRow( $row );
		}

		if ( !is_array( $titles ) ) {
			return $result[0] ?? null;
		}

		return $result;
	}

	/**
	 * Find a saved translation work for a given translator.
	 *
	 * There can only ever be one work returned by this method.
	 *
	 * @param TranslationWork $work
	 * @param Translator $translator
	 * @return Translation|null
	 */
	public static function findForTranslator( TranslationWork $work, Translator $translator ) {
		$dbr = Database::getConnection( DB_REPLICA );
		$values = [
			'translation_source_language' => $work->getSourceLanguage(),
			'translation_target_language' => $work->getTargetLanguage(),
			'translation_source_title' => $work->getPage(),
			'translation_started_by' => $translator->getGlobalUserId(),
			'translation_last_update_by' => $translator->getGlobalUserId(),
		];

		$row = $dbr->selectRow( 'cx_translations', '*', $values, __METHOD__ );

		return $row ? self::newFromRow( $row ) : null;
	}

	/**
	 * Get conflicting translations for the given translation work.
	 * Conflicting translations are translations in progress for same language pair and source page.
	 * Here we assume that the caller already checked that no draft for the user already exists.
	 * @param TranslationWork $work
	 * @return array
	 */
	public static function getConflictingTranslations( TranslationWork $work ) {
		// Use the fact that find returns all items when given array of titles.
		$drafts = self::find(
			$work->getSourceLanguage(),
			$work->getTargetLanguage(),
			[ $work->getPage() ]
		);
		'@phan-var self[] $drafts';

		foreach ( $drafts as $index => $draft ) {
			if ( $draft->getData()['status'] !== 'draft' ) {
				unset( $drafts[$index] );
			}
		}

		$drafts = array_values( $drafts );

		return $drafts;
	}

	public static function delete( $translationId ) {
		$dbw = Database::getConnection( DB_PRIMARY );

		$dbw->update(
			'cx_translations',
			[ 'translation_status' => 'deleted' ],
			[ 'translation_id' => $translationId ],
			__METHOD__
		);
	}

	/**
	 * Get the stats for all translations in draft or published status.
	 * @return array
	 */
	public static function getStats() {
		return array_merge( self::getDraftStats(), self::getPublishedStats() );
	}

	/**
	 * Get the stats for all translations in draft status and not having
	 * any published URL.
	 * If the translation is with draft status and has a target_url it
	 * was published atleast once.
	 * @return array
	 */
	public static function getDraftStats() {
		$dbr = Database::getConnection( DB_REPLICA );

		$rows = $dbr->select(
			'cx_translations',
			[
				'translation_source_language as sourceLanguage',
				'translation_target_language as targetLanguage',
				"'draft' as status",
				'COUNT(*) AS count',
				'COUNT(DISTINCT translation_started_by) AS translators',
			],
			[
				'translation_status' => 'draft',
				'translation_target_url IS NULL'
			],
			__METHOD__,
			[
				'GROUP BY' => [
					'translation_source_language',
					'translation_target_language',
				],
			]
		);

		$result = [];

		foreach ( $rows as $row ) {
			$result[] = (array)$row;
		}

		return $result;
	}

	/**
	 * Get the stats for all translations in published status or having
	 * a published URL.
	 * If the translation has a target_url it was published atleast once.
	 * @return array
	 */
	public static function getPublishedStats() {
		$dbr = Database::getConnection( DB_REPLICA );

		$rows = $dbr->select(
			'cx_translations',
			[
				'translation_source_language as sourceLanguage',
				'translation_target_language as targetLanguage',
				"'published' as status",
				'COUNT(*) AS count',
				'COUNT(DISTINCT translation_started_by) AS translators',
			],
			self::getPublishedCondition( $dbr ),
			__METHOD__,
			[
				'GROUP BY' => [
					'translation_source_language',
					'translation_target_language',
				],
			]
		);

		$result = [];
		foreach ( $rows as $row ) {
			$result[] = (array)$row;
		}

		return $result;
	}

	/**
	 * Get time-wise cumulative number of deletions for given
	 * language pairs, with given interval.
	 *
	 * @param string $interval
	 * @return array<string,array>
	 */
	public static function getDeletionTrend( $interval ): array {
		$dbr = wfGetDB( DB_REPLICA );

		$conditions = [
			'ar_rev_id = ct_rev_id'
		];

		$changeTagDefStore = MediaWikiServices::getInstance()->getChangeTagDefStore();
		try {
			$conditions['ct_tag_id'] = $changeTagDefStore->getId( 'contenttranslation' );
		} catch ( NameTableAccessException $exception ) {
			// No translations published yet, so can skip query
			return [];
		}

		$options = [];
		if ( $interval === 'week' ) {
			$options = [
				'GROUP BY' => [
					'YEARWEEK(ar_timestamp, 3)',
				],
			];
		} elseif ( $interval === 'month' ) {
			$options = [
				'GROUP BY' => [
					'YEAR(ar_timestamp), MONTH(ar_timestamp)',
				],
			];
		}

		$rows = $dbr->select(
			[ 'change_tag', 'archive' ],
			[ 'ar_timestamp', 'count(ar_page_id) as count' ],
			$conditions,
			__METHOD__,
			$options
		);

		$count = 0;
		$result = [];
		$dm = new DateManipulator( $interval );
		foreach ( $rows as $row ) {
			$count += (int)$row->count;
			$time = $dm->getIntervalIdentifier( $row->ar_timestamp )->format( 'U' );
			$result[$time] = [
				'count' => $count,
				'delta' => (int)$row->count,
			];
		}

		return $result;
	}

	/**
	 * Get time-wise cumulative number of translations for given
	 * language pairs, with given interval.
	 *
	 * @param string|null $source Source language code
	 * @param string|null $target Target language code
	 * @param string $status Status of translation. Either 'published' or 'draft'
	 * @param string $interval 'weekly' or 'monthly' trend
	 * @param string|null $translatorId
	 * @return array
	 */
	public static function getTrendByStatus(
		$source, $target, $status, $interval, $translatorId
	) {
		$dbr = Database::getConnection( DB_REPLICA );

		$conditions = [];
		if ( $status === 'published' ) {
			$conditions[] = self::getPublishedCondition( $dbr );
		} else {
			$conditions[] = $dbr->makeList(
				[
					'translation_status' => 'draft',
					'translation_target_url IS NULL'
				],
				LIST_AND
			);
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
		$options = [];
		if ( $interval === 'week' ) {
			$options = [
				'GROUP BY' => [
					'YEARWEEK(translation_last_updated_timestamp, 3)',
				],
			];
		} elseif ( $interval === 'month' ) {
			$options = [
				'GROUP BY' => [
					'YEAR(translation_last_updated_timestamp), MONTH(translation_last_updated_timestamp)',
				],
			];
		}

		$rows = $dbr->select(
			[ 'cx_translations' ],
			[ 'translation_last_updated_timestamp as date', 'count(translation_id) as count' ],
			$dbr->makeList( $conditions, LIST_AND ),
			__METHOD__,
			$options
		);

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

	public function getTranslationId() {
		return $this->translation['id'];
	}

	/**
	 * Return the underlying data fields.
	 *
	 * @return array
	 */
	public function getData() {
		return $this->translation;
	}

	public static function getPublishedCondition( IDatabase $db ) {
		return $db->makeList(
			[
				'translation_status' => 'published',
				'translation_target_url IS NOT NULL',
			],
			LIST_OR
		);
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
		$dbr = Database::getConnection( DB_REPLICA );
		$conditions = [];
		$conditions[] = self::getPublishedCondition( $dbr );

		if ( $from ) {
			$conditions['translation_source_language'] = $from;
		}

		if ( $to ) {
			$conditions['translation_target_language'] = $to;
		}

		$options = [ 'LIMIT' => $limit ];

		if ( $offset ) {
			$options['OFFSET'] = $offset;
		}

		$rows = $dbr->select(
			'cx_translations',
			[
				'translation_id AS translationId',
				'translation_source_title AS sourceTitle',
				'translation_target_title AS targetTitle',
				'translation_source_language AS sourceLanguage',
				'translation_source_revision_id AS sourceRevisionId',
				'translation_target_revision_id AS targetRevisionId',
				'translation_target_language AS targetLanguage',
				'translation_source_url AS sourceURL',
				'translation_target_url AS targetURL',
				'translation_last_updated_timestamp AS publishedDate',
				'translation_progress AS stats',
			],
			$conditions,
			__METHOD__,
			$options
		);

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
