<?php
declare( strict_types=1 );

namespace ContentTranslation\Tests\Service;

use ContentTranslation\Service\UserPermissionChecker;
use MediaWiki\Config\ServiceOptions;
use MediaWiki\Title\Title;
use MediaWiki\Title\TitleFactory;
use MediaWiki\User\User;
use MediaWiki\User\UserGroupManager;
use MediaWikiUnitTestCase;

/**
 * @covers \ContentTranslation\Service\UserPermissionChecker
 * @group ContentTranslation
 */
class UserPermissionCheckerTest extends MediaWikiUnitTestCase {

	private function createUserPermissionChecker(
		?array $publishRequirements = null,
		array $userGroups = [],
		bool $isMainNamespace = true
	): UserPermissionChecker {
		$title = $this->createMock( Title::class );
		$title->method( 'inNamespace' )
			->with( NS_MAIN )
			->willReturn( $isMainNamespace );

		$titleFactory = $this->createMock( TitleFactory::class );
		$titleFactory->method( 'newFromText' )
			->willReturn( $title );

		$userGroupManager = $this->createMock( UserGroupManager::class );
		$userGroupManager->method( 'getUserGroups' )
			->willReturn( $userGroups );

		return new UserPermissionChecker(
			$titleFactory,
			$userGroupManager,
			new ServiceOptions( UserPermissionChecker::CONSTRUCTOR_OPTIONS, [
				'ContentTranslationPublishRequirements' => $publishRequirements ?? []
			] )
		);
	}

	public function testCheckUserCanPublish_NotMainNamespace_ReturnsTrue() {
		$requirements = [ 'userGroups' => [ 'translator' ] ];
		$userGroups = [ 'user' ]; // User lacks required group
		$checker = $this->createUserPermissionChecker( $requirements, $userGroups, false );
		$user = $this->createMock( User::class );

		$result = $checker->checkUserCanPublish( $user, 'User:TestUser/MyPage' );

		$this->assertTrue( $result );
	}

	public function testCheckUserCanPublish_SandboxPublication_ReturnsTrue() {
		$requirements = [ 'userGroups' => [ 'translator' ] ];
		$userGroups = [ 'user' ]; // User lacks required group
		$checker = $this->createUserPermissionChecker( $requirements, $userGroups );
		$user = $this->createMock( User::class );

		$result = $checker->checkUserCanPublish( $user, 'Test Page', true );

		$this->assertTrue( $result );
	}

	public function testCheckUserCanPublish_InvalidTitle_ReturnsFalse() {
		$titleFactory = $this->createMock( TitleFactory::class );
		$titleFactory->method( 'newFromText' )
			->willReturn( null ); // Invalid title
		$userGroupManager = $this->createMock( UserGroupManager::class );

		$checker = new UserPermissionChecker(
			$titleFactory,
			$userGroupManager,
			new ServiceOptions(
				UserPermissionChecker::CONSTRUCTOR_OPTIONS,
				[ 'ContentTranslationPublishRequirements' => [] ]
			)
		);
		$user = $this->createMock( User::class );

		$result = $checker->checkUserCanPublish( $user, '' );

		$this->assertFalse( $result );
	}

	public function testCheckUserCanPublish_CaseInsensitiveGroupMatching_ReturnsTrue() {
		$requirements = [ 'userGroups' => [ 'Translator', 'EDITOR' ] ];
		$userGroups = [ 'user', 'translator' ]; // lowercase user group
		$checker = $this->createUserPermissionChecker( $requirements, $userGroups );
		$user = $this->createMock( User::class );

		$result = $checker->checkUserCanPublish( $user, 'Test Page' );

		$this->assertTrue( $result );
	}

