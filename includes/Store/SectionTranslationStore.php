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

	private function translationToDBRow( SectionTranslation $translation ): array {
		return [
			'cxsx_translation_id' => $translation->getTranslationId(),
			'cxsx_section_id' => $translation->getSectionId(),
			'cxsx_source_section_title' => $translation->getSourceSectionTitle(),
			'cxsx_target_section_title' => $translation->getTargetSectionTitle(),
		];
	}
}
