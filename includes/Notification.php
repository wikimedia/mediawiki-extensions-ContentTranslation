<?php
/**
 * ContentTranslation Translation Notifications
 */

namespace ContentTranslation;

class Notification {

	/**
	 * Notify the user on first published translation.
	 */
	public static function firstTranslation( \User $recipient ) {
		\EchoEvent::create( array(
			'type' => 'cx-first-translation',
			'extra' => array(
				'recipient' => $recipient->getId(),
			)
		) );
	}
}
