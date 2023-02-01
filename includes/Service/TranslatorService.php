<?php

declare( strict_types = 1 );

namespace ContentTranslation\Service;

use CentralIdLookup;
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

}
