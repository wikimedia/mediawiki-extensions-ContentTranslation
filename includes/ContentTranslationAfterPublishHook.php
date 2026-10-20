<?php
declare( strict_types = 1 );

namespace ContentTranslation;

use MediaWiki\Page\PageIdentity;
use MediaWiki\User\UserIdentity;

interface ContentTranslationAfterPublishHook {

	/**
	 * This hook is executed after a translation has been successfully published to the target page, either as a
	 * whole article (ApiContentTranslationPublish) or as a section (ApiSectionTranslationPublish). It is only executed
	 * when the publish created a new revision, i.e. not for null edits.
	 *
	 * The publish APIs will wait for implementations of this hook to complete before returning a response, so if the
	 * implementation needs to do something time-consuming that does not need to be sent back with the response,
	 * consider using a DeferredUpdate or Job.
	 *
	 * @param UserIdentity $user The user who published the translation
	 * @param PageIdentity $targetPage The page the translation was published to, on the current wiki
	 * @param int $targetRevisionId ID of the revision created by the publish
	 * @param string $sourceLanguage Language code of the source wiki
	 * @param string $sourceTitle Title of the source page, on the source wiki
	 * @param string $targetLanguage Language code of the target (i.e., current) wiki
	 * @param bool $isSectionTranslation Whether a section was published, as opposed to a whole article
	 * @return void
	 */
	public function onContentTranslationAfterPublish(
		UserIdentity $user,
		PageIdentity $targetPage,
		int $targetRevisionId,
		string $sourceLanguage,
		string $sourceTitle,
		string $targetLanguage,
		bool $isSectionTranslation
	): void;

}
