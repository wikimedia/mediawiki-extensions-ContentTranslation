<?php

namespace ContentTranslation;

class Translation {
	private bool $isNew = false;

	/** @var array */
	public $translation;

	/**
	 * @param array $translation
	 */
	public function __construct( $translation ) {
		$this->translation = $translation;
	}

	/**
	 * @return bool Whether the last CRUD operation on this translation was "create"
	 */
	public function isNew(): bool {
		return $this->isNew;
	}

	public function setIsNew( bool $isNew ): void {
		$this->isNew = $isNew;
	}

	/**
	 * @return int
	 */
	public function getTranslationId() {
		return $this->translation['id'];
	}

	public function getSourceTitle(): string {
		return $this->translation['sourceTitle'];
	}

	public function getSourceLanguage(): string {
		return $this->translation['sourceLanguage'];
	}

	public function getTargetLanguage(): string {
		return $this->translation['targetLanguage'];
	}

	public function getStatus(): string {
		return $this->translation['status'];
	}

	/**
	 * Return the underlying data fields.
	 *
	 * @return array
	 */
	public function getData() {
		return $this->translation;
	}

	/**
	 * @param \stdClass $row
	 * @return self
	 */
	public static function newFromRow( $row ) {
		$fields = [
			'id' => (int)$row->translation_id,
			'sourceTitle' => $row->translation_source_title,
			'targetTitle' => $row->translation_target_title,
			'sourceLanguage' => $row->translation_source_language,
			'targetLanguage' => $row->translation_target_language,
			'sourceRevisionId' => $row->translation_source_revision_id,
			'targetRevisionId' => $row->translation_target_revision_id,
			'sourceURL' => $row->translation_source_url,
			'targetURL' => $row->translation_target_url,
			'status' => $row->translation_status,
			'startTimestamp' => $row->translation_start_timestamp,
			'lastUpdateTimestamp' => $row->translation_last_updated_timestamp,
			'progress' => $row->translation_progress,
			'startedTranslator' => $row->translation_started_by,
			'lastUpdatedTranslator' => $row->translation_last_update_by,
			'cxVersion' => 1,
		];

		// BC code to gracefully handle lack of schema change
		if ( isset( $row->translation_cx_version ) ) {
			$fields['cxVersion'] = (int)$row->translation_cx_version;
		}

		return new self( $fields );
	}
}
