<?php

declare( strict_types=1 );

namespace ContentTranslation\Entity;

class RecentSignificantEdit {

	public function __construct(
		private ?int $id,
		private readonly int $userId,
		private readonly int $pageWikidataId,
		private readonly string $language,
		private readonly string $pageTitle,
		/** @var string[] */
		private array $sectionTitles,
		private readonly ?string $timestamp
	) {
	}

	public function setId( int $id ): void {
		$this->id = $id;
	}

	public function getId(): ?int {
		return $this->id;
	}

	public function getUserId(): int {
		return $this->userId;
	}

	public function getPageWikidataId(): int {
		return $this->pageWikidataId;
	}

	public function getPageTitle(): string {
		return $this->pageTitle;
	}

	public function getLanguage(): string {
		return $this->language;
	}

	/** @return string[] */
	public function getSectionTitles(): array {
		return $this->sectionTitles;
	}

	public function getTimestamp(): ?string {
		return $this->timestamp;
	}

	/**
	 * @param string[] $newSectionTitles
	 */
	public function mergeSectionTitles( array $newSectionTitles ): void {
		$this->sectionTitles = array_unique( array_merge( $this->sectionTitles, $newSectionTitles ) );
	}
}
