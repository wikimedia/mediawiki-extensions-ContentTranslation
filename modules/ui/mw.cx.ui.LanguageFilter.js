'use strict';

// Register 'All languages' in ULS data
// 'all' could be valid language code, so we use extension mechanism and go with 'x-all'
$.uls.data.addLanguage( 'x-all', {
	script: 'Latn',
	regions: [ 'WW' ],
	autonym: mw.msg( 'cx-translation-filter-uls-all-languages' )
} );

/**
 * Language filter
 *
 * @class
 * @extends OO.ui.Widget
 * @param {Object} [config] Configuration object
 * @cfg {boolean} [canBeSame=false] True if source and target language can be the same language
 * @cfg {boolean} [canBeUndefined=false] True if source or target language can be unset
 * @cfg {boolean} [updateLocalStorage=false] True if this language selector can update local storage,
 * when source or target language changes
 * @cfg {Function} [onSourceLanguageChange] Callback invoked when source language changes
 * @cfg {Function} [onTargetLanguageChange] Callback invoked when target language changes
 */
mw.cx.ui.LanguageFilter = function ( config ) {
	// Configuration initialization
	this.config = config || {};

	// Parent method
	mw.cx.ui.LanguageFilter.super.call( this, config );

	this.canBeSame = this.config.canBeSame || false;
	this.canBeUndefined = this.config.canBeUndefined || false;
	this.updateLocalStorage = this.config.updateLocalStorage || false;
	this.onSourceLanguageChange = this.config.onSourceLanguageChange;
	this.onTargetLanguageChange = this.config.onTargetLanguageChange;
	// Represents all possible source/target language codes
	this.sourceLanguages = null;
	this.targetLanguages = null;
	// this.sourceLanguage and this.targetLanguage are selected source/target languages respectively
	this.sourceLanguage = null;
	this.targetLanguage = null;
	this.sourceLanguageButton = null;
	this.targetLanguageButton = null;

	this.narrowLimit = 700;
	this.isNarrowScreenSize = false;

	this.init();
};

OO.inheritClass( mw.cx.ui.LanguageFilter, OO.ui.Widget );

/* Static Properties */

/**
 * @static
 */
mw.cx.ui.LanguageFilter.static.sourceLanguages = null;
mw.cx.ui.LanguageFilter.static.targetLanguages = null;

/* Methods */

mw.cx.ui.LanguageFilter.prototype.init = function () {
	var sourceLanguage = mw.storage.get( 'cxSourceLanguage' ),
		targetLanguage = mw.storage.get( 'cxTargetLanguage' );

	this.isNarrowScreenSize = document.documentElement.clientWidth < this.narrowLimit;

	if ( !this.canBeUndefined ) {
		this.sourceLanguage = sourceLanguage;
		this.targetLanguage = targetLanguage;
	}

	// Load source languages into instance variable from static variable
	this.sourceLanguages = this.constructor.static.sourceLanguages;
	this.targetLanguages = this.constructor.static.targetLanguages;

	this.render();
	this.setFilterLabel( this.sourceLanguageButton, this.sourceLanguage );
	this.setFilterLabel( this.targetLanguageButton, this.targetLanguage );
	this.listen();
};

/**
 * Return an object of languages indexed by language code.
 *
 * @param {Array} languages An array of language codes.
 * @return {Object} autonyms indexed by language code.
 */
mw.cx.ui.LanguageFilter.prototype.getAutonyms = function ( languages ) {
	return languages.reduce( function ( prevObject, element ) {
		prevObject[ element ] = $.uls.data.getAutonym( element );

		return prevObject;
	}, {} );
};

/**
 * Calculate position for ULS, to display it next to the language filter
 * and use the appropriate size, not to go outside of viewport.
 */
