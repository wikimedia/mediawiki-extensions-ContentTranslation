<?php
/**
 * ContentTranslation Translation Draft
 * Database access method for drafts table.
 */
namespace ContentTranslation;

class Draft {
	public static function save( $translationId, $content ) {
		$dbw = Database::getConnection( DB_MASTER );
		$values = array(
			'draft_id' => $translationId,
			'draft_content' => $content,
			'draft_timestamp' => $dbw->timestamp(),
		);
		$dbw->upsert(
			'drafts',
			$values,
			array( 'draft_id' ),
			$values,
			__METHOD__
		);
	}

}
