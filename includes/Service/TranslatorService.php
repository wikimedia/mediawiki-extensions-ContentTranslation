<?php

declare( strict_types = 1 );

namespace ContentTranslation\Service;

use ContentTranslation\Store\TranslationStore;
use MediaWiki\User\User;

class TranslatorService {

	private UserService $userService;
	private TranslationStore $translationStore;

	public function __construct( UserService $userService, TranslationStore $translationStore ) {
		$this->userService = $userService;
		$this->translationStore = $translationStore;
	}

	/**
	 * Check whether the user has started at least one translation.
	 * No need to publish. Translation in any status is fine.
	 *
	 * @param User $user
	 * @return bool
	 */
	public function isTranslator( User $user ): bool {
		try {
			$translatorId = $this->userService->getGlobalUserId( $user );
		} catch ( \Exception $e ) {
			// Not a global user and not a translator
			return false;
		}
		$translations = $this->translationStore->getAllTranslationsByUserId( $translatorId, 1 );
		return count( $translations ) > 0;
	}

}
