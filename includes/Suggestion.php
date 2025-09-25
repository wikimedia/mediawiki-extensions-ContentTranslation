<?php

namespace ContentTranslation;

use MediaWiki\Title\Title;
use stdClass;

class Suggestion {
	protected string $title;
	protected string $sourceLanguage;
	protected string $targetLanguage;

	public function __construct( array $params ) {
		$this->title = (string)$params['title'];
		$this->sourceLanguage = (string)$params['sourceLanguage'];
		$this->targetLanguage = (string)$params['targetLanguage'];
	}

	public static function newFromRow( stdClass $row ): self {
		$params = [
			'title' => $row->cxs_title,
			'sourceLanguage' => $row->cxs_source_language,
			'targetLanguage' => $row->cxs_target_language,
		];

		return new self( $params );
	}

	public function getTitle(): ?Title {
		return Title::newFromText( $this->title );
	}

	public function getSourceLanguage(): string {
		return $this->sourceLanguage;
	}

	public function getTargetLanguage(): string {
		return $this->targetLanguage;
	}

	public function __toString(): string {
		return $this->title;
	}
}
