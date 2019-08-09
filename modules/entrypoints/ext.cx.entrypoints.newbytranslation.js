/*!
 * Content Translation invitation for editors while trying to create a new article.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';
	var CAMPAIGN = 'newarticle';

	function onToggle( visible ) {
		if ( visible ) {
			mw.hook( 'mw.cx.cta.shown' ).fire( CAMPAIGN );
		} else {
			// Campaign or call to action was rejected by the user.
			mw.hook( 'mw.cx.cta.reject' ).fire( CAMPAIGN );
		}
	}

	function showMinimized( dialog ) {
		var notice = dialog.findItemFromData( 'notice' ),
			startcxButton = notice.fieldWidget;
		startcxButton.setFlags( { primary: false } );
		startcxButton.toggleFramed();
		dialog.addItems( [ startcxButton ] );
		notice.$body.remove();
	}

	function getCXLink() {
		var siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );

		return mw.util.getUrl( 'Special:ContentTranslation', {
			campaign: CAMPAIGN,
			targettitle: mw.config.get( 'wgTitle' ),
			to: siteMapper.getCurrentWikiLanguageCode()
		} );
	}

	function getContent() {
		var container = new OO.ui.HorizontalLayout(),
			startCXButton = new OO.ui.ButtonWidget( {
				label: mw.msg( 'cx-campaign-newbytranslation-start' ),
				flags: [ 'primary', 'progressive' ],
				href: getCXLink()
			} );

		container.addItems( [
			new OO.ui.IconWidget( {
				icon: 'language',
				flags: [ 'progressive' ]
			} ),
			new OO.ui.LabelWidget( {
				label: mw.msg( 'cx-campaign-newbytranslation-title' ),
				classes: [ 'cx-campaign-newbytranslation-title' ]
			} ),
			new OO.ui.FieldLayout(
				startCXButton,
				{
					label: mw.msg( 'cx-campaign-newbytranslation-notice' ),
					data: 'notice',
					align: 'left'
				}
			)
		] );

		return container;
	}

	function showInvitation() {
		var content, popup;

		content = getContent();
		popup = new OO.ui.PopupWidget( {
			$content: content.$element,
			classes: [ 'cx-entrypoint-newbytranslation' ],
			padded: true,
			anchor: false,
			head: true,
			width: 600,
			height: 40, // Will transition to auto later
			autoClose: false,
			hideWhenOutOfView: false
		} );

		$( document.body ).append( popup.$element );
		popup.on( 'toggle', onToggle );
		setTimeout( function () {
			// Wait till everything painted on screen so that we get correct dimensions
			popup.toggle( true ).setSize( 600, null /* auto */, true /* smooth transition */ );
		}, 200 );

		$( '#wpTextbox1' ).one( 'keyup', function () {
			showMinimized( content );
			popup.setSize( 600, null /* auto */, true /* smooth transition */ );
		} );
	}

	$( showInvitation );

}() );
