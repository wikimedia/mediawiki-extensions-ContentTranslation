<?php

declare( strict_types = 1 );

namespace ContentTranslation\Store;

use ContentTranslation\Entity\SectionTranslation;
use ContentTranslation\LoadBalancer;

class SectionTranslationStore {
	public const TABLE_NAME = 'cx_section_translations';

	/** @var LoadBalancer */
	private $lb;

	public function __construct( LoadBalancer $loadBalancer ) {
		$this->lb = $loadBalancer;
	}

	public function insertTranslation( SectionTranslation $translation ) {
		$dbw = $this->lb->getConnection( DB_PRIMARY );
		$values = $this->translationToDBRow( $translation );
		$dbw->insert( self::TABLE_NAME, $values, __METHOD__ );
		$translation->setId( $dbw->insertId() );
	}

	public function updateTranslation( SectionTranslation $translation ) {
		$dbw = $this->lb->getConnection( DB_PRIMARY );
		$values = $this->translationToDBRow( $translation );
		$dbw->update(
			self::TABLE_NAME,
			$values,
			[ 'cxsx_id' => $translation->getId() ],
			__METHOD__
		);
	}

	public function findTranslation( int $translationId, string $sectionId ): ?SectionTranslation {
		$dbr = $this->lb->getConnection( DB_REPLICA );

		$values = [ 'cxsx_translation_id' => $translationId, 'cxsx_section_id' => $sectionId ];

		$row = $dbr->selectRow( self::TABLE_NAME, \IDatabase::ALL_ROWS, $values, __METHOD__ );
		return $row ? $this->createTranslationFromRow( $row ) : null;
	}

	public function createTranslationFromRow( \stdClass $row ): SectionTranslation {
		return new SectionTranslation(
			(int)$row->cxsx_id,
			(int)$row->cxsx_translation_id,
			$row->cxsx_section_id,
			$row->cxsx_source_section_title,
			$row->cxsx_target_section_title
		);
	}

	private function translationToDBRow( SectionTranslation $translation ): array {
		return [
			'cxsx_translation_id' => $translation->getTranslationId(),
			'cxsx_section_id' => $translation->getSectionId(),
			'cxsx_source_section_title' => $translation->getSourceSectionTitle(),
			'cxsx_target_section_title' => $translation->getTargetSectionTitle(),
		];
	}
}