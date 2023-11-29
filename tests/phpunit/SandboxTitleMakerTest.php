<?php
declare( strict_types=1 );

namespace ContentTranslation\Tests;

use ContentTranslation\Service\SandboxTitleMaker;
use MediaWiki\User\User;

/**
 * @covers \ContentTranslation\Service\SandboxTitleMaker
 * @group ContentTranslation
 */
class SandboxTitleMakerTest extends \MediaWikiIntegrationTestCase {
	public function testMakeSandboxTitleWithoutSandboxLink() {
		$titleFactory = $this->getServiceContainer()->getTitleFactory();
		$sandboxTitleMaker = new SandboxTitleMaker(
			$titleFactory,
			false
		);

		$targetTitle = "Earth";
		$mockUser = $this->createMock( User::class );
		$mockUser->method( 'getName' )->willReturn( 'Admin' );
		$title = $sandboxTitleMaker->makeSandboxTitle( $mockUser, $targetTitle );
		$this->assertEquals( 'User:Admin/Earth', $title->getPrefixedDBkey() );
	}
}
