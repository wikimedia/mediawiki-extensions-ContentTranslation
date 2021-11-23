<?php

declare( strict_types=1 );

namespace ContentTranslation\Entity;

class RecentSignificantEdit {
	/** @var int|null */
	private $id;

	/** @var int */
	private $userId;

	/** @var int */
	private $pageWikidataId;

	/**
	 * @var string language code (e.g. "en")
	 */
	private $language;

	/** @var string */
	private $pageTitle;

	/** @var string[] */
	private $sectionTitles;

	/** @var string|null */
	private $timestamp;

	public function __construct(
		?int $id,
		int $userId,
		int $pageWikidataId,
		string $language,
		string $pageTitle,
		array $sectionTitles,
		?string $timestamp
	) {
		$this->id = $id;
		$this->userId = $userId;
		$this->pageWikidataId = $pageWikidataId;
		$this->language = $language;
		$this->pageTitle = $pageTitle;
		$this->sectionTitles = $sectionTitles;
		$this->timestamp = $timestamp;
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
