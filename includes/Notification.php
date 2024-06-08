<?php

namespace ContentTranslation;

use ContentTranslation\Exception\InvalidNotificationTitleException;
use MediaWiki\Extension\Notifications\Model\Event;
use MediaWiki\Title\Title;
use MediaWiki\User\User;

class Notification {

	/**
	 * Notify the user on the first published translation.
	 * @param User $recipient
	 */
	public static function firstTranslation( User $recipient ) {
		Event::create( [
			'type' => 'cx-first-translation',
			'extra' => [
				'recipient' => $recipient->getId(),
			]
		] );
	}

	/**
	 * Notify the user on the 10th published translation.
	 * @param User $recipient
	 */
	public static function tenthTranslation( User $recipient ) {
		Event::create( [
			'type' => 'cx-tenth-translation',
			'extra' => [
				'recipient' => $recipient->getId(),
			]
		] );
	}

	/**
	 * Notify the user on the 100th published translation.
	 * @param User $recipient
	 */
	public static function hundredthTranslation( User $recipient ) {
		Event::create( [
			'type' => 'cx-hundredth-translation',
			'extra' => [
				'recipient' => $recipient->getId(),
			]
		] );
	}

	/**
	 * Notify the user about the availability of personalized suggestions.
	 * @param User $recipient
	 * @param string $lastTranslationTitle
	 */
	public static function suggestionsAvailable( User $recipient, $lastTranslationTitle ) {
		Event::create( [
			'type' => 'cx-suggestions-available',
			'extra' => [
				'recipient' => $recipient->getId(),
				'lastTranslationTitle' => $lastTranslationTitle
			]
		] );
	}

	/**
	 * Notify user about the status of his/her old unpublished draft,
	 * depending on notification type:
	 * - That their draft is getting old and may be deleted in the future
	 * - That their draft was too old and thus deleted
	 *
	 * @param string $type 'cx-deleted-draft' or 'cx-continue-translation'
	 * @param int $recipientId ID of user receiving this notification.
	 * @param string $title Title of unpublished draft page which is deleted.
	 * @param string $sourceLanguage
	 * @param string $targetLanguage
	 * @throws InvalidNotificationTitleException
	 */
	public static function draftNotification(
		$type, $recipientId, $title, $sourceLanguage, $targetLanguage
	) {
		$titleObj = Title::newFromText( $title );
		if ( !$titleObj ) {
			// PurgeUnpublishedDrafts only catches InvalidNotificationTitleException
			// See also https://phabricator.wikimedia.org/T264855
			throw new InvalidNotificationTitleException( $title );
		}

		Event::create( [
			'type' => $type,
			'title' => $titleObj,
			'extra' => [
				'recipient' => $recipientId,
				'source' => $sourceLanguage,
				'target' => $targetLanguage
			]
		] );
	}
}
