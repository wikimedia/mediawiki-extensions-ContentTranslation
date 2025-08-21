<?php

declare( strict_types = 1 );

namespace ContentTranslation\DTO;

/**
 * This class is a base class that encapsulates all the basic
 * properties used inside (draft or published) translation DTO
 * classes.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
abstract class AbstractTranslationDTO {
	public function __construct(
		protected int $translationId,
		protected string $sourceTitle,
		protected string $sourceLanguage,
		protected string $targetLanguage,
		protected string $startTimestamp,
		protected string $lastUpdatedTimestamp,
		protected string $pageRevision,
		protected ?string $targetTitle
	) {
	}

	public function getLastUpdatedTimestamp(): string {
		return $this->lastUpdatedTimestamp;
	}

	abstract public function toArray(): array;
}
