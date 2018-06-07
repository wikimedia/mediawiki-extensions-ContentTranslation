<?php

namespace ContentTranslation;

use Title;

class Notification {

	/**
	 * Notify the user on the first published translation.
	 * @param \User $recipient
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
	 * @param \User $recipient
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
	 * @param \User $recipient
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
	 * @param \User $recipient
	 * @param string $lastTranslationTitle
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

	/**
	 * Notify user that his/her old unpublished draft is deleted.
	 *
	 * @param int $recipientId ID of user receiving this notification.
	 * @param string $title Title of unpublished draft page which is deleted.
	 * @param string $sourceLanguage
	 * @param string $targetLanguage
	 */
	public static function draftDeleted( $recipientId, $title, $sourceLanguage, $targetLanguage ) {
		$title = Title::newFromText( $title );

		\EchoEvent::create( [
			'type' => 'cx-deleted-draft',
			'title' => $title,
			'extra' => [
				'recipient' => $recipientId,
				'source' => $sourceLanguage,
				'target' => $targetLanguage
			]
		] );
	}
}
