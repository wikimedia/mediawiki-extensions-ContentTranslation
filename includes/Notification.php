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
		\EchoEvent::create( [
			'type' => 'cx-first-translation',
			'extra' => [
				'recipient' => $recipient->getId(),
			]
		] );
	}

	/**
	 * Notify the user on the 10th published translation.
	 */
	public static function tenthTranslation( \User $recipient ) {
		\EchoEvent::create( [
			'type' => 'cx-tenth-translation',
			'extra' => [
				'recipient' => $recipient->getId(),
			]
		] );
	}

	/**
	 * Notify the user on the 100th published translation.
	 */
	public static function hundredthTranslation( \User $recipient ) {
		\EchoEvent::create( [
			'type' => 'cx-hundredth-translation',
			'extra' => [
				'recipient' => $recipient->getId(),
			]
		] );
	}

	/**
	 * Notify the user about the availability of personalized suggestions.
	 */
	public static function suggestionsAvailable( \User $recipient, $lastTranslationTitle ) {
		\EchoEvent::create( [
			'type' => 'cx-suggestions-available',
			'extra' => [
				'recipient' => $recipient->getId(),
				'lastTranslationTitle' => $lastTranslationTitle
			]
		] );
	}
}
