<?php
/**
 * Value object for translation section.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

namespace ContentTranslation;

class TranslationUnit {
	protected $translationId;
	protected $sectionId;
	protected $origin;
	protected $sequenceId;
	protected $content;
	protected $timestamp;
	protected $validate;

	public function __construct( array $params ) {
		if ( isset( $params['translationId'] ) ) {
			$this->translationId = (int)$params['translationId'];
		}
		$this->sectionId = (string)$params['sectionId'];
		$this->origin = (string)$params['origin'];
		$this->sequenceId = (int)$params['sequenceId'];
		$this->content = (string)$params['content'];
		if ( isset( $params['timestamp'] ) ) {
			$this->timestamp = (int)$params['timestamp'];
		} else {
			$this->timestamp = wfTimestamp();
		}
		if ( isset( $params['validate'] ) ) {
			$this->validate = (bool)$params['validate'];
		}
	}

	/**
	 * @param \stdClass $row
	 * @return TranslationUnit
	 */
	public static function newFromRow( $row ) {
		$params = [
			'translationId' => $row->cxc_translation_id,
			'sectionId' => $row->cxc_section_id,
			'origin' => $row->cxc_origin,
			'sequenceId' => $row->cxc_sequence_id,
			'content' => $row->cxc_content,
			'timestamp' => $row->cxc_timestamp,
		];

		return new self( $params );
	}

	public function getTranslationId() {
		return $this->translationId;
	}

	public function getSectionId() {
		return $this->sectionId;
	}

	public function getSequenceId() {
		return $this->sequenceId;
	}

	public function getOrigin() {
		return $this->origin;
	}

	public function getTimestamp() {
		return $this->timestamp;
	}

	public function getContent() {
		return $this->content;
	}

	public function getValidate() {
		return $this->validate;
	}
}
