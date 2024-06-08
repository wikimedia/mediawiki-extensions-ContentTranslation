<?php
declare( strict_types = 1 );

namespace ContentTranslation;

use MediaWiki\HookContainer\HookContainer;
use MediaWiki\Title\Title;
use MediaWiki\User\User;

class ContentTranslationHookRunner implements SectionTranslationBeforePublishHook {
	private HookContainer $hookContainer;

	public function __construct( HookContainer $hookContainer ) {
		$this->hookContainer = $hookContainer;
	}

	/** @inheritDoc */
	public function onSectionTranslationBeforePublish(
		Title $title,
		string $language,
		User $user
	): void {
		$this->hookContainer->run(
			'SectionTranslationBeforePublish',
			[ $title, $language, $user ],
			[ 'abortable' => false ]
		);
	}
}
