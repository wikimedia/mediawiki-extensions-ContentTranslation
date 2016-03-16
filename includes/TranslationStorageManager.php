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
	 * @param \IDatabase $db
	 * @param TranslationUnit $translationUnit
	 * @param int $timestamp
	 */
	private static function update( \IDatabase $db, TranslationUnit $translationUnit, $timestamp ) {
		$values = array(
			'cxc_sequence_id' => $translationUnit->getSequenceId(),
			'cxc_timestamp' => $db->timestamp(),
			'cxc_content' => $translationUnit->getContent()
		);
		$conditions = array(
			'cxc_translation_id' =>  $translationUnit->getTranslationId(),
			'cxc_section_id' =>  $translationUnit->getSectionId(),
			'cxc_origin' =>  $translationUnit->getOrigin(),
			// Sometimes we get "duplicates" entries which differ in timestamp.
			// Then any updates to those sections would fail (duplicate key for
			// a unique index), if we did not limit this call to only one of them.
			'cxc_timestamp' => $db->timestamp( $timestamp ),
		);

		$db->update( 'cx_corpora', $values, $conditions, __METHOD__ );
	}

	/**
	 * Insert a translation unit.
	 *
	 * @param \IDatabase $db
	 * @param TranslationUnit $translationUnit
	 */
	private static function create( \IDatabase $db, TranslationUnit $translationUnit ) {
		$values = array(
			'cxc_translation_id' => $translationUnit->getTranslationId(),
			'cxc_section_id' => $translationUnit->getSectionId(),
			'cxc_origin' => $translationUnit->getOrigin(),
			'cxc_sequence_id' => $translationUnit->getSequenceId(),
			'cxc_timestamp' => $db->timestamp(),
			'cxc_content' => $translationUnit->getContent()
		);

		$db->insert( 'cx_corpora', $values, __METHOD__ );
	}

	/**
	 * Save the translation unit.
	 * If the record exist, update it, otherwise create.
	 *
	 * @param TranslationUnit $translationUnit
	 */
	public static function save( TranslationUnit $translationUnit ) {
		$db = Database::getConnection( DB_MASTER );

		$db->doAtomicSection( __METHOD__, function ( $db ) use ( $translationUnit ) {
			$conditions = array(
				'cxc_translation_id' => $translationUnit->getTranslationId(),
				'cxc_section_id' => $translationUnit->getSectionId(),
				'cxc_origin' => $translationUnit->getOrigin()
			);
			// (At least attempt to) avoid inserting duplicate records in case
			// of race condition between the select query and the insert query,
			// resulting duplicate record error.
			$options = array( 'FOR UPDATE' );

			$existing = self::doFind( $db, $conditions, $options, __METHOD__ );

			if ( $existing ) {
				self::update( $db, $translationUnit, $existing->getTimestamp() );
			} else {
				self::create( $db, $translationUnit );
			}
		} );
	}

	/**
	 * Find the translation unit.
	 *
	 * @param int $translationId Translation Id
	 * @param string $sectionId Section id
	 * @param string $origin Origin of translation unit
	 * @return TranslationUnit|null
	 */
	public static function find( $translationId, $sectionId, $origin ) {
		$db = Database::getConnection( DB_SLAVE );

		$conditions = array(
			'cxc_translation_id' => $translationId,
			'cxc_section_id' => $sectionId,
			'cxc_origin' => $origin
		);

		return self::doFind( $db, $conditions, array(), __METHOD__ );
	}

	private static function doFind( $db, $conditions, $options, $method ) {
		$options['ORDER BY'] = 'cxc_timestamp DESC';

		$row = $db->selectRow( 'cx_corpora', '*', $conditions, $method, $options );

		if ( $row ) {
			return TranslationUnit::newFromRow( $row );
		}

		return null;

	}
}
