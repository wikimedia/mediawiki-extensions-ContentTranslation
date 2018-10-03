<?php
/**
 * Value object for translation section.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
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

		// Truncate section id to fit in the database column. The frontend is aware of this
		// limitation and checks the id from content itself if the length is 30 bytes. Also
		// cxserver is aware of this limitation and it should not produce ids that are over
		// 30 bytes. Also, the database does not actually complain unless it is in a strict
		// mode, which is not yet the case for Wikimedia deployment.
		$this->sectionId = substr( (string)$params['sectionId'], 0, 30 );
		$this->origin = (string)$params['origin'];
		$this->sequenceId = (int)$params['sequenceId'];
		$this->content = (string)$params['content'];
		if ( isset( $params['timestamp'] ) ) {
			$this->timestamp = $params['timestamp'];
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
