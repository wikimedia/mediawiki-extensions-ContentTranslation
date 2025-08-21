<?php

declare( strict_types = 1 );

namespace ContentTranslation\DTO;

/**
 * Unlike the Entity\SectionTranslation class that is mapped to the
 * "cx_section_translations" database table, this DTO class is tuned
 * for exporting draft translation data to views.
 */
class DraftTranslationDTO extends AbstractTranslationDTO {
	private ?array $progress;

	public function __construct(
		private readonly ?int $sectionTranslationId,
		int $translationId,
		private readonly ?string $sectionId,
		string $sourceTitle,
		string $sourceLanguage,
		string $targetLanguage,
		string $startTimestamp,
		string $lastUpdatedTimestamp,
		private readonly string $status,
		string $pageRevision,
		?string $progress,
		?string $targetTitle,
		private readonly ?string $sourceSectionTitle,
		private readonly ?string $targetSectionTitle
	) {
		parent::__construct(
			$translationId,
			$sourceTitle,
			$sourceLanguage,
			$targetLanguage,
			$startTimestamp,
			$lastUpdatedTimestamp,
			$pageRevision,
			$targetTitle
		);
		$progress = $progress ? json_decode( $progress, true ) : null;
		$this->progress = $progress;
	}

	public function toArray(): array {
		return [
			"sectionTranslationId" => $this->sectionTranslationId,
			"translationId" => $this->translationId,
			"sectionId" => $this->sectionId,
			"sourceTitle" => $this->sourceTitle,
			"sourceLanguage" => $this->sourceLanguage,
			"targetLanguage" => $this->targetLanguage,
			"startTimestamp" => $this->startTimestamp,
			"lastUpdatedTimestamp" => $this->lastUpdatedTimestamp,
			"status" => $this->status,
			"pageRevision" => $this->pageRevision,
			"targetTitle" => $this->targetTitle,
			"sourceSectionTitle" => $this->sourceSectionTitle,
			"targetSectionTitle" => $this->targetSectionTitle,
			"progress" => $this->progress,
		];
	}
}
