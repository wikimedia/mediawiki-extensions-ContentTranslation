<?php
/**
 * ContentTranslation Translator
 */
namespace ContentTranslation;

class Translator {
	function __construct( \User $user ) {
		// GlobalUser::newFromUser must be used so CentralAuth checks are done
		$this->globalUser = GlobalUser::newFromUser( $user );
	}

	public function getGlobalUserId() {
		return $this->globalUser->getId();
	}

	public function addTranslation( $translationId ) {
		$dbw = Database::getConnection( DB_MASTER );
		$dbw->replace(
			'cx_translators',
			array( 'translator_user_id', 'translator_translation_id' ),
			array(
				'translator_user_id' => $this->getGlobalUserId(),
				'translator_translation_id' => $translationId,
			),
			__METHOD__
		);
	}

	public static function removeTranslation( $translationId ) {
		$dbw = Database::getConnection( DB_MASTER );
		$dbw->delete(
			'cx_translators',
			array( 'translator_translation_id' => $translationId ),
			__METHOD__
		);
	}

	/**
	 * Get a translation by translation id for the translator
	 * @param int $translationId
	 * @return Translation|null
	 */
	public function getTranslation( $translationId ) {
		$dbr = Database::getConnection( DB_SLAVE );
		$row = $dbr->selectRow(
			array( 'cx_drafts', 'cx_translators', 'cx_translations' ),
			'*',
			array(
				 'translator_user_id' => $this->getGlobalUserId(),
				 'translator_translation_id' => $translationId,
				 'translator_translation_id = draft_id',
				 'translator_translation_id = translation_id',
			),
			__METHOD__
		);

		if ( $row ) {
			return Translation::newFromRow( $row );
		}

		return null;
	}

	/**
	 * @param int $limit How many results to return
	 * @param string [$offset] Offset condition (timestamp)
	 * @param string $from
	 * @param string $to
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
		$dbr = Database::getConnection( DB_SLAVE );

		$tables = array( 'cx_translations', 'cx_translators' );
		$fields = '*';

		$conds = array(
			'translator_translation_id = translation_id',
			'translator_user_id' => $this->getGlobalUserId()
		);
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

		$options = array(
			'ORDER BY' => 'translation_last_updated_timestamp DESC',
			'LIMIT' => $limit,
		);

		$res = $dbr->select( $tables, $fields, $conds, __METHOD__, $options );

		$result = array();
		foreach ( $res as $row ) {
			$result[] = Translation::newFromRow( $row );
		}

		return $result;
	}

	public function getLanguages( $type ) {
		// Note: there is no index on translation_last_updated_timestamp
		$dbr = Database::getConnection( DB_SLAVE );

		$queries = array();
		foreach ( array( 'source', 'target' ) as $field ) {
			$tables = array( 'cx_translations', 'cx_translators' );
			$field = "translation_{$field}_language as code";
			$conds = array(
				'translator_translation_id = translation_id',
				'translator_user_id' => $this->getGlobalUserId()
			);
			if ( $type !== null ) {
				$conds['translation_status'] = $type;
			}

			$queries[] = $dbr->selectSqlText( $tables, $field, $conds, __METHOD__ );
		}

		$res = $dbr->query( $dbr->unionQueries( $queries, false ) );

		$result = array();
		foreach ( $res as $row ) {
			$result[] = $row->code;
		}

		return $result;
	}

	/**
	 * Get the number of published translation by current translator.
	 * @return Integer
	 */
	public function getTranslationsCount() {
		$dbr = Database::getConnection( DB_SLAVE );
		$count = $dbr->selectField(
			array( 'cx_translators', 'cx_translations' ),
			'count(*)',
			array(
				'translator_user_id' => $this->getGlobalUserId(),
				'translator_translation_id = translation_id',
				// And it is published
				$dbr->makeList(
					array(
						'translation_status' => 'published',
						'translation_target_url IS NOT NULL',
					),
					LIST_OR
				)
			),
			__METHOD__
		);

		return intval( $count );
	}

	/**
	 * Get the stats for all translator counts.
	 */
	public static function getStats() {
		return array(
			'from' => Translator::getTranslatorsCount( 'source' ),
			'to' =>  Translator::getTranslatorsCount( 'target' ),
			'total' => Translator::getTotalTranslatorsCount(),
		);
	}

	/**
	 * Get the stats for translator count to or from a language.
	 * @param string $direction source or target
	 * @return Array Number of translators indexed by language code
	 */
	public static function getTranslatorsCount( $direction ) {
		$directionField = array(
			'source' => 'translation_source_language',
			'target' => 'translation_target_language',
		);

		$dbr = Database::getConnection( DB_SLAVE );

		$table = 'cx_translations';
		$fields = array(
			"$directionField[$direction] as language",
			'COUNT(DISTINCT translation_started_by) AS translators',
		);
		$conds = $dbr->makeList(
			array(
				'translation_status' => 'published',
				'translation_target_url IS NOT NULL',
			),
			LIST_OR
		);
		$options = array(
			'GROUP BY' => $directionField[$direction],
		);

		$rows = $dbr->select( $table, $fields, $conds, __METHOD__, $options );

		$result = array();

		foreach ( $rows as $row ) {
			$result[$row->language] = $row->translators;
		}

		return $result;
	}

	/**
	 * Get the total count of users who published a translation.
	 * @return Integer Number of translators
	 */
	public static function getTotalTranslatorsCount() {
		$dbr = Database::getConnection( DB_SLAVE );

		$table = 'cx_translations';
		$fields = array(
			'COUNT(DISTINCT translation_started_by) AS translators',
		);
		$conds = $dbr->makeList(
			array(
				'translation_status' => 'published',
				'translation_target_url IS NOT NULL',
			),
			LIST_OR
		);

		return $dbr->selectField( $table, $fields, $conds, __METHOD__ );
	}
}
