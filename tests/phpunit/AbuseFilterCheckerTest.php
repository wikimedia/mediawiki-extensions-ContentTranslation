<?php
declare( strict_types = 1 );

namespace ContentTranslation\Tests;

use ContentTranslation\AbuseFilterChecker;
use Generator;
use MediaWiki\Title\Title;
use MediaWiki\User\User;
use MediaWikiIntegrationTestCase;

/**
 * @covers \ContentTranslation\AbuseFilterChecker
 *
 * @group Database
 * @group ContentTranslation
 */
class AbuseFilterCheckerTest extends MediaWikiIntegrationTestCase {
	/** Username of the user which performs actions */
	private const TEST_USERNAME = 'ContentTranslator';
	/** Title of the test page */
	private const TEST_TITLE = 'ContentTranslation AbuseFilter test';
	/** ID of the filter created for testing */
	private const TEST_FILTER = 1;

	private AbuseFilterChecker $checker;

	/** @inheritDoc */
	protected function setUp(): void {
		parent::setUp();
		$this->markTestSkippedIfExtensionNotLoaded( 'Abuse Filter' );
		$this->checker = new AbuseFilterChecker(
			true,
			$this->getServiceContainer()->getWikiPageFactory(),
			$this->getServiceContainer()->getService( 'AbuseFilterVariableGeneratorFactory' ),
			$this->getServiceContainer()->getService( 'AbuseFilterConsequencesLookup' ),
			$this->getServiceContainer()->getService( 'AbuseFilterFilterLookup' ),
			$this->getServiceContainer()->getService( 'AbuseFilterFilterRunnerFactory' )
		);
	}

	/**
	 * Creates an abuse filter. Only rules and actions can be specified.
	 *
	 * @param string $rule
	 * @param array $actions [ actionname => [ params ] ]
	 */
	private function createFilter( string $rule, array $actions ): void {
		$row = [
			'af_id' => self::TEST_FILTER,
			'af_pattern' => $rule,
			'af_timestamp' => $this->getDb()->timestamp(),
			'af_enabled' => 1,
			'af_comments' => '',
			'af_public_comments' => 'Mock filter',
			'af_hidden' => 0,
			'af_hit_count' => 0,
			'af_throttled' => 0,
			'af_deleted' => 0,
			'af_actions' => implode( ',', array_keys( $actions ) ),
			'af_group' => 'default',
			'af_actor' => $this->getServiceContainer()->getActorNormalization()
				->acquireActorId( $this->getTestUser()->getUserIdentity(), $this->db ),
		];
		$this->getDb()->newInsertQueryBuilder()
			->insertInto( 'abuse_filter' )
			->row( $row )
			->caller( __METHOD__ )
			->execute();
		$actionsRows = [];
		foreach ( $actions as $name => $params ) {
			$actionsRows[] = [
				'afa_filter' => self::TEST_FILTER,
				'afa_consequence' => $name,
				'afa_parameters' => implode( "\n", $params )
			];
		}
		if ( $actionsRows ) {
			$this->getDb()->newInsertQueryBuilder()
				->insertInto( 'abuse_filter_action' )
				->rows( $actionsRows )
				->caller( __METHOD__ )
				->execute();
		}
	}

	/**
	 * @param string $rules The rules of the filter we want to create
	 * @param array $actions As taken by self::createFilter
	 * @param array $expected Expected actions, as returned by AbuseFilter::getConsequencesForFilters,
	 *  i.e. [ actionname => [ 'action' => actionname, 'parameters' => [ params ] ] ]
	 * @dataProvider provideCheckTitleCases
	 */
	public function testCheckTitle( string $rules, array $actions, array $expected ) {
		$user = User::newFromName( self::TEST_USERNAME );
		$title = Title::newFromText( self::TEST_TITLE );
		$this->createFilter( $rules, $actions );
		$this->assertArrayEquals( $expected, $this->checker->checkTitleForUser( $title, $user ) );
	}

