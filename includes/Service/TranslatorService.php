<?php

declare( strict_types = 1 );

namespace ContentTranslation\Service;

use CentralIdLookup;
use ContentTranslation\Store\TranslationStore;
use Exception;
use User;

class TranslatorService {

	private CentralIdLookup $centralIdLookup;
	private TranslationStore $translationStore;

	public function __construct( CentralIdLookup $centralIdLookup, TranslationStore $translationStore ) {
		$this->centralIdLookup = $centralIdLookup;
		$this->translationStore = $translationStore;
	}

	/**
	 * @param User $user
	 * @return int
	 * @throws Exception
	 */
	public function getGlobalUserId( User $user ): int {
		$id = $this->centralIdLookup->centralIdFromLocalUser( $user, CentralIdLookup::AUDIENCE_RAW );
		if ( $id === 0 ) {
			throw new Exception( 'User account is not global' );
		}

		return $id;
	}

	/**
	 * Check whether the user has started at least one translation.
	 * No need to publish. Translation in any status is fine.
	 *
	 * @param User $user
	 * @return bool
	 */
	public function isTranslator( User $user ) {
		try {
			$translatorId = $this->getGlobalUserId( $user );
		} catch ( \Exception $e ) {
			// Not a global user and not a translator
			return false;
		}
		$translations = $this->translationStore->getAllTranslationsByUserId( $translatorId, 1 );
		return count( $translations ) > 0;
	}

}
