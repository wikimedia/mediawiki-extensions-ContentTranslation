<?php

namespace ContentTranslation\Store;

use ContentTranslation\LoadBalancer;

class TranslationStore {

	public const TRANSLATION_TABLE_NAME = 'cx_translations';
	public const TRANSLATOR_TABLE_NAME = 'cx_translators';

	/** @var LoadBalancer */
	private $lb;

	public function __construct( LoadBalancer $lb ) {
		$this->lb = $lb;
	}

	public function unlinkTranslationFromTranslator( int $translationId ) {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$dbw->delete(
			self::TRANSLATOR_TABLE_NAME,
			[ 'translator_translation_id' => $translationId ],
			__METHOD__
		);
	}

	public function deleteTranslation( int $translationId ) {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$dbw->update(
			self::TRANSLATION_TABLE_NAME,
			[ 'translation_status' => 'deleted' ],
			[ 'translation_id' => $translationId ],
			__METHOD__
		);
	}

}
