<?php

namespace ContentTranslation;

use ContentTranslation\Exception\InvalidNotificationTitleException;
use MediaWiki\MediaWikiServices;
use MediaWiki\Notification\Notification as CoreNotification;
use MediaWiki\Notification\RecipientSet;
use MediaWiki\Notification\Types\TitleNotification;
use MediaWiki\Title\Title;
use MediaWiki\User\User;
use MediaWiki\User\UserIdentity;

class Notification {

	/**
	 * Notify the user on the first published translation.
	 */
	public static function firstTranslation( User $recipient ) {
		MediaWikiServices::getInstance()->getNotificationService()->notify(
			new CoreNotification( 'cx-first-translation' ),
			new RecipientSet( $recipient )
		);
	}

	/**
	 * Notify the user on the 10th published translation.
	 */
	public static function tenthTranslation( User $recipient ) {
		MediaWikiServices::getInstance()->getNotificationService()->notify(
			new CoreNotification( 'cx-tenth-translation' ),
			new RecipientSet( $recipient )
		);
	}

	/**
	 * Notify the user on the 100th published translation.
	 */
	public static function hundredthTranslation( User $recipient ) {
		MediaWikiServices::getInstance()->getNotificationService()->notify(
			new CoreNotification( 'cx-hundredth-translation' ),
			new RecipientSet( $recipient )
		);
	}

	/**
	 * Notify the user about the availability of personalized suggestions.
	 * @param User $recipient
	 * @param string $lastTranslationTitle
	 */
	public static function suggestionsAvailable( User $recipient, $lastTranslationTitle ) {
		MediaWikiServices::getInstance()->getNotificationService()->notify(
			new CoreNotification( 'cx-suggestions-available', [
				'lastTranslationTitle' => $lastTranslationTitle
			] ),
			new RecipientSet( $recipient )
		);
	}

	/**
	 * Notify user about the status of his/her old unpublished draft,
	 * depending on notification type:
	 * - That their draft is getting old and may be deleted in the future
	 * - That their draft was too old and thus deleted
	 *
	 * @param string $type 'cx-deleted-draft' or 'cx-continue-translation'
	 * @param UserIdentity $recipient The user receiving this notification.
	 * @param string $title Title of unpublished draft page which is deleted.
	 * @param string $sourceLanguage
	 * @param string $targetLanguage
	 * @throws InvalidNotificationTitleException
	 */
	public static function draftNotification(
		string $type, UserIdentity $recipient, $title, $sourceLanguage, $targetLanguage
	) {
		$titleObj = Title::newFromText( $title );
		if ( !$titleObj ) {
			// PurgeUnpublishedDrafts only catches InvalidNotificationTitleException
			// See also https://phabricator.wikimedia.org/T264855
			throw new InvalidNotificationTitleException( $title );
		}

		MediaWikiServices::getInstance()->getNotificationService()->notify(
			new TitleNotification( $type, $titleObj, [
				'source' => $sourceLanguage,
				'target' => $targetLanguage
			] ),
			new RecipientSet( $recipient )
		);
	}
}
