<?php
/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\Store;

use ContentTranslation\Entity\TranslationUnit;
use ContentTranslation\Exception\InvalidSectionDataException;
use ContentTranslation\LoadBalancer;
use Exception;
use stdClass;
use Wikimedia\Rdbms\IDatabase;
use Wikimedia\Rdbms\LBFactory;
use Wikimedia\Rdbms\Platform\ISQLPlatform;
use Wikimedia\Rdbms\SelectQueryBuilder;
use function Eris\Generator\bool;

class TranslationCorporaStore {

	/** @var LoadBalancer */
	private $lb;

	/** @var LBFactory */
	private $lbFactory;

	public const TABLE_NAME = 'cx_corpora';

	public function __construct( LoadBalancer $lb, LBFactory $lbFactory ) {
		$this->lb = $lb;
		$this->lbFactory = $lbFactory;
	}

	/**
	 * Update a translation unit.
	 *
	 * @param TranslationUnit $translationUnit
	 * @param string $timestamp
	 */
	private function updateTranslationUnit( TranslationUnit $translationUnit, string $timestamp ): void {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$values = [
			'cxc_sequence_id' => $translationUnit->getSequenceId(),
			'cxc_timestamp' => $dbw->timestamp(),
			'cxc_content' => $translationUnit->getContent()
		];
		$conditions = [
			'cxc_translation_id' => $translationUnit->getTranslationId(),
			'cxc_section_id' => $translationUnit->getSectionId(),
			'cxc_origin' => $translationUnit->getOrigin(),
			// Sometimes we get "duplicates" entries which differ in timestamp.
			// Then any updates to those sections would fail (duplicate key for
			// a unique index), if we did not limit this call to only one of them.
			'cxc_timestamp' => $dbw->timestamp( $timestamp ),
		];

		$dbw->update( self::TABLE_NAME, $values, $conditions, __METHOD__ );

		if ( $dbw->affectedRows() < 1 ) {
			// Possible reasons:
			// * concurrent request has already updated the row with new timestamp
			// * no change (saving same thing twice in the same second)
			// * translation has been deleted
			throw new Exception( 'Failed to update a translation section' );
		}
	}

	/**
	 * Insert a translation unit.
	 *
	 * @param TranslationUnit $translationUnit
	 */
	private function insertTranslationUnit( TranslationUnit $translationUnit ): void {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$values = [
			'cxc_translation_id' => $translationUnit->getTranslationId(),
			'cxc_section_id' => $translationUnit->getSectionId(),
			'cxc_origin' => $translationUnit->getOrigin(),
			'cxc_sequence_id' => $translationUnit->getSequenceId(),
			'cxc_timestamp' => $dbw->timestamp(),
			'cxc_content' => $translationUnit->getContent()
		];

		$dbw->insert( self::TABLE_NAME, $values, __METHOD__ );
	}

	/**
	 * Delete translation units and categories associated with the given translation identifier.
	 *
	 * @param int|int[] $translationId
	 */
	public function deleteTranslationData( $translationId ): void {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$conditions = [ 'cxc_translation_id' => $translationId ];

		$dbw->delete( self::TABLE_NAME, $conditions, __METHOD__ );
	}

	/**
	 * Given the "parent" translation id and the base section id (in the "${revision}_${sectionNumber}"
	 * form), this method deletes all the translation units that belong to that section translation,
	 * from the "cx_corpora" table.
	 *
	 * NOTE: The "cxc_section_id" field inside "cx_corpora" table is in the following form for
	 * section translation parallel corpora units: "${baseSectionId}_${subSectionId}", where
	 * "subSectionId" is given by the cxserver as the section HTML element id (e.g. "cxSourceSection4").
	 * This is why we use a "LIKE" query in the following form, here: "${baseSectionId}%"
	 *
	 * @param int $translationId the id of the "parent" translation inside "cx_translations" table
	 * @param string $baseSectionId the "cxsx_section_id" as stored inside "cx_section_translations" table
	 * @return void
	 */
	public function deleteTranslationDataBySectionId( int $translationId, string $baseSectionId ): void {
		$dbw = $this->lb->getConnection( DB_PRIMARY );
		$conditions = [
			'cxc_translation_id' => $translationId,
			'cxc_section_id' . $dbw->buildLike( $baseSectionId, '_', $dbw->anyString() )
		];

		$dbw->delete( self::TABLE_NAME, $conditions, __METHOD__ );
	}

	/**
	 * Given a translation id, this method returns the count of the parallel corpora
	 * translation units, associated with this translation id.
	 *
	 * @param int $translationId the id of the translation inside "cx_translations" table
	 * @return int
	 */
	public function countByTranslationId( int $translationId ): int {
		$dbr = $this->lb->getConnection( DB_REPLICA );
		$conditions = [ 'cxc_translation_id' => $translationId ];

		return $dbr->selectRowCount( self::TABLE_NAME, ISQLPlatform::ALL_ROWS, $conditions, __METHOD__ );
	}

