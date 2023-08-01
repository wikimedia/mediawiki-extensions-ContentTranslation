<?php

namespace ContentTranslation;

use ContentTranslation\Service\TranslatorService;
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

	private static function getTranslatorGlobalUserId( Translator $translator ) {
		/** @var TranslatorService $translatorService */
		$translatorService = MediaWikiServices::getInstance()
			->getService( 'ContentTranslation.TranslatorService' );

		return $translatorService->getGlobalUserId( $translator->getUser() );
	}

	public function create( Translator $translator ) {
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbw = $lb->getConnection( DB_PRIMARY );

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
			'translation_last_update_by' => self::getTranslatorGlobalUserId( $translator ),
			'translation_start_timestamp' => $dbw->timestamp(),
			'translation_started_by' => self::getTranslatorGlobalUserId( $translator ),
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
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbw = $lb->getConnection( DB_PRIMARY );

		$table = 'cx_translations';

		$values = [
			'translation_target_title' => $this->translation['targetTitle'],
			'translation_source_revision_id' => $this->translation['sourceRevisionId'],
			'translation_source_url' => $this->translation['sourceURL'],
			'translation_status' => $this->translation['status'],
			'translation_last_updated_timestamp' => $dbw->timestamp(),
			'translation_progress' => $this->translation['progress'],
			'translation_last_update_by' => self::getTranslatorGlobalUserId( $translator ),
			'translation_cx_version' => $this->translation['cxVersion'],
		];

		if ( $this->translation['status'] === 'published' ) {
			$values['translation_target_url'] = $this->translation['targetURL'];
			$values['translation_target_revision_id'] = $this->translation['targetRevisionId'];
		}

		if ( isset( $options['freshTranslation'] ) && $options['freshTranslation'] === true ) {
			$values['translation_start_timestamp'] = $dbw->timestamp();
			// TODO: remove this code
			$values['translation_started_by'] = self::getTranslatorGlobalUserId( $translator );
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
	 * @return Translation|Translation[]|null
	 */
	public static function find( $sourceLanguage, $targetLanguage, $titles ) {
		if ( $titles === null || empty( $titles ) ) {
			return null;
		}

		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );
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
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );

		$values = [
			'translation_source_language' => $work->getSourceLanguage(),
			'translation_target_language' => $work->getTargetLanguage(),
			'translation_source_title' => $work->getPage(),
			'translation_started_by' => self::getTranslatorGlobalUserId( $translator ),
			'translation_last_update_by' => self::getTranslatorGlobalUserId( $translator ),
		];

		$row = $dbr->selectRow( 'cx_translations', '*', $values, __METHOD__ );

		return $row ? self::newFromRow( $row ) : null;
	}

	/**
	 * Get conflicting translations for the given translation work.
	 * Conflicting translations are translations in progress for same language pair
	 * and source page in last 24 hours.
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
				continue;
			}

			$lastUpdateTime = new \DateTime( $draft->getData()['lastUpdateTimestamp'] );
			// Check if translation was updated within the last 24 hours
			$lastUpdateTimeIn24Hours = (bool)$lastUpdateTime->diff( new \DateTime( '-24 hours' ) )->invert;
			if ( !$lastUpdateTimeIn24Hours ) {
				unset( $drafts[$index] );
			}
		}

		$drafts = array_values( $drafts );

		return $drafts;
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
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );

		$rows = $dbr->select(
			'cx_translations',
			[
				'sourceLanguage' => 'translation_source_language',
				'targetLanguage' => 'translation_target_language',
				'status' => 'translation_status',
				'count' => 'COUNT(*)',
				'translators' => 'COUNT(DISTINCT translation_started_by)',
			],
			[
				'translation_status' => 'draft',
				'translation_target_url' => null,
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
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );

		$rows = $dbr->select(
			'cx_translations',
			[
				'sourceLanguage' => 'translation_source_language',
				'targetLanguage' => 'translation_target_language',
				// A published translation can be in deleted state too. But for the purpose
				// of stats, it should be counted as published. 'deleted' here just means
				// the soft deletion of entry from CX tables. Not the article deletion.
				// For this, use hard coded quoted value 'published' as status.
				"'published' as status",
				'count' => 'COUNT(*)',
				'translators' => 'COUNT(DISTINCT translation_started_by)',
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
		$lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
		$dbr = $lb->getConnection( DB_REPLICA );

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
					'YEAR(ar_timestamp)',
					'MONTH(ar_timestamp)',
				],
			];
		}

		$rows = $dbr->select(
			[ 'change_tag', 'archive' ],
			[ 'ar_timestamp', 'count' => 'COUNT(ar_page_id)' ],
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
	 * @param int|null $translatorId
	 * @return array
	 */
	public static function getTrendByStatus(
		$source, $target, $status, $interval, $translatorId
	) {
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );

		$conditions = [];
		if ( $status === 'published' ) {
			$conditions[] = self::getPublishedCondition( $dbr );
		} else {
			$conditions[] = $dbr->makeList(
				[
					'translation_status' => 'draft',
					'translation_target_url' => null,
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
					'YEAR(translation_last_updated_timestamp)',
					'MONTH(translation_last_updated_timestamp)',
				],
			];
		}

		$rows = $dbr->select(
			[ 'cx_translations' ],
			[ 'date' => 'translation_last_updated_timestamp', 'count' => 'COUNT(translation_id)' ],
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
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$dbr = $lb->getConnection( DB_REPLICA );
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
