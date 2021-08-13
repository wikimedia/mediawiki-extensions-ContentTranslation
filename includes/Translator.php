<?php

namespace ContentTranslation;

use MediaWiki\MediaWikiServices;

class Translator {

	/**
	 * @var \User
	 */
	private $user;

	public function __construct( \User $user ) {
		$this->user = $user;
	}

	public function getGlobalUserId() {
		$lookup = MediaWikiServices::getInstance()
			->getCentralIdLookupFactory()
			->getLookup();
		$id = $lookup->centralIdFromLocalUser( $this->user, \CentralIdLookup::AUDIENCE_RAW );
		if ( $id === 0 ) {
			throw new \Exception( 'User account is not global' );
		}

		return $id;
	}

	public function addTranslation( $translationId ) {
		$dbw = Database::getConnection( DB_PRIMARY );
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

	public static function removeTranslation( $translationId ) {
		$dbw = Database::getConnection( DB_PRIMARY );
		$dbw->delete(
			'cx_translators',
			[ 'translator_translation_id' => $translationId ],
			__METHOD__
		);
	}

	/**
	 * Get a translation by translation id for the translator
	 * @param int $translationId
	 * @return Translation|null
	 */
	public function getTranslation( $translationId ) {
		$dbr = Database::getConnection( DB_REPLICA );
		$row = $dbr->selectRow(
			[ 'cx_translators', 'cx_translations' ],
			'*',
			[
				'translator_user_id' => $this->getGlobalUserId(),
				'translator_translation_id' => $translationId,
				'translator_translation_id = translation_id',
			],
			__METHOD__
		);

		if ( $row ) {
			return Translation::newFromRow( $row );
		}

		return null;
	}

	/**
	 * @param int $limit How many results to return
	 * @param string|null $offset Offset condition (timestamp)
	 * @param string|null $type
	 * @param string|null $from
	 * @param string|null $to
	 * @return Translation[]
	 */
	public function getAllTranslations(
		$limit,
		$offset = null,
		$type = null,
		$from = null,
		$to = null
	) {
		// Note: there is no index on translation_last_updated_timestamp
		$dbr = Database::getConnection( DB_REPLICA );

		$tables = [ 'cx_translations', 'cx_translators' ];
		$fields = '*';

		$conds = [
			'translator_translation_id = translation_id',
			'translator_user_id' => $this->getGlobalUserId()
		];
		if ( $type !== null ) {
			$conds['translation_status'] = $type;
		}
		if ( $from !== null ) {
			$conds['translation_source_language'] = $from;
		}
		if ( $to !== null ) {
			$conds['translation_target_language'] = $to;
		}
		if ( $offset !== null ) {
			$ts = $dbr->addQuotes( $dbr->timestamp( $offset ) );
			$conds[] = "translation_last_updated_timestamp < $ts";
		}

		$options = [
			'ORDER BY' => 'translation_last_updated_timestamp DESC',
			'LIMIT' => $limit,
		];

		$res = $dbr->select( $tables, $fields, $conds, __METHOD__, $options );

		$result = [];
		foreach ( $res as $row ) {
			$result[] = Translation::newFromRow( $row );
		}

		return $result;
	}

	public function getLanguages( $type ) {
		// Note: there is no index on translation_last_updated_timestamp
		$dbr = Database::getConnection( DB_REPLICA );

		$queries = [];
		foreach ( [ 'source', 'target' ] as $field ) {
			$tables = [ 'cx_translations', 'cx_translators' ];
			$field = "translation_{$field}_language as code";
			$conds = [
				'translator_translation_id = translation_id',
				'translator_user_id' => $this->getGlobalUserId()
			];
			if ( $type !== null ) {
				$conds['translation_status'] = $type;
			}

			$queries[] = $dbr->selectSQLText( $tables, $field, $conds, __METHOD__ );
		}

		$res = $dbr->query( $dbr->unionQueries( $queries, false ), __METHOD__ );

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
		$dbr = Database::getConnection( DB_REPLICA );
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
	 * @return array Number of translators indexed by language code
	 */
	public static function getTranslatorsCount( $direction ) {
		$directionField = [
			'source' => 'translation_source_language',
			'target' => 'translation_target_language',
		];

		$dbr = Database::getConnection( DB_REPLICA );

		$table = 'cx_translations';
		$fields = [
			"$directionField[$direction] as language",
			'COUNT(DISTINCT translation_started_by) AS translators',
		];
		$conds = Translation::getPublishedCondition( $dbr );
		$options = [
			'GROUP BY' => $directionField[$direction],
		];

		$rows = $dbr->select( $table, $fields, $conds, __METHOD__, $options );

		$result = [];

		foreach ( $rows as $row ) {
			$result[$row->language] = $row->translators;
		}

		return $result;
	}

	/**
	 * Get the total count of users who published a translation.
	 * @return int Number of translators
	 */
	public static function getTotalTranslatorsCount() {
		$dbr = Database::getConnection( DB_REPLICA );

		$table = 'cx_translations';
		$field = 'COUNT(DISTINCT translation_started_by) AS translators';
		$conds = Translation::getPublishedCondition( $dbr );

		return $dbr->selectField( $table, $field, $conds, __METHOD__ );
	}

	/**
	 * Check whether the user has started at least one translation.
	 * No need to publish. Translation in any status is fine.
	 *
	 * @param \User $user
	 * @return bool
	 */
	public static function isTranslator( \User $user ) {
		$translator = new Translator( $user );
		try {
			$translatorId = $translator->getGlobalUserId();
		} catch ( \Exception $e ) {
			// Not a global user and not a translator
			return false;
		}
		$translations = $translator->getAllTranslations( 1 /*limit*/ );
		return count( $translations ) > 0;
	}
}