mw.cx.ui.LanguageFilter.prototype.calculateUlsPosition = function () {
	var ulsTriggerLeft = this.$element.offset().left,
		triggerWidth = this.$element.outerWidth(),
		menuWidth = this.$menu.width(),
		isRtl = $( 'html' ).prop( 'dir' ) === 'rtl',
		left = isRtl ? ulsTriggerLeft : ( ulsTriggerLeft + triggerWidth - menuWidth ),
		isInsideViewport = isRtl ? ( left + menuWidth ) < document.documentElement.clientWidth : left > 0;

	if ( isInsideViewport ) {
		this.left = left;
		this.$menu.css( this.position() );
		return;
	}

	this.menuWidth = this.getMenuWidth() === 'wide' ? 'medium' : 'narrow';
	this.recreateLanguageFilter();
	// The following classes are used here:
	// * uls-medium
	// * uls-narrow
	this.$menu
		.removeClass( 'uls-wide uls-medium uls-narrow' )
		.addClass( 'uls-' + this.menuWidth );

	// HACK: This is a recursive call to this function, because this
	// method is registered as onVisible when ULS menu is created.
	this.visible();
};

/**
 * Check whether a language is available as a target language
 * for the specified source language.
 *
 * @param {string} targetLanguage A language code.
 * @return {boolean} true if the target language is valid for the source language.
 */
mw.cx.ui.LanguageFilter.prototype.isValidTarget = function ( targetLanguage ) {
	return this.targetLanguages.indexOf( targetLanguage ) !== -1;
};

/**
 * Check whether a language is available as a source language
 * for the specified target language.
 *
 * @param {string} sourceLanguage A language code.
 * @return {boolean} true if the target language is valid for the source language.
 */
mw.cx.ui.LanguageFilter.prototype.isValidSource = function ( sourceLanguage ) {
	return this.sourceLanguages.indexOf( sourceLanguage ) !== -1;
};

mw.cx.ui.LanguageFilter.prototype.setValidSourceLanguages = function ( sourceLanguages ) {
	this.sourceLanguages = sourceLanguages;
};

/**
 * Get the current source language code.
 *
 * @return {string} Language code. Empty string if not set.
 */
mw.cx.ui.LanguageFilter.prototype.getSourceLanguage = function () {
	return this.sourceLanguage;
};

/**
 * Sets the source language.
 *
 * @param {string} language A language code
 */
mw.cx.ui.LanguageFilter.prototype.setSourceLanguage = function ( language ) {
	var currentSource, i, length, quickListLanguages, quickListLang;

	if ( language === 'x-all' ) {
		language = null;
	}

	// Do not allow selection of invalid source languages, unless specified with canBeUndefined tag
	if ( ( !this.canBeUndefined && !this.isValidSource( language ) ) || language === this.getSourceLanguage() ) {
		return;
	}

	// Don't let the same languages be selected as source and target.
	// Instead, do what the user probably means: either swap them if
	// it's valid, or pick the first of the common languages in ULS.
	if ( !this.canBeSame && language === this.getTargetLanguage() ) {
		currentSource = this.getSourceLanguage();

		if ( this.isValidTarget( currentSource ) ) {
			this.sourceLanguage = language;
			this.setTargetLanguage( currentSource );
		} else {
			quickListLanguages = this.targetLanguageButton.$button.data( 'uls' ).options.quickList();
			for ( i = 0, length = quickListLanguages.length; i < length; i++ ) {
				quickListLang = quickListLanguages[ i ];

				if ( this.isValidTarget( quickListLang ) && quickListLang !== language ) {
					this.setTargetLanguage( quickListLang );
					break;
				}
			}
		}
	}

	// If we still don't have a valid source language, return,
	// so we prevent same source and target language
	if ( !this.canBeSame && language === this.getTargetLanguage() ) {
		return;
	}

	this.sourceLanguage = language;
	this.setFilterLabel( this.sourceLanguageButton, this.sourceLanguage );

	if ( this.updateLocalStorage ) {
		mw.storage.set( 'cxSourceLanguage', this.sourceLanguage );
	}

	if ( this.onSourceLanguageChange ) {
		this.onSourceLanguageChange( this.sourceLanguage );
	}
};

/**
 * Set source language and update Language filter label without any checks and side effects on
 * local storage or invoked callbacks when language changes
 *
 * @param {string} language Language code
 */
mw.cx.ui.LanguageFilter.prototype.setSourceLanguageNoChecks = function ( language ) {
	this.sourceLanguage = language;
	this.setFilterLabel( this.sourceLanguageButton, this.sourceLanguage );
};

