<?php

namespace ContentTranslation;

use SpecialPage;
use RawMessage;
use EchoEventPresentationModel;

/**
 * Class that returns structured data for the Content Translation echo events when translation
 * drafts are deleted from cx_corpora table.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @see https://www.mediawiki.org/wiki/Notifications/New_formatter_system
 */
class DeletedDraftNotificationPresentationModel extends EchoEventPresentationModel {
	public function getIconType() {
		return 'outdated';
	}

	public function getPrimaryLink() {
		if ( $this->isBundled() ) {
			return [
				'url' => SpecialPage::getTitleFor( 'ContentTranslation' )->getLocalURL(),
				'label' => ''
			];
		} else {
			return [
				'label' => '',
				'url' => SpecialPage::getTitleFor( 'ContentTranslation' )->getLocalURL( [
					'from' => $this->event->getExtraParam( 'source' ),
					'to' => $this->event->getExtraParam( 'target' ),
					'page' => $this->event->getTitle()->getText()
				] )
			];
		}
	}

	public function getHeaderMessage() {
		if ( $this->isBundled() ) {
			return $this->msg(
				'cx-notification-deleted-draft-bundle',
				$this->getBundleCount()
			);
		} else {
			return $this->msg(
				'cx-notification-deleted-draft',
				$this->event->getTitle()->getText()
			);
		}
	}

	public function getCompactHeaderMessage() {
		$msg = new RawMessage( '$1' );
		$msg->plaintextParams( $this->event->getTitle()->getText() );
		return $msg;
	}

	public function getSecondaryLinks() {
		if ( $this->isBundled() ) {
			return [];
		}

		return [ $this->getYourTranslationsLink() ];
	}

	private function getYourTranslationsLink() {
		return [
			'url' => SpecialPage::getTitleFor( 'ContentTranslation' )->getLocalURL(),
			'icon' => 'article',
			'label' => $this->msg( 'cx-your-translations-link' ),
			'prioritized' => true
		];
	}
}
