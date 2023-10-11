<?php
declare( strict_types = 1 );

namespace ContentTranslation\DTO;

use ContentTranslation\Translation;

/**
 * DTO class that encapsulates the payload for a draft translation on desktop editor.
 *
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2023.10
 */
class CXDraftTranslationDTO {
	private int $id;
	private string $targetTitle;
	private string $status;
	private string $progress;
	private ?int $sectionTranslationId;
	private ?string $targetURL;
	private ?string $sourceRevisionId;
	private ?string $targetRevisionId;
	private ?string $targetSectionTitle;
	private ?array $translationUnits;
	private ?string $targetCategories;

	public function __construct(
		int $id,
		string $targetTitle,
		string $status,
		string $progress,
		?int $sectionTranslationId,
		?string $targetURL,
		?string $sourceRevisionId,
		?string $targetRevisionId,
		?string $targetSectionTitle,
		?array $translationUnits,
		?string $targetCategories
	) {
		$this->id = $id;
		$this->targetTitle = $targetTitle;
		$this->status = $status;
		$this->progress = $progress;
		$this->sectionTranslationId = $sectionTranslationId;
		$this->targetURL = $targetURL;
		$this->sourceRevisionId = $sourceRevisionId;
		$this->targetRevisionId = $targetRevisionId;
		$this->targetSectionTitle = $targetSectionTitle;
		$this->translationUnits = $translationUnits;
		$this->targetCategories = $targetCategories;
	}

	public static function createFromTranslation( Translation $translation ): self {
		$translationData = $translation->getData();

		return new self(
			$translationData['id'],
			$translationData['targetTitle'],
			$translationData['status'],
			$translationData['progress'],
			$translationData['sectionTranslationId'] ?? null,
			$translationData['targetURL'],
			$translationData['sourceRevisionId'],
			$translationData['targetRevisionId'],
			$translationData['targetSectionTitle'] ?? null,
			$translationData['translationUnits'],
			$translationData['targetCategories']
		);
	}

	public function toArray(): array {
		return [
			"id" => $this->id,
			"targetTitle" => $this->targetTitle,
			"status" => $this->status,
			"progress" => $this->progress,
			"sectionTranslationId" => $this->sectionTranslationId,
			"targetURL" => $this->targetURL,
			"sourceRevisionId" => $this->sourceRevisionId,
			"targetRevisionId" => $this->targetRevisionId,
			"targetSectionTitle" => $this->targetSectionTitle,
			"translationUnits" => $this->translationUnits,
			"targetCategories" => $this->targetCategories,
		];
	}
}
