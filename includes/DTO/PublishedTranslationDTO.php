<?php

declare( strict_types = 1 );

namespace ContentTranslation\DTO;

/**
 * This class represents data transfer objects, used to return
 * published translations from the Content Translation API.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
class PublishedTranslationDTO extends AbstractTranslationDTO {
	/** @var PublishedSectionTranslationDTO[] */
	private array $sectionTranslations;

	public function __construct(
		int $translationId,
		string $sourceTitle,
		string $sourceLanguage,
		string $targetLanguage,
		string $startTimestamp,
		string $lastUpdatedTimestamp,
		string $pageRevision,
		?string $targetTitle,
		array $sectionTranslations
	) {
		parent::__construct(
			$translationId,
			$sourceTitle,
			$sourceLanguage,
			$targetLanguage,
			$startTimestamp,
			$lastUpdatedTimestamp,
			$pageRevision,
			$targetTitle,
		);

		$this->sectionTranslations = $sectionTranslations;
	}

	public function toArray(): array {
		return [
			"translationId" => $this->translationId,
			"sourceTitle" => $this->sourceTitle,
			"sourceLanguage" => $this->sourceLanguage,
			"targetLanguage" => $this->targetLanguage,
			"startTimestamp" => $this->startTimestamp,
			"lastUpdatedTimestamp" => $this->lastUpdatedTimestamp,
			"pageRevision" => $this->pageRevision,
			"targetTitle" => $this->targetTitle,
			"sectionTranslations" => array_map( static function ( PublishedSectionTranslationDTO $dto ) {
				return $dto->toArray();
			}, $this->sectionTranslations )
		];
	}
}
