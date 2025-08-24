<?php
declare( strict_types = 1 );

/**
 * Service for checking user permissions for ContentTranslation publishing.
 *
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\Service;

use MediaWiki\Config\ServiceOptions;
use MediaWiki\Title\TitleFactory;
use MediaWiki\User\User;
use MediaWiki\User\UserGroupManager;

class UserPermissionChecker {

	/**
	 * @var string[] Members of these groups can publish translations
	 */
	private array $publishGroups;

	/**
	 * @internal For use by ServiceWiring
	 */
	public const CONSTRUCTOR_OPTIONS = [
		'ContentTranslationPublishRequirements'
	];

	public function __construct(
		private readonly TitleFactory $titleFactory,
		private readonly UserGroupManager $userGroupManager,
		ServiceOptions $options
	) {
		$options->assertRequiredOptions( self::CONSTRUCTOR_OPTIONS );

		$publishRequirements = $options->get( 'ContentTranslationPublishRequirements' );
		$userGroups = $publishRequirements['userGroups'] ?? null;

		if ( $userGroups === null ) {
			$this->publishGroups = [];
		} elseif ( !is_array( $userGroups ) ) {
			$this->publishGroups = [ $userGroups ];
		} else {
			$this->publishGroups = $userGroups;
		}
	}

	/**
	 * Check if the user is allowed to publish based on ContentTranslationPublishRequirements configuration.
	 *
	 * @param User $user The user attempting to publish
	 * @param string $title The target title being published to
	 * @param bool $isSandbox Whether this is a sandbox publication (optional, defaults to false)
	 * @return bool True if user can publish, false otherwise
	 */
	public function checkUserCanPublish( User $user, string $title, bool $isSandbox = false ): bool {
		// Don't enforce requirements for sandbox publications
		if ( $isSandbox ) {
			return true;
		}

		$targetTitle = $this->titleFactory->newFromText( $title );
		if ( !$targetTitle ) {
			return false;
		}

		// Only enforce requirements for main namespace publications
		if ( !$targetTitle->inNamespace( NS_MAIN ) ) {
			return true;
		}

		return $this->checkUserGroupRequirements( $user );
	}

	/**
	 * Check if the user meets the configured user group requirements.
	 *
	 * @param User $user The user to check
	 * @return bool True if user meets requirements, false otherwise
	 */
	private function checkUserGroupRequirements( User $user ): bool {
		if ( $this->publishGroups === [] ) {
			// No specific groups required, allow publishing
			return true;
		}

		// Allow if '*' (everyone) is in the required groups
		if ( in_array( '*', $this->publishGroups ) ) {
			return true;
		}

		return $this->userHasRequiredGroup( $user, $this->publishGroups );
	}

	/**
	 * Check if the user has any of the required groups (case-insensitive).
	 *
	 * @param User $user The user to check
	 * @param array $requiredGroups Array of required group names
	 * @return bool True if user has any required group, false otherwise
	 */
	private function userHasRequiredGroup( User $user, array $requiredGroups ): bool {
		$userGroups = $this->userGroupManager->getUserGroups( $user );
		$userGroupsLower = array_map( 'strtolower', $userGroups );
		$requiredGroupsLower = array_map( 'strtolower', $requiredGroups );
		return count( array_intersect( $userGroupsLower, $requiredGroupsLower ) ) > 0;
	}
}
