/*!
 * ContentTranslation version switcher
 * Adds buttons for switching between CX1 and CX2.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	/**
	 * ContentTranslationVersionSwitcher
	 *
	 * @class
	 *
	 * @param {HTMLElement} element
	 */
	function ContentTranslationVersionSwitcher( element ) {
		this.$container = $( element );
		this.enableButton = null;
		this.disableButton = null;
		this.helpLink = null;

		this.render();
		this.init();
		this.listen();
	}

	ContentTranslationVersionSwitcher.prototype.render = function () {
		this.enableButton = new OO.ui.ButtonWidget( {
			icon: 'beaker',
			framed: false,
			// .cx-dashboard-sidebar__link--version is added conditionally
			classes: [ 'cx-dashboard-sidebar__link' ],
			flags: [ 'primary', 'progressive' ],
			label: mw.msg( 'cx-dashboard-sidebar-newversion' )
		} );

		this.disableButton = new OO.ui.ButtonWidget( {
			framed: false,
			classes: [ 'cx-dashboard-sidebar__link', 'cx-dashboard-sidebar__link--disable' ],
			flags: [ 'primary', 'progressive' ],
			label: mw.msg( 'cx-dashboard-sidebar-newversion-disable' )
		} );

		this.helpLink = new OO.ui.ButtonWidget( {
			framed: false,
			classes: [ 'cx-dashboard-sidebar__link', 'cx-dashboard-sidebar__link--help' ],
			flags: [ 'primary', 'progressive' ],
			href: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Content_translation/v2',
			target: '_blank',
			label: mw.msg( 'cx-dashboard-sidebar-newversion-help' )
		} );
	};

	ContentTranslationVersionSwitcher.prototype.init = function () {
		var newVersionEnabled = mw.user.options.get( 'cx-new-version' );

		if ( newVersionEnabled ) {
			this.enableButton.setLabel( mw.msg( 'cx-dashboard-sidebar-newversion-using' ) );
		}

		this.setDisabledState( newVersionEnabled );
		this.$container.append(
			this.enableButton.$element,
			this.helpLink.$element,
			this.disableButton.$element
		);
	};

	ContentTranslationVersionSwitcher.prototype.listen = function () {
		this.enableButton.connect( this, { click: [ 'toggleVersion', true ] } );
		this.disableButton.connect( this, { click: [ 'toggleVersion', false ] } );
	};

	/**
	 * Sets the state of 'enable' and 'disable' button when user preference for new version is fetched.
	 * If user haven't opted-in for new version, show 'enable' button and hide 'disable' button.
	 * If user did opt-in for new version, disable 'enable' button and show 'disable' button.
	 *
	 * @param {boolean} newVersionEnabled True if new version of Content Translation is enabled
	 */
	ContentTranslationVersionSwitcher.prototype.setDisabledState = function ( newVersionEnabled ) {
		this.enableButton.setDisabled( newVersionEnabled );
		this.disableButton.setDisabled( !newVersionEnabled );
		this.helpLink.setDisabled( !newVersionEnabled );

		this.disableButton.toggle( newVersionEnabled );
		this.helpLink.toggle( newVersionEnabled );

		this.enableButton.$element.toggleClass( 'cx-dashboard-sidebar__link--version', newVersionEnabled );
	};

	/**
	 * Handler invoked when user preference toggle completes successfully.
	 *
	 * @param {boolean} newVersionEnabled True if user opted-in for new version,
	 * false if opted-out by clicking 'disable' button.
	 */
	ContentTranslationVersionSwitcher.prototype.switchingSuccessHandler = function ( newVersionEnabled ) {
		this.setDisabledState( newVersionEnabled );

		if ( newVersionEnabled ) {
			this.enableButton.setLabel( mw.msg( 'cx-dashboard-sidebar-newversion-using' ) );
			mw.notify(
				mw.msg( 'cx-newversion-notification-message' ),
				{ title: mw.msg( 'cx-newversion-notification-title' ), autoHideSeconds: 'long' }
			);
		} else {
			this.enableButton.setLabel( mw.msg( 'cx-dashboard-sidebar-newversion' ) );
		}
	};

	/**
	 * Handler invoked when toggling of user preference fails. Since we first try using global
	 * preferences, if error code is 'unknown_action', we retry saving locally. If both attempts
	 * fail, we restore the state of 'enable' and 'disable' buttons.
	 *
	 * @param {boolean} newVersion True if user tried to opt-in for new version,
	 * false if tried to opt-out by clicking 'disable' button.
	 * @param {string} error Error code
	 */
	ContentTranslationVersionSwitcher.prototype.switchingFailHandler = function ( newVersion, error ) {
		// If GlobalPreferences extension isn't installed, we'll get 'unknown_action' error
		if ( error !== 'unknown_action' ) {
			// Restore the original state of 'enable' and 'disable' buttons
			this.setDisabledState( !newVersion );
			return;
		}

		// Retry saving the user preference locally, without usage of global preferences
		this.persistUserPreference( 'options', newVersion ).then(
			this.switchingSuccessHandler.bind( this, newVersion ),
			this.setDisabledState.bind( this, !newVersion )
		);
	};

	/**
	 * Toggles the user preference to use new version. Global preferences are used for
	 * saving the choice, if available.
	 *
	 * @param {boolean} newVersion True if user wants to opt-in for new version,
	 * false if wants to opt-out by clicking 'disable' button.
	 */
	ContentTranslationVersionSwitcher.prototype.toggleVersion = function ( newVersion ) {
		// Disable both buttons to prevent multiple clicks
		this.enableButton.setDisabled( true );
		this.disableButton.setDisabled( true );

		// Try saving user setting by using global preferences
		this.persistUserPreference( 'globalpreferences', newVersion ).then(
			this.switchingSuccessHandler.bind( this, newVersion ),
			this.switchingFailHandler.bind( this, newVersion )
		);
	};

	/**
	 * Save the user preference in database.
	 *
	 * @param {'options'|'globalpreferences'} action
	 * @param {boolean} newVersion True if user wants to opt-in for new version, false if wants to opt-out.
	 * @return {jQuery.Promise} API call to save the user preference
	 */
	ContentTranslationVersionSwitcher.prototype.persistUserPreference = function ( action, newVersion ) {
		var numericalPreference = newVersion ? 1 : 0;

		return new mw.Api().postWithToken( 'csrf', {
			assert: 'user',
			formatversion: 2,
			action: action,
			optionname: 'cx-new-version',
			optionvalue: numericalPreference
		} );
	};

	// Register the plugin
	$.fn.cxVersionSwitcher = function () {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxVersionSwitcher' );

			if ( !data ) {
				$this.data( 'cxVersionSwitcher', ( data = new ContentTranslationVersionSwitcher( this ) ) );
			}
		} );
	};
}() );
