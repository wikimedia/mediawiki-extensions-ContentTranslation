<?php

namespace ContentTranslation;

use MediaWiki\HookContainer\HookContainer;
use Title;
use User;

class ContentTranslationHookRunner implements SectionTranslationBeforePublishHook {

	public const SERVICE_NAME = 'ContentTranslationHookRunner';

	/** @var HookContainer */
	private $hookContainer;

	/**
	 * @param HookContainer $hookContainer
	 */
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