/**
 * Get the current target language code.
 *
 * @return {string} Language code. Empty string if not set.
 */
mw.cx.ui.LanguageFilter.prototype.getTargetLanguage = function () {
	return this.targetLanguage;
};

/**
 * Sets the target language.
 *
 * @param {string} language A language code
 */
mw.cx.ui.LanguageFilter.prototype.setTargetLanguage = function ( language ) {
	var currentTarget, i, length, quickListLanguages, quickListLang;

	if ( language === 'x-all' ) {
		language = null;
	}

	if ( ( !this.canBeUndefined && !this.isValidTarget( language ) ) || this.targetLanguage === language ) {
		return;
	}

	// Don't let the same languages be selected as source and target.
	// Instead, do what the user probably means: either swap them if
	// it's valid, or pick the first valid language of the common languages in ULS.
	if ( !this.canBeSame && language === this.getSourceLanguage() ) {
		currentTarget = this.getTargetLanguage();

		if ( this.isValidSource( currentTarget ) ) {
			this.targetLanguage = language;
			this.setSourceLanguage( currentTarget );
		} else {
			// When swapping languages, there can sometimes be only one available source language,
			// and we don't have options to swap languages.
			// This can rarely happen, but we return early to prevent
			// any errors and unexpected behavior in code that uses this class.
			if ( this.sourceLanguages.length === 1 ) {
				return;
			}

			quickListLanguages = this.sourceLanguageButton.$button.data( 'uls' ).options.quickList();
			for ( i = 0, length = quickListLanguages.length; i < length; i++ ) {
				quickListLang = quickListLanguages[ i ];

				if ( this.isValidSource( quickListLang ) && quickListLang !== language ) {
					this.setSourceLanguage( quickListLang );
					break;
				}
			}
		}
	}

	// If we still don't have a valid source language, return,
	// so we prevent same source and target language
	if ( !this.canBeSame && language === this.getSourceLanguage() ) {
		return;
	}

	this.targetLanguage = language;
	this.setFilterLabel( this.targetLanguageButton, this.targetLanguage );

	if ( this.updateLocalStorage ) {
		mw.storage.set( 'cxTargetLanguage', this.targetLanguage );
	}

	if ( this.onTargetLanguageChange ) {
		this.onTargetLanguageChange( this.targetLanguage );
	}
};

/**
 * Set target language and update Language filter label without any checks and side effects on
 * local storage or invoked callbacks when language changes.
 *
 * @param {string} language Language code
 */
mw.cx.ui.LanguageFilter.prototype.setTargetLanguageNoChecks = function ( language ) {
	this.targetLanguage = language;
	this.setFilterLabel( this.targetLanguageButton, this.targetLanguage );
};

/**
 * Set the label for language filter button that acts as a trigger for displaying ULS language filter.
 *
 * @param {OO.ui.ButtonWidget} filterButton
 * @param {string} language
 */
mw.cx.ui.LanguageFilter.prototype.setFilterLabel = function ( filterButton, language ) {
	var langProps, label;

	if ( this.canBeUndefined && !language ) {
		filterButton.setLabel( mw.msg( 'cx-translation-filter-label-all-languages' ) );
		return;
	}

	langProps = {
		lang: language,
		dir: $.uls.data.getDir( language )
	};
	label = this.isNarrowScreenSize ?
		mw.language.bcp47( language ) :
		$.uls.data.getAutonym( language );

	filterButton.$button.prop( langProps );
	filterButton.setLabel( label );

	this.emit( 'resize' );
};

/**
 * Fill the source language dropdown with source languages for which selected article exists
 *
 * @param {Array} [sourceLanguages] Array of language codes used to populate ULS
 * @param {boolean} [replace=false] Whether to destroy the ULS instance before recreating it
 * @param {Object} [ulsOptions] ULS options that are added to the ULS
 */
