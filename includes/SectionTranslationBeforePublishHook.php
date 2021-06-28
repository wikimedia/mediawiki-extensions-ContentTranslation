<?php

namespace ContentTranslation;

use Title;
use User;

interface SectionTranslationBeforePublishHook {

	/**
	 * This hook is executed in the ApiSectionTranslationPublish before a publish attempt.
	 *
	 * ApiSectionTranslationPublish will wait for implementations of this hook to complete before returning a response, so
	 * if the implementation needs to do something time-consuming that does not need to be sent back with the response,
	 * consider using a DeferredUpdate or Job.
	 *
	 * @param Title $title The article title to while sections are about to add.
	 * @param string $language The language of the article to be published.
	 * @param User $user
	 * @return void
	 */
	public function onSectionTranslationBeforePublish(
		Title $title,
		string $language,
		User $user
	): void;

}
