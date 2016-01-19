<?php
/**
 * ContentTranslation Translation Notifications
 */

namespace ContentTranslation;

class Notification {

	/**
	 * Notify the user on the first published translation.
	 */
	public static function firstTranslation( \User $recipient ) {
		\EchoEvent::create( array(
			'type' => 'cx-first-translation',
			'extra' => array(
				'recipient' => $recipient->getId(),
			)
		) );
	}

	/**
	 * Notify the user on the 10th published translation.
	 */
	public static function tenthTranslation( \User $recipient ) {
		\EchoEvent::create( array(
			'type' => 'cx-tenth-translation',
			'extra' => array(
				'recipient' => $recipient->getId(),
			)
		) );
	}

	/**
	 * Notify the user on the 100th published translation.
	 */
	public static function hundredthTranslation( \User $recipient ) {
		\EchoEvent::create( array(
			'type' => 'cx-hundredth-translation',
			'extra' => array(
				'recipient' => $recipient->getId(),
			)
		) );
	}

	/**
	 * Notify the user about the availability of personalized suggestions.
	 */
	public static function suggestionsAvailable( \User $recipient, $lastTranslationTitle ) {
		\EchoEvent::create( array(
			'type' => 'cx-suggestions-available',
			'extra' => array(
				'recipient' => $recipient->getId(),
				'lastTranslationTitle' => $lastTranslationTitle
			)
		) );
	}
}