mw.cx.ui.LanguageFilter.prototype.fillSourceLanguages = function ( sourceLanguages, replace, ulsOptions ) {
	var self = this;

	// Default to all valid source languages
	if ( !sourceLanguages ) {
		sourceLanguages = this.constructor.static.sourceLanguages;
	}

	if ( replace ) {
		// Delete the old source ULS data
		this.sourceLanguageButton.$button.data( 'uls', null );
		this.sourceLanguageButton.$button.off( 'click' );
	}

	this.sourceLanguageButton.$button.uls( $.extend( {
		languages: this.getAutonyms( sourceLanguages ),
		ulsPurpose: 'cx-languagefilter-source',
		onSelect: function ( language ) {
			self.setSourceLanguage( language );
			mw.uls.addPreviousLanguage( language );
		},
		onReady: function () {
			this.$menu.addClass( 'cx-language-filter-source-language' );
		},
		onVisible: this.calculateUlsPosition,
		quickList: function () {
			return mw.uls.getFrequentLanguageList().filter( function ( n ) {
				return sourceLanguages.indexOf( n ) !== -1;
			} );
		}
	}, ulsOptions ) );
};

/**
 * Fill the target language dropdown with target languages that have
 * language tools compatible with the source language.
 *
 * @param {Array} [targetLanguages] Array of language codes used to populate ULS
 * @param {boolean} [replace=false] Whether to destroy the ULS instance before recreating it
 * @param {Object} [ulsOptions] ULS options that are added to the ULS
 */
mw.cx.ui.LanguageFilter.prototype.fillTargetLanguages = function ( targetLanguages, replace, ulsOptions ) {
	var self = this;

	// Default to all valid target languages
	if ( !targetLanguages ) {
		targetLanguages = this.constructor.static.targetLanguages;
	}

	if ( replace ) {
		// Delete the old target ULS data
		this.targetLanguageButton.$button.data( 'uls', null );
		this.targetLanguageButton.$button.off( 'click' );
	}

	this.targetLanguageButton.$button.uls( $.extend( {
		languages: this.getAutonyms( targetLanguages ),
		ulsPurpose: 'cx-languagefilter-target',
		onSelect: function ( language ) {
			self.setTargetLanguage( language );
			mw.uls.addPreviousLanguage( language );
		},
		onReady: function () {
			this.$menu.addClass( 'cx-language-filter-target-language' );
		},
		onVisible: this.calculateUlsPosition,
		quickList: function () {
			return mw.uls.getFrequentLanguageList().filter( function ( n ) {
				return targetLanguages.indexOf( n ) !== -1;
			} );
		},
		languageDecorator: this.config.languageDecorator
	}, ulsOptions ) );
};

mw.cx.ui.LanguageFilter.prototype.render = function () {
	this.sourceLanguageButton = new OO.ui.ButtonWidget( {
		framed: false,
		classes: [ 'cx-language-filter-source-language' ],
		$button: $( '<a>' ).addClass( 'cx-language-filter-button' )
	} );

	this.targetLanguageButton = new OO.ui.ButtonWidget( {
		framed: false,
		classes: [ 'cx-language-filter-target-language' ],
		$button: $( '<a>' ).addClass( 'cx-language-filter-button' )
	} );

	this.fillSourceLanguages( this.sourceLanguages );
	this.fillTargetLanguages( this.targetLanguages );

	this.$element
		.addClass( 'cx-language-filter' )
		.append(
			this.sourceLanguageButton.$element,
			$( '<div>' ).addClass( 'cx-language-filter-arrow' ),
			this.targetLanguageButton.$element
		);
};

mw.cx.ui.LanguageFilter.prototype.listen = function () {
	this.sourceLanguageButton.$button.on( {
		keypress: function () {
			this.click();
		}
	} );
	this.targetLanguageButton.$button.on( {
		keypress: function () {
			this.click();
		}
	} );

	// Resize handler
	$( window ).on( 'resize', OO.ui.throttle( this.resize.bind( this ), 250 ) );
};

mw.cx.ui.LanguageFilter.prototype.resize = function () {
	var isNarrowScreenSize = document.documentElement.clientWidth < this.narrowLimit;

	// Exit early if screen size stays above/under narrow screen size limit
	if ( this.isNarrowScreenSize === isNarrowScreenSize ) {
		return;
	}

	this.isNarrowScreenSize = isNarrowScreenSize;
	this.setFilterLabel( this.sourceLanguageButton, this.sourceLanguage );
	this.setFilterLabel( this.targetLanguageButton, this.targetLanguage );
};
