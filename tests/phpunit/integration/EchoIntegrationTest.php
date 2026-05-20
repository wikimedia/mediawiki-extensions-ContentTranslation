<?php

namespace ContentTranslation\Tests;

use MediaWiki\Extension\Notifications\Model\Event;
use MediaWiki\Extension\Notifications\Notifier;
use MediaWiki\User\UserFactory;
use MediaWikiIntegrationTestCase;

/**
 * @coversDefaultClass \ContentTranslation\Hooks
 * @group ContentTranslation
 * @group Database
 */
class EchoIntegrationTest extends MediaWikiIntegrationTestCase {

	public static function provideEchoGetBundleRules() {
		yield 'cx-deleted-draft' => [
			'cx-deleted-draft',
			1,
			'cx-deleted-draft-1'
		];
		yield 'cx-continue-translation' => [
			'cx-continue-translation',
			2,
			'cx-continue-translation-2'
		];
		yield 'cx-first-translation' => [
			'cx-first-translation',
			3,
			'' // not bundled
		];
	}

	/**
	 * @dataProvider provideEchoGetBundleRules
	 * @covers ::onEchoGetBundleRules
	 */
	public function testEchoGetBundleRules( string $type, int $recipient, string $expected ) {
		$this->markTestSkippedIfExtensionNotLoaded( 'Echo' );

		$userFactory = $this->getMockBuilder( UserFactory::class )
			->disableOriginalConstructor()
			->onlyMethods( [ 'newFromId' ] )
			->getMock();
		$userFactory->method( 'newFromId' )
			->willReturnCallback( static function ( $id ) use ( $userFactory ) {
				return $userFactory->newFromAnyId( $id, 'Clara' );
			} );
		$this->setService( 'UserFactory', $userFactory );

		$bundleString = '';
		Notifier::getBundleRules(
			Event::create(
				[
					'type' => $type,
					'extra' => [ 'recipient' => $recipient ],
				]
			),
			$bundleString
		);

		$this->assertSame( $expected, $bundleString );
	}

	/**
	 * @covers ::onBeforeCreateEchoEvent
	 */
	public function testBeforeCreateEchoEvent() {
		global $wgEchoNotifications, $wgEchoNotificationCategories, $wgEchoNotificationIcons;

		$this->markTestSkippedIfExtensionNotLoaded( 'Echo' );

		\MediaWiki\Extension\Notifications\Hooks::initEchoExtension();

		$this->assertArrayHasKey( 'cx-first-translation', $wgEchoNotifications );
		$this->assertArrayHasKey( 'cx', $wgEchoNotificationCategories );
		$this->assertArrayHasKey( 'cx', $wgEchoNotificationIcons );
	}

}
