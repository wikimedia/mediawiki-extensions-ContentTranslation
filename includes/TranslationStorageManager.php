<?php
/**
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

namespace ContentTranslation;

class TranslationStorageManager {
	/**
	 * Update a translation unit.
	 *
	 * @param \IDatabase $db
	 * @param TranslationUnit $translationUnit
	 * @param int $timestamp
	 */
	private static function update( \IDatabase $db, TranslationUnit $translationUnit, $timestamp ) {
		$values = [
			'cxc_sequence_id' => $translationUnit->getSequenceId(),
			'cxc_timestamp' => $db->timestamp(),
			'cxc_content' => $translationUnit->getContent()
		];
		$conditions = [
			'cxc_translation_id' => $translationUnit->getTranslationId(),
			'cxc_section_id' => $translationUnit->getSectionId(),
			'cxc_origin' => $translationUnit->getOrigin(),
			// Sometimes we get "duplicates" entries which differ in timestamp.
			// Then any updates to those sections would fail (duplicate key for
			// a unique index), if we did not limit this call to only one of them.
			'cxc_timestamp' => $db->timestamp( $timestamp ),
		];

		$db->update( 'cx_corpora', $values, $conditions, __METHOD__ );
	}

	/**
	 * Insert a translation unit.
	 *
	 * @param \IDatabase $db
	 * @param TranslationUnit $translationUnit
	 */
	private static function create( \IDatabase $db, TranslationUnit $translationUnit ) {
		$values = [
			'cxc_translation_id' => $translationUnit->getTranslationId(),
			'cxc_section_id' => $translationUnit->getSectionId(),
			'cxc_origin' => $translationUnit->getOrigin(),
			'cxc_sequence_id' => $translationUnit->getSequenceId(),
			'cxc_timestamp' => $db->timestamp(),
			'cxc_content' => $translationUnit->getContent()
		];

		$db->insert( 'cx_corpora', $values, __METHOD__ );
	}

	/**
	 * Delete translation units associated with the given translation identifier.
	 *
	 * @param int $translationId
	 */
	public static function deleteTranslationUnits( $translationId ) {
		$dbw = Database::getConnection( DB_MASTER );

		$conditions = [
			'cxc_translation_id' => $translationId,
		];

		$dbw->delete( 'cx_corpora', $conditions, __METHOD__ );
	}

	/**
	 * Save the translation unit.
	 * If the record exist, update it, otherwise create.
	 *
	 * @param TranslationUnit $translationUnit
	 * @param bool $newTranslation Whether these are for a brand new Translation record
	 */
	public static function save( TranslationUnit $translationUnit, $newTranslation ) {
		$dbw = Database::getConnection( DB_MASTER );

		$dbw->doAtomicSection(
			__METHOD__,
			function ( \IDatabase $dbw ) use ( $translationUnit, $newTranslation ) {
				if ( $newTranslation ) {
					// T134245: brand new translations can also insert corpora data in the same
					// request. The doFind() query uses only a subset of a unique cx_corpora index,
					// causing SH gap locks. Worse, is that the leftmost values comes from the
					// auto-incrementing translation_id. This puts gap locks on the range of
					// (MAX(cxc_translation_id),+infinity), which could make the whole API prone
					// to deadlocks and timeouts. Bypass this problem by remembering if the parent
					// translation row is brand new and skipping doFind() in such cases.
					$existing = false;
				} else {
					// Update the lastest row if there is one instead of making a new one
					$conditions = [
						'cxc_translation_id' => $translationUnit->getTranslationId(),
						'cxc_section_id' => $translationUnit->getSectionId(),
						'cxc_origin' => $translationUnit->getOrigin()
					];
					// Note that the only caller of this method will have already locked the
					// parent Translation row, serializing simultaneous duplicate submissions at
					// this point. Without that row lock, the two transaction might both acquire
					// SH gap locks in doFind() and then deadlock in create() trying to get IX gap
					// locks (if no duplicate rows were found).
					$options = [ 'FOR UPDATE' ];
					$existing = self::doFind( $dbw, $conditions, $options, __METHOD__ );
				}

				if ( $existing ) {
					self::update( $dbw, $translationUnit, $existing->getTimestamp() );
				} else {
					self::create( $dbw, $translationUnit );
				}
			}
		);
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
		$db = Database::getConnection( DB_REPLICA );

		$conditions = [
			'cxc_translation_id' => $translationId,
			'cxc_section_id' => $sectionId,
			'cxc_origin' => $origin
		];

		return self::doFind( $db, $conditions, [], __METHOD__ );
	}

	private static function doFind( \IDatabase $db, $conditions, $options, $method ) {
		$options['ORDER BY'] = 'cxc_timestamp DESC';

		$row = $db->selectRow( 'cx_corpora', '*', $conditions, $method, $options );

		if ( $row ) {
			return TranslationUnit::newFromRow( $row );
		}

		return null;
	}
}
