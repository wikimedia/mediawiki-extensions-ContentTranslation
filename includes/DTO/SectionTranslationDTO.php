<?php

namespace ContentTranslation\DTO;

/**
 * Unlike the Entity\SectionTranslation class that is mapped to the
 * "cx_section_translations" database table, this DTO class is tuned
 * for exporting section translation data to views.
 */
class SectionTranslationDTO {
	private int $sectionTranslationId;
	private int $translationId;
	private ?string $sectionId;
	private string $sourceTitle;
	private string $sourceLanguage;
	private string $targetLanguage;
	private string $startTimestamp;
	private string $lastUpdatedTimestamp;
	private string $status;
	private string $pageRevision;
	private ?string $targetTitle;
	private ?string $sourceSectionTitle;
	private ?string $targetSectionTitle;
	private ?array $progress;

	public function __construct(
		int $sectionTranslationId,
		int $translationId,
		string $sectionId,
		string $sourceTitle,
		string $sourceLanguage,
		string $targetLanguage,
		string $startTimestamp,
		string $lastUpdatedTimestamp,
		string $status,
		string $pageRevision,
		?string $progress,
		?string $targetTitle,
		?string $sourceSectionTitle,
		?string $targetSectionTitle
	) {
		$this->sectionTranslationId = $sectionTranslationId;
		$this->translationId = $translationId;
		$this->sectionId = $sectionId;
		$this->sourceTitle = $sourceTitle;
		$this->sourceLanguage = $sourceLanguage;
		$this->targetLanguage = $targetLanguage;
		$this->startTimestamp = $startTimestamp;
		$this->lastUpdatedTimestamp = $lastUpdatedTimestamp;
		$this->status = $status;
		$this->pageRevision = $pageRevision;
		$this->targetTitle = $targetTitle;
		$this->sourceSectionTitle = $sourceSectionTitle;
		$this->targetSectionTitle = $targetSectionTitle;
		$progress = $progress ? json_decode( $progress, true ) : null;
		$this->progress = $progress;
	}

	public function getLastUpdatedTimestamp(): string {
		return $this->lastUpdatedTimestamp;
	}

	/**
	 * @return array
	 */
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
