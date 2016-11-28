/*!
 * ContentTranslation - Fetch and restore a saved translation
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * @class
	 */
	function ContentTranslationLoader() {
		this.translation = null;
		this.translationUnits = null;
		this.$sourceColumn = null;
		this.$translationColumn = null;
		this.originalRevision = false;
	}

	/**
	 * Initalize loader
	 *
	 * @return {jQuery.Promise}
	 */
	ContentTranslationLoader.prototype.init = function () {
		var self = this;
		// There is no known consumer for this return value. Just returning it
		// to help testing in future.
		return this.find().then( function ( translation ) {
			if ( !translation ) {
				return false;
			}
			// If this translation is draft and not by current user, there is an
			// existing translation.
			if ( translation.translatorName !== mw.user.getName() &&
				translation.status === 'draft'
			) {
				self.showConflictWarning( translation );
				return false;
			}
			// Set the translationId
			mw.cx.translationId = translation.id;
			if ( translation.status !== 'deleted' ) {
				// Fetch the translation content
				return self.fetch();
			}
		} );
	};

	ContentTranslationLoader.prototype.showConflictWarning = function ( translation ) {
		mw.loader.using( 'ext.cx.translation.conflict' ).then( function () {
			mw.hook( 'mw.cx.translation.conflict' ).fire( translation );
		} );
	};

	/**
	 * Find if there is a draft existing for the current title and language pair.
	 *
	 * @return {jQuery.Promise}
	 */
	ContentTranslationLoader.prototype.find = function () {
		var api = new mw.Api();

		return api.get( {
			action: 'query',
			list: 'contenttranslation',
			sourcetitle: mw.cx.sourceTitle,
			from: mw.cx.sourceLanguage,
			to: mw.cx.targetLanguage
		} ).then( function ( response ) {
			return response.query && response.query.contenttranslation.translation;
		} );
	};

	/**
	 * Fetch a draft content and restore it.
	 *
	 * @return {jQuery.Promise}
	 */
	ContentTranslationLoader.prototype.fetch = function () {
		var self = this,
			api = new mw.Api();

		mw.hook( 'mw.cx.draft.restoring' ).fire();

		return api.get( {
			action: 'query',
			list: 'contenttranslation',
			translationid: mw.cx.translationId
		} ).then( function ( response ) {
			self.translation = response.query.contenttranslation.translation;
			self.translationUnits = self.translation.translationUnits;
			if ( !$.isPlainObject( self.translationUnits ) ) {
				self.translationUnits = self.getTranslationUnits( self.translationUnits );
			}
			mw.hook( 'mw.cx.translation.placeholders.ready' ).add( function () {
				if ( parseInt( self.translation.sourceRevisionId ) === parseInt( mw.cx.sourceRevision ) ||
					// Very old drafts will have revision id as 0. Consider them as original source for
					// the translation and use agressive section restore algorithm
					parseInt( self.translation.sourceRevisionId ) === 0
				) {
					// Since we are using older revision, the original revision used for translation,
					// use agressive section restore algorithm.
					self.originalRevision = true;
				}
				self.restore();
				if ( self.originalRevision && new mw.Uri().query.revision ) {
					// Show a message to translator that we loaded an older revision of
					// source article.
					self.showOldRevisionWarning();
				}
			} );
		}, function ( errorCode, details ) {
			if ( details.exception instanceof Error ) {
				details.exception = details.exception.toString();
			}
			details.errorCode = errorCode;
			mw.hook( 'mw.cx.draft.restore-failed' ).fire(
				mw.cx.sourceLanguage,
				mw.cx.targetLanguage,
				mw.cx.sourceTitle,
				this.targetTitle,
				JSON.stringify( details )
			);
		} );
	};

	ContentTranslationLoader.prototype.showOldRevisionWarning = function () {
		var diffUrl;

		diffUrl = mw.cx.siteMapper.getPageUrl( mw.cx.sourceLanguage, mw.cx.sourceTitle, {
			type: 'revision',
			diff: 'cur',
			oldid: this.translation.sourceRevisionId
		} );
		mw.hook( 'mw.cx.warning' ).fire( mw.message( 'cx-page-old-revision-loaded', diffUrl ) );
	};

	/**
	 * Migrate old draft storage to translationUnits
	 *
	 * @param  {string} draftContent
	 * @return {Object[]}
	 */
	ContentTranslationLoader.prototype.getTranslationUnits = function ( draftContent ) {
		var i, sourceSectionId, targetSectionId, $draftSection, sequenceId,
			translationUnits = {},
			$draftContent = $( draftContent );

		for ( i = 0; i < $draftContent.length; i++ ) {
			$draftSection = $( $draftContent[ i ] );
			targetSectionId = $draftSection.prop( 'id' );
			if ( !targetSectionId ) {
				// If people add new paragraphs, those do not have ids. We set the
				// source attribute here.
				targetSectionId = 'cx' + mw.user.generateRandomSessionId();
				$draftSection.prop( {
					id: targetSectionId
				} );
			}
			sourceSectionId = targetSectionId.slice( 2 ); // Replace 'cx' prefix.
			sequenceId = $draftSection.attr( 'data-seqid' );
			translationUnits[ sourceSectionId ] = {
				sequenceId: sequenceId,
				user: {
					content: $draftContent[ i ]
				},
				mt: {},
				source: {}
			};
		}

		return translationUnits;
	};

	ContentTranslationLoader.prototype.restoreTitle = function () {
		var targetTitle;

		targetTitle = this.translation.targetTitle;
		mw.cx.targetTitle = targetTitle;
		// Set the title
		$( '.cx-column--translation > .cx-column__title' ).text( targetTitle );
	};

	/**
	 * Restore this draft to the appropriate placeholders
	 */
	ContentTranslationLoader.prototype.restore = function () {
		var i, sourceSectionId,
			$restoredSection,
			$lastRestoredSection,
			orphans = [];

		this.$sourceColumn = this.$sourceColumn ||
			$( '.cx-column--source .cx-column__content' );
		this.$translationColumn = this.$translationColumn ||
			$( '.cx-column--translation .cx-column__content' );

		for ( sourceSectionId in this.translationUnits ) {
			if ( sourceSectionId === 'mwcx-source-title' ) {
				this.restoreTitle();
				continue;
			}
			$restoredSection = this.restoreSection( sourceSectionId );
			if ( !$restoredSection ) {
				mw.log( 'Source section not found for ' + sourceSectionId );
				// Insert right after last matched section if possible
				if ( this.originalRevision && $lastRestoredSection && $lastRestoredSection.length ) {
					$lastRestoredSection = this.addOprhanTranslationUnit(
						sourceSectionId, $lastRestoredSection, 'after'
					);
				} else {
					// No lastRestoredSection, So add and keep it in orphans array
					// to try later.
					orphans.push( sourceSectionId );
				}
			} else {
				$lastRestoredSection = $restoredSection;
				// As a last resort, if we did not add orphans immediately, add them
				// now before this section.
				if ( !this.originalRevision ) {
					// Dont use orphan sections unless we are using old source article
					continue;
				}
				for ( i = 0; i < orphans.length; i++ ) {
					$lastRestoredSection = this.addOprhanTranslationUnit( orphans[ i ], $lastRestoredSection );
					if ( $restoredSection && $restoredSection.length ) {
						// Remove it from the orphans array.
						orphans.splice( i, 1 );
					}
				}
			}
		}

		if ( orphans.length ) {
			if ( !this.originalRevision ) {
				mw.log( 'Draft restoration failed. Loading older revision.' );
				window.location = mw.cx.siteMapper.getCXUrl(
					mw.cx.sourceTitle,
					mw.cx.targetTitle,
					mw.cx.sourceLanguage,
					mw.cx.targetLanguage,
					null, // campaign
					this.translation.sourceRevisionId
				);
			} else {
				// Already using old source revision, still not able to restore.
				mw.hook( 'mw.cx.draft.restore-failed' ).fire(
					mw.cx.sourceLanguage,
					mw.cx.targetLanguage,
					mw.cx.sourceTitle,
					this.targetTitle,
					'Couldn\'t restore against the old source revision: ' + this.translation.sourceRevisionId
				);
			}
		} else {
			mw.hook( 'mw.cx.draft.restored' ).fire();
		}

		mw.hook( 'mw.cx.translation.continued' ).fire(
			mw.cx.sourceLanguage,
			mw.cx.targetLanguage,
			mw.cx.sourceTitle
		);
	};

	/**
	 * Get html content of a translation unit to restore.
	 *
	 * @param {Object} translationUnit
	 * @return {string} translation
	 */
	function getTranslation( translationUnit ) {
		var translation;

		if ( translationUnit.user && translationUnit.user.content ) {
			translation = translationUnit.user.content;
		} else if ( translationUnit.mt ) {
			translation = translationUnit.mt.content;
		} else if ( translationUnit.source ) {
			translation = translationUnit.source.content;
		}

		return translation;
	}

	/**
	 * Add an orphan translation unit. Orphan translation is a translation without
	 * source section. We add a dummy source section for such cases. Dummy source section
	 * is a placeholder - a white block in source column.
	 *
	 * @param {string} sourceSectionId The translation unit id.
	 * @param {jQuery} $section Add it before/after this section.
	 * @param {string} afterOrBefore Whether the orphan to be added after or before $section.
	 * @return {string} translation
	 */
	ContentTranslationLoader.prototype.addOprhanTranslationUnit = function ( sourceSectionId, $section, afterOrBefore ) {
		var translationUnit, $translation, $dummySourceSection;

		translationUnit = this.translationUnits[ sourceSectionId ];
		$translation = $( getTranslation( translationUnit ) );

		// Add a dummy source section
		$dummySourceSection = $( '<' + $translation.prop( 'tagName' ) + '>' )
			.css( 'height', 1 ) // Non-zero height to avoid it being ignored by keepAlignment plugin.
			.prop( 'id', sourceSectionId );

		if ( afterOrBefore === 'after' ) {
			$( '#' + $section.data( 'source' ) ).after( $dummySourceSection );
			$section.after( $translation );
		} else {
			$( '#' + $section.data( 'source' ) ).before( $dummySourceSection );
			$section.before( $translation );
		}

		// Annotate the section to indicate it was restored from draft
		// so that certain adaptations can be skipped.
		$translation.attr( {
			id: 'cx' + sourceSectionId,
			'data-cx-draft': true,
			'data-source': sourceSectionId
		} ).keepAlignment();

		mw.hook( 'mw.cx.translation.postMT' ).fire( $translation );

		return $translation;
	};

	/**
	 * Restore a section to the appropriate placeholders
	 *
	 * @param {string} sourceSectionId Souce section identifier
	 * @return {jQuery|boolean} The restored section object or false if section not restored
	 */
	ContentTranslationLoader.prototype.restoreSection = function ( sourceSectionId ) {
		var translationUnit, $translation, targetSectionId,
			$section = [],
			$sourceSection = [],
			$placeholderSection = [];

		translationUnit = this.translationUnits[ sourceSectionId ];
		$translation = $( getTranslation( translationUnit ) );
		$sourceSection = $( document.getElementById( sourceSectionId ) );
		targetSectionId = $translation.prop( 'id' );

		// Find a placeholder in translation column. Make sure that it is indeed a placeholder.
		// Don't overwrite on an existing section.
		$placeholderSection = this.$translationColumn.find( '.placeholder#cx' + sourceSectionId );

		if ( !$placeholderSection.length ) {
			// Support old sections with sequential idendifiers
			$sourceSection = this.$sourceColumn.find( '[data-seqid="' + translationUnit.sequenceId + '"]' );
			if ( $sourceSection.length ) {
				// Class is needed in selector to make sure it is indeed a placeholder.
				$placeholderSection = this.$translationColumn.find( '.placeholder#cx' +
					$sourceSection.prop( 'id' )
				);
			}
			targetSectionId = $placeholderSection.prop( 'id' );
			// It is very unlikely that a source section has no placeholder section.
			// Example: Section that is hidden from source because of unsupportable templates.
			if ( targetSectionId ) {
				// Update the id of this old draft
				$translation.prop( 'id', targetSectionId );
				sourceSectionId = $sourceSection.prop( 'id' );
			}
		}

		// If we still don't see the source section for this draft section,
		// it means that the source article has changed.
		if ( !$placeholderSection.length ) {
			return false;
		}

		// The real restore.
		$placeholderSection.replaceWith( $translation );

		// Get new section so that we can annotate the section to indicate it
		// was restored from draft, so that certain adaptations can be skipped.
		$section = this.$translationColumn.find( '#' + targetSectionId );
		$section.attr( {
			'data-cx-draft': true,
			'data-source': sourceSectionId
		} ).keepAlignment();

		// Make sure all links are connected and widgets are initialized
		mw.hook( 'mw.cx.translation.postMT' ).fire( $section );
		return $section;
	};

	mw.cx.ContentTranslationLoader = ContentTranslationLoader;
}( jQuery, mediaWiki ) );
