/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * ContentTranslationEditor
	 *
	 * @class
	 */
	function ContentTranslationEditor( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxTranslation.defaults, options );
		this.$title = null;
		this.$content = null;
		this.init();
	}

	ContentTranslationEditor.prototype.init = function () {
		this.render();
		this.listen();
	};

	ContentTranslationEditor.prototype.render = function () {
		var $content;

		if ( mw.cx.targetLanguage ) {
			this.$container.prop( {
				lang: mw.cx.targetLanguage,
				dir: $.uls.data.getDir( mw.cx.targetLanguage )
			} );
		}

		this.$container.append(
			$( '<h2>' )
				.attr( 'contenteditable', true )
				.addClass( 'cx-column__title' )
				.text( $( '.cx-column--source .cx-column__title' ).text() )
		);

		if ( mw.cx.targetLanguage ) {
			this.$container.prop( {
				lang: mw.cx.targetLanguage,
				dir: $.uls.data.getDir( mw.cx.targetLanguage )
			} );

			this.$container.append(
				$( '<div>' )
					.addClass( 'cx-column__sub-heading' )
					.append(
						$( '<span>' )
							.addClass( 'cx-column__language-label' )
							.text( $.uls.data.getAutonym( mw.cx.targetLanguage ) )
					)
			);
		}

		$content = $( '<div>' )
			.attr( 'contenteditable', true )
			.addClass( 'cx-column__content' )
			.html( '\n' ); // Make sure that it's visible to the tests

		this.$container.append( $content );
		mw.hook( 'mw.cx.translation.change' ).fire();
		this.$title = this.$container.find( '.cx-column__title' );
		this.$content = this.$container.find( '.cx-column__content' );
	};

	ContentTranslationEditor.prototype.listen = function () {
		mw.hook( 'mw.cx.translation.add' ).add( $.proxy( this.update, this ) );

		this.$content.on( 'input', function () {
			mw.hook( 'mw.cx.translation.change' ).fire();
		} );

	};

	ContentTranslationEditor.prototype.update = function ( content ) {
		this.$content.append( content );

		mw.hook( 'mw.cx.progress' ).fire( 100 );
		mw.hook( 'mw.cx.translation.change' ).fire();
	};

	$.fn.cxTranslation = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxTranslation' );

			if ( !data ) {
				$this.data( 'cxTranslation',
					( data = new ContentTranslationEditor( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};

	$.fn.cxTranslation.defaults = {};
}( jQuery, mediaWiki ) );
