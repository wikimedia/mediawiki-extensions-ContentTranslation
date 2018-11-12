/*
 * Guided Tour for ContentTranslation publishing.
 */
( function () {
	'use strict';

	var tour,
		cactions, $moveLink,
		editId, veEditId, editElement,
		publishData, translatedTitle, translatorUsername, draftTitle,
		currentTitle = mw.config.get( 'wgTitle' ),
		canonicalNamespace = mw.config.get( 'wgCanonicalNamespace' ),
		username = mw.user.getName(),
		cookieName = '-cx-published',
		publishCookie = mw.cookie.get( cookieName );

	if ( publishCookie === null ) {
		return;
	}

	publishData = JSON.parse( publishCookie );
	translatedTitle = publishData.translatedTitle;
	translatorUsername = publishData.username;
	draftTitle = username + '/' + translatedTitle;

	function isUserDraft() {
		return canonicalNamespace === 'User' &&
			username === translatorUsername &&
			currentTitle === draftTitle;
	}

	function isMovePage() {
		var relevantPage, draftPage, title;

		if ( mw.config.get( 'wgCanonicalSpecialPageName' ) !== 'Movepage' ) {
			return false;
		}

		title = mw.Title.newFromText( draftTitle, 2 ); // 2 is user space

		if ( title === null ) {
			return false;
		}

		draftPage = title.getPrefixedDb();
		relevantPage = mw.config.get( 'wgRelevantPageName' );

		return draftPage === relevantPage;
	}

	function isMoveSuccessPage() {
		return mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Movepage' &&
			mw.guidedTour.hasQuery( { action: 'submit' } );
	}

	function isPublishedPage() {
		return canonicalNamespace === '' && // Main (article) space
			currentTitle === translatedTitle;
	}

	function deletePublishCookie() {
		mw.cookie.set( cookieName, null );
	}

	if ( !isUserDraft() &&
		!isMovePage() &&
		!isMoveSuccessPage() &&
		!isPublishedPage()
	) {
		return;
	}

	tour = new mw.guidedTour.TourBuilder( { name: 'cxpublish' } );
	cactions = '#p-cactions';
	$moveLink = $( '#ca-move a' );
	editId = '#ca-edit';
	veEditId = '#ca-ve-edit';
	editElement = $( veEditId ).length ? veEditId : editId;

	if ( isUserDraft() && !$moveLink.length ) {
		tour.firstStep( {
			name: 'suggestmovestart',
			attachTo: '#firstHeading',
			position: 'bottom',
			// The title is the same as in the usual first step,
			// but the description suggest a different action
			titlemsg: 'cx-publish-gt-first-step-title',
			descriptionmsg: 'cx-publish-gt-no-permission-to-move-description',
			onShow: deletePublishCookie,
			buttons: [ {
				action: 'end'
			} ]
		} );

		return;
	}

	tour.firstStep( {
		name: 'suggestmovestart',
		attachTo: cactions,
		position: 'leftBottom',
		titlemsg: 'cx-publish-gt-first-step-title',
		description: mw.message(
			'cx-publish-gt-first-step-description',
			$( '#ca-edit a' ).text()
		).parse(),
		onShow: function () {
			var $cactions = $( cactions ),
				$actionsMenu = $cactions.find( '.menu' );

			// Show the actions menu immediately when the tour begins
			// so the user won't wonder where is that "Move" action
			$actionsMenu
				.css( 'display', 'block' );

			// ... but hide it and show it usually on further
			// hovering in and out.
			$cactions
				.on( 'mouseleave', function () {
					$actionsMenu.css( 'display', 'none' );
				} )
				.on( 'mouseenter', function () {
					$actionsMenu.css( 'display', 'block' );
				} );
		}
	} )
		.transition( function () {
			if ( isMovePage() ) {
				return 'movehelpstart';
			}
		} );

	// Help the user to move the page correctly
	tour.step( {
		name: 'movehelpstart',
		attachTo: '#wpNewTitleNs',
		position: 'topRight',
		titlemsg: 'cx-publish-gt-move-page-title',
		descriptionmsg: 'cx-publish-gt-move-page-description'
	} )
		.transition( function () {
			if ( isMoveSuccessPage() ) {
				return 'movedstart';
			}
		} );

	// The page was moved.
	// The move action result is shown.
	tour.step( {
		name: 'movedstart',
		attachTo: '#movepage-newlink',
		position: 'bottom',
		titlemsg: 'cx-publish-gt-moved-title',
		descriptionmsg: 'cx-publish-gt-moved-description'
	} )
		.transition( function () {
			if ( isPublishedPage() ) {
				return 'publishedstart';
			}
		} );

	// The page was moved to the main space.
	// Suggest more editing.
	tour.step( {
		name: 'publishedstart',
		attachTo: editElement,
		position: 'bottom',
		titlemsg: 'cx-publish-gt-published-title',
		description: mw.message(
			'cx-publish-gt-published-description',
			$( '#ca-move a' ).text()
		).parse(),
		onShow: deletePublishCookie,
		buttons: [ {
			action: 'end'
		} ]
	} );
}() );