	public function testCheckUserCanPublish_CaseInsensitiveStringGroup_ReturnsTrue() {
		$requirements = [ 'userGroups' => 'TRANSLATOR' ]; // uppercase requirement
		$userGroups = [ 'translator', 'user' ]; // lowercase user group
		$checker = $this->createUserPermissionChecker( $requirements, $userGroups );
		$user = $this->createMock( User::class );

		$result = $checker->checkUserCanPublish( $user, 'Test Page' );

		$this->assertTrue( $result );
	}

	public function testCheckUserCanPublish_MixedCaseGroupMatching_ReturnsTrue() {
		$requirements = [ 'userGroups' => [ 'content-translator', 'Page-Editor' ] ];
		$userGroups = [ 'user', 'Content-Translator', 'autoconfirmed' ]; // Mixed case
		$checker = $this->createUserPermissionChecker( $requirements, $userGroups );
		$user = $this->createMock( User::class );

		$result = $checker->checkUserCanPublish( $user, 'Test Page' );

		$this->assertTrue( $result );
	}

	/**
	 * @dataProvider provideUserGroupConfigurations
	 */
	public function testCheckUserCanPublish_UserGroupRequirements(
		$requirements,
		$userGroups,
		$expected,
		$message
	) {
		$checker = $this->createUserPermissionChecker( $requirements, $userGroups );
		$user = $this->createMock( User::class );

		$result = $checker->checkUserCanPublish( $user, 'Test Page' );

		$this->assertEquals( $expected, $result, $message );
	}

	public static function provideUserGroupConfigurations() {
		return [
			'no requirements' => [
				null,
				[],
				true,
				'Should allow when no requirements are set'
			],
			'empty requirements' => [
				[],
				[],
				true,
				'Should allow when requirements array is empty'
			],
			'wildcard allows all' => [
				[ 'userGroups' => [ '*' ] ],
				[ 'user' ],
				true,
				'Should allow all users when wildcard is used'
			],
			'single required group - user has it' => [
				[ 'userGroups' => [ 'translator' ] ],
				[ 'user', 'translator' ],
				true,
				'Should allow when user has the required group'
			],
			'single required group - user lacks it' => [
				[ 'userGroups' => [ 'translator' ] ],
				[ 'user', 'autoconfirmed' ],
				false,
				'Should deny when user lacks the required group'
			],
			'multiple required groups - user has one' => [
				[ 'userGroups' => [ 'translator', 'editor', 'reviewer' ] ],
				[ 'user', 'editor' ],
				true,
				'Should allow when user has any of the required groups'
			],
			'multiple required groups - user has none' => [
				[ 'userGroups' => [ 'translator', 'editor', 'reviewer' ] ],
				[ 'user', 'autoconfirmed' ],
				false,
				'Should deny when user has none of the required groups'
			],
			'string requirement - user has it' => [
				[ 'userGroups' => 'translator' ],
				[ 'translator' ],
				true,
				'Should handle string userGroup requirement when user has it'
			],
			'string requirement - user lacks it' => [
				[ 'userGroups' => 'translator' ],
				[ 'user' ],
				false,
				'Should handle string userGroup requirement when user lacks it'
			],
			'case insensitive - uppercase requirement lowercase user' => [
				[ 'userGroups' => [ 'TRANSLATOR' ] ],
				[ 'translator' ],
				true,
				'Should match groups case-insensitively (uppercase req, lowercase user)'
			],
			'case insensitive - lowercase requirement uppercase user' => [
				[ 'userGroups' => [ 'translator' ] ],
				[ 'TRANSLATOR' ],
				true,
				'Should match groups case-insensitively (lowercase req, uppercase user)'
			],
			'case insensitive - mixed case' => [
				[ 'userGroups' => [ 'Content-Translator', 'Page-EDITOR' ] ],
				[ 'content-translator', 'user' ],
				true,
				'Should match groups case-insensitively with mixed case'
			],
			'case insensitive - no match' => [
				[ 'userGroups' => [ 'TRANSLATOR' ] ],
				[ 'editor', 'user' ],
				false,
				'Should still deny when groups do not match regardless of case'
			],
		];
	}
}
