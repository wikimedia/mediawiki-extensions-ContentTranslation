<?php

namespace ContentTranslation;

use EchoEventPresentationModel;
use RawMessage;
use SpecialPage;

/**
 * Class that returns structured data for the Content Translation echo events
 * when translation drafts are deleted from cx_corpora table or when user is notified
 * that their drafts might be deleted.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @see https://www.mediawiki.org/wiki/Notifications/New_formatter_system
 */
class DraftNotificationPresentationModel extends EchoEventPresentationModel {
	public function getIconType() {
		if ( $this->getType() === 'cx-deleted-draft' ) {
			return 'outdated';
		} elseif ( $this->getType() === 'cx-continue-translation' ) {
			return 'cx-blue';
		}

		return 'cx';
	}

	public function getPrimaryLink() {
		if ( $this->isBundled() ) {
			return [
				'url' => SpecialPage::getTitleFor( 'ContentTranslation' )->getLocalURL(),
				'label' => '',
			];
		}

		return [
			'url' => SpecialPage::getTitleFor( 'ContentTranslation' )->getLocalURL( [
				'from' => $this->event->getExtraParam( 'source' ),
				'to' => $this->event->getExtraParam( 'target' ),
				'page' => $this->event->getTitle()->getText()
			] ),
			'label' => '',
		];
	}

	public function getHeaderMessage() {
		if ( $this->getType() === 'cx-deleted-draft' ) {
			$msg = 'cx-notification-deleted-draft';
		} elseif ( $this->getType() === 'cx-continue-translation' ) {
			$msg = 'cx-notification-continue-translation';
		} else {
			return parent::getHeaderMessage();
		}

		if ( $this->isBundled() ) {
			return $this->msg( $msg . '-bundle' )->numParams( $this->getBundleCount() );
		}

		return $this->msg( $msg, wfEscapeWikiText( $this->event->getTitle()->getText() ) );
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
