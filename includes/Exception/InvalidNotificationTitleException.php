<?php

declare( strict_types=1 );

namespace ContentTranslation\Exception;

use Exception;

/**
 * Represents an exception thrown when the title of a draft translation for which a notification
 * is being sent to its translator, is invalid
 *
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2023.11
 */
class InvalidNotificationTitleException extends Exception {
	private string $title;

	public function __construct( string $title ) {
		parent::__construct();
		$this->title = $title;
	}

	public function getTitle(): string {
		return $this->title;
	}
}
