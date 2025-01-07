<?php

namespace ContentTranslation;

use MediaWiki\Title\Title;

class Suggestion {
	/** @var int */
	protected $listId;
	/** @var string */
	protected $title;
	/** @var string */
	protected $sourceLanguage;
	/** @var string */
	protected $targetLanguage;

	public function __construct( array $params ) {
		$this->listId = (int)$params['listId'];
		$this->title = (string)$params['title'];
		$this->sourceLanguage = (string)$params['sourceLanguage'];
		$this->targetLanguage = (string)$params['targetLanguage'];
	}

	/**
	 * @param \stdClass $row
	 * @return Suggestion
	 */
	public static function newFromRow( $row ) {
		$params = [
			'listId' => $row->cxs_list_id,
			'title' => $row->cxs_title,
			'sourceLanguage' => $row->cxs_source_language,
			'targetLanguage' => $row->cxs_target_language,
		];

		return new Suggestion( $params );
	}

	/**
	 * @return int
	 */
	public function getListId() {
		return $this->listId;
	}

	/**
	 * @return Title|null
	 */
	public function getTitle() {
		return Title::newFromText( $this->title );
	}

	/**
	 * @return string
	 */
	public function getSourceLanguage() {
		return $this->sourceLanguage;
	}

	/**
	 * @return string
	 */
	public function getTargetLanguage() {
		return $this->targetLanguage;
	}

	/**
	 * @return string
	 */
	public function __toString() {
		return $this->title;
	}
}
