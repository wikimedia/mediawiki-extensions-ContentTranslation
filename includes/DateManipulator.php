<?php

namespace ContentTranslation;

use Wikimedia\Timestamp\ConvertibleTimestamp;

/**
 * @author Niklas Laxström
 */
class DateManipulator {
	public const WEEK = 'week';
	public const MONTH = 'month';

	/** @var string */
	private $interval;

	public function __construct( $interval ) {
		if ( $interval === self::WEEK || $interval === self::MONTH ) {
			$this->interval = $interval;
		} else {
			throw new \InvalidArgumentException( 'Invalid interval' );
		}
	}

	/**
	 * @param int|string|\DateTime $timestamp
	 * @return \DateTime
	 */
	public function getIntervalIdentifier( $timestamp ) {
		$unix = ConvertibleTimestamp::convert( TS_UNIX, $timestamp );

		// UTC timezone is forced for unix timestamps
		$datetime = new \DateTime( "@$unix" );
		$datetime->setTime( 0, 0, 0 );

		if ( $this->interval === self::WEEK ) {
			// We use Sundays to indicate a given week from Monday to Sunday.
			// Take the current day of the week (0 (for Sunday) through 6 (for Saturday))
			$dow = $datetime->format( 'w' );
			if ( $dow > 0 ) {
				$n = 7 - $dow;
				$datetime->modify( "+$n days" );
			}
		} elseif ( $this->interval === self::MONTH ) {
			// Use the first day of the month to identify a month
			$n = $datetime->format( 'j' ) - 1;
			$datetime->modify( "-$n days" );
		}

		return $datetime;
	}

	public function getSteps( \DateTime $min, \DateTime $max ) {
		// Avoid modifying passed objects
		$current = clone $min;
		$interval = new \DateInterval( 'P1D' );

		$steps = [];
		do {
			$id = $this->getIntervalIdentifier( $current );
			$steps[ $id->format( 'Y-m-d' ) ] = $id;
			$current->add( $interval );
		} while ( $current <= $max );

		return $steps;
	}
}
