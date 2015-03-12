<?php
namespace ContentTranslation;

class GlobalUser {
	protected $user;

	private function __construct( $user ) {
		$this->user = $user;
	}

	public static function newFromUser( \User $user ) {
		// Use CentralAuth if available. Use local user to ease testing.
		if ( class_exists( '\CentralAuthUser' ) ) {
			$user = \CentralAuthUser::getInstance( $user );
		}

		if ( $user === null ) {
			throw new \MWException( "Unable to find global user for" );
		}

		return new GlobalUser( $user );
	}

	/**
	 * Get a GlobalUser object from a user's global id
	 *
	 * @param int $id
	 * @return GlobalUser
	 */
	public static function newFromId( $id ) {
		// Use CentralAuth if available. Use local user to ease testing.
		if ( class_exists( '\CentralAuthUser' ) ) {
			$user = \CentralAuthUser::newFromId( $id );
		} else {
			$user = \User::newFromId( $id );
		}

		if ( $user === null ) {
			throw new \MWException( "Unable to find global user for" );
		}

		return new GlobalUser( $user );
	}


	public function getId() {
		return $this->user->getId();
	}

	public function getName() {
		return $this->user->getName();
	}
}
