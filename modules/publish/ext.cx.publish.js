/**
 * ContentTranslation - Publish article
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * Handles the actual submission to the MediaWiki via the API, including captchas.
	 *
	 * @class
	 */
	function CXPublish( $trigger ) {
		this.$trigger = $trigger;
		this.targetTitle = null;
	}

	/**
	 * @param {Object} params Parameters for the API module.
	 * @return {jQuery.Promise}
	 */
	CXPublish.prototype.publish = function ( params ) {
		var apiParams,
			self = this;

		this.targetTitle = ( params && params.title ) || $( '.cx-column--translation > h2' ).text();
		apiParams = $.extend( {}, params, {
			action: 'cxpublish',
			from: mw.cx.sourceLanguage,
			to: mw.cx.targetLanguage,
			sourcetitle: mw.cx.sourceTitle,
			html: self.getContent(),
			status: 'published',
			sourcerevision: mw.cx.sourceRevision,
			categories: this.getCategories().join( '|' ),
			progress: JSON.stringify( mw.cx.getProgress() )
		} );

		// Disable the trigger button
		this.$trigger.prop( 'disabled', true ).text( mw.msg( 'cx-publish-button-publishing' ) );

		return this.checkTargetTitle( this.targetTitle ).then( function ( title ) {

			apiParams.title = self.targetTitle = title;

			return new mw.Api().postWithToken( 'edit', apiParams, {
				// A bigger timeout since publishing after converting html to wikitext
				// parsoid is not a fast operation.
				timeout: 100 * 1000 // in milliseconds
			} ).done( function ( response ) {
				if ( response.cxpublish.result === 'success' ) {
					self.onSuccess();
					return;
				}
				if ( response.cxpublish.edit.captcha ) {
					return self.captchaHandler( response.cxpublish.edit.captcha )
						.then( function ( captchaResult ) {
							return self.publish( $.extend( params, captchaResult ) );
						} );
				}
				// Any other failure
				self.fail( 'cxpublish', '[CX] Unexpected error while publishing: ' + response.cxpublish );
			} ).fail( function ( code, details ) {
				self.onFail( code, details );
			} ).always( function () {
				self.$trigger.prop( 'disabled', true ).text( mw.msg( 'cx-publish-button' ) );
			} );
		} );
	};

	/**
	 * Captcha Handler - Show captcha form.
	 * This method can be overridden if required. The captcha handler
	 * should return a jQuery Promise and resolve with captcha result
	 * parameters as key value pairs.
	 * @param {object} captcha Result returned by MediaWiki api.
	 * @param {object} params Original publish request params
	 * @return {jQuery.promise}
	 */
	CXPublish.prototype.captchaHandler = function ( captcha ) {
		var deferred, $captchaHeader, $captchaForm, $captchaAnswer, $publishButton;

		$captchaHeader = $( '<h2>' )
			.text( mw.msg( 'cx-publish-captcha-title' ) );
		$captchaForm = $( '<div>' )
			.addClass( 'cx-publish-captcha-form' )
			.append( $captchaHeader );

		if ( captcha.url ) { // FancyCaptcha
			$captchaForm.append( $( '<img>' ).attr( 'src', captcha.url ) );
		} else if ( captcha.type === 'simple' || captcha.type === 'math' ) {
			$captchaForm.append( document.createTextNode( captcha.question ) );
		} else if ( captcha.type === 'question' ) {
			$captchaForm.append( captcha.question );
		}

		$captchaAnswer = $( '<input>' )
			.prop( 'type', 'text' );

		$publishButton = $( '<button>' )
			.addClass( 'cx-header__publish-captcha mw-ui-button mw-ui-constructive' )
			.text( mw.msg( 'cx-publish-button' ) );

		$captchaForm.append( $captchaAnswer, $publishButton );

		// Show the captcha form
		this.$trigger.after( $captchaForm );

		deferred = $.Deferred();

		$publishButton.on( 'click', function () {
			var captchaParams = {
				wpCaptchaId: captcha.id,
				wpCaptchaWord: $captchaAnswer.val()
			};

			$( this ).prop( 'disabled', true );
			$captchaForm.remove();
			deferred.resolve( captchaParams );
		} );

		return deferred.promise();
	};

	/**
	 * Checks to see if there is already a published article with the title
	 * @param {string} title The title to check
	 * @return {jQuery.promise}
	 */
	CXPublish.prototype.titleExists = function ( title ) {
		var api,
			deferred = $.Deferred();

		api = new mw.Api();

		api.get( {
			titles: title
		}, {
			dataType: 'jsonp'
		} ).done( function ( response ) {
			if ( response.query.pages[ -1 ] ) {
				deferred.resolve( false );
			} else {
				deferred.resolve( true );
			}
		} );

		return deferred.promise();
	};

	/**
	 * Generate an alternate title in case of title collision
	 * @param {string} title The title
	 * @return {string}
	 */
	function getAlternateTitle( title ) {
		var username, mwTitle;

		username = mw.user.getName();
		mwTitle = mw.Title.newFromText( title );
		if ( mwTitle && mwTitle.getNamespaceId() === 2 ) {
			return increaseVersion( title );
		} else {
			return 'User:' + username + '/' + title;
		}
	}

	/**
	 * Checks to see if there is already a published article with the title.
	 * If exists ask the translator a resolution for the conflict.
	 * @param {string} title The title to check
	 * @return {jQuery.Promise}
	 */
	CXPublish.prototype.checkTargetTitle = function ( title ) {
		var self = this;

		title = mw.cx.SiteMapper.prototype.getTargetTitle( title );
		return this.titleExists( title ).then( function ( titleExists ) {
			var $dialog;

			if ( !titleExists ) {
				return title;
			}
			// Show a dialog to decide what to do now
			self.$trigger.cxPublishingDialog();
			$dialog = self.$trigger.data( 'cxPublishingDialog' );
			return $dialog.listen().then( function ( overwrite ) {
				if ( overwrite ) {
					return title;
				}
				return getAlternateTitle( title );
			} );
		} );
	};

	/**
	 * Increase the version number of a title starting with 1.
	 * @param {string} title The title to increase the version on.
	 * @return {string}
	 */
	function increaseVersion( title ) {
		var match, version;

		match = title.match( /^.*\((\d+)\)$/ );
		if ( match ) {
			version = parseInt( match[ 1 ], 10 ) + 1;

			return title.replace( /\(\d+\)$/, '(' + version + ')' );
		}

		return title + ' (1)';
	}

	/**
	 * Get categories for the current translation pair
	 * @return {string[]} Category titles
	 */
	CXPublish.prototype.getCategories = function () {
		var i, sortedKeys, categoryTitles, targetCategories;

		targetCategories = mw.cx.categoryTool.categories.target;
		if ( !targetCategories ) {
			return [];
		}
		sortedKeys = Object.keys( targetCategories ).sort();
		categoryTitles = [];
		for ( i = 0; i < sortedKeys.length; i++ ) {
			categoryTitles.push( targetCategories[ sortedKeys[ i ] ] );
		}
		return categoryTitles;
	};

	/**
	 * Get the current translation content
	 * @return {string}
	 */
	CXPublish.prototype.getContent = function () {
		return this.prepareTranslationForPublish(
			$( '.cx-column--translation .cx-column__content' ).clone()
		);
	};

	/**
	 * Success handler for publishing
	 */
	CXPublish.prototype.onSuccess = function () {
		$( '.cx-column--translation > h2' )
			.text( this.targetTitle )
			.keepAlignment();
		mw.hook( 'mw.cx.success' )
			.fire( mw.message( 'cx-publish-page-success',
				$( '<a>' ).attr( {
					href: mw.util.getUrl( this.targetTitle ),
					target: '_blank'
				} ).text( this.targetTitle )[ 0 ].outerHTML
			) );
		mw.hook( 'mw.cx.translation.published' ).fire(
			mw.cx.sourceLanguage,
			mw.cx.targetLanguage,
			mw.cx.sourceTitle,
			this.targetTitle
		);
		mw.cx.dirty = false;
	};

	/**
	 * Failure handler for publishing
	 */
	CXPublish.prototype.onFail = function ( code, details ) {
		var trace = {
			sourceLanguage: mw.cx.sourceLanguage,
			targetLanguage: mw.cx.targetLanguage,
			sourceTitle: mw.cx.sourceTitle,
			sourceRevision: mw.cx.sourceRevision,
			targetTitle: this.targetTitle,
			error: details
		};
		mw.hook( 'mw.cx.translation.publish.error' ).fire(
			mw.cx.sourceLanguage,
			mw.cx.targetLanguage,
			mw.cx.sourceTitle,
			this.targetTitle,
			JSON.stringify( details )
		);
		mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-publish-page-error' ) );
		mw.log( '[CX] Error while publishing:', code, trace );
	};

	/**
	 * Prepare the translated content for publishing by removing
	 * unwanted parts.
	 * @return {string} processed html
	 */
	CXPublish.prototype.prepareTranslationForPublish = function ( $content ) {
		$content.find( '.cx-segment' ).replaceWith( function () {
			return $( this ).html();
		} );
		$content.find( 'link, title' ).remove();

		// Remove placeholder sections
		$content.find( '.placeholder' ).remove();
		// Remove empty sections.
		$content.find( mw.cx.getSectionSelector() ).each( function () {
			var $section = $( this );

			if ( !$.trim( $section.text() ) ) {
				$section.remove();
			}
		} );

		return $content.html();
	};

	// Expose the CXPublish
	mw.cx.publish = CXPublish;

	$( function () {
		var cxPublish, $publishButton;

		$publishButton = $( '.cx-header__publish .cx-header__publish-button' );
		cxPublish = new mw.cx.publish( $publishButton );

		mw.hook( 'mw.cx.publish' ).add( $.proxy( cxPublish.publish, cxPublish ) );
	} );
}( jQuery, mediaWiki ) );