	public static function provideCheckTitleCases(): Generator {
		yield 'Disallow' => [
			'page_title === "' . self::TEST_TITLE . '"',
			[ 'disallow' => [ 'abusefilter-disallow' ] ],
			[ self::TEST_FILTER => [
				'disallow' => [ 'abusefilter-disallow' ]
			] ]
		];

		yield 'Warning' => [
			'user_name === "' . self::TEST_USERNAME . '"',
			[ 'warn' => [ 'abusefilter-warning-cx' ] ],
			[ self::TEST_FILTER => [
				'warn' => [
					'abusefilter-warning-cx',
					'messageHtml' => wfMessage( 'abusefilter-warning-cx' )
						->params( self::TEST_FILTER )->parse()
				]
			] ]
		];

		yield 'No consequences' => [
			'1 === 1',
			[],
			[]
		];

		yield 'No serious consequences' => [
			'1 === 1',
			[ 'tag' => [ 'someTag', 'someOtherTag' ] ],
			[]
		];

		yield 'Block' => [
			'page_title !== "Some random title"',
			[ 'block' => [ 'infinite', '4 hours', 'blockTalk' ] ],
			[ self::TEST_FILTER => [ 'block' => [ 'infinite', '4 hours', 'blockTalk' ] ] ],
		];

		yield 'Disallow and degroup' => [
			'page_prefixedtitle === "' . self::TEST_TITLE . '"',
			[ 'disallow' => [ 'abusefilter-disallow' ], 'degroup' => [] ],
			[ self::TEST_FILTER => [
				'disallow' => [ 'abusefilter-disallow' ],
				'degroup' => []
			] ]
		];
	}

	/**
	 * @param string $text The text being filtered
	 * @param string $rules The rules of the filter we want to create
	 * @param array $actions As taken by self::createFilter
	 * @param array $expected Expected actions, as returned by AbuseFilter::getConsequencesForFilters,
	 *  i.e. [ actionname => [ 'action' => actionname, 'parameters' => [ params ] ] ]
	 * @dataProvider provideCheckSectionCases
	 */
	public function testCheckSection( string $text, string $rules, array $actions, array $expected ) {
		$user = User::newFromName( self::TEST_USERNAME );
		$title = Title::newFromText( self::TEST_TITLE );
		$this->createFilter( $rules, $actions );
		$this->assertArrayEquals( $expected, $this->checker->checkSectionForTitleAndUser( $user, $title, $text ) );
	}

	public static function provideCheckSectionCases(): Generator {
		// Filters only trigger if the text is at least 150 characters long
		$str = str_repeat( 'x', 150 );

		yield 'Disallow' => [
			"$str foobar",
			'added_lines irlike "foo" & new_wikitext contains "foo"',
			[ 'disallow' => [ 'abusefilter-disallow-cx' ] ],
			[ self::TEST_FILTER => [
				'disallow' => [ 'abusefilter-disallow-cx' ]
			] ]
		];

		yield 'Warning' => [
			"$str gimme a [[warning|]]",
			'edit_delta > 0 & "[[warning|warning]]" in new_pst',
			[ 'warn' => [ 'abusefilter-warning-cx2' ] ],
			[ self::TEST_FILTER => [
				'warn' => [
					'abusefilter-warning-cx2',
					'messageHtml' => wfMessage( 'abusefilter-warning-cx2' )
						->params( self::TEST_FILTER )->parse()
				]
			] ]
		];

		yield 'No consequences' => [
			"$str This text does not contain numbers",
			'added_lines irlike "\d"',
			[ 'degroup' => [] ],
			[]
		];

		yield 'No serious consequences' => [
			"$str I am not really doing anything wrong!",
			'new_wikitext like "anything wrong"',
			[ 'tag' => [ 'anyTag' ] ],
			[]
		];

		yield 'Block' => [
			"$str This page s u c k s",
			'rmwhitespace( added_lines ) rlike "suck"',
			[ 'block' => [ '1 month', '15 minutes', 'noTalkBlockSet' ] ],
			[ self::TEST_FILTER => [
				'block' => [ '1 month', '15 minutes', 'noTalkBlockSet' ]
			] ],
		];

		yield 'Block and degroup' => [
			$str,
			'length(new_wikitext) === 150',
			[ 'block' => [ '1 year', '15 years', 'noTalkBlockSet' ], 'degroup' => [] ],
			[ self::TEST_FILTER => [
				'block' => [ '1 year', '15 years', 'noTalkBlockSet' ],
				'degroup' => []
			] ]
		];

		yield 'Text too short' => [
			'Short text',
			'1 === 1',
			[ 'disallow' => [ 'abusefilter-disallow-cx2' ] ],
			[]
		];
	}
}