	/**
	 * Delete translation units and categories associated with the given translation identifier
	 * in a manner that avoids creating excessive database lag.
	 *
	 * @param int|int[] $ids
	 * @param int $batchSize
	 */
	public function deleteTranslationDataGently( $ids, int $batchSize = 1000 ): void {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$conditions = [ 'cxc_translation_id' => $ids ];
		$options = [ 'LIMIT' => $batchSize ];

		while ( true ) {
			$rowsToDelete =
				$dbw->selectFieldValues( self::TABLE_NAME, 'cxc_id', $conditions, __METHOD__, $options );

			if ( !$rowsToDelete ) {
				break;
			}

			$dbw->delete( self::TABLE_NAME, [ 'cxc_id' => $rowsToDelete ], __METHOD__ );
			$this->lbFactory->waitForReplication();
		}
	}

	/**
	 * Save the translation unit.
	 * If the record exist, update it, otherwise create.
	 *
	 * @param TranslationUnit $translationUnit
	 * @param bool $isNewTranslation Whether these are for a brand new Translation record
	 */
	public function save( TranslationUnit $translationUnit, bool $isNewTranslation ): void {
		$fname = __METHOD__;
		// Update the latest row if there is one instead of making a new one
		$conditions = [
			'cxc_translation_id' => $translationUnit->getTranslationId(),
			'cxc_section_id' => $translationUnit->getSectionId(),
			'cxc_origin' => $translationUnit->getOrigin()
		];
		if ( $isNewTranslation ) {
			// T134245: brand new translations can also insert corpora data in the same
			// request. The doFind() query uses only a subset of a unique cx_corpora index,
			// causing SH gap locks. Worse, is that the leftmost values comes from the
			// auto-incrementing translation_id. This puts gap locks on the range of
			// (MAX(cxc_translation_id),+infinity), which could make the whole API prone
			// to deadlocks and timeouts. Bypass this problem by remembering if the parent
			// translation row is brand new and skipping doFind() in such cases.
			$existing = false;
		} else {
			// Note that the only caller of this method will have already locked the
			// parent Translation row, serializing simultaneous duplicate submissions at
			// this point. Without that row lock, the two transaction might both acquire
			// SH gap locks in doFind() and then deadlock in create() trying to get IX gap
			// locks (if no duplicate rows were found).
			$options = [];
			$dbr = $this->lb->getConnection( DB_REPLICA );
			$existing = $this->doFind( $dbr, $conditions, $options, $fname );
		}

		if ( $existing ) {
			$dbw = $this->lb->getConnection( DB_PRIMARY );
			$dbw->doAtomicSection(
				__METHOD__,
				function ( IDatabase $dbw ) use ( $translationUnit, $conditions, $fname ) {
					// Lock the record for updating it. This time we use $dbw - primary db.
					// This is to avoid the unnecessary gap locking with 'for update' query
					// when the record does not exist.
					$options = [ 'FOR UPDATE' ];
					$existing = $this->doFind( $dbw, $conditions, $options, $fname );
					$this->updateTranslationUnit( $translationUnit, $existing->getTimestamp() );
				}
			);
		} else {
			$this->insertTranslationUnit( $translationUnit );
		}
	}

	/**
	 * @param string $content
	 * @param int $translationId
	 * @return TranslationUnit[]
	 * @throws InvalidSectionDataException
	 */
	public function createTranslationUnitsFromContent( string $content, int $translationId ): array {
		$translationUnits = [];
		$units = json_decode( $content, true );
		foreach ( $units as $translationUnitData ) {
			if ( !isset( $translationUnitData['sectionId'] ) || !is_string( $translationUnitData['origin'] ) ) {
				throw new InvalidSectionDataException();
			}

			$validate = isset( $translationUnitData['validate'] ) && $translationUnitData['validate'];
			$timestamp = $translationUnitData['timestamp'] ?? null;
			$sequenceId = isset( $translationUnitData['sequenceId'] ) ? (int)$translationUnitData['sequenceId'] : null;
			'@phan-var ?string $timestamp';
			$translationUnits[] = new TranslationUnit(
				(string)$translationUnitData['sectionId'],
				$translationUnitData['origin'],
				$sequenceId,
				(string)$translationUnitData['content'], // Content can be null in case translator clear the section.
				$translationId,
				$timestamp,
				$validate
			);
		}

		return $translationUnits;
	}

	private function doFind( IDatabase $db, $conditions, $options, $method ): ?TranslationUnit {
		$row = $db->newSelectQueryBuilder()
			->select( [
				'cxc_translation_id',
				'cxc_section_id',
				'cxc_origin',
				'cxc_timestamp',
				'cxc_sequence_id',
				'cxc_content'
			] )
			->from( self::TABLE_NAME )
			->where( $conditions )
			->orderBy( 'cxc_timestamp', SelectQueryBuilder::SORT_DESC )
			->options( $options )
			->caller( $method )
			->fetchRow();
		if ( $row ) {
			return $this->createTranslationUnitFromRow( $row );
		}

		return null;
	}

	private function createTranslationUnitFromRow( stdClass $row ): TranslationUnit {
		return new TranslationUnit(
			$row->cxc_section_id,
			$row->cxc_origin,
			(int)$row->cxc_sequence_id, // cxc_sequence_id can be null
			(string)$row->cxc_content, // cxc_content can be null
			$row->cxc_translation_id,
			$row->cxc_timestamp
		);
	}
}
