<?php
/**
 * ContentTranslation Translation
 */
namespace ContentTranslation;

class Translation {
	function __construct( $translation ) {
		$this->translation = $translation;
	}

	public function save() {
		$dbw = Database::getConnection( DB_MASTER );
		$values = array(
			'translation_source_title' => $this->translation['sourceTitle'],
			'translation_target_title' => $this->translation['targetTitle'],
			'translation_source_language' => $this->translation['sourceLanguage'],
			'translation_target_language' => $this->translation['targetLanguage'],
			'translation_source_url' => $this->translation['sourceURL'],
			'translation_target_url' => $this->translation['targetURL'],
			'translation_status' => $this->translation['status'],
			// XXX do not overwrite when we have "draft save" feature.
			'translation_start_timestamp' => $dbw->timestamp(),
			'translation_last_updated_timestamp' => $dbw->timestamp(),
			'translation_progress' => $this->translation['progress'],
			'translation_started_by' => $this->translation['startedTranslator'],
			'translation_last_update_by' => $this->translation['lastUpdatedTranslator'],
		);
		$dbw->upsert(
			'cx_translations',
			$values,
			array( 'translation_id' ),
			$values,
			__METHOD__
		);

		if ( !isset( $this->translation['id'] ) ) {
			$this->translation['id'] = $dbw->insertId();
		}
	}

	public static function find( $sourceLanguage, $targetLanguage, $title ) {
		$dbr = Database::getConnection( DB_SLAVE );
		$values = array(
			'translation_source_language' => $sourceLanguage,
			'translation_target_language' => $targetLanguage,
			'translation_source_title' => $title
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
		if ( count( $result ) > 0 ) {
			return $result[0];
		}
		return null;
	}

	public static function delete( $translationId ) {
		$dbw = Database::getConnection( DB_MASTER );
		$dbw->delete(
			'cx_translations',
			array( 'translation_id' => $translationId ),
			__METHOD__
		);
	}

	public static function getStats() {
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
			'',
			__METHOD__,
			array(
				'GROUP BY' => array(
					'translation_source_language',
					'translation_target_language',
					'translation_status'
				),
			)
		);

		$result = array();
		foreach ( $rows as $row ) {
			$result[] = (array) $row;
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
			'draftContent' =>  isset( $row->draft_content ) ? $row->draft_content: null,
			'draftTimestamp' =>  isset( $row->draft_timestamp ) ? $row->draft_timestamp: null,
		) );

		return $translation;
	}
}
