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

	public function __construct( private string $title ) {
		parent::__construct();
	}

	public function getTitle(): string {
		return $this->title;
	}
}
