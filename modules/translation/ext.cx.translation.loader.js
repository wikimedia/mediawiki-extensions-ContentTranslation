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
	 * @param {mw.cx.ui.TranslationView} translatioview
	 */
	function ContentTranslationLoader( translatioview ) {
		this.translatioview = translatioview;
		this.translation = null;
		this.translationUnits = null;
		if ( translatioview ) {
			// Unit tests can delay setting of translation view.
			this.sourceColumn = this.translatioview.columns.sourceColumn;
			this.translationColumn = this.translatioview.columns.translationColumn;
			this.$sourceColumn = this.sourceColumn.$element;
			this.$translationColumn = this.translationColumn.$element;
		} else {
			mw.log.warn( '[CX] Translation view not set.' );
		}
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

			// Do not allow two users to start a draft at the same time. The API only
			// returns a translation with different translatorName if this is the case.
			if ( translation.translatorName !== mw.user.getName() ) {
				self.showConflictWarning( translation );
				return false;
			}

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
		var i, sourceSectionId, targetSectionId, $draftSection,
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
			translationUnits[ sourceSectionId ] = {
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
		this.translationColumn.setTargetTitle( targetTitle );
	};

	/**
	 * Get a section ID from the stored HTML.
	 * @param {Object} unit Translation unit
	 * @return {string} HTML id
	 */
	function getSectionId( unit ) {
		return $( unit.content ).attr( 'id' );
	}

	/**
	 * Restore this draft to the appropriate placeholders
	 */
	ContentTranslationLoader.prototype.restore = function () {
		var i, unit, sectionId, sourceSectionId,
			$restoredSection,
			$lastRestoredSection,
			orphans = [];

		for ( sectionId in this.translationUnits ) {
			unit = this.translationUnits[ sectionId ];

			// The cxc_section_id is declared as varbinary(30), so id's are truncated to
			// this length. In this case, we can still recover the original id from the
			// stored HTML.
			if ( sectionId.length >= 30 ) {
				sourceSectionId = getSectionId( unit.source );
			} else {
				sourceSectionId = sectionId;
			}

			if ( sourceSectionId === 'mwcx-source-title' ) {
				this.restoreTitle();
				continue;
			}
			$restoredSection = this.restoreSection( unit, sourceSectionId );
			if ( !$restoredSection ) {
				mw.log( 'Source section not found for ' + sourceSectionId );
				// Insert right after last matched section if possible
				if ( this.originalRevision && $lastRestoredSection && $lastRestoredSection.length ) {
					$lastRestoredSection = this.addOrphanTranslationUnit(
						sourceSectionId, unit, $lastRestoredSection, 'after'
					);
				} else {
					// No lastRestoredSection, So add and keep it in orphans array
					// to try later.
					orphans.push( { id: sourceSectionId, unit: unit } );
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
					$lastRestoredSection = this.addOrphanTranslationUnit(
						orphans[ i ].id,
						orphans[ i ].unit,
						$lastRestoredSection
					);
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
	 * @param {string} sourceSectionId The HTML id attribute of the source section.
	 * @param {Object} translationUnit
	 * @param {jQuery} $section Add it before/after this section.
	 * @param {string} afterOrBefore Whether the orphan to be added after or before $section.
	 * @return {string} translation
	 */
	ContentTranslationLoader.prototype.addOrphanTranslationUnit = function (
		sourceSectionId,
		translationUnit,
		$section,
		afterOrBefore
	) {
		var $translation, $dummySourceSection;

		$translation = $( getTranslation( translationUnit ) );

		// Add a dummy source section
		$dummySourceSection = $( '<' + $translation.prop( 'tagName' ) + '>' )
			.css( 'height', 1 ) // Non-zero height to avoid it being ignored by keepAlignment plugin.
			.prop( 'id', sourceSectionId );

		if ( afterOrBefore === 'after' ) {
			mw.cx.getSourceSection( $section.data( 'source' ) ).after( $dummySourceSection );
			$section.after( $translation );
		} else {
			mw.cx.getSourceSection( $section.data( 'source' ) ).before( $dummySourceSection );
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
	 * @param {Object} translationUnit
	 * @param {string} sourceSectionId The source section HTML id attribute.
	 * @return {jQuery|boolean} The restored section object or false if section not restored
	 */
	ContentTranslationLoader.prototype.restoreSection = function ( translationUnit, sourceSectionId ) {
		var $translation, targetSectionId,
			$section = [],
			$placeholderSection = [];

		$translation = $( getTranslation( translationUnit ) );
		targetSectionId = $translation.prop( 'id' );

		// Find a placeholder in translation column. Make sure that it is indeed a placeholder.
		// Don't overwrite on an existing section.
		$placeholderSection = this.$translationColumn.find( '.placeholder[id="cx' + sourceSectionId + '"]' );

		// If we still don't see the source section for this draft section,
		// it means that the source article has changed.
		if ( !$placeholderSection.length ) {
			return false;
		}

		// The real restore.
		$placeholderSection.replaceWith( $translation );

		// Get new section so that we can annotate the section to indicate it
		// was restored from draft, so that certain adaptations can be skipped.
		$section = this.$translationColumn.find( '[id="' + targetSectionId + '"]' );
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
