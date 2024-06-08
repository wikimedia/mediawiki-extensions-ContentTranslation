<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use InvalidArgumentException;
use MediaWiki\Cache\GenderCache;
use MediaWiki\User\CentralId\CentralIdLookup;
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
	private GenderCache $genderCache;

	public function __construct( CentralIdLookup $centralIdLookup, GenderCache $genderCache ) {
		$this->centralIdLookup = $centralIdLookup;
		$this->genderCache = $genderCache;
	}

	public function getGlobalUserId( UserIdentity $user ): int {
		$id = $this->centralIdLookup->centralIdFromLocalUser( $user, CentralIdLookup::AUDIENCE_RAW );
		if ( $id === 0 ) {
			throw new InvalidArgumentException( 'User account is not global' );
		}

		return $id;
	}

	/**
	 * @param int|null $globalUserId
	 * @return array {name: ?string, gender: ?string}
	 */
	public function getUsernameAndGender( ?int $globalUserId ): array {
		$userIdentity = $this->centralIdLookup->localUserFromCentralId( $globalUserId );
		$name = $gender = null;
		if ( $userIdentity ) {
			$name = $userIdentity->getName();
			$gender = $this->genderCache->getGenderOf( $userIdentity, __METHOD__ );
		}

		return [ 'name' => $name, 'gender' => $gender ];
	}

}
