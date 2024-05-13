/*!
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	const CAMPAIGN = 'interlanguagelink';

	/**
	 * Start a new page translation in Special:CX.
	 *
	 * @param {string} targetLanguage
	 */
	function startPageInCX( targetLanguage ) {
		const sourceLanguage = mw.cx.siteMapper.getCurrentWikiLanguageCode(),
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
	 *
	 * @param {string} targetLanguage
	 * @return {jQuery}
	 */
	function getDialogContent( targetLanguage ) {
		const descriptionLabel = new OO.ui.LabelWidget( {
			classes: [ 'cx-entrypoint-dialog__desc' ],
			label: mw.msg( 'cx-entrypoint-dialog-desc' )
		} );

		const actionTranslate = new OO.ui.ButtonWidget( {
			label: mw.msg(
				'cx-entrypoint-dialog-button-translate-from',
				$.uls.data.getAutonym( mw.config.get( 'wgContentLanguage' ) )
			),
			flags: [ 'primary', 'progressive' ]
		} );

		actionTranslate.on( 'click', function () {
			startPageInCX( targetLanguage );
		} );

		const $license = $( '<div>' )
			.addClass( 'cx-entrypoint-dialog__license' )
			.append( mw.message( 'cx-license-agreement' ).parseDom() );

		const actions = new OO.ui.HorizontalLayout( {
			classes: [ 'cx-entrypoint-dialog__actions' ],
			items: [ actionTranslate ]
		} );

		if ( !mw.config.get( 'wgContentTranslationAsBetaFeature' ) ) {
			const settingsButton = new OO.ui.ButtonWidget( {
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
		const autonym = $.uls.data.getAutonym( code );

		const $languageLink = $( '<a>' )
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

		const popup = new OO.ui.PopupWidget( {
			label: mw.msg( 'cx-entrypoint-dialog-page-doesnt-exist-yet', autonym ),
			classes: [ 'cx-entrypoint-dialog' ],
			$content: getDialogContent( code ),
			head: true,
			width: 500,
			position: 'after',
			autoFlip: false,
			autoClose: true
		} );

		// HACK: We attached PopupWidget to element in side panel, which is absolutely
		// positioned and often below the fold. Vector skin sets `height: 100%` to
		// <html> and <body> elements, and <html> element is used as container for popup.
		// <html> element is not covering whole document, just the viewport, which messes
		// up the calculation in PopupWidget's computePosition method. See T224880.
		// As a workaround, set <html> element's height to `auto` temporarily while doing
		// position calculations and reset later. Also, check if that height is enough,
		// since our gray interlanguage link is in absolutely positioned side panel.
		popup.computePosition = function () {
			const $html = $( 'html' ),
				panelHeight = $( '#mw-panel' ).outerHeight();

			$html.css( 'height', 'auto' );
			if ( $html.outerHeight() < panelHeight ) {
				$html.css( 'height', panelHeight );
			}
			const oldPositionObj = OO.ui.PopupWidget.prototype.computePosition.call( popup );
			$html.css( 'height', '' );

			return oldPositionObj;
		};

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
