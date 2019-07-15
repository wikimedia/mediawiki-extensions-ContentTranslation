/*!
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	var CAMPAIGN = 'interlanguagelink';

	/**
	 * Start a new page translation in Special:CX.
	 * @param {string} targetLanguage
	 */
	function startPageInCX( targetLanguage ) {
		var sourceLanguage = mw.cx.siteMapper.getCurrentWikiLanguageCode(),
			sourceTitle = mw.config.get( 'wgTitle' );

		mw.cx.siteMapper.setCXToken( sourceLanguage, targetLanguage, sourceTitle );
		location.href = mw.cx.siteMapper.getCXUrl(
			sourceTitle,
			null,
			sourceLanguage,
			targetLanguage,
			{ campaign: CAMPAIGN }
		);
	}

	/**
	 * Render the CX entry point dialog.
	 * @param {string} targetLanguage
	 * @return {jQuery}
	 */
	function getDialogContent( targetLanguage ) {
		var settingsButton, descriptionLabel, actionTranslate, $license, actions;

		descriptionLabel = new OO.ui.LabelWidget( {
			classes: [ 'cx-entrypoint-dialog__desc' ],
			label: mw.msg( 'cx-entrypoint-dialog-desc' )
		} );

		actionTranslate = new OO.ui.ButtonWidget( {
			label: mw.msg(
				'cx-entrypoint-dialog-button-translate-from',
				$.uls.data.getAutonym( mw.config.get( 'wgContentLanguage' ) )
			),
			flags: [ 'primary', 'progressive' ]
		} );

		actionTranslate.on( 'click', function () {
			startPageInCX( targetLanguage );
		} );

		$license = $( '<div>' )
			.addClass( 'cx-entrypoint-dialog__license' )
			.html( mw.message( 'cx-license-agreement' ).parse() );

		actions = new OO.ui.HorizontalLayout( {
			classes: [ 'cx-entrypoint-dialog__actions' ],
			items: [ actionTranslate ]
		} );

		if ( !mw.config.get( 'wgContentTranslationAsBetaFeature' ) ) {
			settingsButton = new OO.ui.ButtonWidget( {
				classes: [ 'cx-entrypoint-dialog__settings' ],
				icon: 'settings',
				framed: false,
				href: mw.util.getUrl( 'Special:Preferences#mw-prefsection-rendering-languages' ),
				target: '_blank'
			} );
			actions.addItems( [ settingsButton ] );
		}
		return $( '<div>' ).append( descriptionLabel.$element, actions.$element, $license );
	}

	function createCXInterlanguageItem( code ) {
		var $languageLink, popup, autonym = $.uls.data.getAutonym( code );

		$languageLink = $( '<a>' )
			.addClass( 'new' )
			.prop( {
				title: mw.msg( 'cx-entrypoint-title', autonym ),
				lang: code,
				href: mw.util.getUrl( 'Special:ContentTranslation', {
					page: mw.config.get( 'wgTitle' ),
					from: mw.cx.siteMapper.getCurrentWikiLanguageCode(),
					to: code
				} )
			} )
			.text( autonym );

		popup = new OO.ui.PopupWidget( {
			label: mw.msg( 'cx-entrypoint-dialog-page-doesnt-exist-yet', autonym ),
			classes: [ 'cx-entrypoint-dialog' ],
			$content: getDialogContent( code ),
			head: true,
			width: 500,
			position: 'after',
			autoClose: true
		} );

		$languageLink.on( 'click', function () {
			popup.toggle( true );
			return false;
		} );

		return $( '<li>' )
			.addClass( 'cx-new-interlanguage-link' )
			.append( $languageLink, popup.$element );
	}

	mw.cx.createCXInterlanguageItem = createCXInterlanguageItem;
}() );
