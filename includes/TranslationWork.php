<?php
/**
 * @author Niklas Laxström
 */

namespace ContentTranslation;

/**
 * A value object for referencing a certain translation work, which consists of
 * an article name and a source language and a target language.
 */
class TranslationWork {
	private $page;
	private $from;
	private $to;

	public function __construct( $page, $from, $to ) {
		// TODO: validate these
		$this->page = $page;
		$this->from = $from;
		$this->to = $to;
	}

	public function getPage() {
		return $this->page;
	}

	public function getSourceLanguage() {
		return $this->from;
	}

	public function getTargetLanguage() {
		return $this->to;
	}

	public static function newFromTranslation( Translation $translation ) {
		$data = $translation->getData();
		return new self(
			$data['sourceTitle'],
			$data['sourceLanguage'],
			$data['targetLanguage']
		);
	}
}
