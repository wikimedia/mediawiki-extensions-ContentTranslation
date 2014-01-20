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
		this.language = '';
		this.$title = null;
		this.$content = null;
		this.init();
	}

	ContentTranslationEditor.prototype.init = function () {
		this.language = new mw.Uri().query.lang || '';
		this.render();
		this.listen();
	};

	ContentTranslationEditor.prototype.render = function () {
		var $content;

		if ( this.language ) {
			this.$container.prop( {
				lang: this.language,
				dir: $.uls.data.getDir( this.language )
			} );
		}

		this.$container.append(
			$( '<h2>' )
				.attr( 'contenteditable', true )
				.addClass( 'cx-column__title' )
				.text( $( '.cx-column--source .cx-column__title' ).text() )
		);

		if ( this.language ) {
			this.$container.prop( {
				lang: this.language,
				dir: $.uls.data.getDir( this.language )
			} );

			this.$container.append(
				$( '<div>' )
					.addClass( 'cx-column__sub-heading' )
					.append(
						$( '<span>' )
							.addClass( 'cx-column__language-label' )
							.text( $.uls.data.getAutonym( this.language ) )
					)
			);
		}

		$content = $( '<div>' )
			.attr( 'contenteditable', true )
			.addClass( 'cx-column__content' )
			.html( '\n' ); // Make sure that it's visible to the tests

		this.$container.append( $content );
		mw.hook( 'mw.cx.changeTranslation' ).fire();
		this.$title = this.$container.find( '.cx-column__title' );
		this.$content = this.$container.find( '.cx-column__content' );
	};

	ContentTranslationEditor.prototype.listen = function () {
		mw.hook(  'mw.cx.translation.add' ).add( $.proxy( this.update, this ) );
		this.$container.find( '.cx-column__content' ).on( 'input', function () {
			mw.hook( 'mw.cx.changeTranslation' ).fire();
		} );
	};

	ContentTranslationEditor.prototype.update = function ( data ) {
		this.$content.html( data );
		mw.hook( 'mw.cx.progress' ).fire( 100 );
		mw.hook( 'mw.cx.changeTranslation' ).fire();
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
