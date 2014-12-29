<?php
/**
 * ContentTranslation Translator
 */
namespace ContentTranslation;

class Translator {
	function __construct( \User $user ) {
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

	/**
	 * @return Translation[]
	 */
	public function getAllTranslations() {
		$dbr = Database::getConnection( DB_SLAVE );
		$rows = $dbr->select(
			array( 'cx_translations', 'cx_translators' ),
			'*',
			array(
				'translator_translation_id = translation_id',
				'translator_user_id' => $this->getGlobalUserId()
			),
			__METHOD__,
			array( 'ORDER BY' => 'translation_last_updated_timestamp DESC' )
		);

		$result = array();
		foreach ( $rows as $row ) {
			$result[] = Translation::newFromRow( $row );
		}

		return $result;
	}
}
