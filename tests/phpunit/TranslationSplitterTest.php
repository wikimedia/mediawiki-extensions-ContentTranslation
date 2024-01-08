<?php

declare( strict_types=1 );

namespace ContentTranslation\Tests;

use ContentTranslation\DTO\TranslationUnitDTO;
use ContentTranslation\Entity\SectionTranslation;
use ContentTranslation\Manager\TranslationCorporaManager;
use ContentTranslation\Service\SectionTitleFetcher;
use ContentTranslation\Service\TranslationSplitter;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Translation;

/**
 * @covers \ContentTranslation\Service\TranslationSplitter
 * @group ContentTranslation
 */
class TranslationSplitterTest extends \MediaWikiIntegrationTestCase {

	public function testFetchSectionTitles() {
		$translationId = 1;

		$revision = '1159866812';
		$translationUnits = [
			new TranslationUnitDTO(
				"{$revision}_0_1",
				null,
				[ 'engine' => null, 'content' => 'Test source content', 'timestamp' => '20230630123635' ],
				[ 'engine' => 'Google', 'content' => 'Test MT content', 'timestamp' => '20230630123635' ],
				null
			),
			new TranslationUnitDTO(
				"{$revision}_1_3",
				null,
				[ 'engine' => null, 'content' => 'Test source content', 'timestamp' => '20230630123635' ],
				[
					'engine' => 'Google',
					'content' => '<section><h2>Education translation</h2></section>',
					'timestamp' => '20230630123635'
				],
				null
			),
			new TranslationUnitDTO(
				"{$revision}_1_4",
				null,
				[ 'engine' => null, 'content' => 'Test source content', 'timestamp' => '20230630123635' ],
				[ 'engine' => 'Google', 'content' => 'Test MT content', 'timestamp' => '20230630123635' ],
				null
			),
			new TranslationUnitDTO(
				"{$revision}_2_5",
				null,
				[ 'engine' => null, 'content' => 'Test source content', 'timestamp' => '20230630123635' ],
				[
					'engine' => 'Google',
					'content' => '<section><h2>Theatre translation</h2></section>',
					'timestamp' => '20230630123635'
				],
				null
			)
		];
		$mockCorporaManager = $this->createMock( TranslationCorporaManager::class );
		$mockCorporaManager
			->method( 'getTranslationUnitDTOsByTranslationId' )
			->with( $translationId )
			->willReturn( $translationUnits );

		$mockSectionTitleFetcher = $this->createMock( SectionTitleFetcher::class );
		$mockSectionTitleFetcher
			->method( 'fetchSectionTitles' )
			->with( 'en', null, $revision )
			->willReturn( [ 1 => 'Education', 2 => 'Theatre', 3 => 'Television', 4 => 'Directing', 5 => 'Awards' ] );

		$translationSplitter = new TranslationSplitter(
			$mockCorporaManager,
			$mockSectionTitleFetcher
		);

		$translation = $this->createMock( Translation::class );
		$translation->method( 'getTranslationId' )->willReturn( $translationId );
		$translation->method( 'getSourceTitle' )->willReturn( 'Source title' );
		$translation->method( 'getSourceLanguage' )->willReturn( 'en' );

		$newSectionTranslations = $translationSplitter->splitIntoSectionTranslations( $translation );
		$draftStatusIndex = array_search(
			SectionTranslationStore::TRANSLATION_STATUS_DRAFT,
			SectionTranslationStore::TRANSLATION_STATUSES
		);

		$expectedSectionTranslations = [
			new SectionTranslation(
				null,
				1,
				implode( '_', [ $revision, 0 ] ),
				'__LEAD_SECTION__',
				'__LEAD_SECTION__',
				$draftStatusIndex,
				json_encode( [ "any" => null, "mt" => null, "human" => null ] )
			),
			new SectionTranslation(
				null,
				1,
				implode( '_', [ $revision, 1 ] ),
				'Education',
				'Education translation',
				$draftStatusIndex,
				json_encode( [ "any" => null, "mt" => null, "human" => null ] )
			),
			new SectionTranslation(
				null,
				1,
				implode( '_', [ $revision, 2 ] ),
				'Theatre',
				'Theatre translation',
				$draftStatusIndex,
				json_encode( [ "any" => null, "mt" => null, "human" => null ] )
			)
		];

		$this->assertArrayEquals( $expectedSectionTranslations, $newSectionTranslations );
	}
}
