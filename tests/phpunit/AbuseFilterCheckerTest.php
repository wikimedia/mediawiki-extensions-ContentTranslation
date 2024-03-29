<?php

namespace ContentTranslation\Tests;

use ContentTranslation\AbuseFilterChecker;
use MediaWiki\Extension\AbuseFilter\AbuseFilterServices;
use MediaWiki\MediaWikiServices;
use MediaWiki\Title\Title;

/**
 * @covers \ContentTranslation\AbuseFilterChecker
 *
 * @group Database
 * @group ContentTranslation
 */
class AbuseFilterCheckerTest extends \MediaWikiIntegrationTestCase {
	/** Username of the user which performs actions */
	private const TEST_USERNAME = 'ContentTranslator';
	/** Title of the test page */
	private const TEST_TITLE = 'ContentTranslation AbuseFilter test';
	/** ID of the filter created for testing */
	private const TEST_FILTER = 1;

	private $checker;

	/**
	 * @inheritDoc
	 */
	protected function setUp(): void {
		parent::setUp();
		$this->markTestSkippedIfExtensionNotLoaded( 'Abuse Filter' );
		$this->checker = new AbuseFilterChecker(
			true,
			MediaWikiServices::getInstance()->getWikiPageFactory(),
			MediaWikiServices::getInstance()->getService( 'AbuseFilterVariableGeneratorFactory' ),
			MediaWikiServices::getInstance()->getService( 'AbuseFilterConsequencesLookup' ),
			MediaWikiServices::getInstance()->getService( 'AbuseFilterFilterLookup' ),
			MediaWikiServices::getInstance()->getService( 'AbuseFilterFilterRunnerFactory' )
		);
	}

	/**
	 * Creates an abuse filter. Only rules and actions can be specified.
	 *
	 * @param string $rule
	 * @param array $actions [ actionname => [ params ] ]
	 */
	protected function createFilter( $rule, $actions ) {
		$row = [
			'af_id' => self::TEST_FILTER,
			'af_pattern' => $rule,
			'af_timestamp' => $this->db->timestamp(),
			'af_enabled' => 1,
			'af_comments' => '',
			'af_public_comments' => 'Mock filter',
			'af_hidden' => 0,
			'af_hit_count' => 0,
			'af_throttled' => 0,
			'af_deleted' => 0,
			'af_actions' => implode( ',', array_keys( $actions ) ),
			'af_group' => 'default',
		];
		$row += AbuseFilterServices::getActorMigration()->getInsertValues(
			$this->db,
			'af_user',
			$this->getTestUser()->getUserIdentity()
		);
		$this->db->insert( 'abuse_filter', $row, __METHOD__ );
		$actionsRows = [];
		foreach ( $actions as $name => $params ) {
			$actionsRows[] = [
				'afa_filter' => self::TEST_FILTER,
				'afa_consequence' => $name,
				'afa_parameters' => implode( "\n", $params )
			];
		}
		$this->db->insert( 'abuse_filter_action', $actionsRows, __METHOD__ );
	}

	/**
	 * @param string $rules The rules of the filter we want to create
	 * @param array $actions As taken by self::createFilter
	 * @param array $expected Expected actions, as returned by AbuseFilter::getConsequencesForFilters,
	 *  i.e. [ actionname => [ 'action' => actionname, 'parameters' => [ params ] ] ]
	 * @dataProvider provideCheckTitleCases
	 */
	public function testCheckTitle( $rules, $actions, $expected ) {
		$user = \User::newFromName( self::TEST_USERNAME );
		$title = Title::newFromText( self::TEST_TITLE );
		$this->createFilter( $rules, $actions );
		$this->assertArrayEquals( $expected, $this->checker->checkTitleForUser( $title, $user ) );
	}

	/**
	 * Data provider for testCheckTitle
	 * @return array
	 */
	public static function provideCheckTitleCases() {
		return [
			'Disallow' => [
				'page_title === "' . self::TEST_TITLE . '"',
				[ 'disallow' => [ 'abusefilter-disallow' ] ],
				[ self::TEST_FILTER => [
					'disallow' => [ 'abusefilter-disallow' ]
				] ]
			],
			'Warning' => [
				'user_name === "' . self::TEST_USERNAME . '"',
				[ 'warn' => [ 'abusefilter-warning-cx' ] ],
				[ self::TEST_FILTER => [
					'warn' => [
						'abusefilter-warning-cx',
						'messageHtml' => wfMessage( 'abusefilter-warning-cx' )
							->params( self::TEST_FILTER )->parse()
					]
				] ]
			],
			'No consequences' => [
				'1 === 1',
				[],
				[]
			],
			'No serious consequences' => [
				'1 === 1',
				[ 'tag' => [ 'someTag', 'someOtherTag' ] ],
				[]
			],
			'Block' => [
				'page_title !== "Some random title"',
				[ 'block' => [ 'infinite', '4 hours', 'blockTalk' ] ],
				[ self::TEST_FILTER => [ 'block' => [ 'infinite', '4 hours', 'blockTalk' ] ] ],
			],
			'Disallow and degroup' => [
				'page_prefixedtitle === "' . self::TEST_TITLE . '"',
				[ 'disallow' => [ 'abusefilter-disallow' ], 'degroup' => [] ],
				[ self::TEST_FILTER => [
					'disallow' => [ 'abusefilter-disallow' ],
					'degroup' => []
				] ]
			]
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
	public function testCheckSection( $text, $rules, $actions, $expected ) {
		$user = \User::newFromName( self::TEST_USERNAME );
		$title = Title::newFromText( self::TEST_TITLE );
		$this->createFilter( $rules, $actions );
		$this->assertArrayEquals( $expected, $this->checker->checkSectionForTitleAndUser( $user, $title, $text ) );
	}

	/**
	 * Data provider for testCheckSection
	 * @return array
	 */
	public static function provideCheckSectionCases() {
		// Filters only trigger if the text is at least 150 characters long
		$str = str_repeat( 'x', 150 );
		return [
			'Disallow' => [
				"$str foobar",
				'added_lines irlike "foo" & new_wikitext contains "foo"',
				[ 'disallow' => [ 'abusefilter-disallow-cx' ] ],
				[ self::TEST_FILTER => [
					'disallow' => [ 'abusefilter-disallow-cx' ]
				] ]
			],
			'Warning' => [
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
			],
			'No consequences' => [
				"$str This text does not contain numbers",
				'added_lines irlike "\d"',
				[ 'degroup' => [] ],
				[]
			],
			'No serious consequences' => [
				"$str I am not really doing anything wrong!",
				'new_wikitext like "anything wrong"',
				[ 'tag' => [ 'anyTag' ] ],
				[]
			],
			'Block' => [
				"$str This page s u c k s",
				'rmwhitespace( added_lines ) rlike "suck"',
				[ 'block' => [ '1 month', '15 minutes', 'noTalkBlockSet' ] ],
				[ self::TEST_FILTER => [
					'block' => [ '1 month', '15 minutes', 'noTalkBlockSet' ]
				] ],
			],
			'Block and degroup' => [
				$str,
				'length(new_wikitext) === 150',
				[ 'block' => [ '1 year', '15 years', 'noTalkBlockSet' ], 'degroup' => [] ],
				[ self::TEST_FILTER => [
					'block' => [ '1 year', '15 years', 'noTalkBlockSet' ],
					'degroup' => []
				] ]
			],
			'Text too short' => [
				"Short text",
				'1 === 1',
				[ 'disallow' => [ 'abusefilter-disallow-cx2' ] ],
				[]
			]
		];
	}
}
