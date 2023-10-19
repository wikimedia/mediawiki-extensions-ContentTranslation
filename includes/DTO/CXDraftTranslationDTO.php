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
	private ?string $targetURL;
	private ?string $sourceRevisionId;
	private ?string $targetRevisionId;
	private ?array $translationUnits;
	private ?string $targetCategories;

	public function __construct(
		int $id,
		string $targetTitle,
		string $status,
		string $progress,
		?string $targetURL,
		?string $sourceRevisionId,
		?string $targetRevisionId,
		?array $translationUnits,
		?string $targetCategories
	) {
		$this->id = $id;
		$this->targetTitle = $targetTitle;
		$this->status = $status;
		$this->progress = $progress;
		$this->targetURL = $targetURL;
		$this->sourceRevisionId = $sourceRevisionId;
		$this->targetRevisionId = $targetRevisionId;
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
			$translationData['targetURL'],
			$translationData['sourceRevisionId'],
			$translationData['targetRevisionId'],
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
			"targetURL" => $this->targetURL,
			"sourceRevisionId" => $this->sourceRevisionId,
			"targetRevisionId" => $this->targetRevisionId,
			"translationUnits" => $this->translationUnits,
			"targetCategories" => $this->targetCategories,
		];
	}
}
