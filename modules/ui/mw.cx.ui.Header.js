/*!
 * TranslationView Header
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw, OO ) {
	'use strict';

	var timer;
	/**
	 * TranslationView Header
	 *
	 * @class
	 * @param {Object} [config] Configuration object
	 */
	mw.cx.ui.Header = function ( config ) {
		// Configuration initialization
		this.config = config || {};
		this.$headerBar = null;
		this.$infobar = null;
		// Parent constructor
		mw.cx.ui.Header.parent.call( this, $.extend( {}, this.config, {
			continuous: true,
			expanded: false,
			$content: this.getContent(),
			classes: [ 'cx-widget__header', 'cx-header' ]
		} ) );
		this.listen();
	};

	/* Setup */

	OO.inheritClass( mw.cx.ui.Header, OO.ui.PanelLayout );

	mw.cx.ui.Header.prototype.getContent = function () {
		var $logo, $titleText, $headerTitle, $translationCenterLink, $translationCenter;

		$logo = $( '<a>' )
			.prop( 'href', mw.config.get( 'wgScript' ) )
			.addClass( 'cx-header__logo' );
		$titleText = $( '<span>' )
			.addClass( 'cx-header__title-text' )
			.text( this.config.titleText || mw.msg( 'cx-stats-title' ) );

		$headerTitle = $( '<div>' )
			.addClass( 'cx-header__title' )
			.append( $logo, $titleText );

		$translationCenterLink = $( '<a>' )
			.attr( 'href', mw.util.getUrl( 'Special:ContentTranslation' ) )
			.text( mw.msg( 'cx-header-all-translations' ) );

		$translationCenter = $( '<div>' )
			.addClass( 'cx-header__translation-center' )
			.append( $translationCenterLink );

		this.$draftStatus = $( '<div>' )
			.addClass( 'cx-header__draft-status' );

		this.$headerBar = $( '<div>' )
			.addClass( 'cx-header__bar' )
			.append( $translationCenter, this.$draftStatus );

		this.infobar = new mw.cx.ui.Infobar( this.config );
		return $( '<div>' ).append( $headerTitle, this.$headerBar, this.infobar.$infobar );
	};

	mw.cx.ui.Header.prototype.listen = function () {
		var self = this;
		mw.hook( 'mw.cx.translation.save-started' ).add( $.proxy( this.updateSaveStatus, this, 'progress' ) );
		mw.hook( 'mw.cx.translation.saved' ).add( $.proxy( this.updateSaveStatus, this, 'success' ) );
		mw.hook( 'mw.cx.translation.save-failed' ).add( $.proxy( this.updateSaveStatus, this, 'fail' ) );
		mw.hook( 'mw.cx.translation.title.change' ).add( $.proxy( this.clearMessages, this ) );

		mw.hook( 'mw.cx.draft.restoring' ).add( function () {
			self.$draftStatus.text( mw.msg( 'cx-draft-restoring' ) );
		} );
		mw.hook( 'mw.cx.draft.restored' ).add( function () {
			self.$draftStatus.text( mw.msg( 'cx-draft-restored' ) );
		} );
		mw.hook( 'mw.cx.draft.restore-failed' ).add( function () {
			self.$draftStatus.text( mw.msg( 'cx-draft-restore-failed' ) );
		} );
		$( window ).on( 'scroll resize', this.onWindowScroll.bind( this ) );
	};

	mw.cx.ui.Header.prototype.updateSaveStatus = function ( status ) {
		var $status = this.$draftStatus,
			minutes = 0;

		$status.attr( 'title', mw.msg( 'cx-save-draft-tooltip' ) );
		clearTimeout( timer );
		if ( status === 'progress' ) {
			$status.text( mw.msg( 'cx-save-draft-saving' ) );
		} else if ( status === 'success' ) {
			$status.text( mw.msg( 'cx-save-draft-save-success', 0 ) );
			timer = setInterval( function () {
				minutes++;
				$status.text(
					mw.msg( 'cx-save-draft-save-success', mw.language.convertNumber( minutes ) )
				);
			}, 60 * 1000 );
		} else if ( status === 'fail' ) {
			$status.text( mw.msg( 'cx-save-draft-error' ) );
		}
	};
	mw.cx.ui.Header.prototype.onWindowScroll = function () {
		var scrollTop = $( window ).scrollTop();

		if ( scrollTop > 0 ) {
			this.$element.addClass( 'sticky' );
		} else {
			this.$element.removeClass( 'sticky' );
		}
	};
}( jQuery, mediaWiki, OO ) );
