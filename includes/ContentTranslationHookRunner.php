<?php
declare( strict_types = 1 );

namespace ContentTranslation;

use MediaWiki\HookContainer\HookContainer;
use MediaWiki\Page\PageIdentity;
use MediaWiki\Title\Title;
use MediaWiki\User\User;
use MediaWiki\User\UserIdentity;

class ContentTranslationHookRunner implements
	SectionTranslationBeforePublishHook,
	ContentTranslationAfterPublishHook
{

	public function __construct( private readonly HookContainer $hookContainer ) {
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

	/** @inheritDoc */
	public function onContentTranslationAfterPublish(
		UserIdentity $user,
		PageIdentity $targetPage,
		int $targetRevisionId,
		string $sourceLanguage,
		string $sourceTitle,
		string $targetLanguage,
		bool $isSectionTranslation
	): void {
		$this->hookContainer->run(
			'ContentTranslationAfterPublish',
			[
				$user,
				$targetPage,
				$targetRevisionId,
				$sourceLanguage,
				$sourceTitle,
				$targetLanguage,
				$isSectionTranslation
			],
			[ 'abortable' => false ]
		);
	}
}
