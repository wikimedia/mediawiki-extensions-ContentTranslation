<?php

namespace ContentTranslation\Tests;

use ContentTranslation\ContentTranslationHookRunner;
use MediaWiki\Tests\HookContainer\HookRunnerTestBase;

/**
 * @covers \ContentTranslation\ContentTranslationHookRunner
 */
class HookRunnerTest extends HookRunnerTestBase {

	public static function provideHookRunners() {
		yield ContentTranslationHookRunner::class => [ ContentTranslationHookRunner::class ];
	}
}
