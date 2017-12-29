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
 * @cfg {boolean} [canBeSame=false] True if source and target language can be the same langauge
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
	this.$sourceLanguageFilter = null;
	this.$targetLanguageFilter = null;

	this.narrowLimit = 700;
	this.isNarrowScreenSize = false;

	this.init();
};

OO.inheritClass( mw.cx.ui.LanguageFilter, OO.ui.Widget );

mw.cx.ui.LanguageFilter.prototype.init = function () {
	var sourceLanguage = mw.storage.get( 'cxSourceLanguage' ),
		targetLanguage = mw.storage.get( 'cxTargetLanguage' );

	this.isNarrowScreenSize = document.documentElement.clientWidth < this.narrowLimit;

	if ( !this.canBeUndefined ) {
		this.sourceLanguage = sourceLanguage;
		this.targetLanguage = targetLanguage;
	}

	// Load source languages into instance variable from "static" variable
	this.sourceLanguages = mw.cx.ui.LanguageFilter.sourceLanguages;
	this.targetLanguages = mw.cx.ui.LanguageFilter.targetLanguages;

	this.render();
	this.setFilterLabel( this.$sourceLanguageFilter, this.sourceLanguage );
	this.setFilterLabel( this.$targetLanguageFilter, this.targetLanguage );
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
 * Return the appropriate menuWidth parameter for a given language count.
 *
 * @param {number} languagesCount Number of languages
 * @return {string} wide, medium or narrow
 */
mw.cx.ui.LanguageFilter.prototype.getUlsMenuWidth = function ( languagesCount ) {
	var screenWidth = document.documentElement.clientWidth;

	// 1200px is "wide" limit for Content Translation dashboard
	if ( screenWidth > 1200 && languagesCount >= 24 ) {
		return 'wide';
	}

	// 500px is "very narrow" limit for Content Translation dashboard
	if ( screenWidth > 500 && languagesCount >= 12 ) {
		return 'medium';
	}

	return 'narrow';
};

/**
 * Calculate position for ULS, depending on directionality
 */
mw.cx.ui.LanguageFilter.prototype.calculateUlsPosition = function () {
	var isRtl = $( 'html' ).prop( 'dir' ) === 'rtl',
		left = this.$element.offset().left,
		right = left + this.$element.parent().width() - this.$menu.width(),
		isInRtlViewport = right > 0,
		isInLtrViewport = left + this.$menu.width() > $( window ).width();

	if ( ( isRtl && isInRtlViewport ) || ( !isRtl && isInLtrViewport ) ) {
		this.left = right;
	} else {
		this.left = left;
	}

	this.$menu.css( this.position() );
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
			quickListLanguages = this.$targetLanguageFilter.data( 'uls' ).options.quickList();
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
	this.setFilterLabel( this.$sourceLanguageFilter, this.sourceLanguage );

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
	this.setFilterLabel( this.$sourceLanguageFilter, this.sourceLanguage );
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

			quickListLanguages = this.$sourceLanguageFilter.data( 'uls' ).options.quickList();
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
	this.setFilterLabel( this.$targetLanguageFilter, this.targetLanguage );

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
	this.setFilterLabel( this.$targetLanguageFilter, this.targetLanguage );
};

/**
 * Set the label for jQuery element that holds language filter.
 *
 * @param {jQuery} $filter
 * @param {string} language
 */
mw.cx.ui.LanguageFilter.prototype.setFilterLabel = function ( $filter, language ) {
	var langProps, label;

	if ( this.canBeUndefined && !language ) {
		$filter.text( mw.msg( 'cx-translation-filter-label-all-languages' ) );
		return;
	}

	langProps = {
		lang: language,
		dir: $.uls.data.getDir( language )
	};
	label = this.isNarrowScreenSize ?
		mw.language.bcp47( language ) :
		$.uls.data.getAutonym( language );

	$filter.prop( langProps ).text( label );

	this.emit( 'resize' );
};

/**
 * Fill the source language dropdown with source languages for which selected article exists
 *
 * @param {array} [sourceLanguages] Array of language codes used to populate ULS
 * @param {boolean} [replace]
 * @param {Object} [ulsOptions]
 */
mw.cx.ui.LanguageFilter.prototype.fillSourceLanguages = function ( sourceLanguages, replace, ulsOptions ) {
	var self = this;

	// Default to all valid source languages
	if ( !sourceLanguages ) {
		sourceLanguages = mw.cx.ui.LanguageFilter.sourceLanguages;
	}

	if ( replace ) {
		// Delete the old source ULS data
		this.$sourceLanguageFilter.data( 'uls', null );
		this.$sourceLanguageFilter.off( 'click' );
	}

	this.$sourceLanguageFilter.uls( $.extend( {
		languages: this.getAutonyms( sourceLanguages ),
		menuWidth: this.getUlsMenuWidth( sourceLanguages.length ),
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
 * @param {array} [targetLanguages]
 * @param {boolean} [replace]
 * @param {Object} [ulsOptions]
 */
mw.cx.ui.LanguageFilter.prototype.fillTargetLanguages = function ( targetLanguages, replace, ulsOptions ) {
	var self = this;

	// Default to all valid target languages
	if ( !targetLanguages ) {
		targetLanguages = mw.cx.ui.LanguageFilter.targetLanguages;
	}

	if ( replace ) {
		// Delete the old target ULS data
		this.$targetLanguageFilter.data( 'uls', null );
		this.$targetLanguageFilter.off( 'click' );
	}

	this.$targetLanguageFilter.uls( $.extend( {
		languages: this.getAutonyms( targetLanguages ),
		menuWidth: this.getUlsMenuWidth( targetLanguages.length ),
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
	var $sourceLanguageFilterContainer, $targetLanguageFilterContainer;

	this.$sourceLanguageFilter = $( '<div>' )
		.addClass( 'cx-language-filter-button' );
	this.fillSourceLanguages( this.sourceLanguages );
	$sourceLanguageFilterContainer = $( '<div>' )
		.addClass( 'cx-language-filter-source-language' )
		.append( this.$sourceLanguageFilter );

	this.$targetLanguageFilter = $( '<div>' )
		.addClass( 'cx-language-filter-button' );
	this.fillTargetLanguages( this.targetLanguages );
	$targetLanguageFilterContainer = $( '<div>' )
		.addClass( 'cx-language-filter-target-language' )
		.append( this.$targetLanguageFilter );

	this.$element
		.addClass( 'cx-language-filter' )
		.append(
			$sourceLanguageFilterContainer,
			$( '<div>' ).addClass( 'cx-language-filter-arrow' ),
			$targetLanguageFilterContainer
		);
};

mw.cx.ui.LanguageFilter.prototype.listen = function () {
	// Resize handler
	$( window ).resize( $.throttle( 250, this.resize.bind( this ) ) );
};

mw.cx.ui.LanguageFilter.prototype.resize = function () {
	var isNarrowScreenSize = document.documentElement.clientWidth < this.narrowLimit;

	// Exit early if screen size stays above/under narrow screen size limit
	if ( this.isNarrowScreenSize === isNarrowScreenSize ) {
		return;
	}

	this.isNarrowScreenSize = isNarrowScreenSize;
	this.setFilterLabel( this.$sourceLanguageFilter, this.sourceLanguage );
	this.setFilterLabel( this.$targetLanguageFilter, this.targetLanguage );
};
