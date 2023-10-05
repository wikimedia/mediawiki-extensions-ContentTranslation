<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use CentralIdLookup;
use Exception;
use MediaWiki\User\UserIdentity;

/**
 * Service that provides user-related functionality.
 *
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2023.10
 */
class UserService {
	private CentralIdLookup $centralIdLookup;

	public function __construct( CentralIdLookup $centralIdLookup ) {
		$this->centralIdLookup = $centralIdLookup;
	}

	public function getGlobalUserId( UserIdentity $user ): int {
		$id = $this->centralIdLookup->centralIdFromLocalUser( $user, CentralIdLookup::AUDIENCE_RAW );
		if ( $id === 0 ) {
			throw new Exception( 'User account is not global' );
		}

		return $id;
	}
}
