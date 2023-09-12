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
	private string $targetUrl;

	public function __construct(
		int $translationId,
		string $sourceTitle,
		string $sourceLanguage,
		string $targetLanguage,
		string $startTimestamp,
		string $lastUpdatedTimestamp,
		string $pageRevision,
		// corresponds to the "translation_target_title" field of "cx_translations" table, which cannot be null
		string $targetTitle,
		// cannot be null for published translations
		string $targetUrl,
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
		$this->targetUrl = $targetUrl;
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
			"targetUrl" => $this->targetUrl,
			"sectionTranslations" => array_map( static function ( PublishedSectionTranslationDTO $dto ) {
				return $dto->toArray();
			}, $this->sectionTranslations )
		];
	}
}
