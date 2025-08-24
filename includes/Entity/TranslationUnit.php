<?php
/**
 * Value object for translation section.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\Entity;

class TranslationUnit {
	private string $sectionId;
	private string $timestamp;

	public function __construct(
		string $sectionId,
		private readonly string $origin,
		private readonly ?int $sequenceId,
		private readonly string $content,
		private readonly int $translationId,
		?string $timestamp = null,
		private readonly ?bool $validate = false
	) {
		// Truncate section id to fit in the database column. The frontend is aware of this
		// limitation and checks the id from content itself if the length is 30 bytes. Also
		// cxserver is aware of this limitation and it should not produce ids that are over
		// 30 bytes. Also, the database does not actually complain unless it is in a strict
		// mode, which is not yet the case for Wikimedia deployment.
		$this->sectionId = substr( $sectionId, 0, 30 );
		$this->timestamp = $timestamp ?? wfTimestamp();
	}

	public function getTranslationId(): int {
		return $this->translationId;
	}

	public function getSectionId(): string {
		return $this->sectionId;
	}

	public function getSequenceId(): ?int {
		return $this->sequenceId;
	}

	public function getOrigin(): string {
		return $this->origin;
	}

	public function getTimestamp(): string {
		return $this->timestamp;
	}

	public function getContent(): string {
		return $this->content;
	}

	public function getValidate(): ?bool {
		return $this->validate;
	}
}
