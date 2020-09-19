<?php

namespace ContentTranslation;

class SuggestionList {
	// List types. Make sure to add them in ext.cx.suggestionlist.js to
	// achieve wanted display order.
	public const TYPE_DEFAULT = 0;
	public const TYPE_FEATURED = 1;
	public const TYPE_DISCARDED = 2;
	public const TYPE_FAVORITE = 3;
	public const TYPE_CATEGORY = 4;

	protected $id;
	protected $name;
	protected $info;
	protected $owner;
	protected $startTime;
	protected $endTime;
	protected $type;
	protected $public;

	public function __construct( array $params ) {
		if ( isset( $params['id'] ) ) {
			$this->id = (int)$params['id'];
		}

		$this->name = (string)$params['name'];

		if ( isset( $params['info'] ) ) {
			$this->info = (string)$params['info'];
		}

		if ( isset( $params['owner'] ) ) {
			$this->owner = (int)$params['owner'];
		}

		if ( isset( $params['public'] ) ) {
			$this->public = (bool)$params['public'];
		}

		if ( isset( $params['startTime'] ) ) {
			$this->startTime = $params['startTime'];
		}

		if ( isset( $params['endTime'] ) ) {
			$this->endTime = $params['endTime'];
		}

		if ( isset( $params['type'] ) ) {
			$this->type = $params['type'];
		}
	}

	/**
	 * @param \stdClass $row
	 * @return SuggestionList
	 */
	public static function newFromRow( $row ) {
		$params = [
			'id' => $row->cxl_id,
			'name' => $row->cxl_name,
			'info' => $row->cxl_info,
			'owner' => $row->cxl_owner,
			'startTime' => $row->cxl_start_time,
			'endTime' => $row->cxl_end_time,
			'type' => $row->cxl_type,
		];

		return new SuggestionList( $params );
	}

	public function getId() {
		return $this->id;
	}

	public function getName() {
		return $this->name;
	}

	/**
	 * @param \IContextSource $context
	 * @return \Message
	 */
	public function getDisplayNameMessage( \IContextSource $context ) {
		$message = $context->msg( $this->getName() );
		if ( $message->exists() ) {
			return $message;
		} else {
			return new \RawMessage( \Title::newFromText( $this->getName() )->getText() );
		}
	}

	public function getInfo() {
		return $this->info;
	}

	public function getOwner() {
		if ( $this->owner ) {
			return $this->owner;
		}

		return 0;
	}

	public function isPublic() {
		return (bool)$this->public;
	}

	public function getStartTime() {
		return $this->startTime;
	}

	public function getEndTime() {
		return $this->endTime;
	}

	public function getType() {
		if ( $this->type === null ) {
			return self::TYPE_DEFAULT;
		}

		return (int)$this->type;
	}

	/**
	 * @return string
	 */
	public function __toString() {
		return $this->name;
	}
}
