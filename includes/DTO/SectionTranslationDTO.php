<?php

namespace ContentTranslation\DTO;

/**
 * Unlike the Entity\SectionTranslation class that is mapped to the
 * "cx_section_translations" database table, this DTO class is tuned
 * for exporting section translation data to views.
 */
class SectionTranslationDTO {
	private $translationId;
	private $sourceTitle;
	private $sourceLanguage;
	private $targetLanguage;
	private $startTimestamp;
	private $lastUpdatedTimestamp;
	private $status;
	private $pageRevision;
	private $targetTitle;
	private $sourceSectionTitle;
	private $targetSectionTitle;

	public function __construct(
		string $translationId,
		string $sourceTitle,
		string $sourceLanguage,
		string $targetLanguage,
		string $startTimestamp,
		string $lastUpdatedTimestamp,
		string $status,
		string $pageRevision,
		?string $targetTitle,
		?string $sourceSectionTitle,
		?string $targetSectionTitle
	) {
		$this->translationId = $translationId;
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
	}

	public function getLastUpdatedTimestamp(): string {
		return $this->lastUpdatedTimestamp;
	}

	/**
	 * @return array
	 */
	public function toArray(): array {
		return [
			"translationId" => $this->translationId,
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
		];
	}
}
