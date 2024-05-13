/*!
 * ContentTranslation feedback link
 * Adds an icon and a call to action to leave feedback.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	/**
	 * ContentTranslationFeedback
	 *
	 * @class
	 *
	 * @param {Element} element
	 */
	function ContentTranslationFeedback( element ) {
		this.$container = $( element );

		this.render();
	}

	ContentTranslationFeedback.prototype.render = function () {
		const $feedbackLink = $( '<a>' )
			.addClass( 'cx-feedback__link' )
			.attr( {
				href: '//www.mediawiki.org/wiki/Talk:Content_translation',
				target: '_blank'
			} )
			.text( mw.msg( 'cx-feedback-link' ) );

		const $feedbackContainer = $( '<div>' )
			.addClass( 'cx-feedback' )
			.append( $feedbackLink );

		this.$container.append( $feedbackContainer );
	};

	$.fn.cxFeedback = function () {
		return this.each( function () {
			const $this = $( this );
			let data = $this.data( 'cxFeedback' );

			if ( !data ) {
				$this.data( 'cxFeedback', ( data = new ContentTranslationFeedback( this ) ) );
			}
		} );
	};
}() );
