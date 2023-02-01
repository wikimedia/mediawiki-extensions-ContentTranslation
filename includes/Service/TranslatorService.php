<?php

declare( strict_types = 1 );

namespace ContentTranslation\Service;

use CentralIdLookup;
use ContentTranslation\Translator;
use Exception;
use MediaWiki\User\CentralId\CentralIdLookupFactory;
use User;

class TranslatorService {

	private CentralIdLookupFactory $centralIdLookupFactory;

	// TODO: Should we inject CentralIdLookup service directly?
	public function __construct( CentralIdLookupFactory $centralIdLookupFactory ) {
		$this->centralIdLookupFactory = $centralIdLookupFactory;
	}

	/**
	 * @param User $user
	 * @return int
	 * @throws Exception
	 */
	public function getGlobalUserId( User $user ): int {
		$lookup = $this->centralIdLookupFactory->getLookup();
		$id = $lookup->centralIdFromLocalUser( $user, CentralIdLookup::AUDIENCE_RAW );
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
		$translator = new Translator( $user );
		$translations = $translator->getAllTranslations( 1 /*limit*/ );
		return count( $translations ) > 0;
	}

}
