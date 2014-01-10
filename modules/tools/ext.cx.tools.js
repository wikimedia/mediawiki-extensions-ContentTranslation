/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation aids
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $ ) {
	'use strict';

	/**
	 * ContentTranslationTools
	 *
	 * @class
	 */
	function ContentTranslationTools( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxTools.defaults, options );
		this.init();
	}

	ContentTranslationTools.prototype.init = function () {
		this.render();
	};

	ContentTranslationTools.prototype.render = function () {
		this.$container.append( this.helpMessage() );
	};

	ContentTranslationTools.prototype.helpMessage = function () {
		var $content;

		$content = $( '<h2>' )
			.text( 'Create a translation' )
			.after( $( '<ol>' )
				.append(
					$( '<li>' )
						.text( 'Add some paragraphs to the translation.' ),
					$( '<li>' )
						.text( 'Adjust the automatic translations '
							+ ' provided to ensure quality' )
						.append( $( '<ul>')
							.append(
								$( '<li>' )
									.text( 'Machine translation is a useful starting point for'
										+ 'translations, but translators must revise errors as'
										+ 'necessary and confirm that the translation is accurate.' ),
								$( '<li>' )
									.text( 'o not translate text that appears unreliable'
										+ 'or low-quality. If possible, verify the text with'
										+ 'references provided in the source article.' )
							)
						),
					$( '<div>' )
						.text( 'When you are happy with the result,'
							+ 'select \"Publish Translation\" '
							+ 'to create a new article.' )
				)
			);

		return $content;
	};

	$.fn.cxTools = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxTools' );

			if ( !data ) {
				$this.data( 'cxTools',
					( data = new ContentTranslationTools( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};
	$.fn.cxTools.defaults = {};
}( jQuery ) );
