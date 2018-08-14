<?php

namespace ContentTranslation;

use SpecialPage;

/**
 * Class that returns structured data for the content translation echo events.
 * @see https://www.mediawiki.org/wiki/Notifications/New_formatter_system
 */
class EchoNotificationPresentationModel extends \EchoEventPresentationModel {

	public function getIconType() {
		return 'cx';
	}

	public function getPrimaryLink() {
		if ( $this->type === 'cx-first-translation' ) {
			$user = $this->getViewingUserForGender();
			$title = SpecialPage::getTitleFor( 'Contributions', $user );
			return [
				'url' => $title->getCanonicalURL(),
				'label' => $this->msg( 'cx-contributions-link' )
			];
		} elseif ( $this->type === 'cx-suggestions-available' ) {
			$title = SpecialPage::getTitleFor( 'ContentTranslation', false, 'suggestions' );
			return [
				'url' => $title->getCanonicalURL(),
				'label' => $this->msg( 'cx' )
			];
		} else {
			$title = SpecialPage::getTitleFor( 'ContentTranslation' );
			return [
				'url' => $title->getCanonicalURL(),
				'label' => $this->msg( 'cx-your-translations-link' )
			];
		}
	}

	/**
	 * @return string Message key that will be used in getHeaderMessage
	 */
	protected function getHeaderMessageKey() {
		// The messages already exist and have translations, so in this
		// case we want to map the messages to the existing old messsage
		$map = [
			'cx-first-translation' => 'cx-notification-first-translation',
			'cx-tenth-translation' => 'cx-notification-tenth-translation',
			'cx-hundredth-translation' => 'cx-notification-hundredth-translation',
			'cx-suggestions-available' => 'cx-notification-suggestions-available'
		];
		return $map[ $this->type ];
	}

	public function getHeaderMessage() {
		$key = $this->getHeaderMessageKey();
		$msg = $this->msg( $key );
		if ( $key === 'cx-notification-suggestions-available' ) {
			$truncatedTitle = $this->language->truncateForVisual(
				$this->event->getExtraParam( 'lastTranslationTitle' ),
				self::PAGE_NAME_RECOMMENDED_LENGTH,
				'...',
				false
			);
			$msg->params(
				$truncatedTitle,
				$this->getViewingUserForGender()
			);
		}
		return $msg;
	}
}
