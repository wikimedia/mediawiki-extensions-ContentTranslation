( function () {
	'use strict';

	function LinterCard() {
		this.$card = null;
	}
	/**
	 * Get the linter card
	 *
	 * @return {jQuery}
	 */
	LinterCard.prototype.getCard = function () {
		var $cardHeader, $cardTitle, $cardContent, $seeDetails, $detailedErrorData;

		this.$card = $( '<div>' )
			.addClass( 'card linter' );

		$cardHeader = $( '<div>' )
			.addClass( 'card__linter-header' );
		$cardTitle = $( '<div>' )
			.addClass( 'card__linter-title' );
		$cardContent = $( '<div>' )
			.addClass( 'card__linter-content' )
			.prop( {
				lang: mw.cx.targetLanguage,
				dir: $.uls.data.getDir( mw.cx.targetLanguage )
			} )
			.html(
				mw.message( 'cx-tools-linter-content',
					$.uls.data.getAutonym( mw.cx.targetLanguage )
				).parse()
			);
		$seeDetails = $( '<a>' )
			.addClass( 'card__linter-see-details' )
			.text( mw.msg( 'cx-tools-linter-view-details' ) );
		$detailedErrorData = $( '<div>' )
			.addClass( 'card__linter-error-details card__linter-error-details--hidden' )
			.text( mw.msg( 'cx-tools-linter-view-details' ) );
		this.$card.append(
			$cardHeader, $cardTitle, $cardContent, $seeDetails, $detailedErrorData
		);
		this.listen();
		return this.$card;
	};

	/**
	 * Event handlers
	 */
	LinterCard.prototype.listen = function () {
		var self = this;
		this.$card.find( '.card__linter-see-details' ).on( 'click', function () {
			var $trigger = $( this ),
				$details = self.$card.find( '.card__linter-error-details' );
			if ( $details.is( '.card__linter-error-details--hidden' ) ) {
				$details.removeClass( 'card__linter-error-details--hidden' );
				$trigger.text( mw.msg( 'cx-tools-linter-hide-details' ) );
			} else {
				$details.addClass( 'card__linter-error-details--hidden' );
				$trigger.text( mw.msg( 'cx-tools-linter-view-details' ) );
			}
		} );
	};

	LinterCard.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	LinterCard.prototype.start = function ( $section ) {
		var errors, error, action, actions;

		this.$section = $section;
		errors = this.$section.data( 'errors' );
		if ( !errors || !Object.keys( errors ).length ) {
			this.$section.removeClass( 'cx-linter-error cx-linter-disallow cx-linter-warn' );
			this.stop();
			return;
		}
		for ( error in errors ) {
			actions = errors[ error ];
			for ( action in actions ) {
				this.$section.addClass( 'cx-linter-' + action );
				this.$card.find( '.card__linter-title' )
					.text( mw.msg( 'cx-tools-linter-title', error ) );
				this.$card.find( '.card__linter-error-details' )
					.html( actions[ action ].messageHtml );
				// TODO: This method of showing errors shows one error at a time. Once
				// that is fixed other one is shown. Not sure whether showing all messages
				// at once helps translator.
			}
		}
	};

	LinterCard.prototype.stop = function () {
		this.$card.remove();
		mw.hook( 'mw.cx.tools.shown' ).fire( false );
	};

	LinterCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.translation.focus',
			'mw.cx.translation.validation.success',
			'mw.cx.translation.validation.error'
		];
	};

	mw.cx.tools.linter = LinterCard;

}() );
