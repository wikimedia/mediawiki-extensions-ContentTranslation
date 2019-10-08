<?php

namespace ContentTranslation\Tests;

use ContentTranslation\DateManipulator;

/**
 * @covers \ContentTranslation\DateManipulator
 *
 * @author Niklas Laxström
 */
class DateManipulatorTest extends \MediaWikiUnitTestCase {

	public function testConstructor() {
		$this->assertInstanceOf(
			DateManipulator::class,
			new DateManipulator( DateManipulator::WEEK )
		);

		$this->assertInstanceOf(
			DateManipulator::class,
			new DateManipulator( DateManipulator::MONTH )
		);

		$this->expectException( \InvalidArgumentException::class );
		new DateManipulator( 'lifetime' );
	}

	/**
	 * @dataProvider provideGetIntervalIdentifier
	 */
	public function testGetIntervalIdentifier( $interval, $i1, $i2, $same, $comment ) {
		$dm = new DateManipulator( $interval );
		$o1 = $dm->getIntervalIdentifier( $i1 );
		$o2 = $dm->getIntervalIdentifier( $i2 );
		if ( $same ) {
			$this->assertEquals( $o1, $o2, $comment );
		} else {
			$this->assertNotEquals( $o1, $o2, $comment );
		}
	}

	public function provideGetIntervalIdentifier() {
		$tests = [];

		$tests[] = [
			DateManipulator::WEEK,
			'20170215000000',
			'20170215000000',
			true,
			'same timestamp has same id'
		];

		$tests[] = [
			DateManipulator::WEEK,
			'20170215000000',
			'20170215010000',
			true,
			'same day has same id'
		];

		$tests[] = [
			DateManipulator::WEEK,
			'20170213000000',
			'20170219000000',
			true,
			'same week has same id'
		];

		$tests[] = [
			DateManipulator::WEEK,
			'20160213000000',
			'20170213000000',
			false,
			'different week has different id'
		];

		$tests[] = [
			DateManipulator::MONTH,
			'20170213000000',
			'20170213000000',
			true,
			'same timestamp has same id'
		];

		$tests[] = [
			DateManipulator::MONTH,
			'20170123000000',
			'20170103000000',
			true,
			'same month has same id'
		];

		$tests[] = [
			DateManipulator::MONTH,
			'20170123000000',
			'20170203000000',
			false,
			'different month has different id'
		];

		return $tests;
	}

	public function testGetSteps() {
		$dm = new DateManipulator( DateManipulator::MONTH );
		$min = new \DateTime( '2016-11-18T12:34:56+0000' );
		$max = new \DateTime( '2017-02-01T12:34:56+0000' );
		$output = array_keys( $dm->getSteps( $min, $max ) );
		$expected = [ '2016-11-01', '2016-12-01', '2017-01-01', '2017-02-01' ];
		$this->assertEquals( $expected, $output );

		$dm = new DateManipulator( DateManipulator::WEEK );
		$min = new \DateTime( '2016-12-18T12:34:56+0000' );
		$max = new \DateTime( '2017-02-01T12:34:56+0000' );
		$output = array_keys( $dm->getSteps( $min, $max ) );
		$expected = [
			'2016-12-18', '2016-12-25', '2017-01-01', '2017-01-08',
			'2017-01-15', '2017-01-22', '2017-01-29', '2017-02-05'
		];
		$this->assertEquals( $expected, $output );

		$dm = new DateManipulator( DateManipulator::MONTH );
		$min = new \DateTime( '2016-03-01T03:14+0300' );
		$max = new \DateTime( '2016-04-01T03:14+0400' );
		$output = array_keys( $dm->getSteps( $min, $max ) );
		$expected = [ '2016-03-01' ];
		$this->assertEquals( $expected, $output, 'timezones are taken into account' );
	}
}
