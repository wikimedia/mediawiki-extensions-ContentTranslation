<?php

/**
 * Class that returns structured data for the content translation echo events.
 * @see https://www.mediawiki.org/wiki/Echo_%28Notifications%29/New_formatter_system
 */
class EchoNotificationPresentationModel extends EchoEventPresentationModel {

	public function getIconType() {
		return 'cx';
	}

	public function getPrimaryLink() {
		// No primary link
		return false;
	}

	/**
	 * @return string Message key that will be used in getHeaderMessage
	 */
	protected function getHeaderMessageKey() {
		// The messages already exist and have translations, so in this
		// case we want to map the messages to the existing old messsage
		$map = array(
			'cx-first-translation' => 'cx-notification-first-translation',
			'cx-tenth-translation' => 'cx-notification-tenth-translation',
			'cx-hundredth-translation' => 'cx-notification-hundredth-translation',
		);
		return $map[ $this->type ];
	}
}
