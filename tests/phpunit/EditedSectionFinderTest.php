<?php

declare( strict_types=1 );

namespace ContentTranslation\Tests;

use ContentTranslation\Service\EditedSectionFinder;
use TextContent;

/**
 * @covers \ContentTranslation\Service\EditedSectionFinder
 * @group ContentTranslation
 */
class EditedSectionFinderTest extends \MediaWikiIntegrationTestCase {
	/** @dataProvider provideTestFindEditedSectionsBetweenTextContents */
	public function testFindEditedSectionsBetweenTextContents( $expected, $oldText, $newText ) {
		$editedSectionFinder = new EditedSectionFinder();
		$newContent = new TextContent( $newText );
		$oldContent = new TextContent( $oldText );
		$editedSections = $editedSectionFinder->findEditedSectionsBetweenTextContents( $newContent, $oldContent );
		$this->assertArrayEquals( $expected, $editedSections );
	}

	public static function provideTestFindEditedSectionsBetweenTextContents() {
		$expected = [];
		$oldText = "== Biography ==\nThis is the same version";
		$newText = "== Biography ==\nThis is the same version";
		yield 'No edited sections' => [ $expected, $oldText, $newText ];

		$expected = [ 'Biography' ];
		$oldText = "== Biography ==\nThis is the old version";
		$newText = "== Biography ==\nThis is the new version";
		yield 'Single edited section' => [ $expected, $oldText, $newText ];

		$expected = [ 'Reasons to believe P ≠ NP or P = NP' ];
		$oldText = "==Reasons to believe P ≠ NP or P = NP==\nThis is the old version";
		$newText = "==Reasons to believe P ≠ NP or P = NP==\nThis is the new version";
		yield 'Single edited section with equals sign (=) in title' => [ $expected, $oldText, $newText ];

		$expected = [ 'Biography', 'Formation' ];
		$oldText = "== Biography ==\nThis is the old version\n== Formation ==\nThis is the old formation";
		$newText = "== Biography ==\nThis is the new version\n== Formation ==\nThis is the new formation";
		yield 'Multiple edited sections' => [ $expected, $oldText, $newText ];

		$expected = [ 'Etymology' ];
		$oldText = "==Etymology<!--Test comment-->==\nThis is the old version";
		$newText = "==Etymology<!--Test comment-->==\nThis is the new version";
		yield 'Single edited section with comment in title' => [ $expected, $oldText, $newText ];
	}
}
