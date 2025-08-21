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
	public function __construct(
		private readonly int $id,
		private readonly string $targetTitle,
		private readonly string $status,
		private readonly string $progress,
		private readonly ?int $sectionTranslationId,
		private readonly ?string $targetURL,
		private readonly ?string $sourceRevisionId,
		private readonly ?string $targetRevisionId,
		private readonly ?string $targetSectionTitle,
		private readonly ?array $translationUnits,
		private readonly ?string $targetCategories
	) {
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
