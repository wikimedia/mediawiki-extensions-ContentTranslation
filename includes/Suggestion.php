<?php

namespace ContentTranslation;

class Suggestion {
	protected $listId;
	protected $title;
	protected $sourceLanguage;
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

	public function getListId() {
		return $this->listId;
	}

	public function getTitle() {
		return \Title::newFromText( $this->title );
	}

	public function getSourceLanguage() {
		return $this->sourceLanguage;
	}

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
