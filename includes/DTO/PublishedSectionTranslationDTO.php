<?php

declare( strict_types = 1 );

namespace ContentTranslation\DTO;

/**
 * This class encapsulates published section translation data transfer
 * objects, that are used inside the "$sectionTranslations" property
 * of PublishedTranslationDTO class to represent all the published section
 * translations for a specific published translation.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
class PublishedSectionTranslationDTO {
	private int $sectionTranslationId;
	private string $sectionId;
	private string $startTimestamp;
	private string $lastUpdatedTimestamp;
	private string $sourceSectionTitle;
	private string $targetSectionTitle;

	public function __construct(
		int $sectionTranslationId,
		string $sectionId,
		string $startTimestamp,
		string $lastUpdatedTimestamp,
		string $sourceSectionTitle,
		string $targetSectionTitle
	) {
		$this->sectionTranslationId = $sectionTranslationId;
		$this->sectionId = $sectionId;
		$this->startTimestamp = $startTimestamp;
		$this->lastUpdatedTimestamp = $lastUpdatedTimestamp;
		$this->sourceSectionTitle = $sourceSectionTitle;
		$this->targetSectionTitle = $targetSectionTitle;
	}

	public function toArray(): array {
		return [
			"sectionTranslationId" => $this->sectionTranslationId,
			"sectionId" => $this->sectionId,
			"startTimestamp" => $this->startTimestamp,
			"lastUpdatedTimestamp" => $this->lastUpdatedTimestamp,
			"sourceSectionTitle" => $this->sourceSectionTitle,
			"targetSectionTitle" => $this->targetSectionTitle,
		];
	}
}
