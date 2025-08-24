<?php

declare( strict_types = 1 );

namespace ContentTranslation\Entity;

/**
 * Model for "cx_section_translations" table (defined in section-translations.sql file)
 */
class SectionTranslation {

	public function __construct(
		private ?int $id,
		private readonly int $translationId,
		private readonly string $sectionId,
		private readonly string $sourceSectionTitle,
		private string $targetSectionTitle,
		// letting this to be null for backward compatibility, since the field was
		// just recently added to the "cx_section_translations" table
		/** The status of the translation. 0 for "draft", 1 for "published", 2 for "deleted" */
		private ?int $translationStatus,
		private string $progress
	) {
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

	public function setTargetSectionTitle( string $targetSectionTitle ): void {
		$this->targetSectionTitle = $targetSectionTitle;
	}

	public function setTranslationStatus( ?int $translationStatus ): void {
		$this->translationStatus = $translationStatus;
	}

	public function getTranslationStatus(): ?int {
		return $this->translationStatus;
	}

	public function getProgress(): string {
		return $this->progress;
	}

	public function setProgress( string $progress ): void {
		$this->progress = $progress;
	}
}
