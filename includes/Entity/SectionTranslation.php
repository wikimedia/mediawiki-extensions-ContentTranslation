<?php

declare( strict_types = 1 );

namespace ContentTranslation\Entity;

/**
 * Model for "cx_section_translations" table (defined in section-translations.sql file)
 */
class SectionTranslation {
	protected $id;
	protected $translationId;
	protected $sectionId;
	protected $sourceSectionTitle;
	protected $targetSectionTitle;

	public function __construct(
		?int $id,
		int $translationId,
		string $sectionId,
		string $sourceSectionTitle,
		string $targetSectionTitle
	) {
		$this->id = $id;
		$this->translationId = $translationId;
		$this->sectionId = $sectionId;
		$this->sourceSectionTitle = $sourceSectionTitle;
		$this->targetSectionTitle = $targetSectionTitle;
	}

	public function getId(): ?int {
		return $this->id;
	}

	public function setId( ?int $id ): void {
		$this->id = $id;
	}

	public function getSectionId(): string {
		return $this->sectionId;
	}

	public function getTranslationId(): int {
		return $this->translationId;
	}

	public function getSourceSectionTitle(): string {
		return $this->sourceSectionTitle;
	}

	public function getTargetSectionTitle(): string {
		return $this->targetSectionTitle;
	}
}
