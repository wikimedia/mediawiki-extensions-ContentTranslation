<?php
/**
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

namespace ContentTranslation;

use ContentTranslation\TranslationUnit;

class TranslationStorageManager {
	/**
	 * Update a translation unit.
	 *
	 * @param TranslationUnit $translationUnit
	 * @param int $timestamp
	 */
	public static function update( TranslationUnit $translationUnit, $timestamp ) {
		$dbw = Database::getConnection( DB_MASTER );
		$values = array(
			'cxc_sequence_id' => $translationUnit->getSequenceId(),
			'cxc_timestamp' => $dbw->timestamp(),
			'cxc_content' => $translationUnit->getContent()
		);
		$conditions = array(
			'cxc_translation_id' =>  $translationUnit->getTranslationId(),
			'cxc_section_id' =>  $translationUnit->getSectionId(),
			'cxc_origin' =>  $translationUnit->getOrigin(),
			// Sometimes we get "duplicates" entries which differ in timestamp.
			// Then any updates to those sections would fail (duplicate key for
			// a unique index), if we did not limit this call to only one of them.
			'cxc_timestamp' => $dbw->timestamp( $timestamp ),
		);

		$res = $dbw->update( 'cx_corpora', $values, $conditions, __METHOD__ );
	}

	/**
	 * Insert a translation unit.
	 *
	 * @param TranslationUnit $translationUnit
	 */
	public static function create( TranslationUnit $translationUnit ) {
		$dbw = Database::getConnection( DB_MASTER );
		$values = array(
			'cxc_translation_id' => $translationUnit->getTranslationId(),
			'cxc_section_id' => $translationUnit->getSectionId(),
			'cxc_origin' => $translationUnit->getOrigin(),
			'cxc_sequence_id' => $translationUnit->getSequenceId(),
			'cxc_timestamp' => $dbw->timestamp(),
			'cxc_content' => $translationUnit->getContent()
		);
		$dbw->insert( 'cx_corpora', $values, __METHOD__ );
		return $dbw->insertId();
	}

	/**
	 * Save the translation unit.
	 * If the record exist, update it, otherwise create.
	 * @param TranslationUnit $translationUnit
	 */
	public static function save( TranslationUnit $translationUnit ) {
		$existing = TranslationStorageManager::find(
			$translationUnit->getTranslationId(),
			$translationUnit->getSectionId(),
			$translationUnit->getOrigin()
		);

		if ( $existing !== null ) {
			TranslationStorageManager::update( $translationUnit, $existing->getTimestamp() );
		} else {
			TranslationStorageManager::create( $translationUnit );
		}
	}

	/**
	 * Find the translation unit.
	 * @param int $translationId Translation Id
	 * @param string $sectionId Section id
	 * @param string $origin Origin of translation unit
	 * @return TranslationUnit|null
	 */
	public static function find( $translationId, $sectionId, $origin ) {
		$dbr = Database::getConnection( DB_SLAVE );
		$conditions = array(
			'cxc_translation_id' => $translationId,
			'cxc_section_id' => $sectionId,
			'cxc_origin' => $origin
		);

		$options = array(
			'ORDER BY' => 'cxc_timestamp DESC',
		);

		$row = $dbr->selectRow( 'cx_corpora', '*', $conditions, __METHOD__, $options );

		if ( $row ) {
			return TranslationUnit::newFromRow( $row );
		}

		return null;
	}
}
