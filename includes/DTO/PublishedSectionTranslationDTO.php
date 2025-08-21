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
	public function __construct(
		private readonly int $sectionTranslationId,
		private readonly string $sectionId,
		private readonly string $startTimestamp,
		private readonly string $lastUpdatedTimestamp,
		private readonly string $sourceSectionTitle,
		private readonly string $targetSectionTitle
	) {
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
