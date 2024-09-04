<?php

namespace ContentTranslation\Tests;

use MediaWiki\Extension\Notifications\Model\Event;
use MediaWiki\Extension\Notifications\Notifier;
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
			'Clara',
			'cx-deleted-draft-Clara'
		];
		yield 'cx-continue-translation' => [
			'cx-continue-translation',
			'Clara',
			'cx-continue-translation-Clara'
		];
		yield 'cx-first-translation' => [
			'cx-first-translation',
			'Clara',
			'' // not bundled
		];
	}

	/**
	 * @dataProvider provideEchoGetBundleRules
	 * @covers ::onEchoGetBundleRules
	 */
	public function testEchoGetBundleRules( string $type, string $recipient, string $expected ) {
		$this->markTestSkippedIfExtensionNotLoaded( 'Echo' );

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
